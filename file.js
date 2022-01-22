
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".textanimation").style.color="white";
  document.querySelector(".textanimation").style.borderColor="white";
  document.querySelector(".textanimation").style.transform="translate(-50%, -50%) rotate(0deg) scale(1.2)";
  document.querySelector(".textanimation").style.transition="all 1.5s";
  document.querySelector(".textanimation").style.transitionDelay="0.8s";
});


window.addEventListener("load", function(){
  document.querySelector(".scrittaHome").style.transform="scale(1.1)";
  document.querySelector(".scrittaHome").style.transition="all 1s";
  document.querySelector(".scrittaHome").style.transitionDelay="2s";
});

document.querySelector(".textanimation").addEventListener("mouseover", function(){
  document.querySelector(".textanimation").style.color="black";
  document.querySelector(".textanimation").style.borderColor="black";
  document.querySelector(".textanimation").style.transition="0s";
  document.querySelector(".textanimation").style.transitionDelay="0s";
});

document.querySelector(".textanimation").addEventListener("mouseout", function(){
  document.querySelector(".textanimation").style.color="white";
  document.querySelector(".textanimation").style.borderColor="white";
});

document.querySelector(".scrittaHome").addEventListener("mouseover", function(){
  document.querySelector(".scrittaHome").style.color="red";
  document.querySelector(".scrittaHome").style.transition="0s";
  document.querySelector(".scrittaHome").style.transitionDelay="0s";
});

document.querySelector(".scrittaHome").addEventListener("mouseout", function(){
  document.querySelector(".scrittaHome").style.color="white";
});


document.querySelector('.video').playbackRate = 4;
// window.onload = function () {
//   document.querySelector(".fitness_h").style.transform="scale(1)";
//
// }
