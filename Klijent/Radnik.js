import { Firma } from "./Firma.js";
import { Projekat } from "./Projekat.js";

export class Radnik{
    
    constructor(Ime, Jmbg, Profesija, Masina, GodineI, Godine, Firma, Projekat)
    {
        this.Ime=Ime;
        this.Jmbg=Jmbg;
        this.Profesija=Profesija;
        this.Masina=Masina;
        this.GodineI=GodineI;
        this.Godine=Godine;
        this.Firma=Firma;
        this.Projekat=Projekat;
    }

    crtajradnika(host){

        let d;
        let l;

        d=document.createElement("div");
        d.innerHTML="";
        d.className="divNovi_Radnik";
        host.appendChild(d);

        //ime radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Ime";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Ime radnika: ";
        host.querySelector(".divNovi_Radnik_Ime").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Ime;
        host.querySelector(".divNovi_Radnik_Ime").appendChild(l);
        
        //jmbg radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Jmbg";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Jmbg radnika: ";
        host.querySelector(".divNovi_Radnik_Jmbg").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Jmbg;
        host.querySelector(".divNovi_Radnik_Jmbg").appendChild(l);

        // profesija radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Profesija";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Profesija radnika: ";
        host.querySelector(".divNovi_Radnik_Profesija").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Profesija;
        host.querySelector(".divNovi_Radnik_Profesija").appendChild(l);
    
        // masina radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Masina";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Mašina radnika: ";
        host.querySelector(".divNovi_Radnik_Masina").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Masina;
        host.querySelector(".divNovi_Radnik_Masina").appendChild(l);
    

        // godine iskustva

        d=document.createElement("div");
        d.className="divNovi_Radnik_GodineI";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Broj godina iskustva radnika: ";
        host.querySelector(".divNovi_Radnik_GodineI").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.GodineI;
        host.querySelector(".divNovi_Radnik_GodineI").appendChild(l);
    

        //godine radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Godine";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Broj godina radnika: ";
        host.querySelector(".divNovi_Radnik_Godine").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Godine;
        host.querySelector(".divNovi_Radnik_Godine").appendChild(l);
    
        
        //firma radnika
 
        d=document.createElement("div");
        d.className="divNovi_Radnik_Firma";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Naziv firme radnika: ";
        host.querySelector(".divNovi_Radnik_Firma").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Firma;
        host.querySelector(".divNovi_Radnik_Firma").appendChild(l);


        //projekat radnika

        d=document.createElement("div");
        d.className="divNovi_Radnik_Projekat";
        host.querySelector(".divNovi_Radnik").appendChild(d);

        l=document.createElement("label1");
        l.innerHTML="Naziv projekta radnika: ";
        host.querySelector(".divNovi_Radnik_Projekat").appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.Projekat;
        host.querySelector(".divNovi_Radnik_Projekat").appendChild(l);
    
    }
}