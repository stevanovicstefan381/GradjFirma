import { Firma } from "./Firma.js";

export class Projekat{
 
    constructor(Naziv, Broj, Lokacija, Tip, Stanje, BrojRadnika, Firma)
    {
        this.Naziv=Naziv;
        this.Broj=Broj;
        this.Lokacija=Lokacija;
        this.Stanje=Stanje; 
        this.Tip=Tip;
        this.BrojRadnika=BrojRadnika;
        this.Firma=Firma;
    }    

    crtajprojekat(host){

        let kk=document.createElement("div");
        kk=host.querySelector(".divNova_Firma");
        if(kk==null)
        {   
            let d;
            let l;

            d=document.createElement("div");
            d.innerHTML="";
            d.className="divNovi_Projekat"
            host.appendChild(d);

            //naziv projekta

            d=document.createElement("div");
            d.className="divNaziv_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Naziv projekta: ";
            host.querySelector(".divNaziv_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Naziv;
            host.querySelector(".divNaziv_Novog_Projekta").appendChild(l);

            //broj projekta

            d=document.createElement("div");
            d.className="divBroj_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Broj projekta: ";
            host.querySelector(".divBroj_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Broj;
            host.querySelector(".divBroj_Novog_Projekta").appendChild(l);

            //lokacija projekta

            d=document.createElement("div");
            d.className="divLokacija_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Lokacija projekta: ";
            host.querySelector(".divLokacija_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Lokacija;
            host.querySelector(".divLokacija_Novog_Projekta").appendChild(l);

            //tip projekta

            d=document.createElement("div");
            d.className="divTip_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Tip projekta: ";
            host.querySelector(".divTip_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Tip;
            host.querySelector(".divTip_Novog_Projekta").appendChild(l);
            
            //stanje projekta

            d=document.createElement("div");
            d.className="divStanje_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Stanje projekta: ";
            host.querySelector(".divStanje_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Stanje;
            host.querySelector(".divStanje_Novog_Projekta").appendChild(l);
        
            //broj radnika na projektu

            d=document.createElement("div");
            d.className="divBrRadnika_Novog_Projekta";
            host.querySelector(".divNovi_Projekat").appendChild(d);

            l=document.createElement("label1");
            l.innerHTML="Broj radnika na projektu je: ";
            host.querySelector(".divBrRadnika_Novog_Projekta").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.BrojRadnika;
            host.querySelector(".divBrRadnika_Novog_Projekta").appendChild(l);
        
        
        }
    }
}