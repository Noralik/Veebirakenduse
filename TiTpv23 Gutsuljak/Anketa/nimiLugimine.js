function sisestaNimi(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere päevast, õpilane "+nimi.value;
    vastus.style.color="coral";

}