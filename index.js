//html elementy
const hrac1 = document.getElementById('hrac1');
const hrac2 = document.getElementById('hrac2');
const mic = document.getElementById('mic');
const gamespace = document.getElementById('gamespace');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const pause = document.getElementById('pause');
const countdown = document.getElementById('countdown');

//promeny
let x = 5;
let y = 4;
let xl = mic.offsetLeft;
let yl = mic.offsetTop;
var h = 10;
var hrac2speed = 0;
var hrac1speed = 0;
var hrac11 = hrac1.offsetTop;
var hrac22 = hrac2.offsetTop;
var height = gamespace.clientHeight;
var width = gamespace.clientWidth;
var hrac1score = 0;
var hrac2score = 0;
var stop = 1;
let  c = 3;

//sleep funkce
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function interval(){
    setInterval(()=>{
        //pauza hry
        if (stop === -1) {
            pause.style.visibility = 'visible';
            return;
        }
        if (stop === 1) {
            pause.style.visibility = 'hidden';
        }
        //pricteni bodu pri golu
        if (xl < -(mic.clientWidth)) {
            yl = Math.floor(Math.random() * (gamespace.clientHeight - 50)) + 50;
            xl = ((gamespace.clientWidth/2) - (mic.clientWidth/2));
            mic.style.left = xl + 'px';
            mic.style.top = yl + 'px';
            hrac2score += 1;
            score2.innerText = hrac2score;
            setTimeout(function(){sleep(1000);},10);
        }
        if (xl > width) {
            yl = Math.floor(Math.random() * (gamespace.clientHeight - 50)) + 50;
            xl = ((gamespace.clientWidth/2) - (mic.clientWidth/2));
            mic.style.left = xl + 'px';
            mic.style.top = yl + 'px';
            hrac1score += 1;
            score1.innerText = hrac1score;
            setTimeout(function(){sleep(1000);},10);
        }

        //zastaveni hracu pred vyjeti z hraci plochy
        if (hrac11 < 0) {
            hrac11 = 0;
        }
        if (hrac11 > height - hrac1.clientHeight) {
            hrac11 = height - hrac1.clientHeight;
        }
        if (hrac22 < 0) {
            hrac22 = 0;
        }
        if (hrac22 > height - hrac2.clientHeight) {
            hrac22 = height - hrac2.clientHeight;
        }
        
        //odrazeni mice od hracu
        if (touches(mic, hrac1)|| touches(mic, hrac2)) {
            x *= -1;
        }

        //odrazeni mice od sten
        if ((yl - mic.clientHeight/2) <= 0) {
            y *= -1;
        }
        if ((yl + mic.clientHeight/2) >= height) {
            y *= -1;
        }

        //pohyb hrace
        hrac11 += hrac1speed;
        hrac22 += hrac2speed;
        hrac1.style.top = hrac11 + 'px';
        hrac2.style.top = hrac22 + 'px';
        //pohyb mice
        yl += y;
        xl += x;
        mic.style.left = xl + 'px';
        mic.style.top = yl + 'px';

    }, 10);
}

//funkce dotknuti
function touches(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
  
    return !(
        (aRect.bottom < bRect.top) ||
        (aRect.top > bRect.bottom) ||
        (aRect.right < bRect.left) ||
        (aRect.left > bRect.right)
    );
  }

//pohyb hrace
document.addEventListener("keydown", (event) => {
    if (hrac11 < 0 || hrac11 > height - hrac1.clientHeight || hrac22 < 0 || hrac22 > height - hrac2.clientHeight) {
        return;
    }
    if (event.key === 'w') {
        hrac1speed -= h;
    }
    if (event.key === 's') {
        hrac1speed += h;
    }
    if (event.which === 38) {
        hrac2speed -= h;
    }
    if (event.which === 40) {
        hrac2speed += h;
    }
});
//zastaveni hrace
document.addEventListener("keyup", (event) =>{
    if (event.key === 'w'|| event.key === 's') {
        hrac1speed = 0;
    }
    if (event.which === 38|| event.which === 40) {
        hrac2speed = 0;
    }
});

//pauza hry
document.addEventListener('keypress', (event) =>{
    if (event.which === 32) {
        stop *= -1;
    }
});

//odpocet
function updateCountdown() {
    countdown.innerText = c;
    c--;
    if (c >= 0) {
      setTimeout(updateCountdown, 500);
    } else {
      countdown.style.visibility = 'hidden';
      interval();
    }
  }
  
  updateCountdown();