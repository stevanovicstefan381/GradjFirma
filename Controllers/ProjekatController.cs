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
    public class ProjekatController : ControllerBase
    {
        public FirmaContext Context { get; set; }

        public ProjekatController(FirmaContext context)
        {
            Context = context;
        }

        [Route("DodatiProjekat/{Naziv}/{Broj}/{Lokacija}/{Tip}/{Stanje}/{BrojRadnika}/{Firma}")]
        [HttpPost]

        public async Task<ActionResult> DodajProjekat(string Naziv, int Broj, string Lokacija, string Tip, string Stanje, int BrojRadnika, int Firma)
        {
            if(string.IsNullOrWhiteSpace(Naziv))
            {
                return BadRequest("Nevalidni naziv projekta.");
            }
            if (Broj<100 && Broj>3000)
            {
                return BadRequest("Nevalidni broj projekta.");
            }
            if(string.IsNullOrWhiteSpace(Tip))
            {
                return BadRequest("Nevalidan tip projekta.");
            }
            if (string.IsNullOrWhiteSpace(Stanje))
            {
                return BadRequest("Nevalidan tip projekta.");
            }
            if (BrojRadnika<3 && BrojRadnika>20)
            {
                return BadRequest("Nevalidan broj radnika na projektu.");
            }
            if(Firma<0)
            {
                return BadRequest("Nevalidan naziv firme.");
            }

            var pprojekat = await Context.Projekti.Where(p => p.BrojProjekta == Broj).FirstOrDefaultAsync();
            if(pprojekat!=null)
            {
                return BadRequest("Projekat vec postoji.");
            }

            var ffirma = await Context.Firme.Where(p => p.ID == Firma).FirstOrDefaultAsync();
            if (ffirma==null)
            {
                return BadRequest("Firma sa datim ID ne postoji.");
            }

            try{

                Projekat projekat = new Projekat
                {
                    Naziv = Naziv,
                    BrojProjekta = Broj,
                    Lokacija = Lokacija,
                    TipProjekta = Tip,
                    Stanje = Stanje,
                    BrojRadnika = BrojRadnika,
                    Firma = ffirma 
                };

                Context.Projekti.Add(projekat);
                await Context.SaveChangesAsync();

                return Ok( new{
                    naziv=projekat.Naziv,
                    broj=projekat.BrojProjekta,
                    lokacija=projekat.Lokacija,
                    tip=projekat.TipProjekta,
                    stanje=projekat.Stanje,
                    brojRadnika=projekat.BrojRadnika,
                    firma=projekat.Firma.Naziv
                }); 
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzmenitiProjekat/{Broj}/{Stanje}/{BrojRadnika}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniProjekat (int Broj, string Stanje, int BrojRadnika)
        {       
            var pprojekat = await Context.Projekti.Where(p => p.BrojProjekta == Broj).FirstOrDefaultAsync();
            if(BrojRadnika==1)
            {
                BrojRadnika=pprojekat.BrojRadnika;
            }   
            else if(BrojRadnika<21 && BrojRadnika>2 )
            {
                pprojekat.BrojRadnika=BrojRadnika;
            }
            else
            {
                return BadRequest("Neadekvatan broj radnika na projektu.");
            }

            try
            {
                pprojekat.Stanje=Stanje;
            
                await Context.SaveChangesAsync();

                return Ok(new{
                    naziv=pprojekat.Naziv,
                    brojProjekta=pprojekat.BrojProjekta,
                    lokacija=pprojekat.Lokacija,
                    tipProjekta=pprojekat.TipProjekta,
                    stanje=pprojekat.Stanje,
                    brradnika=pprojekat.BrojRadnika,

                });

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiteProjekat")]
        [HttpGet]

        public async Task<ActionResult> PreuzmiProjekat()
        {
            try
            {
                return Ok(await Context.Projekti
                    .Include(p => p.Firma)
                    .Select(p =>
                    new
                    {
                        Projekat = new
                        {
                            ID = p.ID,
                            Naziv = p.Naziv,
                            BrojProjekta = p.BrojProjekta,
                            Lokacija = p.Lokacija,
                            TipProjekta = p.TipProjekta,
                            Stanje = p.Stanje,
                            BrojRadnika = p.BrojRadnika
                        },
                        Firma = new
                        {
                            ID = p.Firma.ID,
                            Naziv = p.Firma.Naziv,
                            Adresa = p.Firma.Adresa,
                            PIB = p.Firma.PIB,
                            MB = p.Firma.MB,
                            Zastupnik = p.Firma.Zastupnik

                        }

                    }).ToListAsync());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [Route("PreuzmiProjekat/{BrojProjekta}")]
        [HttpGet]

        public async Task<ActionResult> PreuzmiProjekat(int BrojProjekta)
        {
            if(BrojProjekta<1)
            {
                return BadRequest("Broj projekta mora biti pozitivan!");
            }
            var pprojekat=await Context.Projekti.Where(p=>p.BrojProjekta==BrojProjekta).FirstOrDefaultAsync();
            if(pprojekat==null)
            {
                return BadRequest($"Ne postoji projekat sa brojem {BrojProjekta}.");
            }
            try{
                //            var ffirma=await Context.Firme.Where(p=>p.ID==pprojekat.Firma.ID).FirstOrDefaultAsync();
                return Ok(new
                {
                    nnaziv = pprojekat.Naziv,
                    brojProjekta = pprojekat.BrojProjekta,
                    lokacija = pprojekat.Lokacija,
                    tipProjekta = pprojekat.TipProjekta,
                    stanje = pprojekat.Stanje,
                    brojRadnika = pprojekat.BrojRadnika
                });
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzbrisatiProjekat/{Naziv}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiProjekat(string Naziv)
        {
            if(string.IsNullOrWhiteSpace(Naziv))
            {
                return BadRequest("Projekat sa datim imenom ne postoji.");              
            }

            try
            {
                var pprojekat = await Context.Projekti.Where(p => p.Naziv == Naziv).FirstOrDefaultAsync();
                if(pprojekat==null)
                {
                    return BadRequest($"Ne postoji projekat sa imenom {Naziv}.");
                }
                Context.Remove(pprojekat);
                await Context.SaveChangesAsync();

                return Ok($"Uspesno obrisan projekat sa imenom {Naziv}.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        //3333333333333333333

        [Route("PrikaziProjekat/{Naziv}/{BrojProjekta}")]
        [HttpGet]

        public async Task<ActionResult> PrikaziProjekat(string Naziv, int BrojProjekta)
        {
            if(Naziv.Length>40)
            {
                return BadRequest("Poštujte zadata ograničenja!");
            }

            var pprojekat=await Context.Projekti.Where(p=>p.BrojProjekta==BrojProjekta).FirstOrDefaultAsync();
            if(pprojekat==null)
            {
                return BadRequest($"Ne postoji projekat sa brojem {BrojProjekta}.");
            }
            if(pprojekat.Naziv!=Naziv)
            {
                return BadRequest($"Dati broj {BrojProjekta} ne odgovara projektu sa imenom {Naziv}.");
            }
            try{
                return Ok(new
                {
                    naziv = pprojekat.Naziv,
                    brojProjekta = pprojekat.BrojProjekta,
                    lokacija = pprojekat.Lokacija,
                    tipProjekta = pprojekat.TipProjekta,
                    stanje = pprojekat.Stanje,
                    brojRadnika = pprojekat.BrojRadnika
                });
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}