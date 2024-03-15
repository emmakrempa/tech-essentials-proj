// JavaScript Document

$(function(){

function initializeCarousel(buttonId, carouselSelector, itemClass) {
    document.getElementById(buttonId).addEventListener('click', function() {
        var carouselInner = document.querySelector(carouselSelector + ' .carousel-inner');
        var slideWidth = document.querySelector(carouselSelector + ' .' + itemClass).offsetWidth;

        // Move the carousel to the left by the width of one slide
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = 'translateX(-' + slideWidth + 'px)';

        // After the transition ends, move the first slide to the end
        carouselInner.addEventListener('transitionend', function transitionEndHandler() {
            carouselInner.removeEventListener('transitionend', transitionEndHandler); // Remove event listener to prevent multiple calls
            var firstSlide = carouselInner.children[0];
            carouselInner.appendChild(firstSlide);
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = 'translateX(0)';

            // Check if the last slide is now the first slide
            if (carouselInner.children[carouselInner.children.length - 1] === firstSlide) {
                // Reset the carousel position to the beginning after a brief delay to allow the first slide to be appended
                setTimeout(function() {
                    carouselInner.style.transition = 'none'; // Disable transition for instant reset
                    carouselInner.style.transform = 'translateX(0)';
                }, 100); // Adjust the delay as needed
            }
        });
    });
}
// Example usage for two carousels
initializeCarousel('nextButton1', '.row-two', 'carousel-item');
initializeCarousel('nextButton2', '.row-three', 'carousel-item2');
initializeCarousel('nextButton3', '.row-five', 'carousel-item');
initializeCarousel('nextButton4', '.row-six', 'carousel-item');
	
// Custom cursor
	$(document).ready(function(){
 var cursor = $('.cursor');

 $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
});
	
	
	
});
	
	
	
