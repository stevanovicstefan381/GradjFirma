import { Firma } from "./Firma.js";
import { Sajt } from "./Sajt.js";

var listafirmi=[];

/* fetch("https://localhost:5001/Firma/PreuzetiFirme")
.then(p=>{
    p.json().then(firme =>{
        firme.forEach(firma => {

            console.log(firma);
           var f=new Firma(firma.Naziv, firma.Adresa, firma.PIB, firma.MB, firma.Zastupnik);
           listafirmi.push(f);
            
        });
    })
}) */



var s=new Sajt(listafirmi);
s.crtaj(document.body); 