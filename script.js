/*var counterContainer = document.querySelector(".visits");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

counterContainer.innerHTML = visitCount;*/

function SRCASMviews(response) {
  document.querySelector('.visits').innerText = response.value;
}

function dropdown(){
    menuElement=document.getElementById('menu');
    navIcon=document.getElementById('nav-toggle');
    navIcon.classList.toggle('active');
    menuElement.classList.toggle('menu-active');
}


function buildSlides(n){
  tiles=document.querySelectorAll('.customSlides');
  slideContainer = document.getElementById('slider-container');
  slideContainer.style.gridTemplateColumns = "repeat("+n+",1fr)";
}

let width=window.innerWidth;
var tileCount=chooseNum(width);
function choose(width){
  if(width>=320 & width<=480){
    buildSlides(1);
  }
  else if (width>=481 & width<=768){
    buildSlides(2);

  }
  else if (width>=769 & width<=1024){
    buildSlides(3);
    
  }
  else if (width>=1025 & width<=1440){
    buildSlides(4);
    
  }
  else if (width>=1441){
    buildSlides(6);
    
  }
}

function chooseNum(width){
  if(width>=320 & width<=480){
    return 1;
  }
  else if (width>=481 & width<=768){
    return 2;

  }
  else if (width>=769 & width<=1024){
    return 3;
    
  }
  else if (width>=1025 & width<=1440){
    return 4;
    
  }
  else if (width>=1441){
    return 6;
    
  }
}


window.onload= choose(width);

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
  let slides = document.querySelectorAll(".customSlides");
  slideIndex+=tileCount;
  if (slideIndex > slides.length - 1) slideIndex = 0;
  showSlides(slideIndex);
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex-=tileCount;
  let slides = document.querySelectorAll(".customSlides");
  if (slideIndex < 0) slideIndex = slides.length - tileCount;
  showSlides(slideIndex);
  timer = _timer; // reset timer
}

function showSlides(slideIndex) {
  let slides = document.querySelectorAll(".customSlides");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  for(i=0;i<tileCount;i++){
    slides[slideIndex].style.display = "block";
    slideIndex++;
  }
 
}
// autoplay slides
let timer = 5; // sec
const _timer = timer;

setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer;
  }
}, 1000);

function asd(){
  q=document.getElementsByClassName('About-clg-txt-wrap');
  for(i=0;i<q.length;i++){
      
      q[i].classList.toggle('full-view');
  }
  w=document.getElementsByClassName("fas");
  for(i=0;i<w.length;i++){
      
      w[i].classList.toggle('rotate-arrow');
  }
}

// Advisory Committee logic

// (function () {
//   function Slideshow(element) {
//     this.el = document.querySelector(element);
//     this.init();
//   }

//   Slideshow.prototype = {
//     init: function () {
//       this.wrapper = this.el.querySelector(".slider-wrapper");
//       this.slides = this.el.querySelectorAll(".slide");
//       this.previous = this.el.querySelector(".slider-previous");
//       this.next = this.el.querySelector(".slider-next");
//       this.index = 0;
//       this.total = this.slides.length;
//       this.timer = null;

//       this.action();
//       this.stopStart();
//     },
//     _slideTo: function (slide) {
//       var currentSlide = this.slides[slide];
//       currentSlide.style.opacity = 1;

//       for (var i = 0; i < this.slides.length; i++) {
//         var slide = this.slides[i];
//         if (slide !== currentSlide) {
//           slide.style.opacity = 0;
//         }
//       }
//     },
//     action: function () {
//       var self = this;
//       self.timer = setInterval(function () {
//         self.index++;
//         if (self.index == self.slides.length) {
//           self.index = 0;
//         }
//         self._slideTo(self.index);
//       }, 5000);
//     },
//     stopStart: function () {
//       var self = this;
//       self.el.addEventListener(
//         "mouseover",
//         function () {
//           clearInterval(self.timer);
//           self.timer = null;
//         },
//         false
//       );
//       self.el.addEventListener(
//         "mouseout",
//         function () {
//           self.action();
//         },
//         false
//       );
//     },
//   };

//   document.addEventListener("DOMContentLoaded", function () {
//     var slider = new Slideshow("#main-slider");
//   });
// })();


function readMoreFunction(n) {

  let textContent = document.getElementsByClassName('para2');
  let readMore = document.getElementsByClassName('readMore');
  textContent[n].style.display="block";
  readMore[n].style.display='none';

}

document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > document.documentElement.offsetWidth) {
      console.log('Found the worst element ever: ', el);
  }
});
