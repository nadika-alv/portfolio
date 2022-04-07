
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const navLinks = document.querySelectorAll('.nav-link');
const theme_ = document.querySelector('.theme');
const dataTheme = document.querySelectorAll("[data-theme]");

const themeLight = document.querySelector('.theme-light');
const themeDark = document.querySelector('.theme-dark');
let theme;
let lang='en';

function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

function closeMenu() {
    burger.classList.remove('active');
    menu.classList.remove('active');
}

burger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));


const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioButtons = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtns.addEventListener('click', changeImage);
function changeImage(event) {
   
    if ((event.target.classList.contains('portfolio-btn'))&& event.target.dataset.season) {
        // здесь код функции, меняющей src изображений
        console.log(event.target);
        console.log(event.target.dataset.season);
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        // здесь писать название класса с точкой
        changeClassActive(event, '.portfolio-btn')
    } 
}
// const dataSeasons = document.querySelectorAll("[data-season]");
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
    for (let i = 0; i < seasons.length; i++) { 
        for(let j = 1; j <= 6; j++) {
            const img = new Image();
            img.src = `./assets/img/${seasons[i]}/${j}.jpg`;
        }
    }
}
preloadSummerImages();

// portfolioBtns.addEventListener('click', changeClassActive);
// // portfolioButtons.forEach((el) => el.addEventListener('click', changeClassActive));
// function changeClassActive(event) {
//     if ((event.target.classList.contains('portfolio-btn'))&& event.target.dataset.season) {
//         // здесь код функции, меняющей класс
//         console.log(event.target);
//         portfolioButtons.forEach((el) => el.classList.remove('active'));
//         event.target.classList.add('active');
//     }
// }


//  
// portfolioButtons.forEach((el) => el.onclick = event => changeClassActive(event, class_='.button'));

function changeClassActive(event, class_) {
 //         // здесь код функции, меняющей класс
    const nameClass = document.querySelectorAll(class_);
    nameClass.forEach((el) => el.classList.remove('active'));
    console.log(`remove class active for all elements ${nameClass}`);
    event.target.classList.add('active');
    console.log(`add class active ${event.target.className}`);   
}

// function themeToggle(event, theme) {
//     console.log(theme);
//     console.log(event.target);
    // (theme==='dark')?themeLightToggle():themeDarkToggle();
    // (theme==='light')?themeDarkToggle():themeLightToggle();
// }
// const theme_ = document.querySelector('.theme');
// const dataTheme = document.querySelectorAll("[data-theme]")
// const switchButton = document.querySelectorAll('.switch-button')
// switchButton.forEach((el) => el.onclick = event => getTranslated(event, lang));
// const switchButton = document.querySelectorAll('.switch-button')
// dataTheme.forEach((el) => el.onclick = event => themeToggled(event, theme));

// function themeToggled(event) {  
//     theme = event.target.dataset.theme;
//      console.log(theme);
//     if ((event.target.classList.contains('theme-dark')) && event.target.dataset.theme) {
//         console.log(event.target);
//         console.log(event.target.dataset.theme);
//         changeClassActive(event, 'theme-dark');
//         themeLightToggle()
        // const dataI18 = document.querySelectorAll("[data-i18]");
    // dataI18.forEach((el, index) => {
    //         let i18 = el.dataset.i18;
    //         console.log(el.dataset.i18);
    //         console.log(i18Obj[lang].hasOwnProperty(i18));
        
    //         if (i18Obj[lang].hasOwnProperty(i18) ) {
    //             el.textContent = i18Obj[lang][i18];
    //             if (el.placeholder) {
    //                 console.log('placeholder');
    //                 console.log(el.placeholder);
    //                  console.log(i18Obj[lang][i18]);
    //                 el.placeholder = i18Obj[lang][i18];
    //             }
    //         }
    //         else console.log('not equel');
    //     });
    // }
