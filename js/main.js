const active = document.getElementById('burger');
const prev = document.getElementById('left-arrow-button');
const next = document.getElementById('right-arrow-button');
let images = document.querySelectorAll('#banner');
let i = 0;
let q = images.length - 1;
let numbering = document.querySelectorAll('.numbering');
let prev2 = document.querySelector('.sport-buttons > #left-arrow-button');
let block = document.querySelectorAll('.sport-block')
let j = 0;

active.onclick = function burger() {
    if (document.getElementById('burger-nav').style.display == "none") {
        document.getElementById('burger-nav').style.display = "flex"
        document.getElementById('burger').innerHTML = "✕";
    }

    else if (document.getElementById('burger-nav').style.display == "flex") {
        document.getElementById('burger-nav').style.display = "none"
        document.getElementById('burger').innerHTML = "☰";
    }
}

prev.onclick = function previous() {
    images[i].style.display = 'none';
    numbering[i].style.background = 'none';
    numbering[i].style.color = '#757577';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'flex';
    numbering[i].style.backgroundColor = '#262626';
    numbering[i].style.color = 'white';
}

next.onclick = function next() {
    images[i].style.display = 'none';
    numbering[i].style.background = 'none';
    numbering[i].style.color = '#757577';
    i = i + 1;
    if(i < 0){
        i = images.length + 1;
    }
    else if(i > q) {
        i = 0
    }
    images[i].style.display = 'flex';
    numbering[i].style.backgroundColor = '#262626';
    numbering[i].style.color = 'white';
}

prev2.onclick = function previos2() {
    let k = 0;
    u = 0;
    k = block.length
    for (let u = 0; u > 3; j++) {
        u = block.indexOf('display: block;')
    }
    console.log(u)

}

