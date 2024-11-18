/*
veebileht - веб-страница
header - päis - шапка
footer -jalus - подвал
main - sisu - содержимое
section - раздел
laadi alla .скачай
laadi üles - закачай
lohista -перетащи
tee lahti - открой
pane käima -запусти */
/*masive vene sõnas esimene sõna on 0 index 0,1,2,3,4...*/

/*
tarkvara - программное обеспечение
loetelu - список
nummerdatud - нумерованый
täppitud - маркеровыный
stillileht - таблица стилей
pealkiri - заголовок
kommentaar - комментарий
lõik - обзац
hüperlink - гиперссылка
hüperteksti - гипертекст

radiobox - ящик с 1 ответом
checkbox - ящик с нескольуими вариантоми ответа
plugin - плагин
MAP - Элемент для рисования изображения
jQuery - jQuery
*/

/* function veneEestiKontroll(veneSynad, eestisynad){
    //kontrolime massiivide pikkust
    if (veneSynad.length !==eestisynad.length) {

        return false;
    }
    //kontrollime iga sõna tõlge
    for(let i = 0; i < veneSynad.length; i++){
        if(veneSynad[i] !== eestisynad[i]){
            return false;
        }
    }
    return true;
} */
const veneSynad =[
    'веб-страница',
    'шапка',
    'подвал',
    'содержимое',
    'раздел',
    'скачай',
    'закачай',
    'перетащи',
    'открой',
    'запусти',
    'программное обеспечение',
    'список',
    'нумерованый',
    'маркеровыный',
    'таблица стилей',
    'заголовок',
    'комментарий',
    'aбзац',
    'гиперссылка',
    'гипертекст',
    'ящик с 1 ответом',
    'ящик с нескольуими вариантоми ответа',
    'плагин',
    'Элемент для рисования изображения',
    'jQuery',
];
/*masive eesti sõnas esimene sõna on 0 index 0,1,2,3,4...*/
const eestisynad =[
    'veebileht',
    'päis',
    'jalus',
    'sisu',
    'section',
    'laadi alla',
    'laadi üles',
    'lohista',
    'tee lahti',
    'pane käima',
    'tarkvara',
    'loetelu',
    'nummerdatud',
    'täppitud',
    'stillileht',
    'pealkiri',
    'kommentaar',
    'lõik',
    'hüperlink',
    'hüperteksti',
    'radiobox',
    'checkbox',
    'plugin',
    'MAP',
    'jQuery',
];
const  inglisesynad =[
    'website',
    'header',
    'footer',
    'content / main',
    'section',
    'download',
    'upload',
    'drag',
    'open',
    'start up',
    'software',
    'list',
    'numbered',
    'spotted',
    'style sheet',
    'title',
    'comment',
    'section',
    'hyperlink',
    'hypertext',
    'radiobox',
    'checkbox',
    'plugin',
    'MAP',
    'jQuery',
];

function RandomVeneSyna() {
    //Math.random
    //math.floor võtab täis arv "четное число"
    // lenght -pikkus
    veneSynaIndex=Math.floor(Math.random()*veneSynad.length);

    //näitame veebilehel
    document.getElementById("random-syna").innerHTML = veneSynad[veneSynaIndex];
}

function TekstKastiKontroll(){
    // trim() - kustutab tühkid удадить все пробелы в начале
    //toLowerCase() - väikesed tähed всё маленькими буквами
    let eestiSyna=document.getElementById('eestiSyna').value.trim().toLowerCase();

    if (eestiSyna===veneSynad[veneSynaIndex]){
        document.getElementById("vastus").innerHTML="Õige";
        document.getElementById("vastus").style.color="green";
    }
    if (eestiSyna===inglisesynad[veneSynaIndex]){
        document.getElementById("vastus").innerHTML="Õige";
        document.getElementById("vastus").style.color="green";
    } else {
        document.getElementById("vastus").innerHTML="vale";
        document.getElementById("vastus").style.color="red";
    }
}
function RandomIngliseSyna(){
    //Math.random
    //math.floor võtab täis arv "четное число"
    // lenght -pikkus
    inglisesynadIndex=Math.floor(Math.random()*inglisesynad.length);

    //näitame veebilehel
    document.getElementById("random-syna2").innerHTML = inglisesynad[inglisesynadIndex];
}
function TekstKastiKontrollInglise(){
    // trim() - kustutab tühkid удадить все пробелы в начале
    //toLowerCase() - väikesed tähed всё маленькими буквами
    let eestiSyna=document.getElementById('veneSyna').value.trim().toLowerCase();

    if (eestiSyna===eestisynad[inglisesynadIndex]){
        document.getElementById("vastus2").innerHTML="Õige";
        document.getElementById("vastus2").style.color="green";
    } else {
        document.getElementById("vastus2").innerHTML="vale";
        document.getElementById("vastus2").style.color="red";
    }
}
function RandomVeneSyna2(){
    //Math.random
    //math.floor võtab täis arv "четное число"
    // lenght -pikkus
    veneSynaIndex=Math.floor(Math.random()*veneSynad.length);

    //näitame veebilehel
    document.getElementById("random-syna3").innerHTML = veneSynad[veneSynaIndex];
}
function Tekstokontol(){
    // trim() - kustutab tühkid удадить все пробелы в начале
    //toLowerCase() - väikesed tähed всё маленькими буквами
    let inglisesyna=document.getElementById('veneSyna3').value.trim().toLowerCase();

    if (inglisesyna===inglisesynad[veneSynaIndex]){
        document.getElementById("vastus3").innerHTML="Õige";
        document.getElementById("vastus3").style.color="green";
    } else {
        document.getElementById("vastus3").innerHTML="vale";
        document.getElementById("vastus3").style.color="red";
    }
}