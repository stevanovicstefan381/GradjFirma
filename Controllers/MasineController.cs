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
    public class MasineController : ControllerBase
    {
        public FirmaContext Context { get; set; }

        public MasineController(FirmaContext context)
        {
            Context = context;
        }

        
        [Route("DodatiMasine/{Tip}/{BrojRadnihSati}/{Godiste}/{Stanje}/{IdentifikacioniBroj}/{Firma}")]
        [HttpPost]

        public async Task<ActionResult> DodajMasine(string Tip, int BrojRadnihSati, int Godiste, string Stanje, int IdentifikacioniBroj, string Firma)

        {   
            if(string.IsNullOrWhiteSpace(Firma))
            {
                return BadRequest("Neadekvatan firma u cijem je vlasnistvu masina");
            }
             var ffirma = await Context.Firme.Where(p=>p.Naziv==Firma).FirstOrDefaultAsync();
                if (ffirma==null)
                {
                    return BadRequest("Firma sa zadatim imenom ne postoji!");
                }
                
                var mmasina = await Context.Masine.Where(p=>p.IdentifikacioniBroj==IdentifikacioniBroj).FirstOrDefaultAsync();
                if(mmasina!=null)
                { 
                    if(mmasina.Tip==Tip)
                    {
                        return BadRequest("Masina sa datim identifikacionim brojem vec postoji!");
                    }
                }
            try
            {   
                Masina masina = new Masina
                {
                    Tip = Tip,
                    BrojRadnihSati = BrojRadnihSati,
                    Godiste = Godiste,
                    Stanje = Stanje,
                    IdentifikacioniBroj = IdentifikacioniBroj,
                    Firma = ffirma
                }; 

                Context.Masine.Add(masina);
                await Context.SaveChangesAsync();


                return Ok(new
                    {
                        ttip = masina.Tip,
                        bbrs = masina.BrojRadnihSati,
                        ggod = masina.Godiste,
                        sstanje=masina.Stanje,
                        iidnf = masina.IdentifikacioniBroj,
                        firmma=masina.Firma.Naziv
                }) ;


            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            } 
        } 

        [Route("IzmenitiMasinu/{identifikacionibroj}")]
        [HttpPut]

        public async Task<ActionResult> IzmeniMasinu (int identifikacionibroj, string stanje, int brojradnihsati)
        {
            if(identifikacionibroj<1000 || identifikacionibroj>30000)
            {
                return BadRequest("Neadekvatan identifikacioni broj masine.");
            }
            if(string.IsNullOrWhiteSpace(stanje))
            {
                return BadRequest("Neadekvatno stanje masine.");
            }
            if(brojradnihsati>25000)
            {
                return BadRequest("Neadekvatan broj radnih sati.");
            }

            try
            {
                var mmasina = await Context.Masine.Where(p => p.IdentifikacioniBroj == identifikacionibroj).FirstOrDefaultAsync();
                if (mmasina == null)
                {
                    return BadRequest($"Ne postoji masina sa identifikacionim brojem {identifikacionibroj} .");
                }

                mmasina.BrojRadnihSati = brojradnihsati;
                if (mmasina.Stanje == "novo" || mmasina.Stanje == "Novo" || mmasina.Stanje == "NOVO")
                {
                    mmasina.Stanje = stanje;
                }

                await Context.SaveChangesAsync();

                return Ok(
                    new
                    {
                            tip=mmasina.Tip,
                            brojradnihsati=mmasina.BrojRadnihSati,
                            godiste=mmasina.Godiste,
                            stanje=mmasina.Stanje,
                            identifikacionibroj = mmasina.IdentifikacioniBroj

                        
                    });

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [Route("PrikazatiMasinu/{IdentifikacioniBroj}/{Tip}")]
        [HttpGet]
        
        public async Task<ActionResult> PrikaziMasinu (int IdentifikacioniBroj, string Tip)
        {

            var mmasina = await Context.Masine.Where(p => p.IdentifikacioniBroj == IdentifikacioniBroj).FirstOrDefaultAsync();
            if(mmasina==null)
            {
                return BadRequest("Ne postoji masina sa datim identifikacionim brojem.");
            }
            else
            {
                if(mmasina.Tip!=Tip)
                {
                return BadRequest("Ne postoji dati tip masine sa datim identifikacionim brojem.");
                }
            }

            try
            {
                return Ok(await Context.Masine 
                    .Include(p => p.Firma)
                    .Where(p => p.IdentifikacioniBroj == IdentifikacioniBroj)
                    .Select(p =>
                    new
                    {
                        
                        
                            tip = p.Tip,
                            brojradnihsati = p.BrojRadnihSati,
                            godiste = p.Godiste,
                            stanje = p.Stanje,
                            identifikacionibroj = p.IdentifikacioniBroj,
                        
                            naziv = p.Firma.Naziv,
                            adresa = p.Firma.Adresa,
                            zastupnik = p.Firma.Zastupnik,
                            PIB = p.Firma.PIB,
                            MB = p.Firma.MB
                        
                    }
                    ).FirstOrDefaultAsync());
             
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [Route("IzbrisatiMasinu/{IdentifikacioniBroj}/{Tip}")]
        [HttpDelete]

        public async Task<ActionResult> IzbrisatiMasinu(int IdentifikacioniBroj, string Tip)
        {
           try
            {
                var mmasina = await Context.Masine.Where(p => p.IdentifikacioniBroj == IdentifikacioniBroj).FirstOrDefaultAsync();
                if (mmasina == null)
                {
                    return BadRequest($"Masina sa identifikacionim brojem {IdentifikacioniBroj} ne postoji.");
                } 
                else
                {
                    if(mmasina.Tip!=Tip)
                    {
                        return BadRequest("Ne postoji dati tip masine sa datim identifikacionim brojem.");
                    }
                }

                Context.Remove(mmasina);
                await Context.SaveChangesAsync();

                return Ok($"Masina tipa '{Tip}' sa identifikacionim brojem {IdentifikacioniBroj} je uspesno izbrisana iz baze.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}