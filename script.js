


const DISPLAY = document.querySelector('.Display');
const BTNS = document.querySelector('.Keys');


BTNS.addEventListener('click', function (e) {

    if (e.target.matches('button')) {
        const BTN = e.target;
        const ACTION = BTN.dataset.action;
        const CONTENUTO = BTN.textContent;
        const NUM_DISPLAY = DISPLAY.textContent;


        if (!action) {

            if (NUM_DISPLAY === '0') {
                DISPLAY.textContent = CONTENUTO;
            } else {
                DISPLAY.textContent = NUM_DISPLAY + CONTENUTO;
            }

        }
    }
});