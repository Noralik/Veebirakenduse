function Korrutis(){
    let a1=document.getElementById("arv1");
    let a2=document.getElementById("arv2");
    let vastus1=document.getElementById("vastus1");

    let valik1=document.getElementById("valik1");


    if(valik1.selectedIndex===0) {
        vastus1.innerHTML = "palun vali Üks tehe!!!"
        vastus1.style.backgroundColor="red"
    }
    if(valik1.selectedIndex===1) {
        vastus1.innerHTML ="Vastus on "+(parseInt(a1.value) *parseInt(a2.value));
        vastus1.style.backgroundColor="white"
    }
    if(valik1.selectedIndex===2) {
        vastus1.innerHTML = "Vastus on "+(parseInt(a1.value) /parseInt(a2.value));
        vastus1.style.backgroundColor="white"
    }
    if(valik1.selectedIndex===3) {
        vastus1.innerHTML = "Vastus on "+(parseInt(a1.value) + parseInt(a2.value));
        vastus1.style.backgroundColor="white"
    }
    if(valik1.selectedIndex===4) {
        vastus1.innerHTML = "Vastus on "+(parseInt(a1.value) - parseInt(a2.value));
        vastus1.style.backgroundColor="white"
    }
}

function temp(){
    let TempC=document.getElementById("TempC");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML=parseInt(parseInt(TempC.value) * 1.8)+32 + " F";
//kontrol 25C= 77F
}

function Diskriminant(){

    let a3 = document.getElementById("A");
    let a4 = document.getElementById("B");
    let a5 = document.getElementById("C");
    let vastus3=document.getElementById("vastus3");

//    let valik3=document.getElementById("valik3");

//    if (valik3.selectedIndex===0){
//         vastus3.innerHTML = "palun vali Üks tehe!!!"
//         vastus3.style.backgroundColor="red"
//     }
//     if (valik3.selectedIndex===2){
//         a3 = -a3
//     }
//     //////////////////////////////////////////
//     if (valik3.selectedIndex===2){
//         a4 = -a4
//     }
//     //////////////////////////////////////////
//     if (valik3.selectedIndex===2) {
//         a5 = -a5
//     }
//     else
    //

    //////////////////////////////////////////

    Diskriminant=parseInt(Math.pow(parseInt(a4.value)),2)-(4*(parseInt(a3.value))*(parseInt(a5.value)));

    x1=(parseInt(a4.value+Math.sqrt(Diskriminant))/2*(parseInt(a3.value)));
    x2=(parseInt(a4.value-Math.sqrt(Diskriminant))/2*(parseInt(a3.value)));

    if (Diskriminant > 0){
        vastus3.innerHTML ="Diskriminant = "+Diskriminant;
        vastus3.innerHTML ="x1 = " +x1+ "x2 =" +x2 ;
    }
    else{
        vastus3.innerHTML ="Diskriminant = "+Diskriminant;
        vastus3.innerHTML ="x1 & x2 ≠";
        vastus3.style.backgroundColor="red"
    }
}
