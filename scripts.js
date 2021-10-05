// navbar
function showMenu() {
    let nav = document.getElementsByTagName('nav');
    nav[0].classList.remove('hidden');
  }
  function hideMenu() {
    let nav = document.getElementsByTagName('nav');
    nav[0].classList.add('hidden');
}
// signin form
function showForm() {
  let form = document.getElementsByClassName('signin-form-container');
  form[0].classList.add('show');
}
function hideForm() {
  let form = document.getElementsByClassName('signin-form-container');
  form[0].classList.remove('show');
}
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  if(document.URL.includes('index')) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " slide-active";
  }
}
// loading animation
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}