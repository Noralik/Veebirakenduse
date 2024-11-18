//ввод в текстовый ящик
//textkasti sissestamine
function tekstKast() {
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere hommikust "+nimi.value;
    //выбор цвета в текста "в ответе"
    vastus.style.color="grey";
}
//выбор значений при нажатий на радио-кнопку
// radionupude valik
function radioValik() {
    let vastus2=document.getElementById("vastus2");
    let  mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let pilt=document.getElementById("pilt")

    if (mees.checked){
        vastus2.innerHTML="Sa valisid mees";
        vastus2.style.color="grey";
        pilt.src="Mees.png"
    } else if(naine.checked){
        vastus2.innerHTML="Sa valisid naine";
        vastus2.style.color="grey";
        pilt.src="naine.png"
    } else {
        vastus2.innerHTML="palun vali sugu";
        vastus2.style.color="grey";
        pilt.src="pilt";
    }
}
//считывает значения из выпадающего списка
// võtab vääärtused ripploendist
function selectValik() {
    let vastus3=document.getElementById("vastus3");
    let linn=document.getElementById("linn");
    if (linn.selectedIndex!==0){
        vastus3.innerHTML="sa oled sündinud "+linn.value +" linnas";
        vastus3.style.color="grey";
    } else{
        vastus3.innerHTML="palun vali linn ";
    }
}
//checkbox
function checkboxValik() {
    let vastus4=document.getElementById("vastus4");
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
    vastus4.innerHTML="Tee valisite muusika "+muusika;
}
function puhasta() {
    vastus.innerHTML=""
    vastus2.innerHTML=""
    vastus3.innerHTML=""
    vastus4.innerHTML=""
    pilt.src=""
}