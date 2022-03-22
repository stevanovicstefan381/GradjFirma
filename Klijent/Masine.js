import { Firma } from "./Firma.js";

export class Masine{

     constructor(Tip, BrojRadnihSati, Godiste, Stanje, IdentifikacioniBroj, Firma){
         
        this.Tip=Tip;
        this.BrojRadnihSati=BrojRadnihSati;
        this.Godiste=Godiste;
        this.Stanje=Stanje;
        this.IdentifikacioniBroj=IdentifikacioniBroj;
        this.Firma=Firma;
     }

     crtajmasinu(host){

            let d;
            let l;

            d=document.createElement("div");
            d.innerHTML="";
            d.className="divNova_Masina";
            host.appendChild(d);

            //tip masine

            d=document.createElement("div");
            d.className="divTip_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Tip mašine: ";
            host.querySelector(".divTip_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Tip;
            host.querySelector(".divTip_Nove_Masine").appendChild(l);
            
            //broj radnih sati masine

            d=document.createElement("div");
            d.className="divBRS_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Broj radnih sati mašine: ";
            host.querySelector(".divBRS_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.BrojRadnihSati;
            host.querySelector(".divBRS_Nove_Masine").appendChild(l);

            // godiste masine

            d=document.createElement("div");
            d.className="divGodiste_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Godište mašine: ";
            host.querySelector(".divGodiste_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Godiste;
            host.querySelector(".divGodiste_Nove_Masine").appendChild(l);
        
            // stanje masine

            d=document.createElement("div");
            d.className="divStanje_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Stanje mašine: ";
            host.querySelector(".divStanje_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Stanje;
            host.querySelector(".divStanje_Nove_Masine").appendChild(l);
        

            // identifikacioni broj masine

            d=document.createElement("div");
            d.className="divIDF_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Identifikacioni broj mašine je: ";
            host.querySelector(".divIDF_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.IdentifikacioniBroj;
            host.querySelector(".divIDF_Nove_Masine").appendChild(l);
        

            //firma cija je masina

            d=document.createElement("div");
            d.className="divFirma_Nove_Masine";
            host.querySelector(".divNova_Masina").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Naziv firme čija je mašina: ";
            host.querySelector(".divFirma_Nove_Masine").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Firma;
            host.querySelector(".divFirma_Nove_Masine").appendChild(l);
        
        

     }

     ctajmasinuifirmu(host){

      this.crtajmasinu(host);

      let d=document.createElement("div");
      d.className="Dugme_Firma";
      host.appendChild(d);

      let butt=document.createElement("button");
      butt.innerHTML="Prikazi firmu";
      butt.className="Dugmeta123";
      host.querySelector(".Dugme_Firma").appendChild(butt);

      butt.onclick=(ev)=>{
         host.innerHTML="";
         let ime=this.Firma;
         fetch("https://localhost:5001/Firma/PreuzmiFirmu/"+ime,
         {
            method:"GET"
         }).then(s=>{
            if(s.ok){
               s.json().then(data=>{
                  console.log(data);
                  const novafirma=new Firma(data.naziv, data.adresa, data.zastupnik, data.pib, data.mb);
                  novafirma.crtajfirmu(host);
               })
            }
            else{
               s.text().then(data=>{
                  alert(data);
            })
         }
      })
         
      }
      
      
   }
     
}