// }


        function themeLightToggle() {
            document.documentElement.style.setProperty('--light:', 'none');
            document.documentElement.style.setProperty('--dark:', 'flex');
            document.documentElement.style.setProperty('--back-color', '#fff');
            document.documentElement.style.setProperty('--title-color', '#000');
            document.documentElement.style.setProperty('--text-color', '#000');
            document.documentElement.style.setProperty('--text-color-active', '#fff');
            document.documentElement.style.setProperty('--color-cross', '#000');
            themeDark.classList.add('none');
            themeLight.classList.add('active');
            themeLight.classList.remove('none');
            themeDark.classList.remove('active');
            console.log('ligth');
            theme = 'ligth';
            }
        
            function themeDarkToggle() {
            document.documentElement.style.setProperty('--light:', 'flex');
            document.documentElement.style.setProperty('--dark:', 'none');
            document.documentElement.style.setProperty('--back-color', '#000');
            document.documentElement.style.setProperty('--title-color', '#bdae82');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--text-color-active', '#000');
            document.documentElement.style.setProperty('--color-cross', '#fff');
            themeLight.classList.add('none');
            themeDark.classList.add('active');
            themeDark.classList.remove('none');
            themeLight.classList.remove('active');
            console.log('dark');
            theme = 'dark';
                
            }


// themeLight.addEventListener('click', themeToggle);
// themeDark.addEventListener('click', themeToggle);

themeLight.addEventListener('click', themeDarkToggle);
themeDark.addEventListener('click', themeLightToggle);
// switchButton.forEach((el) => el.onclick = event => getTranslated(event, lang));
// theme_.forEach((el,index)=>el.onclick=event=>themeToggle(event, theme));

import i18Obj from './translate.js';


// const switchLang = document.querySelector('.switch')
// switchLang.addEventListener('click', getTranslated);


// portfolioButtons.forEach((el) => el.onclick = event => changeClassActive(event, class_='.button'));
const switchButton = document.querySelectorAll('.switch-button')
switchButton.forEach((el) => el.onclick = event => getTranslated(event, lang));

function getTranslated(event) {  
    lang = event.target.dataset.lang;
     console.log(lang);
    if ((event.target.classList.contains('switch-button')) && event.target.dataset.lang) {
        console.log(event.target);
        console.log(event.target.dataset.lang);
        changeClassActive(event, '.switch-button');
        getTranslate(lang);
        // const dataI18 = document.querySelectorAll("[data-i18]");
    // dataI18.forEach((el, index) => {
    //         let i18 = el.dataset.i18;
    //         console.log(el.dataset.i18);
    //         console.log(i18Obj[lang].hasOwnProperty(i18));
        
    //         if (i18Obj[lang].hasOwnProperty(i18) ) {
    //             el.textContent = i18Obj[lang][i18];
    //             if (el.placeholder) {
    //                 console.log('placeholder');
    //                 console.log(el.placeholder);
    //                  console.log(i18Obj[lang][i18]);
    //                 el.placeholder = i18Obj[lang][i18];
    //             }
    //         }
    //         else console.log('not equel');
    //     });
    }
}

