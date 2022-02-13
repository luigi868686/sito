// tiltEffectSettings = {
//  max:5,
//  perspective:"2000",
//  scale:1.02,
//  //speed=number defining the transition speed or actually the transition duration in milliseconds
//  speed:500,
//  //easing è una string che definisce la transition easing function: the timing function
// easing:"cubic-bezier(.03,.98,.52,.99)"
// }
//
//
// card = document.querySelectorAll(".card");
//
// for(i=0;i<card.length;i++) {
//
//   // function setTransition(){
//   // this.style.trnsition = "transform 300ms cubic-bezier(.03,.98,.52,.99)";
//   // };
//   //mouseenter
//   card[i].addEventListener("mouseenter", function(event){
//     clearTimeout(this.transitionTimeoutId);
//     this.style.transition = "transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}";
//     this.transitionTimeoutId= setTimeout(()=>{this.style.transition ="";},tiltEffectSettings.speed);
//   });
//   //mousemove
//   card[i].addEventListener("mousemove", function(event){
//     cardWidth = this.offsetWidth;
//     cardHeight = this.offsetHeight;
//     cardCenterX = this.getBoundingClientRect().x+ cardWidth/2;
//     cardCenterY = this.getBoundingClientRect().y + cardHeight/2;
//     mouseX = event.clientX - cardCenterX;
//     mouseY = event.clientY - cardCenterY;
//     rotationX = (1*tiltEffectSettings.max*mouseY/(cardHeight/2)).toFixed(2);
//     rotationY = (-1*tiltEffectSettings.max*mouseX/(cardWidth/2)).toFixed(2);
//     // this.style.transform = "perspective(1000px) rotateX("+rotationX+"deg) rotateY("+rotationY+"deg) scale3d(1.3,1.3,1.3)";
//     this.style.transform = "perspective("+tiltEffectSettings.perspective+"px) rotateX("+rotationX+"deg) rotateY("+rotationY+"deg) scale3d("+tiltEffectSettings.scale+","+tiltEffectSettings.scale+","+tiltEffectSettings.scale+")";
//   })
//   //mouseleave
//   card[i].addEventListener("mouseleave", function(event){
//     this.style.transform = "perspective("+tiltEffectSettings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
//
//     clearTimeout(this.transitionTimeoutId);
//     this.style.transition = "transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}";
//     this.transitionTimeoutId= setTimeout(()=>{this.style.transition ="";},tiltEffectSettings.speed);
//   })
// };
