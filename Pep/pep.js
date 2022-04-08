const crosz = document.querySelector(".fa.fa-times");
const containerS = document.getElementById("container1");
const containerI = document.getElementById("container2");
const containerD = document.getElementById("container3");
const containerW = document.getElementById("container4");
const containerP = document.getElementById("container5");
const hidemedia = document.getElementById("ulid");
const hidemedia1 = document.getElementById("ulid1");
const menuz = document.querySelector(".fa.fa-bars");

// alert("Working");


function opennav() {
  containerS.style.transform = 'translateY(0%)';
}
function opennavI() {
  containerI.style.transform = 'translateY(0%)';
}
function opennavD() {
  containerD.style.transform = 'translateY(0%)';
}
function opennavW() {
  containerW.style.transform = 'translateY(0%)';
}
function opennavP() {
  containerP.style.transform = 'translateY(0%)';
}
function closenav() {
  containerS.style.transform = 'translateY(-150%)';
  containerD.style.transform = 'translateY(-150%)';
  containerW.style.transform = 'translateY(-150%)';
  containerP.style.transform = 'translateY(-150%)';
  containerI.style.transform = 'translateY(-150%)';
}







function myFunction(x) {
    if (x.matches) {
      menuz.addEventListener('click', function () {
        if (hidemedia.style.display == "none" && hidemedia1.style.display == "none") {
          hidemedia.style.display = "block";
          hidemedia1.style.display = "block";
        }
        else {
          hidemedia.style.display = "none";
          hidemedia1.style.display = "none";
        }
      });
  
    }
  
  
    else {
      hidemedia.style.display = "flex";
      hidemedia1.style.display = "flex";
    }
  }
  var x = window.matchMedia("(max-width: 800px)");
  myFunction(x)
  x.addListener(myFunction)

  $('.carousel').carousel({
    pause: "hover"
})