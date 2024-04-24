'use strict';

//////////////////////////////////////////////////////////

//ACQUISIRE I DATI CHE CI SERVONO IN INPUT DALL'UTENTE
let kilometers;
let age;

kilometers = prompt("Inserisci il numero dei chilometri che vuoi percorrere:");
age = prompt("Inserisci l'età del passeggero:");

//RENDERE I DATI UTILIZZABILI
console.log(Number(kilometers));
console.log(parseInt(age));

//CALCOLARE IL TOTALE DEL BIGLIETTO
const price = 0.21;
let totalPrice = (kilometers * price);
console.log(totalPrice);

//APPLICARE GLI SCONTI
//minorenni
const minors = 18;
let sale18 = 20;
//over 65
const elderly = 65;
let sale65 = 40;

if (age < minors) {
    totalPrice = (totalPrice - (totalPrice / 100 * sale18));
} else if (age > elderly) {
    totalPrice = (totalPrice - (totalPrice / 100 * sale65));
}

//METTIAMO IL RISULTATO NELLA GIUSTA FORMA E LO FACCIAMO VISUALIZZARE
totalPrice = totalPrice.toFixed(2);
console.log(totalPrice);

//VISUALIZZARE SULLA PAGINE IL PREZZO FINALE
document.getElementById("price").innerHTML = "Il prezzo del biglietto per percorrere " + kilometers + " chilometri è di €" + totalPrice + ".";