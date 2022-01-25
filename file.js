
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

zz=document.querySelector(".articoloContenitoreInterno")
document.querySelector(".articoloContenitoreInterno").addEventListener("scroll",function(){
  if (zz.scrollTop()<200) {
    console.log("ciao")
  }
})

// (interessante)
dd = document.querySelectorAll(".articolo");

window.addEventListener("scroll", rivela)

function rivela () {




  // if (oggettodd > 0  &&  (altezzaviewport - oggettodd) > 200 && window.innerWidth < 420){
    // dd.style.color = "purple";
    // document.querySelector("#logo").style.color = "purple";

    iterationElement = document.querySelectorAll(".articolo");

    for (var i=0; i<iterationElement.length; i++) {
      oggettodd = dd[i].getBoundingClientRect().y;
      altezzaviewport = window.innerHeight;
      altezzaOggetto =dd[i].getBoundingClientRect().height;


      if ((altezzaviewport - oggettodd) > 360 && (altezzaviewport - oggettodd) < 600 && window.innerWidth < 420) {

        document.querySelectorAll(".articleImg")[i].style.transform = "scale(1.2)";
        document.querySelectorAll(".articleImg")[i].style.transition = "1s ease-in-out";
        document.querySelectorAll(".articolo")[i].style.transform = "scale(1.02)";
        document.querySelectorAll(".articolo")[i].style.transition = "transform 0.5s ease-in-out";
        document.querySelectorAll(".articoloContenitoreInterno")[i].style.boxShadow = "5px 5px 10px 2px #333333";

        str = document.querySelectorAll('.guardami')[i];
        eii = window.getComputedStyle(str, '::after');
        str.style.setProperty("--afterBack","kar 1.1s ease-in-out infinite");
        document.querySelectorAll(".guardami")[i].style.setProperty("--variabile","ioo 4s ease-in-out infinite");
        document.querySelectorAll(".mese")[i].style.color = "red";

      }
      else if (((altezzaviewport - oggettodd) <= 360 | (altezzaviewport - oggettodd) >= 600)  && window.innerWidth < 420) {
           document.querySelectorAll(".articleImg")[i].style.transform = "scale(1)";
           document.querySelectorAll(".articleImg")[i].style.transition = "1s ease-in-out";
           document.querySelectorAll(".articolo")[i].style.transform = "scale(1)";
           document.querySelectorAll(".articolo")[i].style.transition = "transform 0.5s ease-in-out";
           document.querySelectorAll(".articoloContenitoreInterno")[i].style.boxShadow = "none";


           // str = document.querySelectorAll('.guardami')[i];
           // eii = window.getComputedStyle(str, '::after');
           // str.style.setProperty("--afterBack","kar 1.1s ease-in-out infinite");
           // document.querySelectorAll(".guardami")[i].style.setProperty("--variabile","ioo 4s ease-in-out infinite");
           // document.querySelectorAll(".mese")[i].style.color = "red";      }
      }





    }
  }

    //   else if ((altezzaviewport - oggettodd) < 300  && window.innerWidth < 420) {
    //      document.querySelectorAll(".articleImg")[i].style.transform = "scale(1)";
    //      document.querySelectorAll(".articleImg")[i].style.transition = "1s ease-in-out";
    //      document.querySelectorAll(".articolo")[i].style.transform = "scale(1)";
    //      document.querySelectorAll(".articolo")[i].style.transition = "transform 0.5s ease-in-out";
    //      // str = document.querySelectorAll('.guardami')[i];
    //      // eii = window.getComputedStyle(str, '::after');
    //      // str.style.setProperty("--afterBack","kar 1.1s ease-in-out infinite");
    //      // document.querySelectorAll(".guardami")[i].style.setProperty("--variabile","ioo 4s ease-in-out infinite");
    //      // document.querySelectorAll(".mese")[i].style.color = "red";      }
    // }
  // }


 //  altezzaviewport = window.innerHeight;
 //
 // console.log("altezza viewport: "+ altezzaviewport)
 //
 //
 //  oggetto= dd[3].getBoundingClientRect();
 //  console.log(oggetto);
 //  topp = oggetto.top;
 //  console.log("top: " + topp);
 //  y = oggetto.y;
 //  console.log("y: "+y);
 //
 //  altezzaelemento =oggetto.height;
 //  console.log("altezza elemento " +altezzaelemento);
 //
 //  c = altezzaviewport -  topp;
 //  console.log("viewport - top: " + c);
