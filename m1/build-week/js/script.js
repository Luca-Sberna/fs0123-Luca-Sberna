let tag = document.querySelector("body");
const divConteiner = document.createElement('div');
divConteiner.classList.add('divConteiner');
tag.prepend(divConteiner);

//Questa serie di funzioni crea le diverse parti della prima 'slide' (Welcome)

let img = document.createElement("img");
img.src = "assets/img/epicode_logo.png";
img.className += "logo";
tag.prepend(img);


function createTitle() {
    //welcome page
    let h1 = document.createElement("h1");
    let span = document.createElement("span");

    h1.innerHTML = "Welcome to ";
    span.innerHTML = "your exam";

    divConteiner.append(h1);
    h1.append(span);
}

function createInstructions() {
    //instructions
    let h3 = document.createElement("h3");
    h3.textContent = "Instructions";
    divConteiner.append(h3);

    let p = document.createElement("p");
    p.innerHTML =
        "We don't expect most engineers to know the answers to all of these" +
        "<br>" +
        "questions, so don't worry if you're unsure of a few of them.";
    h3.append(p);
    p.classList.add("parag");
}

function createList() {
    ////LISTA

    let listaLi = [
        "Each question is timed and can only be answered once.",

        "Changing browser tab or opening other windows will invalidate the question.",

        "This exam will take approx. 0-5 minutes.",
    ];

    let lista = document.createElement("ul");
    divConteiner.append(lista);

    listaLi.forEach((list) => {
        let li = document.createElement("li");
        li.innerHTML = list.replace(
            /(timed|answered once|invalidate the question|0-5 minutes)/g,
            "<span>$1</span>"
        );
        lista.append(li);
        li.className += "lista";
    });
}

function createButton() {
    ////// BOTTONE WELCOME PAGE ////

    let button = document.createElement("button");
    button.innerHTML = "proceed".toUpperCase();

    button.className = "button";

    divConteiner.append(button);

    //Checkbox & termini e condizioni
    let check = document.createElement("input");
    let txtCheck = document.createElement("label");
    txtCheck.textContent =
        "I promise to answer myself without help from anyone";
    check.setAttribute("type", "checkbox");

    let divCheck = document.createElement("div");
    divCheck.classList.add("container-check");
    divCheck.append(check);
    divCheck.append(txtCheck);
    divCheck.append(button);
    divConteiner.append(divCheck);

    button.disabled = true;
    check.addEventListener("change", function () {
        if (!this.checked) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

// Al caricamento della pagina si eseguono le funzioni per costruire l'HTML
window.onload = function () {
    /* createImg(); */
    createTitle();
    createInstructions();
    createList();
    createButton();
    let button = document.querySelector(".button");
    button.addEventListener("click", function () {
        // al click del bottone si passa alla 'benchmark page'
        createBenchPage();
    });
};

/////////////// QUIZ ///////////////

class Quiz {
    constructor(
        _category,
        _type,
        _difficulty,
        _question,
        _correct,
        _incorrect,
        _time
    ) {
        this.category = _category;
        this.type = _type;
        this.difficulty = _difficulty;
        this.question = _question;
        this.correct = _correct;
        this.incorrect = _incorrect;
        this.time = _time;
    }
}

let quiz1 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What does CPU stand for?",
    "Central Processing Unit",
    [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
    ],
    20
);

let quiz2 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    "Final",
    ["Static", "Private", "Public"],
    10
);

let quiz3 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "The logo for Snapchat is a Bell.",
    "False",
    ["True"],
    10
);

let quiz4 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "Pointers were not used in the original C programming language; they were added later on in C++.",
    "False",
    ["True"],
    15
);

let quiz5 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What is the most preferred image format used for logos in the Wikimedia database?",
    ".svg",
    [".png", ".jpeg", ".gif"],
    25
);

let quiz6 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "In web design, what does CSS stand for?",
    "Cascading Style Sheet",
    [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
    ],
    20
);

let quiz7 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What is the code name for the mobile operating system Android 7.0?",
    "Nougat",
    ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    15
);

let quiz8 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "On Twitter, what is the character limit for a Tweet?",
    "140",
    ["120", "160", "100"],
    24
);

let quiz9 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "Linux was first created as an alternative to Windows XP.",
    "False",
    ["True"],
    18
);

let quiz10 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "Which programming language shares its name with an island in Indonesia?",
    "Java",
    ["Python", "C", "Jakarta"],
    30
);

let quizQuest = [
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
];

