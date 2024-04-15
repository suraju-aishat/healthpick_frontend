let currentSlide = 0;
const slides =
document.querySelectorAll('.slideshow .images img');

function showSlide(){
  slides.forEach(slide =>{
    slide.style.display = 'none';
  });
  slides[currentSlide].style.display = 'block';
  currentSlide = (currentSlide + 1) % slides.length;
  setTimeout(showSlide, 2000); // Change image every 2seconds
}
showSlide()