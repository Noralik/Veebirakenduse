function sisestaNimi(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere päevast, õpilane "+nimi.value;
    vastus.style.color="coral";
}
function perekonna(){
    let Penimi=document.getElementById("Penimi");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Tere päevast, õpilane "+Penimi.value;
    vastus2.style.color="coral";
}
function radioValik(){
    let vastus3=document.getElementById("vastus3");
    let IT=document.getElementById("IT");
    let juuksur=document.getElementById("juuksur");
    let Meh=document.getElementById("Meh");
    let Ratsep=document.getElementById("Rätsep");

    if (IT.checked){
        vastus3.innerHTML="Sa valisid IT";
        vastus3.style.color="coral";
    }if (juuksur.checked){
        vastus3.innerHTML="Sa valisid Juuksur";
        vastus3.style.color="coral";
    }if (Meh.checked){
        vastus3.innerHTML="Sa valisid Mehotronika";
        vastus3.style.color="coral";
    }if (Ratsep.checked){
        vastus3.innerHTML="Sa valisid Rätsep";
        vastus3.style.color="coral";
    }
}
function selectValik() {
    let vastus4=document.getElementById("vastus4");
    let linn=document.getElementById("linn");
    if (linn.selectedIndex!==0){
        vastus4.innerHTML="sa oled sündinud "+linn.value +" linnas";
        vastus4.style.color="coral";
    } else{
        vastus4.innerHTML="palun vali linn ";
    }
}
function Kurs() {
    let vastus5=document.getElementById("vastus5");
    let kurs1=document.getElementById("kurs1");
    let kurs2=document.getElementById("kurs2");
    let kurs3=document.getElementById("kurs3");
    let kurs="";

    if (kurs1.checked){
        kurs+=kurs1.value+", ";
        vastus3.style.color="coral";
    }
    if (kurs2.checked){
        kurs+=kurs2.value+", ";
        vastus3.style.color="coral";
    }
    if (kurs3.checked){
        kurs+=kurs3.value+", ";
        vastus3.style.color="coral";
    }
    vastus5.innerHTML="Vali tehtud kursused "+kurs;
}
function Vauto(){
    let BMW=document.getElementById("BMW");
    let Audi=document.getElementById("Audi");
    let Mercedes=document.getElementById("Mercedes");
    let Tesla=document.getElementById("Tesla");
    let Lexus=document.getElementById("Lexus");
    let Subaru=document.getElementById("Subaru");
    let vastus6=document.getElementById("vastus6");
    let auto="";

    if (BMW.checked){
        auto+=BMW.value+", ";
        vastus6.style.color="coral";
    }
    if (Audi.checked){
        auto+=Audi.value+", ";
        vastus6.style.color="coral";
    }
    if (Mercedes.checked){
        auto+=Mercedes.value+", ";
        vastus6.style.color="coral";
    }
    if (Tesla.checked){
        auto+=Tesla.value+", ";
        vastus6.style.color="coral";
    }
    if (Lexus.checked){
        auto+=Lexus.value+", ";
        vastus6.style.color="coral";
    }
    if (Subaru.checked){
        auto+=Subaru.value+", ";
        vastus6.style.color="coral";
    }

    vastus6.innerHTML="Vali Lemmik auto "+auto;
}
function checkboxValik() {
    let vastus7=document.getElementById("vastus7");
    let Jazz=document.getElementById("Jazz");
    let Popp=document.getElementById("Popp");
    let Rock=document.getElementById("Rock");
    let Metall=document.getElementById("Metall");
    let Tehno=document.getElementById("Tehno");
    let phonk=document.getElementById("phonk");
    let Rap=document.getElementById("Rap");

    let muusika="";
    if (Jazz.checked){
        muusika+=Jazz.value+", ";
    }
    if (Popp.checked){
        muusika+=Popp.value+", ";
    }
    if (Rock.checked){
        muusika+=Rock.value+", ";
    }
    if (Metall.checked){
        muusika+=Metall.value+", ";
    }
    if (Tehno.checked){
        muusika+=Tehno.value+", ";
    }
    if (phonk.checked){
        muusika+=phonk.value+", ";
    }
    if (Rap.checked){
        muusika+=Rap.value+", ";
    }
    vastus7.innerHTML="Tee valisite muusika "+muusika;
}
function favcolor(){
    let color=document.getElementById("color");
    let vastus8=document.getElementById("vastus8");

}
function puhasta() {
    vastus.innerHTML=""
    vastus2.innerHTML=""
    vastus3.innerHTML=""
    vastus4.innerHTML=""
    vastus5.innerHTML=""
    vastus6.innerHTML=""
    vastus7.innerHTML=""
    vastus8.innerHTML=""
    vastus9.innerHTML=""
}