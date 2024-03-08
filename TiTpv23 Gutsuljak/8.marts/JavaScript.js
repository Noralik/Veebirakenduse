function kustuta(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.clearRect(0,0,320,420);
}
function joon(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.lineWidth="1"; //joone laius
    t.strokeStyle="coral"; //joone värv
    t.moveTo(50,60); //algupunkt
    t.lineTo(25, 85);// veel 1punkt
    t.lineTo(75, 110); // veel 1punkt
    t.lineTo(100, 135); // veel 1punkt
    t.lineTo(50, 60); //lõppunk
    t.stroke(); //joonista!
    t.fillStyle="coral";
    t.fill(); //värvi;
}
function ring(){
    //ringjoon
    let t=document.getElementById("tahvel").getContext("2d");
    //arc - дуга
    t.beginPath();
    t.strokeStyle="coral"
    t.arc(70, 70, 50, 0, 2*Math.PI, true); // (x, y, R)
    t.stroke();

    //ring
    t.beginPath();
    t.fillStyle="coral"
    t.arc(140, 70, 50, 0, 2*Math.PI, true); // (x, y, R)
    t.fill();

    //ring 2
    t.beginPath();
    t.strokeStyle="black";
    t.lineWidth="4";
    t.fillStyle="gold";
    t.arc(210, 70, 50, 0, 2*Math.PI, true); // (x, y, R)
    t.fill();
    t.stroke();
}
function ristkyylik(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="green"
    t.fillRect(75,75,40,25); //(x, y, laius, kõrgus)
    t.fillText("Tere tulemast", 100,50);
}

//Auto

function rattad(){
    let ratta=document.getElementById("tahvel").getContext("2d");
    ratta.beginPath();
    ratta.strokeStyle="black";
    ratta.lineWidth="4";
    ratta.fillStyle="red";
    ratta.arc(80, 140, 15, 0, 2*Math.PI, true);// (x, y, R)
    ratta.fill();
    ratta.stroke();

    ratta.beginPath();
    ratta.strokeStyle="black";
    ratta.lineWidth="4";
    ratta.fillStyle="red";
    ratta.arc(200, 140, 15, 0, 2*Math.PI, true);
    ratta.fill();
    ratta.stroke();
}
function Paike(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.strokeStyle="black";
    t.lineWidth="1";
    t.fillStyle="gold";
    t.arc(225, 25, 10, 0, 2*Math.PI, true);// (x, y, R)
    t.fill();
    t.stroke();
}
function matee(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="grey"
    t.fillRect(0,140,600,25); //(x, y, laius, kõrgus)
}
function sammas(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="darkviolet"
    t.fillRect(50,20,10,120); //(x, y, laius, kõrgus)
}
function valgusfooriRaam(){
    let i=document.getElementById("tahvel").getContext("2d");
    i.fillStyle="darkviolet"
    i.fillRect(35,20,40,60); //(x, y, laius, kõrgus)
}
function varvValgus(){
    let k=document.getElementById("tahvel").getContext("2d");
    k.beginPath();
    k.strokeStyle="black";
    k.lineWidth="1";
    k.fillStyle="red";
    k.arc(55, 37, 5, 0, 2*Math.PI, true);
    k.fill();
    k.stroke();

    let o=document.getElementById("tahvel").getContext("2d");
    o.beginPath();
    o.strokeStyle="black";
    o.lineWidth="1";
    o.fillStyle="yellow";
    o.arc(55, 50, 5, 0, 2*Math.PI, true);
    o.fill();
    o.stroke();

    let p=document.getElementById("tahvel").getContext("2d");
    p.beginPath();
    p.strokeStyle="black";
    p.lineWidth="1";
    p.fillStyle="darkgreen";
    p.arc(55, 63, 5, 0, 2*Math.PI, true);
    p.fill();
    p.stroke();
}
function uks(){
    let uks1=document.getElementById("tahvel").getContext("2d");
    uks1.fillStyle="blue"
    uks1.fillRect(70,90,140,50); //(x, y, laius, kõrgus)
}
function aken(){
    let aken=document.getElementById("tahvel").getContext("2d");
    aken.fillStyle="blue"

    let aken3=document.getElementById("tahvel").getContext("2d");
    aken3.fillStyle="lightblue"
    aken3.beginPath();
    aken3.moveTo(70, 90);
    aken3.lineTo(213, 90);
    aken3.lineTo(140, 60);
    aken3.fill();
}
function uks2(){
    let uks2=document.getElementById("tahvel").getContext("2d");
    uks2.fillStyle="violet"
    uks2.fillRect(75,100,35,35); //(x, y, laius, kõrgus)

    let uks3=document.getElementById("tahvel").getContext("2d");
    uks3.fillStyle="violet"
    uks3.fillRect(145,100,35,35); //(x, y, laius, kõrgus)
}
function koik(){
    rattad();
    Paike();
    matee();
    sammas();
    valgusfooriRaam();
    varvValgus();
    uks();
    aken();
    uks2();
}