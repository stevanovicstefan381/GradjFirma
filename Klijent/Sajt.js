import {Firma} from "./Firma.js";
import {Masine} from "./Masine.js";
import {Projekat} from "./Projekat.js";
import {Radnik} from "./Radnik.js";

export class Sajt{

    constructor(listafirmi){
        this.listafirmi=listafirmi;
        this.container=null;
    }

    
    crtaj(host){

        host.innerHTML="";

        this.container=document.createElement("div");
        this.container.className="Kontejner";
        this.container.innerHTML="";
        host.appendChild(this.container);

        let Heder=document.createElement("div");
        Heder.className="Heder";
        Heder.innerHTML="";
        this.container.appendChild(Heder);

        let Ostalo=document.createElement("div");
        Ostalo.className="Ostalo";
        Ostalo.innerHTML="";
        this.container.appendChild(Ostalo);

        let Izbor=document.createElement("div");
        Izbor.className="Izbor";
        Ostalo.appendChild(Izbor);

        let Prikaz=document.createElement("div");
        Prikaz.className="Prikaz";
        Ostalo.appendChild(Prikaz);    

        let Prikaz_Opcije=document.createElement("div");
        Prikaz_Opcije.className="Prikaz_Opcije";
        Prikaz.appendChild(Prikaz_Opcije);

        let Prikaz_Rezultat=document.createElement("div");
        Prikaz_Rezultat.className="Prikaz_Rezultat";
        Prikaz.appendChild(Prikaz_Rezultat); 

        this.Heder(Heder);
        this.Izbor(Izbor);
        
     }

     Heder (host){
         
        let l=document.createElement("label");
        l.className="Naslov";
        l.innerHTML="Građevinska firma";
        l.onclick=(ev)=>this.crtaj(document.body);
        host.appendChild(l);

        /*let d=document.createElement("div");
        d.className="Heder_Slika";
        l.appendChild(d);*/
        
        
     }

     Izbor(host){

        let FirmaDiv=document.createElement("div");
        FirmaDiv.className="Firma_Div";
        FirmaDiv.innerHTML="";
        host.appendChild(FirmaDiv);

        let ProjekatDiv=document.createElement("div");
        ProjekatDiv.className="Projekat_Div";
        host.appendChild(ProjekatDiv);

        let MasinaDiv=document.createElement("div");
        MasinaDiv.className="Masina_Div";
        host.appendChild(MasinaDiv);

        let RadnikDiv=document.createElement("div");
        RadnikDiv.className="Radnik_Div";
        host.appendChild(RadnikDiv);

        let butt;
        
        // deo za firmu

        

        

        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="FIRMA";
        FirmaDiv.appendChild(butt);
        
        butt.onclick=(ev)=>{

            FirmaDiv.innerHTML="";

            let butt1=document.createElement("button");
            butt1.className="Dugmeta";
            butt1.innerHTML="Izaberi Opciju";
            FirmaDiv.appendChild(butt1);

            butt1.onclick=(ev)=>{
                ProjekatDiv.innerHTML="";
                FirmaDiv.innerHTML="";
                MasinaDiv.innerHTML="";
                RadnikDiv.innerHTML="";

                let butt2=document.createElement("button");
                butt2.className="Dugmeta2";
                butt2.innerHTML="Dodaj Firmu";
                FirmaDiv.appendChild(butt2);

                let butt3=document.createElement("button");
                butt3.className="Dugmeta2";
                butt3.innerHTML="Izmeni Firmu";
                FirmaDiv.appendChild(butt3);

                let butt4=document.createElement("button");
                butt4.className="Dugmeta2";
                butt4.innerHTML="Prikaži Firmu";
                FirmaDiv.appendChild(butt4);

                let butt5=document.createElement("button");
                butt5.className="Dugmeta2";
                butt5.innerHTML="Izbriši Firmu";
                FirmaDiv.appendChild(butt5);

               butt2.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.dodajFirmu(this.container.querySelector(".Prikaz_Opcije"));
               }

               butt3.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izmenifirmu(this.container.querySelector(".Prikaz_Opcije"));
               }

               butt4.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.prikazifirmu(this.container.querySelector(".Prikaz_Opcije"));
               }

