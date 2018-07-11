var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");

  // put counter back to first slide if past count of slides
  if (n > slides.length) {slideIndex = 1}
  // move counter to last slide if less than 1(first slide)
  if (n < 1) {slideIndex = slides.length}
  // set display to "none" for all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Remove active status for all "dots"
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Set active slide/dot using current slide count
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(plusSlides, 5000, slideIndex);
