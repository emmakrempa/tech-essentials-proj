// JavaScript Document

$(function(){
    

let currentSlide = 0;

function nextSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalSlides = carouselItems.length;

    currentSlide = (currentSlide + 1) % totalSlides;

    const offset = -(currentSlide * 100) + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
}

	
});

	
	
	