// Dato un numero in input (n) che indica il numero di domande,
// si estragono in modo casuale le domande contenute nell'array quizQuest
function getRandomQuiz(n) {
    let output = [];
    let usedQuestions = []; // array di domande già usate

    // ciclo finché non si sono aggiunte tutte le domande richieste
    while (output.length < n) {
        // scegli un indice casuale
        let randomIndex = Math.floor(Math.random() * quizQuest.length);

        // se la domanda non è già stata usata, la aggiungiamo all'output
        if (!usedQuestions.includes(randomIndex)) {
            usedQuestions.push(randomIndex);
            output.push(quizQuest[randomIndex]);
        }
    }

    return output;
}

// ottiene un numero casuale per stabilire la lunghezza del quiz
// si puo scegliere il minimo e il massimo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let conteggioDomande = 1;
// Ottiene array di domande random che contiene almeno 5 domande e non piu di 10
let domandeRandom = getRandomQuiz(randomNumber(5, 10));

// indica la domanda corrente
let indexDomanda = 0;

// mostra la domanda e tutte le possibili risposte
function printQuiz() {
    //struttura dei radio buttons
    let fieldset = document.createElement("fieldset");
    divConteiner.append(fieldset);
    let domanda = document.createElement("legend");
    let answerContainer = document.createElement("div");
    answerContainer.classList.add("answer_container");
    domanda.textContent = domandeRandom[indexDomanda].question;
    fieldset.appendChild(domanda);

    // si crea un nuovo array con tutte le domande (corrette e non)
    let allAnswer = [...domandeRandom[indexDomanda].incorrect];
    allAnswer.push(domandeRandom[indexDomanda].correct);

    // 'mescola' le risoste per mostrarle in ordine casuale
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(allAnswer);

    // mostra domande e ripsoste su HTML
    for (let risposta of allAnswer) {
        let input = document.createElement("input");
        input.setAttribute("name", "answer");
        let risposte = document.createElement("label");
        let div = document.createElement("div");
        input.setAttribute("type", "radio");
        input.setAttribute("value", risposta);
        risposte.setAttribute("for", risposta);
        input.setAttribute("id", risposta);
        risposte.innerText = risposta;
        div.append(input);
        div.append(risposte);
        answerContainer.append(div);
        fieldset.append(answerContainer);
    }

    startTimer(domandeRandom[indexDomanda].time); // inizia timer
    indexDomanda++;
    getAnswer();
}

let userAnswers = [];

function getAnswer() {
    let radios = document.querySelectorAll("input[type = radio]");


    // ottiene risposta dall'utente e la salva in un array, poi passa alla domanda successiva
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function () {
            userAnswers.push(this.value);
            conteggioDomande++;
            createBenchPage();
        });
    }
}


function createBenchPage() {
    // svuota HTML precedente
    divConteiner.innerHTML = "";

    // verifica se il Timer è in esecuzione e lo ferma
    if (isTimerRunning) {
        clearInterval(timer);
        isTimerRunning = false; // imposta la variabile a false per indicare che il Timer è stato fermato
    }

    // crea logo e sfondo
    /* createImg(); */

    // se si arriva all'ultima domanda passare a pagina dei risultati
    // altrimenti si stampa una nuova domanda

    indexDomanda === domandeRandom.length ? displayResult() : printQuiz();
    let questPos = document.createElement('div')
    questPos.id += 'position'
    questPos.innerHTML = `<span class="white">QUESTION ${conteggioDomande}</span><span class="questionSpan">/ ${domandeRandom.length}</span>`

    divConteiner.appendChild(questPos)
}


