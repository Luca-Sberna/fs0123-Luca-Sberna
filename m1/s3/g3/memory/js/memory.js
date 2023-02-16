let icone = ['😺', '💥', '😻', '🙉', '🐷', '🐖', '🐧', '🐸', '🐉', '🐛', '🐜', '🐝'];
const memory = document.getElementById('memory');
//aggiorna l array icone che contenga i doppioni
icone = icone.concat(icone);
//alternativa
/* icone = [...icone, ...icone]; */


function shuffle(array) {
    let newArray = [];
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * array.length);
        newArray.push(array[rand]);
        array.splice(rand, 1);

    }

    return newArray;
}


function start() {

    //mescolo
    icone = shuffle(icone)

    icone.forEach(el => {

        //creo gli elementi
        let card = document.createElement('div');
        let icona = document.createElement('div');

        //do le classi 
        card.classList.add = ('card');
        icona.classList.add = ('icona');

        icona.textContent = el;

        card.addEventListener('click', () => {
            icona.classList.add('selected');
        })


        card.append(icona);
        memory.append(card);
    })




}
start();

