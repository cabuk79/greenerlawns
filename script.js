const menuHamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.nav-menu');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


const menu_links = Array.from(document.querySelectorAll('.nav-menu a'));

menu_links.forEach(link => {
  link.addEventListener('click', function () {
      menuHamburger.classList.remove('active');
      navMenu.classList.remove('active');
  });
})




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
} 