function displayResult() {
    divConteiner.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = "Results";
    h2.classList.add("titleChart");
    let paragChart = document.createElement("p");
    paragChart.textContent = "The summary of your answers:";
    paragChart.classList.add("paragChart");
    divConteiner.appendChild(h2);
    h2.appendChild(paragChart);

    let divCanvas = document.createElement("div");
    divCanvas.classList.add("divCanvas");
    let canvas = document.createElement("canvas");
    canvas.id = "myChart";

    let percentCorrect = document.createElement("div");
    percentCorrect.classList.add("percentCorrect");
    let correctLabel = document.createElement("h2");
    let percent1 = document.createElement("h3");
    let correctNum = document.createElement("p");
    percentCorrect.append(correctLabel);
    percentCorrect.append(percent1);
    percentCorrect.append(correctNum);

    let percentUncorrect = document.createElement("div");
    percentUncorrect.classList.add("percentUncorrect");
    let uncorrectLabel = document.createElement("h2");
    let percent2 = document.createElement("h3");
    let uncorrectNum = document.createElement("p");
    percentUncorrect.append(uncorrectLabel);
    percentUncorrect.append(percent2);
    percentUncorrect.append(uncorrectNum);


    let textInsideCircle = document.createElement('div');
    textInsideCircle.classList.add('text-inside-circle');
    let text1 = document.createElement('p');
    text1.id = 'number-inside-circle';
    let text2 = document.createElement('p');
    text2.classList.add('remaining-text');
    divConteiner.append(textInsideCircle);
    textInsideCircle.append(text1);
    textInsideCircle.append(text2);





    divConteiner.append(divCanvas);
    divCanvas.append(percentCorrect);
    divCanvas.append(canvas);
    divCanvas.append(percentUncorrect);


    const btnChart = document.createElement("button");
    btnChart.textContent = "rate us".toUpperCase();
    btnChart.classList.add("btnChart");
    divConteiner.appendChild(btnChart);
    btnChart.addEventListener("click", function () {
        // svuota HTML precedente
        const main = document.createElement("div");
        main.className += "stars";
        const tag = document.querySelector("body");
        tag.innerHTML = "";

        let container = document.createElement("div");
        container.classList.add("container");
        tag.prepend(img);
        tag.append(container);

        //titolo 'tell us how it's going'

        const h1 = createElements(container, "h1", "h1");
        h1.innerHTML = "Tell us how it's going";

        //paragrafo

        const p = createElements(container, "h3", "p");
        p.innerHTML =
            "From 0 to 10, how likely are you to recommend EPICODE to a friend o a colleague?";

        //ciclo stelline
        container.append(main);

        for (let x = 0; x < 10; x++) {
            const star = createElements(main, "img", "star");
            star.src = "../assets/img/star.svg";
            star.starValue = x + 1;
            ["mouseover", "mouseout", "click"].forEach((ele) => {
                star.addEventListener(ele, starRate);
            });
        }

        function starRate(e) {
            const eventType = e.type;
            const parent = e.target.closest(".stars");
            const colorStars = parent.querySelectorAll(".star");
            const valutazione = e.target.starValue;
            if (eventType === "mouseover") {
                colorRate(colorStars);
            }
            if (eventType === "click") {
                localStorage.setItem("Valutazione", valutazione);
            }

            colorRate(colorStars, e.target.starValue);
        }

        function colorRate(colorStars, val) {
            colorStars.forEach((star, index) => {
                if (index < val) {
                    star.classList.add("starColorHover");
                } else {
                    star.classList.remove("starColorHover");
                }
            });
        }

        //invito a lasciare una valutazione

        const pValutazione = createElements(container, "h3", "pValutazione");
        pValutazione.innerHTML =
            "Leave us an open feedback about your experience so far";

        //Input
        const inputText = document.createElement("div");
        inputText.className += "inputText";
        container.append(inputText);

        const input = createElements(inputText, "input", "inp");
        const inputValue = document.querySelector(".inp");
        input.type = "text";
        input.placeholder = "Write your comment here";

        //bottone sotto

        const button = createElements(container, "button", "button");
        button.innerHTML = "more info".toUpperCase();
        button.id += "moreInfoPosition";

        button.addEventListener("click", function () {
            localStorage.setItem("Commento", inputValue.value);
            console.log(inputValue.value);
            localStorage.getItem(inputValue.value);
        });

        //funzione per creare elementi

        function createElements(parent, element, myClass) {
            const el = document.createElement(element);
            el.classList.add(myClass);
            parent.append(el);
            return el;
        }
    });

    let correctAnswers = 0;
    console.log(userAnswers);
    console.log(domandeRandom);
    console.log(correctAnswers);

    for (let i = 0; i < domandeRandom.length; i++) {
        if (userAnswers[i] === domandeRandom[i].correct) {
            correctAnswers++;
        }
    }
    let uncorrectAnswers = domandeRandom.length - correctAnswers;








    const data = {
        labels: ["Correct", "Wrong"],
        datasets: [
            {
                label: "Quiz Answers",
                data: [uncorrectAnswers, correctAnswers],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
                hoverOffset: 15,

            },
        ],

    };

    let res1 = (Math.round(correctAnswers / domandeRandom.length * 100)).toFixed(2);
    let res2 = (Math.round(uncorrectAnswers / domandeRandom.length * 100)).toFixed(2);
    correctLabel.textContent = data.labels[0];
    percent1.textContent = `${res1} %`;
    correctNum.textContent = `${correctAnswers}\/${domandeRandom.length} questions`;
    uncorrectLabel.textContent = data.labels[1];
    percent2.textContent = `${res2} %`;
    uncorrectNum.textContent = `${uncorrectAnswers}\/${domandeRandom.length} questions`;

    if (res1 >= 60) {
        text1.innerHTML = 'Congratulations you passed this exam'
        text2.innerHTML = 'We\'ll send you the certificate in few minutes'
    } else {
        text1.innerHTML = 'Sorry you didn\'t pass this exam'
        text2.innerHTML = 'Retry it'
    }




    canvas = document.querySelector("#myChart");
    new Chart(canvas, {
        type: "doughnut",
        data: data,
        options: {

            cutout: '73%',
            borderWidth: 0,
            borderRadius: 5,
            hoverBorderWidth: 0,

            plugins: {
                legend: {
                    display: false,
                },
                centerText: 'ciao',
                tooltip: {
                    enabled: false,
                },
                shadow: {
                    enabled: true,
                    color: 'rgba(0, 0, 0, 0.5)',
                    blur: 15,
                    offsetX: 5,
                    offsetY: 5,
                }
            },



        },


    });


}

