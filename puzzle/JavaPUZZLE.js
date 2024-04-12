let kellekord="Lilli.png"
function klick(pilt){
    pilt.src=kellekord;

    /* if(kellekord=="Lilli.png"){
        kellekord="auto.png"
    } else {
        kellekord="Lilli.png"
    } */
}

function valikPilt(pilt){
    kellekord=pilt.src;
    document.getElementById("ValitudPilt").src=kellekord;

}