function juhuslikpilt(){
    const pildid=[
        '../Guide/braum.jpg', '../Guide/briar.jpg', '../Guide/caitlyn.jpg', '../Guide/illaoi.jpg', '../Guide/kindrd.jpg', '../Guide/mundo.jpg', '../Guide/qiyana.jpg'
    ]; // 6 pilte

    //random pilt
    const juhustlikpilt=Math.floor(Math.random()*pildid.length)

    //pilt võetakse massiivist
    const pilt=pildid[juhustlikpilt];
    const randompilt=document.getElementById("random-pilt");

    randompilt.src=pilt;
}
//при выборе картинке которая рандомно появляется то она угадывает и даёт ответ
function selectedValik(){
    const randompilt=document.getElementById("random-pilt");
//если рандомная картинка совпадает с ответом то правильно если нет то не правильно
    //пример: картинка "крипов из доты" а ответ выбран что-это "симпл" то \то не верно
    if(document.getElementById("valik").value==randompilt.getAttribute('src')){
        document.getElementById("vastus").innerHTML="Õige!";
        document.getElementById("vastus").style.color="green"; //ответ красит в зелёный
    } else{
        document.getElementById("vastus").innerHTML="Vale!";
        document.getElementById("vastus").style.color="red"; //ответ красит в красный
    }
}

function radioValik(){
    const randompilt=document.getElementById("random-pilt");
    const radionupp=document.getElementsByName("radionupp");

    for(let i=0; i<radionupp.length; i++){
        if(radionupp[i].checked){
            document.getElementById("pilt").src=radionupp[i].value;
        }
    }
}