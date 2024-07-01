let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
if(slides && dots && slideIndex && slides[slideIndex - 1]){

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
}


function plusSlides(n) {
  showSlides((slideIndex += n));
}


function currentSlide(n) {
  showSlides((slideIndex = n));
}


showSlides(slideIndex);


let display = false;

const displayNav = () => {
console.log('haj')
  if (!display) {
    document.querySelector('.navbar__menu').style.display = 'flex';
    display = true;
  } else {
    document.querySelector('.navbar__menu').style.display = 'none';
    display = false;
  }
};