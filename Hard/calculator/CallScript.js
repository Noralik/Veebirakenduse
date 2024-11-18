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

function Diskriminant() {
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let vastus3 = document.getElementById("vastus3");

    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        vastus3.innerHTML = "Diskriminant = " + discriminant + "<br>";
        vastus3.innerHTML += "x1 = " + x1 + ", x2 = " + x2;
        vastus3.style.backgroundColor = "green";
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        vastus3.innerHTML = "Diskriminant = " + discriminant + "<br>";
        vastus3.innerHTML += "x1 = x2 = " + x;
        vastus3.style.backgroundColor = "green";
    } else {
        vastus3.innerHTML = "Diskriminant = " + discriminant + "<br>";
        vastus3.innerHTML += "x1 & x2 are imaginary";
        vastus3.style.backgroundColor = "red";
    }
}