               butt5.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izbrisifirmu(this.container.querySelector(".Prikaz_Opcije"));
               }
          }
         }

         
        //deo za projekat

        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="PROJEKAT";
        ProjekatDiv.appendChild(butt);
        
        butt.onclick=(ev)=>{
            
            ProjekatDiv.innerHTML="";

            let butt1=document.createElement("button");
            butt1.className="Dugmeta";
            butt1.innerHTML="Izaberi opcije";
            ProjekatDiv.appendChild(butt1);
            
            butt1.onclick=(ev)=>{
                ProjekatDiv.innerHTML="";
                FirmaDiv.innerHTML="";
                MasinaDiv.innerHTML="";
                RadnikDiv.innerHTML="";

                let butt2=document.createElement("button");
                butt2.className="Dugmeta2";
                butt2.innerHTML="Dodaj Projekat";
                ProjekatDiv.appendChild(butt2);

                let butt3=document.createElement("button");
                butt3.className="Dugmeta2";
                butt3.innerHTML="Izmeni Projekat";
                ProjekatDiv.appendChild(butt3);
                
                let butt5=document.createElement("button");
                butt5.className="Dugmeta2";
                butt5.innerHTML="Prikazi Projekat";
                ProjekatDiv.appendChild(butt5);
                
                let butt6=document.createElement("button");
                butt6.className="Dugmeta2";
                butt6.innerHTML="Izbrisi Projekat";
                ProjekatDiv.appendChild(butt6);

                butt2.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.dodajprojekat(this.container.querySelector(".Prikaz_Opcije"));
                }
                butt3.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izmeniprojekat(this.container.querySelector(".Prikaz_Opcije"));
                }
                
                butt5.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.prikaziprojekat(this.container.querySelector(".Prikaz_Opcije"));
                }
                butt6.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izbrisiprojekat(this.container.querySelector(".Prikaz_Opcije"));
                }

            }
        }

        // deo za masine
        
        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="MAŠINE";
        MasinaDiv.appendChild(butt);
        butt.onclick=(ev)=>{
            MasinaDiv.innerHTML="";
            
            let butt1=document.createElement("button");
            butt1.className="Dugmeta";
            butt1.innerHTML="Izaberi opciju";
            MasinaDiv.appendChild(butt1);

            butt1.onclick=(ev)=>{
                FirmaDiv.innerHTML="";
                ProjekatDiv.innerHTML="";
                MasinaDiv.innerHTML="";
                RadnikDiv.innerHTML="";

                let butt2=document.createElement("button");
                butt2.className="Dugmeta1";
                butt2.innerHTML="Dodaj mašinu";
                MasinaDiv.appendChild(butt2);

                let butt3=document.createElement("button");
                butt3.className="Dugmeta1";
                butt3.innerHTML="Prikaži mašinu";
                MasinaDiv.appendChild(butt3);

                let butt4=document.createElement("button");
                butt4.className="Dugmeta1";
                butt4.innerHTML="Izbriši mašinu";
                MasinaDiv.appendChild(butt4);


                butt2.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.dodajmasinu(this.container.querySelector(".Prikaz_Opcije"));
                }
                
                butt3.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.prikazimasinu(this.container.querySelector(".Prikaz_Opcije"));
                }

                butt4.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izbrisimasinu(this.container.querySelector(".Prikaz_Opcije"));
                }
            }
        }

            //deo za radnike

        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="RADNIK";
        RadnikDiv.appendChild(butt);
        butt.onclick=(ev)=>{
            RadnikDiv.innerHTML="";
            
            let butt1=document.createElement("button");
            butt1.className="Dugmeta";
            butt1.innerHTML="Izaberi opciju";
            MasinaDiv.appendChild(butt1);

            butt1.onclick=(ev)=>{
                FirmaDiv.innerHTML="";
                ProjekatDiv.innerHTML="";
                MasinaDiv.innerHTML="";
                RadnikDiv.innerHTML="";
            

                let butt2=document.createElement("button");
                butt2.className="Dugmeta1";
                butt2.innerHTML="Dodaj radnika";
                RadnikDiv.appendChild(butt2);

                let butt4=document.createElement("button");
                butt4.className="Dugmeta1";
                butt4.innerHTML="Izbriši radnika";
                RadnikDiv.appendChild(butt4);


                butt2.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.dodajradnika(this.container.querySelector(".Prikaz_Opcije"));
                }

                butt4.onclick=(ev)=>{
                    this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                    this.izbrisiradnika(this.container.querySelector(".Prikaz_Opcije"));
                }
            }
        }
}

    // dodavanje firme

    dodajFirmu(host){

        host.innerHTML="";



        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Dodaj";
        host.appendChild(b);

        let d;
        let l;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Dodaj Firmu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Firma_Naziv";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Firma_Adresa";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Firma_PIB";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Firma_MB";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Firma_Zastupnik";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_dodaj_Firmu";
        b.appendChild(l);

        let nizz=["Naziv","Adresa","PIB","MB","Zastupnik"];

        nizz.forEach((p,index)=>{

            l=document.createElement("label");
            l.innerHTML=p;

            d=document.createElement("input");
            d.className="Input_Firmu";

            if(index==0){
                d.classList.add("Input_Firmi_Naziv");
                b.querySelector(".Div_Firma_Naziv").appendChild(l);
                b.querySelector(".Div_Firma_Naziv").appendChild(d);
            }

            else if(index==1){
                d.classList.add("Input_Firmi_Adresu");
                b.querySelector(".Div_Firma_Adresa").appendChild(l);
                b.querySelector(".Div_Firma_Adresa").appendChild(d);
            }

            else if(index==2){
                d.classList.add("Input_Firmi_PIB");
                b.querySelector(".Div_Firma_PIB").appendChild(l);
                b.querySelector(".Div_Firma_PIB").appendChild(d);
            }

            else if(index==3){
                d.classList.add("Input_Firmi_MB");
                b.querySelector(".Div_Firma_MB").appendChild(l);
                b.querySelector(".Div_Firma_MB").appendChild(d);
            }

            else if(index==4){
                d.classList.add("Input_Firmi_Zastupnika");
                b.querySelector(".Div_Firma_Zastupnik").appendChild(l);
                b.querySelector(".Div_Firma_Zastupnik").appendChild(d);
            }
        })

        butt=document.createElement("button");
        butt.className="Button_Izvrsi";
        butt.innerHTML="Dodaj Firmu";
        butt.classList.add("butt_dodaj_firmu_dugme");
        b.querySelector(".Div_dodaj_Firmu").appendChild(butt);

        butt.onclick=(ev)=>{
            let upozorenje="";

            let nazivv=host.querySelector(".Input_Firmi_Naziv").value;
            if(nazivv===null || nazivv==="" || nazivv===undefined || nazivv.length>20)
            {
                upozorenje+="Nevalidan naziv firme! Poštujte ograničenja.\n\n";
            }

            let adresaa=host.querySelector(".Input_Firmi_Adresu").value;
            if(adresaa===null || adresaa==="" || adresaa===undefined || adresaa.length>50)
            {
                upozorenje+="Nevalidna adresa firme! Poštujte ograničenja.\n\n";
            }

            let PIBB=host.querySelector(".Input_Firmi_PIB").value;
            if(PIBB===null || PIBB==="" || PIBB===undefined || PIBB<100 || PIBB>3000)
            {
                upozorenje+="Nevalidan PIB firme! Poštujte ograničenja.\n\n";
            }

            let MBB=host.querySelector(".Input_Firmi_MB").value;
            if(MBB===null || MBB==="" || MBB===undefined || MBB<100 || MBB>3000)
            {
                upozorenje+="Nevalidan MB firme! Poštujte ograničenja.\n\n";
            }

            let zastupnikk=host.querySelector(".Input_Firmi_Zastupnika").value;
            if(zastupnikk===null || zastupnikk==="" || zastupnikk===undefined || zastupnikk.length>30)
            {
                upozorenje+="Nevalidno ime zastupnika firme! Poštujte ograničenja.\n\n";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            else{

                fetch("https://localhost:5001/Firma/DodatiFirmu/"+nazivv+"/"+adresaa+"/"+PIBB+"/"+MBB+"/"+zastupnikk, 
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            
                            //console.log(data.naziv, data.adresa, data.pib, data.mb, data.zastupnik);
                            const novafirma= new Firma(data.naziv, data.adresa, data.pib, data.mb, data.zastupnik);
                            novafirma.crtajfirmu(this.container.querySelector(".Prikaz_Rezultat")); 
                        })
                            host.querySelector(".Input_Firmi_Naziv").disabled=true;
                            host.querySelector(".Input_Firmi_Naziv").style.cursor="stop";
                            host.querySelector(".Input_Firmi_Adresu").disabled=true;
                            host.querySelector(".Input_Firmi_Adresu").style.cursor="stop";
                            host.querySelector(".Input_Firmi_PIB").disabled=true;
                            host.querySelector(".Input_Firmi_PIB").style.cursor="stop";
                            host.querySelector(".Input_Firmi_MB").disabled=true;
                            host.querySelector(".Input_Firmi_MB").style.cursor="stop";
                            host.querySelector(".Input_Firmi_Zastupnika").disabled=true;
                            host.querySelector(".Input_Firmi_Zastupnika").style.cursor="stop";
                            host.querySelector(".Button_Izvrsi").disabled=true;
                            host.querySelector(".Button_Izvrsi").style.cursor="stop";
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

    //izmeni firmu 

    izmenifirmu(host){

            
            host.innerHTML="";
            
            let b=document.createElement("div");
            b.className="Prikaz_Opcije_Izmeni";
            host.appendChild(b);
            b.innerHTML="";

            let d;
            let l;
            let butt;
            let i;

            l=document.createElement("label");
            l.innerHTML="Izmeni Firmu";
            l.className="Opcije_naslov";
            b.appendChild(l);

            l=document.createElement("div");
            l.className="Div_Izmeni_Firmu";
            b.appendChild(l);

            l=document.createElement("label2");
            l.innerHTML="Unesite matični broj (MB) firme koju želite izmeniti:";
            b.querySelector(".Div_Izmeni_Firmu").appendChild(l);

            d=document.createElement("input");
            d.className="Input_Firmu";
            b.querySelector(".Div_Izmeni_Firmu").appendChild(d);

            butt=document.createElement("button");
            butt.className="Dugmeta";
            butt.innerHTML="Obradi";
            b.appendChild(butt);



            butt.onclick=(ev)=>{

                let upozorenje="";

                let mb=b.querySelector(".Input_Firmu").value;

                if(mb<100 || mb>3000)
                {
                    upozorenje+="Nevalidan MB firme! Poštujte ograničenja.\n";
                }

                if(upozorenje!=""){
                    alert(upozorenje);
                    this.crtaj(document.body);
                }

                else{

                    fetch("https://localhost:5001/Firma/NadjiFirmu/"+mb,
                    {
                        method:"GET"
                    }).then(s=>{
                        if(s.ok){

                            //console.log("Lepo.");

                            s.json().then(data=>{
                                const novaFirma=new Firma(data.naziv, data.adresa, data.pib, data.mb, data.zastupnik);
                                novaFirma.crtajfirmu(this.container.querySelector(".Prikaz_Rezultat"));
                            })
                            host.querySelector(".Input_Firmu").disabled=true;
                            host.querySelector(".Input_Firmu").style.cursor="stop";
                            host.querySelector(".Dugmeta").disabled=true;
                            host.querySelector(".Dugmeta").style.cursor="stop";
                            
                            
                            l=document.createElement("div");
                            b.innerHTML="";
                            l.className="Div_Izmeni_Firmu_Labela";
                            b.appendChild(l);
                            
                            
                            l=document.createElement("label3");
                            l.innerHTML="Firma je uspešno pronađena. Unesite podatke za izmenu firme.";
                            l.className="Labela_Za_Izmenu";
                            b.querySelector(".Div_Izmeni_Firmu_Labela").appendChild(l);

                            l=document.createElement("div");
                            l.className="Div_Izmeni_Firmu_Naziv";
                            b.appendChild(l);

                            l=document.createElement("label");
                            l.innerHTML="Novi naziv:";
                            b.querySelector(".Div_Izmeni_Firmu_Naziv").appendChild(l);

                            i=document.createElement("input");
                            i.className="Input_Firmu_Naziv";
                            b.querySelector(".Div_Izmeni_Firmu_Naziv").appendChild(i);

                            l=document.createElement("div");
                            l.className="Div_Izmeni_Firmu_Adresa";
                            b.appendChild(l);

                            l=document.createElement("label");
                            l.innerHTML="Nova adresa:";
                            b.querySelector(".Div_Izmeni_Firmu_Adresa").appendChild(l);

                            i=document.createElement("input");
                            i.className="Input_Firmu_Adresa";
                            b.querySelector(".Div_Izmeni_Firmu_Adresa").appendChild(i);

                            l=document.createElement("div");
                            l.className="Div_Izmeni_Firmu_PIB";
                            b.appendChild(l);

                            l=document.createElement("label");
                            l.innerHTML="Novi PIB:";
                            b.querySelector(".Div_Izmeni_Firmu_PIB").appendChild(l);

                            i=document.createElement("input");
                            i.className="Input_Firmu_PIB";
                            b.querySelector(".Div_Izmeni_Firmu_PIB").appendChild(i);

                            l=document.createElement("div");
                            l.className="Div_Izmeni_Firmu_Zastupnik";
                            b.appendChild(l);

                            l=document.createElement("label");
                            l.innerHTML="Novi zastupnik:";
                            b.querySelector(".Div_Izmeni_Firmu_Zastupnik").appendChild(l);

                            i=document.createElement("input");
                            i.className="Input_Firmu_Zastupnik";
                            b.querySelector(".Div_Izmeni_Firmu_Zastupnik").appendChild(i);

                            butt=document.createElement("button");
                            butt.className="Dugmeta";
                            butt.innerHTML="Obradi";
                            b.appendChild(butt);
                            
                            butt.onclick=(ev)=>{

                                let nazivv=b.querySelector(".Input_Firmu_Naziv").value;
                                if(nazivv===undefined || nazivv==="" || nazivv===null)
                                {
                                    nazivv="-";
                                }
                                let adresaa=b.querySelector(".Input_Firmu_Adresa").value;
                                if(adresaa===undefined || adresaa==="" || adresaa===null)
                                {
                                    adresaa="-";
                                }
                                let pibb=b.querySelector(".Input_Firmu_PIB").value;
                                if(pibb===undefined || pibb==="" || pibb===null)
                                {
                                    pibb=1;
                                }
                                let zastupnikk=b.querySelector(".Input_Firmu_Zastupnik").value;
                                if(zastupnikk===undefined || zastupnikk==="" || zastupnikk===null)
                                {
                                    zastupnikk="-";
                                }
                                
                                fetch("https://localhost:5001/Firma/IzmenitiFirmu/"+mb+"/"+nazivv+"/"+adresaa+"/"+pibb+"/"+zastupnikk,
                                    {
                                        method:"PUT",
                                    }).then(s=>{
                                        if(s.ok){
                                            s.json().then(data=>{
                                                const novafirma=new Firma(data.naziv, data.adresa, data.pib, data.mb, data.zastupnik);
                                                let f = this.container.querySelector(".Prikaz_Rezultat");
                                                f.innerHTML="";
                                                novafirma.crtajfirmu(this.container.querySelector(".Prikaz_Rezultat")); 

                                            })
                                        }
                                    })               
                            }
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


    // prikazi firmu po nazivu 

    prikazifirmu(host){

        host.innerHTML="";
        
        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izmeni";
        b.innerHTML="";
        host.appendChild(b);

        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Prikaži firmu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Izmeni_Firmu";
        b.appendChild(l);

        l=document.createElement("label2");
        l.innerHTML="Unesite naziv firme čije podatke želite da prikažete:";
        b.querySelector(".Div_Izmeni_Firmu").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Firmu";
        b.querySelector(".Div_Izmeni_Firmu").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Obradi";
        butt.className="Dugmeta";
        b.appendChild(butt);

        butt.onclick=(ev)=>{

            let upozorenje="";

            let nazivv=b.querySelector(".Input_Firmu").value;

            if(nazivv===undefined || nazivv===null || nazivv==="")
            {
                upozorenje+="Nevalidan naziv firme! Poštujte ograničenja.\n";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            else{

                fetch("https://localhost:5001/Firma/PreuzmiFirmu/"+nazivv,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){

                        s.json().then(data=>{
                            const novafirma=new Firma(data.naziv, data.adresa, data.pib, data.mb, data.zastupnik);
                            novafirma.crtajfirmu(this.container.querySelector(".Prikaz_Rezultat"));
                            host.querySelector(".Input_Firmu").disabled=true;
                            host.querySelector(".Input_Firmu").style.cursor="stop";
                            host.querySelector(".Dugmeta").disabled=true;
                            host.querySelector(".Dugmeta").style.cursor="stop";
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

    izbrisifirmu(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izbrisi";
        b.innerHTML="";
        host.appendChild(b);

        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Izbriši firmu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Izbrisi_Firmu";
        b.appendChild(l);

        l=document.createElement("label4");
        l.innerHTML="Unesite matični broj firme koju želite da izbrišete:";
        b.querySelector(".Div_Izbrisi_Firmu").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Firmu";
        b.querySelector(".Div_Izbrisi_Firmu").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Obradi";
        butt.className="Dugmeta";
        b.appendChild(butt);

        
        butt.onclick=(ev)=>{
            let upozorenje="";

            let mb=b.querySelector(".Input_Firmu").value;
            
            if(mb<100 || mb>3000 || mb===undefined || mb===null || mb==="")
            {
                upozorenje+="Nevalidan matični broj (MB) firme! Poštujte ograničenja.\n";
            }
            
            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }
            

            else{

                fetch("https://localhost:5001/Firma/ObrisatiFirmu/"+mb,
                {
                    method:"DELETE",
                }).then(s=>{
                    if(s.ok){
                            this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                            //this.crtaj(document.body);
                            alert("Uspešno izbrisana firma sa matičnim brojem "+mb+".");
                            this.crtaj(document.body);
                                            
                        
                    }
                    else{
                        alert("Greška pri brisanju firme!\nPonovo proverite uneti matični broj firme.");
                        this.crtaj(document.body);
                    }
                })
            }

        }
    }

    dodajprojekat(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Dodaj";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Dodaj Projekat";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Projekat_Naziv";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Projekat_Broj";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Projekat_Lokacija";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Projekat_Tip";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Projekat_Stanje";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Projekat_BrojRadnika";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Projekat_Firma";
        b.appendChild(d);
                        
        let nizz=["Naziv", "Broj projekta", "Lokacija", "Tip projekta", "Stanje", "Broj radnika", "Firma ID"];
        let niz=["text", "text", "text", "select", "select", "number", "text"];
        let stanjee=["U toku", "U obustavi"];
        let tipp=["Izgradnja", "Uređenje"];

        nizz.forEach((p,index)=>{
 
            l=document.createElement("label");
            l.innerHTML=p;

            if(index==0){
                i=document.createElement("input");
                i.type=niz[index];
                i.classList.add("Input_Projekat_Naziv");
                b.querySelector(".Div_Projekat_Naziv").appendChild(l);
                b.querySelector(".Div_Projekat_Naziv").appendChild(i);
            }

            else if(index==1){
                i=document.createElement("input");
                i.type=niz[index];
                i.classList.add("Input_Projekat_Broj");
                b.querySelector(".Div_Projekat_Broj").appendChild(l);
                b.querySelector(".Div_Projekat_Broj").appendChild(i);
            }

            else if(index==2){
                i=document.createElement("input");
                i.type=niz[index];
                i.classList.add("Input_Projekat_Lokacija");
                b.querySelector(".Div_Projekat_Lokacija").appendChild(l);
                b.querySelector(".Div_Projekat_Lokacija").appendChild(i);
            }

            else if(index==3){   
                i=document.createElement("select");
                i.classList.add("Input_Projekat_Tip");
                b.querySelector(".Div_Projekat_Tip").appendChild(l);
                b.querySelector(".Div_Projekat_Tip").appendChild(i);
            
                tipp.forEach((r,index)=>{
                    let opt=document.createElement("option");
                    opt.innerHTML=r;
                    i.appendChild(opt);
                })
            }

            else if(index==4){
                i=document.createElement("select");
                i.classList.add("Input_Projekat_Stanje");
                b.querySelector(".Div_Projekat_Stanje").appendChild(l);
                b.querySelector(".Div_Projekat_Stanje").appendChild(i);
            
                stanjee.forEach((r,index)=>{
                    let opt=document.createElement("option");
                    opt.innerHTML=r;
                    i.appendChild(opt);
                })
            }

            else if(index==5){
                i=document.createElement("input");
                i.type=niz[index];
                i.classList.add("Input_Projekat_BrRadnika");
                b.querySelector(".Div_Projekat_BrojRadnika").appendChild(l);
                b.querySelector(".Div_Projekat_BrojRadnika").appendChild(i);
            }

            else if(index==6){
                i=document.createElement("input");
                i.type=niz[index];
                i.classList.add("Input_Projekat_Firma");
                b.querySelector(".Div_Projekat_Firma").appendChild(l);
                b.querySelector(".Div_Projekat_Firma").appendChild(i);
            }
        })

        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="Obradi";
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            let upozorenje="";

            let nazivv=host.querySelector(".Input_Projekat_Naziv").value;
            if(nazivv===null || nazivv===undefined || nazivv==="" || nazivv.length>40)
            {
                upozorenje+="Nevalidan naziv projekta! Poštujte ograničenja.\n\n";
            }

            let brprojekta=host.querySelector(".Input_Projekat_Broj").value;
            if(brprojekta<100 || brprojekta>3000 || brprojekta==="")
            {
                upozorenje+="Nevalidan broj projekta! Poštujte ograničenja.\n\n";
            }

            let lokacijaa=host.querySelector(".Input_Projekat_Lokacija").value;
            if(lokacijaa===null || lokacijaa===undefined || lokacijaa==="" || lokacijaa.length>30)
            {
                upozorenje+="Nevalidna lokacija projekta! Poštujte ograničenja.\n\n";
            }

            let tippp=host.querySelector(".Input_Projekat_Tip").value;
            let stanjee=host.querySelector(".Input_Projekat_Stanje").value;

            let brradnika=host.querySelector(".Input_Projekat_BrRadnika").value;
            if(brradnika===null || brradnika===undefined || brradnika==="" || brradnika<3 || brradnika>20)
            {
                upozorenje+="Nevalidan broj radnika na projektu! Poštujte ograničenja.\n\n";
            }
            
            let ffirma=host.querySelector(".Input_Projekat_Firma").value;
            if(ffirma<0 || ffirma===null || ffirma===undefined || ffirma==="")
            {
                upozorenje+="Nevalidan ID firme koja radi na projektu! Poštujte ograničenja.\n\n";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            else{
                fetch("https://localhost:5001/Projekat/DodatiProjekat/"+nazivv+"/"+brprojekta+"/"+lokacijaa+"/"+tippp+"/"+stanjee+"/"+brradnika+"/"+ffirma,
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const noviprojekat=new Projekat(data.naziv, data.broj, data.lokacija, data.tip, data.stanje, data.brojRadnika, data.firma);
                            noviprojekat.crtajprojekat(this.container.querySelector(".Prikaz_Rezultat"));
                            
                            host.querySelector(".Input_Projekat_Naziv").disabled=true;
                            host.querySelector(".Input_Projekat_Naziv").style.cursor="stop";
                            host.querySelector(".Input_Projekat_Lokacija").disabled=true;
                            host.querySelector(".Input_Projekat_Lokacija").style.cursor="stop";
                            host.querySelector(".Input_Projekat_Broj").disabled=true;
                            host.querySelector(".Input_Projekat_Broj").style.cursor="stop";
                            host.querySelector(".Input_Projekat_Tip").disabled=true;
                            host.querySelector(".Input_Projekat_Tip").style.cursor="stop";
                            host.querySelector(".Input_Projekat_Stanje").disabled=true;
                            host.querySelector(".Input_Projekat_Stanje").style.cursor="stop";
                            host.querySelector(".Input_Projekat_BrRadnika").disabled=true;
                            host.querySelector(".Input_Projekat_BrRadnika").style.cursor="stop";
                            host.querySelector(".Input_Projekat_Firma").disabled=true;
                            host.querySelector(".Input_Projekat_Firma").style.cursor="stop";
                            host.querySelector(".Dugmeta").disabled=true;
                            host.querySelector(".Dugmeta").style.cursor="stop";
                        })
                    
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }
                })
            }


        }

    }
    

    //izmeni projekat

    izmeniprojekat(host){
        
        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izmeni";
        host.appendChild(b);
        b.innerHTML="";

        let d;
        let l;
        let butt;
        let i;
        
        l=document.createElement("label");
        l.innerHTML="Izmeni Projekat";
        l.className="Opcije_naslov";
        b.appendChild(l);

        l=document.createElement("div");
        l.className="Div_Izmeni_Projekat";
        b.appendChild(l);

        l=document.createElement("label2");
        l.innerHTML="Unesite broj projekta koji želite izmeniti:";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(l);

        d=document.createElement("input");
        d.className="Input_Projekat";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(d);

        butt=document.createElement("button");
        butt.className="Dugmeta";
        butt.innerHTML="Obradi";
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            let upozorenje="";
            host.querySelector(".Dugmeta").disabled=true;
            host.querySelector(".Dugmeta").style.cursor="stop";

            let bp=b.querySelector(".Input_Projekat").value;
            let xx=bp;
            if(bp<0 || bp==="")
            {
                upozorenje+="Nevalidan broj projekta! Poštujte ograničenja.\n";
            }
            
            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }
            else{

                fetch("https://localhost:5001/Projekat/PreuzmiProjekat/"+bp,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            console.log(data);
                            const noviprojekat=new Projekat(data.nnaziv, data.brojProjekta, data.lokacija, data.tipProjekta, data.stanje, data.brojRadnika);
                            noviprojekat.crtajprojekat(this.container.querySelector(".Prikaz_Rezultat"));
                            
                        })
                        host.querySelector(".Input_Projekat").disabled=true;
                        host.querySelector(".Input_Projekat").style.cursor="stop";
                        host.querySelector(".Dugmeta").disabled=true;
                        host.querySelector(".Dugmeta").style.cursor="stop";
                    
                        d=document.createElement("div");
                        b.innerHTML="";
                        d.className="Div_Izmeni_Projekat_Labela";
                        b.appendChild(d);

                        l=document.createElement("label3");
                        l.innerHTML="Projekat je uspešno pronađen.\n Unesite podatke za izmenu projekta.";
                        l.className="Labela_Za_Izmenu";
                        b.querySelector(".Div_Izmeni_Projekat_Labela").appendChild(l);

                        d=document.createElement("div");
                        d.className="Div_Izmeni_Projekat_BrRadnika";
                        b.appendChild(d);

                        l=document.createElement("label");
                        l.innerHTML="Novi broj radnika: ";
                        b.querySelector(".Div_Izmeni_Projekat_BrRadnika").appendChild(l);

                        i=document.createElement("input");
                        i.className="Input_Projektu_BrRadnika";
                        b.querySelector(".Div_Izmeni_Projekat_BrRadnika").appendChild(i);

                        d=document.createElement("div");
                        d.className="Div_Izmeni_Projekat_Stanjee";
                        b.appendChild(d);

                        l=document.createElement("label");
                        l.innerHTML="Stanje projekta: ";
                        b.querySelector(".Div_Izmeni_Projekat_Stanjee").appendChild(l);

                        let stanjee=["U toku", "U obustavi"];

                        i=document.createElement("select");
                        i.className="Input_Projekat_Stanje";
                        b.querySelector(".Div_Izmeni_Projekat_Stanjee").appendChild(i);

                        stanjee.forEach((r,index)=>{
                            let opt=document.createElement("option");
                            opt.innerHTML=r;
                            i.appendChild(opt);
                        })
                        
                        let butt1=document.createElement("button");
                        butt1.innerHTML="Obradi";
                        butt1.className="Dugmeta";
                        b.appendChild(butt1);

                        butt1.onclick=(ev)=>{
                            let upozorenje="";
                            let stanjee=host.querySelector(".Input_Projekat_Stanje").value;
                            let brradnika=b.querySelector(".Input_Projektu_BrRadnika").value;
                            if(brradnika==="")
                            {
                                brradnika=1;
                            }
                            else if(brradnika<3 && brradnika==1)
                            {
                                upozorenje+="Neadekvatan broj radnika! Postujte granice!";
                            }
                            else if(brradnika>20)
                            {
                                upozorenje+="Neadekvatan broj radnika! Postujte granice!";
                            }
                            if(upozorenje!="")
                            {
                                alert(upozorenje);
                            }
                            else{

                            fetch("https://localhost:5001/Projekat/IzmenitiProjekat/"+xx+"/"+stanjee+"/"+brradnika,
                            {
                                method:"PUT"
                            }).then(s=>{
                                if(s.ok){
                                    s.json().then(data=>{
                                        
                                        const noviprojekat=new Projekat(data.naziv, data.brojProjekta, data.lokacija, data.tipProjekta, data.stanje, data.brradnika);
                                        this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                                        noviprojekat.crtajprojekat(this.container.querySelector(".Prikaz_Rezultat"));
                                       
                             
                                    })
                                    host.querySelector(".Dugmeta").disabled=true;
                                    host.querySelector(".Dugmeta").style.cursor="stop";
                                }
                            })
                         }
                        }
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }
                })   
            }
        }

    }

    //prikazi projekat po broju projekta i nazivu

    prikaziprojekat(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izmeni";
        b.innerHTML="";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Prikaži Projekat";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.classList="Div_Izmeni_Projekat";
        b.appendChild(d);

        l=document.createElement("label2");
        l.innerHTML="Unesite naziv projekta čije podatke želite da prikažete: ";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Projekat1";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(i);

        d=document.createElement("div");
        d.className="Div_Izmeni_Projekat";
        b.appendChild(d);

        l=document.createElement("label2");
        l.innerHTML="Unesite broj projekta:";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Projekat";
        b.querySelector(".Div_Izmeni_Projekat").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Obradi";
        butt.className="Dugmeta";
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
            let upozorenje="";

            let bp=b.querySelector(".Input_Projekat").value;
            let nazivv=b.querySelector(".Input_Projekat1").value;

            if(bp<1 || bp===null )
            {
                upozorenje+="Nevalidan broj projekta! Poštujte ograničenja.\n ";
            }
            if(nazivv===null || nazivv===undefined || nazivv==="")
            {
                upozorenje+="Nevalidan naziv projekta! Poštujte ograničenja.\n ";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            else {
                fetch("https://localhost:5001/Projekat/PrikaziProjekat/"+nazivv+"/"+bp, 
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const noviprojekatt=new Projekat(data.naziv, data.brojProjekta, data.lokacija, data.tipProjekta, data.stanje, data.brojRadnika);
                            noviprojekatt.crtajprojekat(this.container.querySelector(".Prikaz_Rezultat"));
                            
                      
                        })
                        host.querySelector(".Input_Projekat").disabled=true;
                            host.querySelector(".Input_Projekat").style.cursor="stop";
                            host.querySelector(".Dugmeta").disabled=true;
                            host.querySelector(".Dugmeta").style.cursor="stop";
                            host.querySelector(".Input_Projekat1").disabled=true;
                            host.querySelector(".Input_Projekat1").style.cursor="stop";
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }
                })
            }
        }
    }

    // izbrisi projekat sa datim nazivom i brojem projekta

    izbrisiprojekat(host)
    {
        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izbrisi";
        b.innerHTML="";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Izbriši projekat";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Izbrisi_Projekat";
        b.appendChild(d);

        l=document.createElement("label4");
        l.innerHTML="Unesite naziv projekta koji želite da izbrišete: ";
        b.querySelector(".Div_Izbrisi_Projekat").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Projekat";
        b.querySelector(".Div_Izbrisi_Projekat").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Obradi";
        butt.className="Dugmeta";
        b.appendChild(butt);

        butt.onclick=(ev)=>{

            let nazivv=b.querySelector(".Input_Projekat").value;
            this.container.querySelector(".Prikaz_Opcije_Izbrisi").innerHTML="";
            let upozorenje="";
            
            if(nazivv===null || nazivv===undefined || nazivv==="" || nazivv.length>40)
            {
                upozorenje+="Nevalidan naziv projekta! Poštujte ograničenja.\n";
            }
            
            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            d=document.createElement("div");
            d.className="Div_Izbrisi_Projekat";
            b.appendChild(d);

            l=document.createElement("label4");
            l.innerHTML="Da li ste sigurni da želite da obrišete projekat sa imenom "+nazivv+"?";
            b.querySelector(".Div_Izbrisi_Projekat").appendChild(l);

            d=document.createElement("div");
            d.className="Div_Dugmeta";
            b.querySelector(".Div_Izbrisi_Projekat").appendChild(d);

            let butt1=document.createElement("button");
            butt1.innerHTML="DA";
            butt1.className="Dugmeta1";
            b.querySelector(".Div_Dugmeta").appendChild(butt1);
            
            let butt2=document.createElement("button");
            butt2.innerHTML="NE";
            butt2.className="Dugmeta2";
            b.querySelector(".Div_Dugmeta").appendChild(butt2);

            butt2.onclick=(ev)=>this.crtaj(document.body);

            butt1.onclick=(ev)=>{
                fetch("https://localhost:5001/Projekat/IzbrisatiProjekat/"+nazivv,
                {
                    method:"DELETE",
                }).then(s=>{
                    if(s.ok){
                        this.container.querySelector(".Prikaz_Opcije").innerHTML="";
                        alert("Uspešno izbrisan projekat sa nazivom "+nazivv+".");
                        this.crtaj(document.body);
                    }
                    else{
                        alert("Greška pri brisanju projekta!\nPonovo proverite uneti naziv projekta.");
                        this.crtaj(document.body);
                    }
                })
            }   
        }
    }

    // dodavanje masine

    dodajmasinu(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Dodaj";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let r;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Dodaj Mašinu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Masina_Izbor";
        b.appendChild(d);

        let nizz=["Tip mašine:","Broj radnih sati:","Godište:","Stanje mašine","Identifikacioni broj","Naziv firme u čijem je posedu mašina:"];
        let nizmasina=["Kombinirka","Kamion","Kompresor","Agregat","Kran"];
        let stanjee=["Nova", "Polovna"];
        
        d=document.createElement("div");
        d.className="Div_Masina_BRS";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Masina_Godiste";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Masina_Stanje";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Masina_IdentBr";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Masina_Firma";
        b.appendChild(d);

        nizz.forEach((p,index)=>{

            l=document.createElement("label");
            l.innerHTML=p;

            if(index==0){
                i=document.createElement("select");
                i.classList.add("Input_Masina_Izbor");
                b.querySelector(".Div_Masina_Izbor").appendChild(l);
                b.querySelector(".Div_Masina_Izbor").appendChild(i);
                nizmasina.forEach((q, indexx)=>{
                   let opt=document.createElement("option");
                   opt.innerHTML=q;
                   i.appendChild(opt);
                })
            }

            else if(index==1)
            {
                i=document.createElement("input");
                i.type=nizz[index];
                i.classList.add("Input_Masina_BRS");
                b.querySelector(".Div_Masina_BRS").appendChild(l);
                b.querySelector(".Div_Masina_BRS").appendChild(i);
            }

            else if(index==2)
            {
                i=document.createElement("input");
                i.type=nizz[index];
                i.classList.add("Input_Masina_Godiste");
                b.querySelector(".Div_Masina_Godiste").appendChild(l);
                b.querySelector(".Div_Masina_Godiste").appendChild(i);
            }
            else if(index==3)
            {
                i=document.createElement("select");
                i.classList.add("Input_Masina_Stanje");
                b.querySelector(".Div_Masina_Stanje").appendChild(l);
                b.querySelector(".Div_Masina_Stanje").appendChild(i);
                stanjee.forEach((t,index)=>{
                    let optt=document.createElement("option");
                    optt.innerHTML=t;
                    i.appendChild(optt);
                })
            
            }
            else if(index==4)
            {
                i=document.createElement("input");
                i.type=nizz[index];
                i.classList.add("Input_Masina_IdentBr");
                b.querySelector(".Div_Masina_IdentBr").appendChild(l);
                b.querySelector(".Div_Masina_IdentBr").appendChild(i);
            }
            else if(index==5)
            {
                i=document.createElement("input");
                i.type=nizz[index];
                i.classList.add("Input_Masina_Firma");
                b.querySelector(".Div_Masina_Firma").appendChild(l);
                b.querySelector(".Div_Masina_Firma").appendChild(i);
            }

        })

        butt=document.createElement("button");
        butt.className="Button_Izvrsi";
        butt.innerHTML="Obradi";
        butt.classList.add("butt_dodaj_masinu_dugme");
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            let upozorenje="";

            let tipp=host.querySelector(".Input_Masina_Izbor").value;

            let brs=host.querySelector(".Input_Masina_BRS").value;
            if(brs>25000 || brs<0 || brs==="")
            {
                upozorenje+="Nevalidan broj radnih sati! Poštujte ograničenja.\n\n";
            }

            let godiste=host.querySelector(".Input_Masina_Godiste").value;
            if(godiste<2000 || godiste>2022 || godiste===null)
            {
                upozorenje+="Nevalidno godište! Poštujte ograničenja.\n\n";
            }

            let stanje=host.querySelector(".Input_Masina_Stanje").value;

            let idfb=host.querySelector(".Input_Masina_IdentBr").value;
            if(idfb<100 || idfb>3000 || idfb===null)
            {
                upozorenje+="Nevalidan identifikacioni broj! Poštujte ograničenja.\n\n";
            }
            
            let firmaa=host.querySelector(".Input_Masina_Firma").value;
            if(firmaa===undefined || firmaa===null || firmaa==="" || firmaa.length>30)
            {
                upozorenje+="Nevalidan naziv firme u čijem je vlasništvu mašina! Poštujte ograničenja.\n\n";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            else{
                fetch("https://localhost:5001/Masine/DodatiMasine/"+tipp+"/"+brs+"/"+godiste+"/"+stanje+"/"+idfb+"/"+firmaa,
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const novamasina=new Masine(data.ttip, data.bbrs, data.ggod, data.sstanje, data.iidnf, data.firmma);
                            novamasina.crtajmasinu(this.container.querySelector(".Prikaz_Rezultat"));
                                                 
                        })
                            host.querySelector(".Input_Masina_Izbor").disabled=true;
                            host.querySelector(".Input_Masina_Izbor").style.cursor="stop";
                            host.querySelector(".Input_Masina_BRS").disabled=true;
                            host.querySelector(".Input_Masina_BRS").style.cursor="stop";
                            host.querySelector(".Input_Masina_Godiste").disabled=true;
                            host.querySelector(".Input_Masina_Godiste").style.cursor="stop";
                            host.querySelector(".Input_Masina_Stanje").disabled=true;
                            host.querySelector(".Input_Masina_Stanje").style.cursor="stop";
                            host.querySelector(".Input_Masina_IdentBr").disabled=true;
                            host.querySelector(".Input_Masina_IdentBr").style.cursor="stop";
                            host.querySelector(".Input_Masina_Firma").disabled=true;
                            host.querySelector(".Input_Masina_Firma").style.cursor="stop";   
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }

                })
            }
        }
    }

    prikazimasinu(host)
    {
            host.innerHTML="";
    
            let b=document.createElement("div");
            b.className="Prikaz_Opcije_Izmeni";
            b.innerHTML="";
            host.appendChild(b);
    
            let d;
            let l;
            let i;
            let butt;

            l=document.createElement("label");
            l.innerHTML="Prikaži Mašinu";
            l.className="Opcije_naslov";
            b.appendChild(l);

            d=document.createElement("div");
            d.classList="Div_Prikazi_Masinu";
            b.appendChild(d);
            
            l=document.createElement("label2");
            l.innerHTML="Izaberite tip mašine čije podatke želite da prikažete: ";
            b.querySelector(".Div_Prikazi_Masinu").appendChild(l);

            d=document.createElement("div");
            d.className="Div_Masina_Izbor";
            b.querySelector(".Div_Prikazi_Masinu").appendChild(d);

            let nizmasina=["Kombinirka","Kamion","Kompresor","Agregat","Kran"];

            i=document.createElement("select");
            i.classList.add("Input_Masina_Izbor1");
            b.querySelector(".Div_Masina_Izbor").appendChild(i);
            nizmasina.forEach(q=>{
                   let opt=document.createElement("option");
                   opt.innerHTML=q;
                   i.appendChild(opt);
            })

            d=document.createElement("div");
            d.classList="Div_Unesi_IDF";
            b.appendChild(d);

            l=document.createElement("label2");
            l.innerHTML="Unesite identifikacioni broj mašine: ";
            b.querySelector(".Div_Unesi_IDF").appendChild(l);

            i=document.createElement("input");
            i.className="Input_IDF";
            b.querySelector(".Div_Unesi_IDF").appendChild(i);

            butt=document.createElement("button");
            butt.innerHTML="Obradi";
            butt.className="Dugmeta";
            b.appendChild(butt);

            butt.onclick=(ev)=>{
                this.container.querySelector(".Prikaz_Rezultat").innerHTML="";
                let upozorenje="";

                let tippp=b.querySelector(".Input_Masina_Izbor1").value;
                let idnf=b.querySelector(".Input_IDF").value;

                if(idnf<100 || idnf>3000 || idnf==="")
                {
                    upozorenje+="Nevalidan identifikacioni broj mašine! Poštujte ograničenja./n/n";
                }

                if(upozorenje!="")
                {
                    alert(upozorenje);
                    this.crtaj(document.body);
                }
                else{
                    fetch("https://localhost:5001/Masine/PrikazatiMasinu/"+idnf+"/"+tippp,{
                    
                    method:"GET"       
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            console.log(data);
                            const novamasina=new Masine(data.tip, data.brojradnihsati, data.godiste, data.stanje, data.identifikacionibroj, data.naziv);
                            novamasina.ctajmasinuifirmu(this.container.querySelector(".Prikaz_Rezultat"));
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }
                })
                }
            }
    }


    // izbrisi masinu

    izbrisimasinu(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izbrisi";
        b.innerHTML="";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Izbriši mašinu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Izbrisi_Projekat";
        b.appendChild(d);

        l=document.createElement("label2");
        l.innerHTML="Izaberite tip mašine koju želite da izbrišete: ";
        b.querySelector(".Div_Izbrisi_Projekat").appendChild(l);

        d=document.createElement("div");
        d.className="Div_Masina_Izbor";
        b.querySelector(".Div_Izbrisi_Projekat").appendChild(d);

        let nizmasina=["Kombinirka","Kamion","Kompresor","Agregat","Kran"];

        i=document.createElement("select");
        i.classList.add("Input_Masina_Izbor1");
        b.querySelector(".Div_Masina_Izbor").appendChild(i);
        nizmasina.forEach(q=>{
               let opt=document.createElement("option");
               opt.innerHTML=q;
               i.appendChild(opt);
        })

        d=document.createElement("div");
        d.classList="Div_Unesi_IDF";
        b.querySelector(".Div_Izbrisi_Projekat").appendChild(d);

        l=document.createElement("label2");
        l.innerHTML="Unesite identifikacioni broj mašine: ";
        b.querySelector(".Div_Unesi_IDF").appendChild(l);

        i=document.createElement("input");
        i.className="Input_IDF";
        b.querySelector(".Div_Unesi_IDF").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Izbriši";
        butt.className="Dugmeta";
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            let tipp=host.querySelector(".Input_Masina_Izbor1").value;
            let idff=host.querySelector(".Input_IDF").value;

            b.innerHTML="";
            let upozorenje="";
            
            if(idff<100 || idff>3000 || idff==="")
            {
                upozorenje+="Nevalidan identifikacioni broj mašine! Poštujte ograničenja.\n";
            }
            
            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);

            }

            b=document.createElement("div");
            b.className="Div_Izbrisii_Projekat";
            host.appendChild(b);

            l=document.createElement("label4");
            l.innerHTML="Da li ste sigurni da želite da obrišete mašinu?";
            host.querySelector(".Div_Izbrisii_Projekat").appendChild(l);

            d=document.createElement("div");
            d.className="Div_Dugmeta1";
            host.querySelector(".Div_Izbrisii_Projekat").appendChild(d);

            let butt1=document.createElement("button");
            butt1.innerHTML="DA";
            butt1.className="Dugmeta3";
            b.querySelector(".Div_Dugmeta1").appendChild(butt1);
            
            let butt2=document.createElement("button");
            butt2.innerHTML="NE";
            butt2.className="Dugmeta4";
            b.querySelector(".Div_Dugmeta1").appendChild(butt2);

            butt2.onclick=(ev)=>this.crtaj(document.body);

            butt1.onclick=(ev)=>{
                fetch("https://localhost:5001/Masine/IzbrisatiMasinu/"+idff+"/"+tipp,
                {
                    method:"DELETE",
                }).then(s=>{
                    if(s.ok){
                        this.container.querySelector(".Prikaz_Opcije").innerHTML="";
                        alert("Uspešno izbrisana mašina tipa "+tipp+".");
                        this.crtaj(document.body);
                    }
                    else{
                        alert("Greška pri brisanju mašine!\nPonovo proverite unete podatke.");
                        this.crtaj(document.body);
                    }
                })
            }
            
        }
    }


    // dodaj radnika

    dodajradnika(host){

        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Dodaj";
        host.appendChild(b);

        let d;
        let l;
        let i;
        let r;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Dodaj Radnika";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Radnik_Izbor";
        b.appendChild(d);

        let niz=["Ime radnika: ","Jmbg radnika: ", "Profesija: ","Mašina: ","Godine iskustva: ","Broj godina radnika:","ID firme u kojoj je zaposlen:","Broj projekat na kome radi:"];
        let nizmasina=["Kombinirka","Kamion","Kompresor","Agregat","Kran"];
        let nizprofesija=["Vozac","Moler","Elektricar"];

        d=document.createElement("div");
        d.className="Div_Radnik_Ime";
        b.appendChild(d);

        d=document.createElement("div");
        d.className="Div_Radnik_Jmbg";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_Profesija";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_Masina";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_GodineI";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_Godine";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_Firma";
        b.appendChild(d);
        
        d=document.createElement("div");
        d.className="Div_Radnik_Projekat";
        b.appendChild(d);


        niz.forEach((p,index)=>{
            l=document.createElement("label");
            l.innerHTML=p;

            if(index==0)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_Ime");
                b.querySelector(".Div_Radnik_Ime").appendChild(l);
                b.querySelector(".Div_Radnik_Ime").appendChild(i);
            }

            else if(index==1)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_Jmbg");
                b.querySelector(".Div_Radnik_Jmbg").appendChild(l);
                b.querySelector(".Div_Radnik_Jmbg").appendChild(i);
            }

            else if(index==2)
            {
                i=document.createElement("select");
                i.classList.add("Input_Radnik_Profesija");
                b.querySelector(".Div_Radnik_Profesija").appendChild(l);
                b.querySelector(".Div_Radnik_Profesija").appendChild(i);
                nizprofesija.forEach(q=>{
                    let opt=document.createElement("option");
                    opt.innerHTML=q;
                    i.appendChild(opt);
                })
            }

            else if(index==3)
            {
                i=document.createElement("select");
                i.classList.add("Input_Radnik_Masina");
                b.querySelector(".Div_Radnik_Masina").appendChild(l);
                b.querySelector(".Div_Radnik_Masina").appendChild(i);
                nizmasina.forEach(r=>{
                    let opt=document.createElement("option");
                    opt.innerHTML=r;
                    i.appendChild(opt);
                })
            }

            else if(index==4)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_GodineI");
                b.querySelector(".Div_Radnik_GodineI").appendChild(l);
                b.querySelector(".Div_Radnik_GodineI").appendChild(i);
            }

            else if(index==5)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_Godine");
                b.querySelector(".Div_Radnik_Godine").appendChild(l);
                b.querySelector(".Div_Radnik_Godine").appendChild(i);
            }

            else if(index==6)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_Firma");
                b.querySelector(".Div_Radnik_Firma").appendChild(l);
                b.querySelector(".Div_Radnik_Firma").appendChild(i);
            }

            else if(index==7)
            {
                i=document.createElement("input");
                i.classList.add("Input_Radnik_Projekat");
                b.querySelector(".Div_Radnik_Projekat").appendChild(l);
                b.querySelector(".Div_Radnik_Projekat").appendChild(i);
            }
        })

        butt=document.createElement("button");
        butt.className="Button_Izvrsi";
        butt.innerHTML="Obradi";
        butt.classList.add("butt_dodaj_radnika_dugme");
        b.appendChild(butt);
    
        butt.onclick=(ev)=>{
            let upozorenje="";

            let masinaa=host.querySelector(".Input_Radnik_Masina").value;
            let profesijaa=host.querySelector(".Input_Radnik_Profesija").value;
            let imee=host.querySelector(".Input_Radnik_Ime").value;
            let jmbgg=host.querySelector(".Input_Radnik_Jmbg").value;
            let ggodinei=host.querySelector(".Input_Radnik_GodineI").value;
            let ggodine=host.querySelector(".Input_Radnik_Godine").value;
            let firmaa=host.querySelector(".Input_Radnik_Firma").value;
            let projekatt=host.querySelector(".Input_Radnik_Projekat").value;

            if(imee===null || imee===undefined || imee==="" || imee.length>30)
            {
                upozorenje+="Neadekvatno ime radnika! Poštujte ograničenja.\n\n";
            }

            if(jmbgg==="" || jmbgg>1000 || jmbgg<100)
            {
                upozorenje+="Neadekvatan jmbg radnika! Poštujte ograničenja.\n\n";
            }

            if(ggodinei==="" || ggodinei<2 || ggodinei>50)
            {
                upozorenje+="Neadekvatan broj godina iskustva radnika! Poštujte ograničenja.\n\n";
            }

            if(ggodine==="" || ggodine<18 || ggodine>60)
            {
                upozorenje+="Neadekvatan broj godina radnika! Poštujte ograničenja.\n\n";
            }
            
            if(firmaa==="")
            {
                upozorenje+="Neadekvatno ime firme u kojoj je radnik zaposlen! Poštujte ograničenja.\n\n";
            }

            if(projekatt==="" || projekatt<100 || projekatt>3000)
            {
                upozorenje+="Neadekvatan broj projekta na kome radnik radi! Poštujte ograničenja.\n\n";
            }

            if(upozorenje!="")
            {
                alert(upozorenje);
            }

            else {
                fetch("https://localhost:5001/Radnik/DodatiRadnika/"+imee+"/"+jmbgg+"/"+profesijaa+"/"+masinaa+"/"+ggodinei+"/"+ggodine+"/"+firmaa+"/"+projekatt,
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const noviradnik=new Radnik(data.ime, data.jmbg, data.profesija, data.masina, data.godinei, data.godine, data.firma, data.projekat);
                            noviradnik.crtajradnika(this.container.querySelector(".Prikaz_Rezultat"));
                            host.querySelector(".Button_Izvrsi").disabled=true;
                            host.querySelector(".Button_Izvrsi").style.cursor="stop";
                            
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.crtaj(document.body);
                        })
                    }
                })
            }

        }
    }

    // izbrisi radnika

    izbrisiradnika(host)
    {
        host.innerHTML="";

        let b=document.createElement("div");
        b.className="Prikaz_Opcije_Izbrisi";
        b.innerHTML="";
        host.appendChild(b);
        
        let d;
        let l;
        let i;
        let butt;

        l=document.createElement("label");
        l.innerHTML="Izbriši mašinu";
        l.className="Opcije_naslov";
        b.appendChild(l);

        d=document.createElement("div");
        d.className="Div_Izbrisi_Radnika";
        b.appendChild(d);

        l=document.createElement("label2");
        l.innerHTML="Unesite JMBG radnika koga želite da izbrišete: ";
        b.querySelector(".Div_Izbrisi_Radnika").appendChild(l);

        i=document.createElement("input");
        i.className="Input_Radnika";
        b.querySelector(".Div_Izbrisi_Radnika").appendChild(i);

        butt=document.createElement("button");
        butt.innerHTML="Izbriši";
        butt.className="Dugmeta";
        b.appendChild(butt);

        butt.onclick=(ev)=>{
            let jmbgg=host.querySelector(".Input_Radnika").value;

            b.innerHTML="";
            let upozorenje="";

            if(jmbgg==="" || jmbgg<100 || jmbgg>1000)
            {
                upozorenje+="Nevalidan JMBG radnika! Poštujte ograničenja.\n";
            }
            if(upozorenje!="")
            {
                alert(upozorenje);
                this.crtaj(document.body);
            }

            b=document.createElement("div");
            b.className="Div_Izbrisii_Projekat";
            host.appendChild(b);

            l=document.createElement("label4");
            l.innerHTML="Da li ste sigurni da želite da obrišete radnika?";
            host.querySelector(".Div_Izbrisii_Projekat").appendChild(l);

            d=document.createElement("div");
            d.className="Div_Dugmeta1";
            host.querySelector(".Div_Izbrisii_Projekat").appendChild(d);

            let butt1=document.createElement("button");
            butt1.innerHTML="DA";
            butt1.className="Dugmeta3";
            b.querySelector(".Div_Dugmeta1").appendChild(butt1);
            
            let butt2=document.createElement("button");
            butt2.innerHTML="NE";
            butt2.className="Dugmeta4";
            b.querySelector(".Div_Dugmeta1").appendChild(butt2);

            butt2.onclick=(ev)=>this.crtaj(document.body);

            butt1.onclick=(ev)=>{
                fetch("https://localhost:5001/Radnik/ObrisatiRadnika/"+jmbgg,
                {
                    method:"DELETE"
                }).then(s=>{
                    if(s.ok){
                        this.container.querySelector(".Prikaz_Opcije").innerHTML="";
                        alert("Uspešno izbrisan radnik sa JMBG-om "+jmbgg+".");
                        this.crtaj(document.body);
                    }
                    else{
                        alert("Greška pri brisanju radnika!\n Ponovo proverite unete podatke.");
                        this.crtaj(document.body);
                    }
                })
            }
        }


    }
}