window.addEventListener("load", function(){
  // document.querySelector(".scrittaHome").style.transform="scale(1.1)";
  // document.querySelector(".scrittaHome").style.transition="all 1s";
  // document.querySelector(".scrittaHome").style.transitionDelay="0.7s";
  document.querySelector(".goUp").style.display = "none";
});

//   document.querySelector(".scrittaHome").addEventListener("mouseover", function(){
//   document.querySelector(".scrittaHome").style.color="red";
//   document.querySelector(".scrittaHome").style.transition="0s";
//   document.querySelector(".scrittaHome").style.transitionDelay="0s";
// });

//   document.querySelector(".scrittaHome").addEventListener("mouseout", function(){
//   document.querySelector(".scrittaHome").style.color="white";
// });

dd = document.querySelectorAll(".articolo");



window.addEventListener("DOMContentLoaded",function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="none"
  }

  else if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
    document.getElementById("menu").style.display="none";

  }

})

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="none"
    document.getElementById("menu").style.display="";
  }

  if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
    document.getElementById("menu").style.display="none";
  }

  if (document.querySelector(".openMenu").style.display==""){
    return  open = false;
  }
})

document.querySelector(".openMenu").addEventListener("click",open);
var open = false;
function open () {
  if (open == false) {
    document.getElementById("menu").style.display="";
    document.querySelector(".close").style.display=""
    document.querySelector(".openMenu").style.display="none"
    open = true;
  }
};

document.querySelector(".close").addEventListener("click",close);
function close () {
  if (open == true) {
    document.getElementById("menu").style.display="none";
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
  open = false
  }
};




window.addEventListener("scroll",function() {
  y=window.scrollY
  innerH = window.innerHeight;
  if (y<=innerH-240) {
    document.querySelector(".goUp").style.display = "none";
  }
  if (y>innerH-240){
    document.querySelector(".goUp").style.display = "";
  }
});

document.querySelector(".goUp").addEventListener("click", function() {
  window.scrollTo(0, 0)
});


for (i=0; i<document.querySelectorAll(".hidden").length;i++) {
  document.querySelectorAll(".hidden")[i].addEventListener("click",function(){
      this.classList.toggle("active");
  });
}



// document.querySelector(".contattami").addEventListener("submit", submitForm);
//
// function submitForm(event) {
//   event.preventDefault();
//   console.log(123)
//   let email = document.querySelector(".emeailUser").value;
// }
//
//
//
// function sendEmail() {
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "luigi.argens@gmail.com",
//     Password : "password",
//     To : 'luigi.argens@gmail.com',
//     From : document.querySelector(".emailUser").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }
