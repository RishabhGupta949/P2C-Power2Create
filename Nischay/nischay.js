const crosz = document.querySelector(".fa.fa-times");
const containerS = document.getElementById("container1");
const containerI = document.getElementById("container2");
const containerD = document.getElementById("container3");
const containerW = document.getElementById("container4");
const containerP = document.getElementById("container5");
const hidemedia = document.getElementById("ulid");
const hidemedia1 = document.getElementById("ulid1");
const menuz = document.querySelector(".fa.fa-bars");
const h1tage = document.querySelector(".nischay_text");
const navsticky = document.querySelector(".nav-links");

const menuopenid = document.getElementById("menuopenid");
const menuclose = document.getElementById("menucloseid");
// alert("Working");


function opennav() {
  containerS.style.transform = 'translateY(0%)';
  navsticky.style.position = "static";
}
function opennavI() {
  containerI.style.transform = 'translateY(0%)';
  navsticky.style.position = "static";
}
function opennavD() {
  containerD.style.transform = 'translateY(0%)';
  navsticky.style.position = "static";
}
function opennavW() {
  containerW.style.transform = 'translateY(0%)';
  navsticky.style.position = "static";
}
function opennavP() {
  containerP.style.transform = 'translateY(0%)';
  navsticky.style.position = "static";
}
function closenav() {
  containerS.style.transform = 'translateY(-150%)';
  containerD.style.transform = 'translateY(-150%)';
  containerW.style.transform = 'translateY(-150%)';
  containerP.style.transform = 'translateY(-150%)';
  containerI.style.transform = 'translateY(-150%)';
  navsticky.style.position = "fixed";
}







function myFunction(x) {
    if (x.matches) {
      menuz.addEventListener('click', function () {
        if (hidemedia.style.display == "none" && hidemedia1.style.display == "none") {
          hidemedia.style.display = "block";
          hidemedia1.style.display = "block";
          h1tage.style.zIndex = "-1";
          menuopenid.style.display = "none";
          menuclose.style.display = "block";
          menuclose.style.color = "#EB6B57";
        }
        else {
          hidemedia.style.display = "none";
          hidemedia1.style.display = "none";
          h1tage.style.zIndex = "000";
        }
      });

      menuclose.addEventListener('click', function(){
        if (hidemedia.style.display == "block" && hidemedia1.style.display == "block") {
            hidemedia.style.display = "none";
            hidemedia1.style.display = "none";
            h1tage.style.zIndex = "000";
            menuopenid.style.display = "block";
            menuclose.style.display = "none";
        }
        else {
            hidemedia.style.display = "block";
            hidemedia1.style.display = "block";
            h1tage.style.zIndex = "-1";
        }
    });
    }
  
    else {
      hidemedia.style.display = "flex";
      hidemedia1.style.display = "flex";
      menuclose.style.display = "none";
    }
  }
  var x = window.matchMedia("(max-width: 800px)");
  myFunction(x)
  x.addListener(myFunction)



  $(document).ready(function(){
    $('#carousel-one, #carousel-two').carousel();
  })