
//funzione per l'aggiunta e la visualizzazione dei tasti

let calcolatrice = document.querySelector('#calco');

function aggiungiTasto(elemento) {

    let simbolo = elemento.getAttribute('data-simbolo');
    let display = document.querySelector('#display');
    let operatori = ['+', '-', '*', '/', '.'];



    if (operatori.includes(simbolo) && operatori.includes(display.value.slice(-1))) {
        return;
    }






    display.value += simbolo;


}






//funzione del totale dell'operazione


function totale() {

    let display = document.querySelector('#display');

    let risultato = eval(display.value);


    if (isFinite(risultato)) {

        if (risultato % 1 === 0) {
            display.value = risultato;
        } else {
            display.value = risultato.toFixed(3);
        }
    } else {
        display.value = "Error:risultato non valido";

    }



    document.querySelector('#calco').classList.add('rotating');
    setTimeout(() => {
        document.querySelector('#calco').classList.remove('rotating');
    }, 1000);




}







//funzione cancelletto


function canc() {

    document.querySelector("#display").value = '';
    document.querySelector('#calco').classList.add('bounce');


    setTimeout(() => {
        document.querySelector('#calco').classList.remove('bounce');
    }, 1000);

}


// prova rotate



