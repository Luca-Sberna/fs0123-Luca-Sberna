function numberRandom() {
  return Math.round(Math.random() * 100);
}


/* ESERCIZIO 1 
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 5;
let num2 = 10;

function restituisciNumInt(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(restituisciNumInt(5, 10));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 10;

if (num3 !== 5) {
  console.log(num3 !== 5);
  console.log('not equal');
} else {
  console.log('equal');
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 10;

if (num4 % 5 === 0) {
  console.log(num4 % 5 === 0);
  console.log('divisibile per 5');
} else {
  console.log('non divisibile');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num5 = 4;
let num6 = 4;

function controllo(num5, num6) {
  if (num5 === 8 || num6 === 8) {
    return 'uguali a 8'
  } else if (num5 + num6 === 8) {
    return 'addizzione fa 8'
  } else (num5 - num6 === 8)
} 'sottrazzione fa 8'
console.log(controllo(4, 4));

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let carrello = numberRandom();
let costiSpedizione = (carrello >= 50) ? 0 : 10;
let costoTotale = costiSpedizione + carrello;
console.log(costoTotale);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = 20;

function sconto() {
  return (carrello / 100) * (100 - blackFriday);
}

costoTotale = sconto();
console.log(carrello, costoTotale);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num7 = 10;
let num8 = 20;
let num9 = 30;

let numbers = [num7, num8, num9];
numbers.reverse(function (a, b) {
  return a - b;
});
console.log(numbers);




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let str = 'luca';
let numb = 5;

console.log(typeof numb, typeof str);




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 9;

if (number & 1) {
  console.log(number + 'dispari');
} else {
  console.log(number + 'pari');
}






/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val <= 10 && val >= 6) {
  console.log("Meno di 10");
} else if (val <= 5 && val >= 0) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}





/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css']
}



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


me.lastName = '';
console.log(me.lastName);






/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
//da finire

me.skills = '';
console.log(me.skills);





/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
//da finire
let numberGroup = [];









/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
