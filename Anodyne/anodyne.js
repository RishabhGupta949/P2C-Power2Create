const crosz = document.querySelector(".fa.fa-times");
const containerS = document.getElementById("container1");
const containerI = document.getElementById("container2");
const containerD = document.getElementById("container3");
const containerW = document.getElementById("container4");
const containerP = document.getElementById("container5");
const industries = document.getElementById("#indus");
// const particles = document.getElementById("particles-js");


function opennav(){
    containerS.style.transform= 'translateY(0%)'; 
}
function opennavI(){
containerI.style.transform= 'translateY(0%)';
}
function opennavD(){
    containerD.style.transform= 'translateY(0%)';
}
function opennavW(){
    containerW.style.transform= 'translateY(0%)';
}
function opennavP(){
    containerP.style.transform= 'translateY(0%)';
}
function closenav(){
  containerS.style.transform= 'translateY(-100%)';
  containerD.style.transform= 'translateY(-100%)';
  containerW.style.transform= 'translateY(-100%)';
  containerP.style.transform= 'translateY(-100%)';
  containerI.style.transform= 'translateY(-100%)';
}

// Appear View of Services
// const appear = document.querySelector('ul.appear'); 
// const callback = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('inview');
//     }else{
//       entry.target.classList.remove('inview');
//     }
//   });
// }
// const io = new IntersectionObserver(callback);
// io.observe(appear);

// const appear1 = document.querySelector('.About-box.appear'); 
// const callback1 = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('inview');
//     }else{
//       entry.target.classList.remove('inview');
//     }
//   });
// }
// const ia = new IntersectionObserver(callback1);
// ia.observe(appear1);

// const appear2 = document.querySelector('.service1.appear'); 
// const callback2 = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('inview');
//     }else{
//       entry.target.classList.remove('inview');
//     }
//   });
// }
// const ib = new IntersectionObserver(callback2);
// ib.observe(appear2);

// const appear3 = document.querySelector('.service2.appear'); 
// const callback3 = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('inview');
//     }else{
//       entry.target.classList.remove('inview');
//     }
//   });
// }
// const ic = new IntersectionObserver(callback3);
// ib.observe(appear3);

const btn1  = document.getElementById(btn1);
const p1 = document.getElementById(col1);

btn1.addEventListener('click', ()=>{
    alert("Clicked");
// if(p1.style.display === `none`){
//     p1.style.display = "block";
// }
// else{
//     p1.style.display = "none";
// }
});



$('.carousel').carousel({
  pause: "hover"
})