const solution = document.getElementById("#sol");

const crosz = document.querySelector(".fa.fa-times");
const containerS = document.getElementById("container1");
const containerI = document.getElementById("container2");
const containerD = document.getElementById("container3");
const containerW = document.getElementById("container4");
const containerP = document.getElementById("container5");
const industries = document.getElementById("#indus");
const particles = document.getElementById("particles-js");
const hidemedia = document.getElementById("ulid");
const hidemedia1 = document.getElementById("ulid1");
const menuz = document.querySelector(".fa.fa-bars");
const inner = document.querySelector(".inner");
const slider = document.querySelector(".slider");

const first = document.querySelector('.fas.fa-angle-left');
const second = document.querySelector('.fas.fa-angle-right');

// alert("Working");


function opennav() {
  containerS.style.transform = 'translateY(0%)';
  if (particles.style.zIndex = '000') {
    particles.style.zIndex = '-333';
    hidemedia1.style.display = "none";
  }
  else {
    particles.style.zIndex = '-333';
  }
}
function opennavI() {
  containerI.style.transform = 'translateY(0%)';
  if (particles.style.zIndex = '000') {
    particles.style.zIndex = '-333';
    hidemedia1.style.display = "none";
  }
  else {
    particles.style.zIndex = '-333';
  }
}
function opennavD() {
  containerD.style.transform = 'translateY(0%)';
  if (particles.style.zIndex = '000') {
    particles.style.zIndex = '-333';
    hidemedia1.style.display = "none";
  }
  else {
    particles.style.zIndex = '-333';
  }
}
function opennavW() {
  containerW.style.transform = 'translateY(0%)';
  if (particles.style.zIndex = '000') {
    particles.style.zIndex = '-333';
    hidemedia1.style.display = "none";
  }
  else {
    particles.style.zIndex = '-333';
  }
}
function opennavP() {
  containerP.style.transform = 'translateY(0%)';
  if (particles.style.zIndex = '000') {
    particles.style.zIndex = '-333';
    hidemedia1.style.display = "none";
  }
  else {
    particles.style.zIndex = '-333';
  }
}
function closenav() {
  containerS.style.transform = 'translateY(-150%)';
  containerD.style.transform = 'translateY(-150%)';
  containerW.style.transform = 'translateY(-150%)';
  containerP.style.transform = 'translateY(-150%)';
  containerI.style.transform = 'translateY(-150%)';
  if (particles.style.zIndex = '-333') {
    particles.style.zIndex = '000';
    hidemedia1.style.display = "flex";
  }
  else {
    particles.style.zIndex = '000';
  }
}





const appear = document.querySelector('.appear');
const callback = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(callback);
io.observe(appear);


first.addEventListener('click', function () {
  //    alert("working");
  inner.style.transform = 'translateX(0%)';
});

second.addEventListener('click', function () {
  //    alert("working");
  inner.style.transform = 'translateX(-100%)';
});



function myFunction(x) {
  if (x.matches) {
    {
      var sectionIndex = 0;
      first.addEventListener('click', function () {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        inner.style.transform = 'translate(' + (sectionIndex) * -100.5 + '%)';
      });

      second.addEventListener('click', function () {
        sectionIndex = (sectionIndex < 6) ? sectionIndex + 1 : 6;
        inner.style.transform = 'translate(' + (sectionIndex) * -100.5 + '%)';
      });
    }

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


// 800-PX-Query-JS
// const inner = document.querySelector(".inner");

// const first = document.querySelector('.fas.fa-angle-left');
// const second = document.querySelector('.fas.fa-angle-right');


// ----------Slider----------------
// const slider = document.querySelector('.slider');

// const leftarr = document.querySelector('.leftside');
// const rightarr = document.querySelector('.rightside');


// var sectionIndex = 0;
// leftarr.addEventListener('click', function(){
//     sectionIndex = (sectionIndex > 0) ? sectionIndex - 1: 0;
//     // alert("Working!");
//     slider.style.transform = 'translate(' + (sectionIndex)* -33  +  '%)' ;
// });

// rightarr.addEventListener('click', function(){
//     sectionIndex = (sectionIndex < 13) ? sectionIndex + 1: 13;
//     // var checkup = "working!";
//     // console.log(checkup);
//     slider.style.transform = 'translate(' + (sectionIndex)* -33  +  '%)' ;
// });





// second.addEventListener('click' , function(){
//    alert("working");
//    slider.style.transform = 'transalteX(-100%)';
// });


// Core-Capabilities
// Fade On scrolling


//Video-Button
const videop2c = document.querySelector(".img-hover");
const container = document.querySelector(".container-video");

videop2c.addEventListener('click', function () {

  if (container.style.opacity == '0') {
    container.style.opacity = '1';
    container.style.zIndex = '555';
    videop2c.style.zIndex = '555';
    videop2c.style.left = '2vw';
  }
  else {
    container.style.opacity = '0';
    container.style.zIndex = '-999';
    videop2c.style.left = '45vw';
    videop2c.style.zIndex = '000';
  }
});