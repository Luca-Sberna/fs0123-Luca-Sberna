
//extra
const icon = '💩';
const borderDiv = document.querySelector('#contain');
const emojiDiv = document.createElement('h2');
emojiDiv.classList.add('logo')
emojiDiv.innerText = icon;
borderDiv.insertBefore(emojiDiv, borderDiv.firstChild);



//variabili base
const nuovaTaskInput = document.querySelector('#nuova-task');
const aggiungiTaskBtn = document.querySelector('#aggiungi-task');
const listeTask = document.querySelector('#task-list');



//evento aggiungi task
aggiungiTaskBtn.addEventListener('click', function () {
    const nomeTask = nuovaTaskInput.value;
    //se il campo testo è diverso da '' fai partire le funzioni
    if (nomeTask.trim() !== '') {
        const nuovaTask = document.createElement('li');
        nuovaTask.innerText = nomeTask;


        //delete button per le liste create dinamicamente
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Elimina";
        deleteBtn.addEventListener("click", function () {
            listeTask.removeChild(divLi);
        });


        //aggiunta della classe css per sbarrare le liste al click su di esse
        nuovaTask.addEventListener('click', function () {
            nuovaTask.classList.toggle('completed')
        });



        //div che racchiude ogni lista creata
        const divLi = document.createElement('div');
        //aggiunge gli elementi nuova task e delete btn al div liste
        divLi.appendChild(nuovaTask);
        divLi.appendChild(deleteBtn);
        //aggiunge ad un elemento div liste che contiene gli elementi citati sopra , alle liste task
        listeTask.appendChild(divLi);
        //azzera il valore dell input per far inserire altro all utente
        nuovaTaskInput.value = "";




    }


});

