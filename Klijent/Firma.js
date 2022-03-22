export class Firma{

    constructor(Naziv, Adresa, PIB, MB, Zastupnik){

        this.Naziv=Naziv;
        this.Adresa=Adresa;
        this.PIB=PIB;
        this.MB=MB;
        this.Zastupnik=Zastupnik;
    }

    crtajfirmu(host){

        let kk=document.createElement("div");
        kk=host.querySelector(".divNova_Firma");
        if(kk==null)
        {

            let n;
            let l;

            n=document.createElement("div");
            n.innerHTML="";
            n.className="divNova_Firma";
            host.appendChild(n);


            //naziv firme

            n=document.createElement("div");
            n.className="divNaziv_Nove_Firme";
            host.querySelector(".divNova_Firma").appendChild(n);

            l=document.createElement("label1");
            l.innerHTML="Naziv firme: ";
            host.querySelector(".divNaziv_Nove_Firme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Naziv;
            host.querySelector(".divNaziv_Nove_Firme").appendChild(l);


            //adresa firme

            n=document.createElement("div");
            n.className="divAdresa_Nove_Firme";
            host.querySelector(".divNova_Firma").appendChild(n);

            l=document.createElement("label1");
            l.innerHTML="Adresa firme: ";
            host.querySelector(".divAdresa_Nove_Firme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Adresa;
            host.querySelector(".divAdresa_Nove_Firme").appendChild(l);


            //PIB firme

            n=document.createElement("div");
            n.className="divPIB_Nove_Firme";
            host.querySelector(".divNova_Firma").appendChild(n);

            l=document.createElement("label1");
            l.innerHTML="Poreski identifikacioni broj firme: ";
            host.querySelector(".divPIB_Nove_Firme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.PIB;
            host.querySelector(".divPIB_Nove_Firme").appendChild(l);


            //MB firme

            n=document.createElement("div");
            n.className="divMB_Nove_Firme";
            host.querySelector(".divNova_Firma").appendChild(n);

            l=document.createElement("label1");
            l.innerHTML="Matični broj firme: ";
            host.querySelector(".divMB_Nove_Firme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.MB;
            host.querySelector(".divMB_Nove_Firme").appendChild(l);


            //Zastupnik firme

            n=document.createElement("div");
            n.className="divZastupnik_Nove_Firme";
            host.querySelector(".divNova_Firma").appendChild(n);

            l=document.createElement("label1");
            l.innerHTML="Zastupnik firme: ";
            host.querySelector(".divZastupnik_Nove_Firme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.Zastupnik;
            host.querySelector(".divZastupnik_Nove_Firme").appendChild(l);
        }
    }



}