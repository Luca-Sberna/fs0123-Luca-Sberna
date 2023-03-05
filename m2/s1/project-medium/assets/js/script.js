//scrolltrigger
let scrollTopBar = 450;

window.onscroll = function () {

    if (window.scrollY > scrollTopBar || window.pageYOffset > scrollTopBar) {
        document.querySelector('.top-bar').classList.add('white');
        document.querySelector('.top-bar-btn').classList.add('green');
    }

    else {
        document.querySelector('.top-bar').classList.remove('white');
        document.querySelector('.top-bar-btn').classList.remove('green');
    }
};





// M dinamiche 
//dopo un tot mi si ferma l'animazione da aggiustare
let m = document.querySelectorAll("svg  path")

let animation = setInterval(() => {
    let random = Math.floor(Math.random() * m.length)
    let mSelected = m[random]
    mSelected.style.opacity || mSelected.style.opacity === "0" ? mSelected.style.opacity = 1 : mSelected.style.opacity = 0
}, 150);






