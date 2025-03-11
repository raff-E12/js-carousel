// Scopo del Progetto:
// Realizzazione di un carosello come Vetrina
// Ecco i punti specifici:
// - ripassando argomenti sui quali vi sentite più indietro
// - recuperando esercitazioni
// - provando ad analizzare il codice del progetto carousel e realizzare la vostra versione.

// Nominazione delle seguenti variabili:

const arrow_left = document.getElementById("btn-left");
const arrow_right = document.getElementById("btn-right");
let Sliders = document.querySelectorAll(".slide-box");
let cont_index = 0;

// Funzione di Slider

//Funzione di Movimento di Sinistra

const HandleFunSlidersMotionLeft = ()=>{
    Sliders[cont_index].classList.add("none");
    if (cont_index > 0) {
        cont_index--;
        // console.log(Sliders[cont_index].getAttribute("id"));
    } else {
        cont_index = Sliders.length-1;
        // console.log("reset")
    }
    Sliders[cont_index].classList.remove("none");
}

//Funzione di Movimento di Destra

const HandleFunSlidersMotionRight = ()=>{
    Sliders[cont_index].classList.add("none");
     if (cont_index < Sliders.length-1){
        // console.log(Sliders[cont_index].getAttribute("id"));
        cont_index++;
    } else {
      cont_index = 0;
      //console.log("reset")
    }
    Sliders[cont_index].classList.remove("none");
}

window.addEventListener("load", ()=>{
  arrow_left.addEventListener("click", HandleFunSlidersMotionLeft);
  arrow_right.addEventListener("click", HandleFunSlidersMotionRight);
})