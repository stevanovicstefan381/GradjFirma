using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;
using Microsoft.AspNetCore.Cors;

namespace GradjFirma.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RadnikController : ControllerBase
    {
        public FirmaContext Context { get; set; }

        public RadnikController(FirmaContext context)
        {
            Context = context;
        }

        [Route("DodatiRadnika/{Ime}/{Jmbg}/{Profesija}/{Masina}/{GodineI}/{Godine}/{Firma}/{Projekat}")]
        [HttpPost]

        public async Task<ActionResult> DodajRadnika(string Ime, int Jmbg, string Profesija, string Masina, int GodineI, int Godine, int Firma, int Projekat)
        {

           try{
                var proveraradnik = await Context.Radnici.Where(p=>p.Jmbg==Jmbg).FirstOrDefaultAsync();
                if (proveraradnik != null)
                {
                    return BadRequest($"Radnik sa JMBG-om {Jmbg} vec postoji u bazi.");
                }

                var ffirma = await Context.Firme.Where(p => p.ID == Firma).FirstOrDefaultAsync();
                if (ffirma == null)
                {
                    return BadRequest($"Firma sa imenom {Firma} ne postoji.");
                }

                var pprojekat = await Context.Projekti.Where(p => p.BrojProjekta == Projekat).FirstOrDefaultAsync();
                if (pprojekat == null)
                {
                    return BadRequest($"Projekat sa brojem {Projekat} ne postoji u bazi.");
                }
               


                Radnik radnik = new Radnik
                {
                    Ime = Ime,
                    Jmbg = Jmbg,
                    Profesija = Profesija,
                    Masina = Masina,
                    IskustvoGod = GodineI,
                    BrojGodina = Godine,
                    Firma = ffirma,
                    Projekat = pprojekat
                };

                Context.Radnici.Add(radnik);
                await Context.SaveChangesAsync();

                return Ok(new{
                    ime=radnik.Ime,
                    jmbg=radnik.Jmbg,
                    profesija=radnik.Profesija,
                    masina=radnik.Masina,
                    godinei=radnik.IskustvoGod,
                    godine=radnik.BrojGodina,
                    firma=radnik.Firma.Naziv,
                    projekat=radnik.Projekat.Naziv
                });
           }
           catch(Exception e){
               return BadRequest(e.Message);
           }
        }

        [Route("IzmenitiRadnika/{jmbg}/{novaprofesija}/{novamasina}")]
        [HttpPut]
        
        public async Task<ActionResult> IzmeniRadnika(int jmbg, string novaprofesija,string novamasina)
        {
            if(jmbg<100 && jmbg>10000)
            {
                return BadRequest("Neadekvatan indeks radnika.");
            }
            if(string.IsNullOrWhiteSpace(novaprofesija))
            {
                return BadRequest("Neadekvatna profesija radnika.");
            }
            if(string.IsNullOrWhiteSpace(novamasina))
            {
                return BadRequest("Neadekvatna masina za radika.");
            }

            try
            {
                var rradnik = await Context.Radnici.Where(p => p.Jmbg == jmbg).FirstOrDefaultAsync();
                if (rradnik == null)
                {
                    return BadRequest("Radnik ne postoji u bazi.");
                }
                if(novaprofesija!="-")
                {
                    rradnik.Profesija = novaprofesija;
                }
                if(novamasina!="-")
                {
                    rradnik.Masina = novamasina;
                }

                await Context.SaveChangesAsync();

                return Ok(
                    new
                    {
                        ime = rradnik.Ime,
                        JMBG=rradnik.Jmbg,
                        profesija=rradnik.Profesija,
                        masina=rradnik.Masina,
                        iskustvo=rradnik.IskustvoGod,
                        godine=rradnik.BrojGodina
                    }) ;
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PrikazatiRadnika/{jmbg}")]
        [HttpGet]

        public async Task<ActionResult> PrikaziRadnika(int jmbg)
        {
            if(jmbg<100 || jmbg>10000)
            {
                return BadRequest("Neadekvatan JMBG radnika.");
            }

            var rradnik = await Context.Radnici.Where(p=>p.Jmbg==jmbg).FirstOrDefaultAsync();
            if(rradnik==null)
            {
                return BadRequest($"Radnik sa JMBG-om {jmbg} ne postoji u bazi.");
            }

            try
            {
                return Ok(await Context.Radnici
                    .Include(p => p.Firma)
                    .Include(p => p.Projekat)
                    .Where(p => p.Jmbg == jmbg)
                    .Select(p =>
                new
                {
                    InformacijeORadniku = new
                    {
                        ImeRadnika = p.Ime, 
                        JmbgRadnika = p.Jmbg,
                        ProfesijaRadnika = p.Profesija,
                        MasinaRadnika = p.Masina,
                        RadnoIskustvo = p.IskustvoGod,
                        BrojGodine = p.BrojGodina
                    },
                    InformacijeOProjektu = new
                    {
                        NazivProjekta = p.Projekat.Naziv,
                        BrojProjekta=p.Projekat.BrojProjekta,
                        LokacijaProjekta=p.Projekat.Lokacija,
                        TipProjekta=p.Projekat.TipProjekta,
                        StanjeProjekta=p.Projekat.Stanje,
                        BrojRadnikaNaProjektu=p.Projekat.BrojRadnika
                    },
                    InformacijeOFirmi = new
                    {
                        NazivFirme=p.Firma.Naziv,
                        AdresaFirme=p.Firma.Adresa,
                        PIB=p.Firma.PIB,
                        MB=p.Firma.MB,
                        ZastupnikFirme=p.Firma.Zastupnik
                    }
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [Route("ObrisatiRadnika/{Jmbg}")]
        [HttpDelete]

        public async Task<ActionResult> ObrisiRadnika(int Jmbg)
        {
            try
            {
                var rradnik = await Context.Radnici.Where(p => p.Jmbg == Jmbg).FirstOrDefaultAsync();
                if (rradnik == null)
                {
                    return BadRequest($"Radnik sa JMBG-om {Jmbg} ne postoji u bazi.");
                }
                Context.Remove(rradnik);
                await Context.SaveChangesAsync();

                return Ok($"Radnik čiji je JMBG {Jmbg} je uspešno izbrisan.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }


        }

    }
}