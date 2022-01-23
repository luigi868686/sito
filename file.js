
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".textVideo").style.color="white";
  document.querySelector(".textVideo").style.borderColor="white";
  document.querySelector(".textVideo").style.transform="translate(-50%, -50%) rotate(0deg) scale(1.2)";
  document.querySelector(".textVideo").style.transition="all 1.5s";
  document.querySelector(".textVideo").style.transitionDelay="0.8s";
});


window.addEventListener("load", function(){
  document.querySelector(".scrittaHome").style.transform="scale(1.1)";
  document.querySelector(".scrittaHome").style.transition="all 1s";
  document.querySelector(".scrittaHome").style.transitionDelay="0.7s";
});

document.querySelector(".textVideo").addEventListener("mouseover", function(){
  document.querySelector(".textVideo").style.color="black";
  document.querySelector(".textVideo").style.borderColor="black";
  document.querySelector(".textVideo").style.transition="0s";
  document.querySelector(".textVideo").style.transitionDelay="0s";
});

document.querySelector(".textVideo").addEventListener("mouseout", function(){
  document.querySelector(".textVideo").style.color="white";
  document.querySelector(".textVideo").style.borderColor="white";
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


//
// const x = document.querySelectorAll(".giorno")
// for (const y of x) {
//   y.addEventListener('mouseover', function() {
//     y.style.color = "blue";
//   });
//   y.addEventListener('mouseout', function() {
//     y.style.color = "red";
//   });
// }
//
//

//
// const x = document.querySelectorAll(".articolo")
//   for (const y of x) {
//     y.addEventListener('mouseover', function() {
//
//       const r = document.querySelectorAll(".giorno")
//       for (const a of r) {
//           a.style.color = "blue";
//         };
//     })
//   };