////JS
let timer; // variabile che tiene traccia del Timer
let isTimerRunning = false; // variabile che indica se il Timer è in esecuzione o fermato

function startTimer(seconds) {
    let countdown = seconds;
    let timerContainer = document.createElement("div");
    timerContainer.classList.add("timer_container");
    divConteiner.prepend(timerContainer);
    let time = document.createElement("p");

    // Creazione cerchio
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "130");
    svg.setAttribute("width", "200");
    let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );
    circle.setAttribute("r", "60");
    circle.setAttribute("cx", "100");
    circle.setAttribute("cy", "65");
    circle.setAttribute("stroke", "#00ffff");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("stroke-linecap", "round");
    circle.setAttribute("fill", "none");
    svg.appendChild(circle);

    timerContainer.appendChild(svg);

    //secondo cerchio
    let circle2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );
    circle2.setAttribute("r", "60");
    circle2.setAttribute("cx", "100");
    circle2.setAttribute("cy", "65");
    circle2.setAttribute("stroke", "rgba(0,0,0,0.2)");
    circle2.setAttribute("stroke-width", "4");
    circle2.setAttribute("stroke-linecap", "round");
    circle2.setAttribute("fill", "none");
    svg.appendChild(circle2);

    timerContainer.appendChild(svg);

    // Creazione del testo
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "50%");
    text.setAttribute("y", "50%");
    text.setAttribute("text-anchor", "middle");
    let tspan1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
    );
    tspan1.setAttribute("x", "50%");
    tspan1.setAttribute("dy", "-30");
    tspan1.setAttribute("fill", "white");
    tspan1.setAttribute("font-family", "Outfit");
    tspan1.setAttribute("font-size", "0.5rem");

    let tspan2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
    );
    tspan2.setAttribute("x", "50%");
    tspan2.setAttribute("dy", "40");
    tspan2.setAttribute("fill", "white");
    tspan2.setAttribute("font-family", "Outfit");
    tspan2.setAttribute("font-size", "2rem");
    tspan2.setAttribute("font-weight", "bold");

    let tspan3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
    );
    tspan3.setAttribute("x", "50%");
    tspan3.setAttribute("dy", "25");
    tspan3.setAttribute("fill", "white");
    tspan3.setAttribute("font-family", "Outfit");
    tspan3.setAttribute("font-size", "0.5rem");

    text.appendChild(tspan1);
    text.appendChild(tspan2);
    text.appendChild(tspan3);

    // Aggiunta del testo al container
    svg.appendChild(text);

    timerContainer.appendChild(svg);

    let totalLength = 2 * Math.PI * 60;
    circle.style.strokeDasharray = totalLength;

    // Verifica se il Timer è in esecuzione
    if (!isTimerRunning) {
        timer = setInterval(function () {
            countdown--;
            let progress = countdown / seconds;
            circle.style.strokeDashoffset = totalLength * (1 - progress);
            // text.innerHTML = countdown;
            tspan1.textContent = "SECONDS";
            tspan2.textContent = countdown;
            tspan3.textContent = "REMAINING";
            timerContainer.append(time);
            if (countdown === 0) {
                time.innerHTML = "";
                userAnswers.push(null);
                clearInterval(timer);
                createBenchPage();
            }
        }, 1000);
        isTimerRunning = true; // Imposta la variabile a true per indicare che il Timer è in esecuzione
    }
}

