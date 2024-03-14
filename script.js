function toggleDropdown() {
  //target links class and children
  const dropdown = document.querySelector(".dropdown-links");
  const icon = document.querySelector(".dropdown-icon");
  dropdown.classList.toggle("open");
  icon.classList.toggle("open");
}

//Slide Show Function
//Function Sourced from https://w3schools.com/
//commented to show understanding.
let slideIndex = 1;
showSlides(slideIndex);

//function to iterate slides 'n+1'
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//function to track current slide 'n'
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //wrap to first if n+1 = more than total
  if (n > slides.length) {
    slideIndex = 1;
  }
  //if <1 reset
  if (n < 1) {
    slideIndex = slides.length;
  }
  //iteration for loops
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