function getTranslate(lang) {
    // console.log(event.target.dataset.lang);
    console.log(lang);
    const dataI18 = document.querySelectorAll("[data-i18]");
    dataI18.forEach((el, index) => {
            let i18 = el.dataset.i18;
            if (i18Obj[lang].hasOwnProperty(i18) ) {
               
                if (el.placeholder) {
                    console.log('placeholder');
                    console.log(el.placeholder);
                     console.log(i18Obj[lang][i18]);
                    el.placeholder = i18Obj[lang][i18];
                } else  el.textContent = i18Obj[lang][i18];
            }
            else console.log('not equel');
        });
    }

    getTranslate(lang);

    function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if(localStorage.getItem('lang')) {
//       const lang = localStorage.getItem('lang');
//     // getTranslated();
//     getTranslate(lang);
//     }
//   if(localStorage.getItem('theme')) {
//     const theme = localStorage.getItem('theme');
     
     
//       themeDarkToggle(theme);
//        themeLightToggle(theme);
      
//     }
    
// }
//     window.addEventListener('load', getLocalStorage);


//Плеер
const videoPlayer = document.getElementById('video-file');
const poster=document.querySelector('.poster')
//Время
let progressBar = document.getElementById('video-hud__progress-bar');
let currTime = document.getElementById('video-hud__curr-time');
let durationTime = document.getElementById('video-hud__duration');


let progressVolumeScale = document.getElementById('video-hud__volume');

//Кнопки
const playBtn =document.querySelector('.video-button')
const actionButton = document.getElementById('video-hud__action');
const muteButton = document.getElementById('video-hud__mute');
const volumeScale = document.getElementById('video-hud__volume');
const speedSelect = document.getElementById('video-hud__speed');
const fullscreenBtn = document.querySelector('.player__fullscreen');

// function progress() {
//     let val = progressBar.value;
//     let color = ''
//     progressBar.style.background = color;
// }


function progress2() {
    const val = this.value;
    //  `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${val}%, #c8c8c8 ${val}%, #c8c8c8 100%)`
}
// const progress = document.querySelector('.progress');
// progress.addEventListener('input', progress2);


const volume = document.querySelector('.volume'); 
volume.addEventListener('input', progress2);


function videoAct() { //Запускаем или ставим на паузу
if(videoPlayer.paused) {
videoPlayer.play();
    actionButton.setAttribute('class', 'video-hud__element video-hud__action video-hud__action_play');
    playBtn.classList.remove('active');
    poster.classList.remove('active');
    videoPlayer.volume = volumeScale.value / 100;
    // console.log(videoPlayer.volume);
    volumeScale.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${volumeScale.value}%, #c8c8c8 ${volumeScale.value}%, #c8c8c8 100%)`
   
} else {
videoPlayer.pause();
    actionButton.setAttribute('class', 'video-hud__element video-hud__action video-hud__action_pause')
    playBtn.classList.add('active');
    
}
if(durationTime.innerHTML == '00:00') {
durationTime.innerHTML = videoTime(videoPlayer.duration); //Об этой функции чуть ниже
}
}

//Запуск, пауза
playBtn.addEventListener('click',videoAct);
actionButton.addEventListener('click',videoAct);
videoPlayer.addEventListener('click', videoAct);



function videoTime(time) { //Рассчитываем время в секундах и минутах
time = Math.floor(time);
let minutes = Math.floor(time / 60);
let seconds = Math.floor(time - minutes * 60);
let minutesVal = minutes;
let secondsVal = seconds;
if(minutes < 10) {
minutesVal = '0' + minutes;
}
if(seconds < 10) {
secondsVal = '0' + seconds;
}
return minutesVal + ':' + secondsVal;
}

function videoProgress() { //Отображаем время воспроизведения
    let progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;  
    progressBar.value = progress;
    let val = progressBar.value;
   progressBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${val}%, #c8c8c8 ${val}%, #c8c8c8 100%)`;
    currTime.innerHTML = videoTime(videoPlayer.currentTime);
    // progress2();
}
function videoChangeTime(e) { //Перематываем
    let mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
    let progress = Math.floor(mouseX / (progressBar.offsetWidth/ 100));
    videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
    // this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${val}%, #c8c8c8 ${val}%, #c8c8c8 100%)`
}

//Отображение времени
videoPlayer.addEventListener('timeupdate',videoProgress);
//Перемотка
progressBar.addEventListener('click', videoChangeTime);



function videoChangeVolume() { //Меняем громкость
    let volume = volumeScale.value / 100;

videoPlayer.volume = volume;
if(videoPlayer.volume == 0) {
muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
} else {
muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
}
}
function videoMute() { //Убираем звук
if(videoPlayer.volume == 0) {
videoPlayer.volume = volumeScale.value / 100;
muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
} else {
videoPlayer.volume = 0;
muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
}
}
function videoChangeSpeed() { //Меняем скорость
var speed = speedSelect.value / 100;
videoPlayer.playbackRate = speed;
}

//Звук
muteButton.addEventListener('click',videoMute);
volumeScale.addEventListener('change',videoChangeVolume);
//Работа со скоростью
speedSelect.addEventListener('change', videoChangeSpeed);
 // Make fullscreen
  fullscreenBtn.addEventListener('click', () => {
    videoPlayer.requestFullscreen();
  })