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
    public class FirmaController : ControllerBase
    {
        public FirmaContext Context { get; set; }

        public FirmaController(FirmaContext context)
        {
            Context = context;
        }
        

        [Route("DodatiFirmu/{Naziv}/{Adresa}/{PIB}/{MB}/{Zastupnik}")]
        [HttpPost]
        public async Task<ActionResult> DodajFirmu(string Naziv, string Adresa, int PIB, int MB, string Zastupnik)
        {
            if(string.IsNullOrWhiteSpace(Naziv))
            {
                return BadRequest("Nevalidan naziv firme.");
            }

            if(string.IsNullOrWhiteSpace(Adresa))
            {
                return BadRequest("Nevalidna lokacija firme.");
            }

            if (string.IsNullOrWhiteSpace(Zastupnik) && Zastupnik.Length <= 30)
            {
                return BadRequest("Nevalidnan zastupnik firme.");
            }

            if (MB<100 || MB>3000)
            {
                return BadRequest("Nevalidan maticni broj firme.");
            }

            if (PIB < 100 || PIB > 3000)
            {
                return BadRequest("Nevalidan PIB firme.");
            }

            var proverafirme = await Context.Firme.Where(p=>p.MB==MB).FirstOrDefaultAsync();
            if (proverafirme != null)
            {
                return BadRequest($"Firma sa MB-om {MB} vec postoji u bazi.");
            }

            try
            {
                Firma ffirma=new Firma
                {
                    Naziv=Naziv,
                    Adresa=Adresa,
                    PIB=PIB,
                    MB=MB,
                    Zastupnik=Zastupnik
                };

                Context.Firme.Add(ffirma);
                await Context.SaveChangesAsync();
                
                return Ok( new{
                        Naziv=ffirma.Naziv,
                        Adresa=ffirma.Adresa,
                        PIB=ffirma.PIB,
                        MB=ffirma.MB,
                        Zastupnik=ffirma.Zastupnik
                    
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        [Route("IzmenitiFirmu/{MB}/{Naziv}/{Adresa}/{PIB}/{Zastupnik}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniFirmu ( int MB, string Naziv, string Adresa, int PIB, string Zastupnik )
        {

            if(string.IsNullOrWhiteSpace(Naziv))
            {
                return BadRequest("Nevalidan naziv firme.");
            }
            if(Naziv.Length>20)
            {
                return BadRequest("Nevalidan naziv firme! Pratite ogranicenja!");
            }
            if(Adresa.Length>50)
            {
                return BadRequest("Nevlidna adresa firme! Pratite ogranicenja!");
            }
            if(Zastupnik.Length>20)
            {
                return BadRequest("Nevlidno ime zastupnika firme! Pratite ogranicenja!");
            }
            try{
                var firma = await Context.Firme.Where(p => p.MB == MB).FirstOrDefaultAsync();
                
                if (Naziv!="-")
                {   
                    firma.Naziv = Naziv;
                }
                if(Adresa!="-")
                {
                    firma.Adresa = Adresa;
                }
                if(PIB!=1)
                {
                    firma.PIB=PIB;
                }
                if(Zastupnik!="-")
                {   
                    firma.Zastupnik=Zastupnik;
                }

                await Context.SaveChangesAsync();
                            
                return Ok(new{
                    Naziv=firma.Naziv,
                    Adresa=firma.Adresa,
                    PIB=firma.PIB,
                    MB=firma.MB,
                    Zastupnik=firma.Zastupnik
                });
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        [Route("NadjiFirmu/{MB}")]
        [HttpGet]
        public async Task<ActionResult> NadjiFirmu(int MB)
        {
            if(MB<100 || MB>3000)
            {
                return BadRequest("Nevalidan MB (matični broj) firme.");
            }

            var firma=await Context.Firme.Where(p=>p.MB==MB).FirstOrDefaultAsync();
            if (firma==null)
            {
                return BadRequest($"Firma sa matičnim brojem {MB} ne postoji u bazi!");
            }

            try{ 
                {
                    return Ok(new{
                        Naziv=firma.Naziv,
                        Adresa=firma.Adresa,
                        PIB=firma.PIB,
                        MB=firma.MB,
                        Zastupnik=firma.Zastupnik
                    });
                }
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }




        [Route("PromenitiFirmu")]
        [HttpPut]
        public async Task<ActionResult> PromeniFirmu([FromBody] Firma novafirma)
        {
            if (string.IsNullOrWhiteSpace(novafirma.Naziv))
            {
                return BadRequest("Nevalidan naziv firme.");
            }

            if (string.IsNullOrWhiteSpace(novafirma.Adresa))
            {
                return BadRequest("Nevalidna lokacija firme.");
            }

            if (string.IsNullOrWhiteSpace(novafirma.Zastupnik) && novafirma.Zastupnik.Length <= 30)
            {
                return BadRequest("Nevalidnan zastupnik firme.");
            }

            if (novafirma.MB < 100 && novafirma.MB > 3000)
            {
                return BadRequest("Pogresan maticni broj firme.");
            }

            if (novafirma.PIB < 100 && novafirma.PIB > 3000)
            {
                return BadRequest("Pogresan PIB firme.");
            }

            try
            {
                var firma = await Context.Firme.FindAsync(novafirma.ID);
                if(firma==null)
                {
                    return BadRequest("Firma ne postoji.");
                }
                else
                {
                    firma.Naziv = novafirma.Naziv;
                    firma.Adresa = novafirma.Adresa;
                    firma.Zastupnik = novafirma.Zastupnik;
                    firma.MB = novafirma.MB;
                    firma.PIB = novafirma.PIB;
                }
                await Context.SaveChangesAsync();
                return Ok("Uspesno promenjena firma.");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


        }

        [Route("ObrisatiFirmu/{MB}")]
        [HttpDelete]

        public async Task<ActionResult> ObrisiFirmu(int MB)
        {
            if(MB<100 || MB>3000)
            {
                return BadRequest("Nevalidan matični broj (MB) firme.");
            }

            try
            {
                var ffirma = await Context.Firme.Where(p=>p.MB==MB).FirstOrDefaultAsync();
                if(ffirma==null)
                {
                    return BadRequest("Firma ne postoji.");
                }

                Context.Remove(ffirma);
                await Context.SaveChangesAsync();
                return Ok($"Firma sa matičnim brojem {MB} je uspešno izbrisana.");


            }
            catch(Exception e)  
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzetiFirme")]
        [HttpGet]

        public async Task<ActionResult> PreuzmiFirme()
        {
            try
            {
                return Ok(await Context.Firme.Select(p =>
                new
                {
                    NoviID = p.ID,
                    p.Naziv,
                    p.Adresa,
                    p.Zastupnik,
                    p.PIB,
                    p.MB
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiFirmu/{NazivFirme}")]
        [HttpGet]

        public async Task<ActionResult> PreuzmiFirmu(string NazivFirme)
        {
            try
            {
                var ffirma = await Context.Firme.Where(p => p.Naziv == NazivFirme).FirstOrDefaultAsync();
                if (ffirma == null)
                {
                    return BadRequest("Ne postoji firma sa tim nazivom.");
                }

                return Ok(new
                {
                    Naziv = ffirma.Naziv,
                    Adresa = ffirma.Adresa,
                    Zastupnik = ffirma.Zastupnik,
                    PIB = ffirma.PIB,
                    MB = ffirma.MB
                   
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

