/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* dinamica = una variabile nel corso del progetto puo modificare il tipo di dato assegnato (

  let dato = 30

  let dato = 50              

  let dato = 'stringa'
) */


/* statica = una variabile rimane legata al tipo di valore che gli viene assegnato (

let nome = 'mario' stringa;          |   int numero = 45; 
          o                          |   float numero1 = 12;
String nome = 'mario';               |   bool esempio = true;
 
inoltre ci sono delle keywords che ci indicano degli errori specifici come :

Null = indica l'assenza intenzionale di un contenuto in un elemento
Undefined = indica che non è stata assegnata alcuna variabile o non è stata neanche implementata

)*/





/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let _name = 'Luca';






/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let num1 = 12
let num2 = 20
let num3 = num1 + num2
console.log(num3) */






/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;






/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//const _NAME = 'il tuo cognome'; è impossibile richiamare con const una variabile già assegnata







/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 - x;
console.log(y);





/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';

console.log(name1 != name2);//true, è diverso 


// extra

/*
let lowerName2 = name2.toLowerCase();

if (name1 === lowerName2) {
  console.log(lowerName1 + ' è uguale a ' + lowerName2);
} else {
  console.log(lowerName1 + ' è diverso da ' + lowerName2);
} */



// extra dell'extra : secondo metodo

let lowerName1 = name1.toLowerCase();
let lowerName2 = name2.toLowerCase();

let controllo = lowerName1 === lowerName2 ?
  lowerName1 + ' è uguale a ' + lowerName2 :
  lowerName1 + ' è diverso a ' + lowerName2;

console.log(controllo);
