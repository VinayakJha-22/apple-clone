//navbar stick
window.onscroll = function () {
    navScroll(),
    startScroll(),
    endScroll()
};

const navHead = document.querySelector('.nav-head');
var stick = navHead.offsetTop;

const image = document.querySelector(".image");

function navScroll() {
   if(window.pageYOffset >= stick){
       navHead.classList.add('stick');
   }else{
       navHead.classList.remove('stick')
   }
}
function startScroll() {
    if(window.pageYOffset >= 3800){
        image.classList.add('fix')
    }else{
        image.classList.remove('fix')
    }
}
function endScroll() {
    if(window.pageYOffset >= 4150){
        image.classList.add('move')
    }else{
        image.classList.remove('move')
    }
}




//scroll video
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');

//animation

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 3000,
    tiggerElemnt: intro,
    triggerHook: 0
})

.setPin(intro)
.addTo(controller)

//play video

let scrollposition = 0;
let delay = 0;
scene.on('update', e => {
    scrollposition = e.scrollPos / 1000;

})

setInterval(() => {
    delay += (scrollposition - delay);
    video.currentTime = scrollposition;
},60)