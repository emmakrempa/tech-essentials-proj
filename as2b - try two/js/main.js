// JavaScript Document

$(function(){

function initializeCarousel(buttonId, carouselSelector, itemClass) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            var carouselInner = document.querySelector(carouselSelector + ' .carousel-inner');
            var slideWidth = document.querySelector(carouselSelector + ' .' + itemClass).offsetWidth;

            carouselInner.style.transition = 'transform 0.5s ease';
            carouselInner.style.transform = 'translateX(-' + slideWidth + 'px)';

            carouselInner.addEventListener('transitionend', function transitionEndHandler() {
                carouselInner.removeEventListener('transitionend', transitionEndHandler);
                var firstSlide = carouselInner.children[0];
                carouselInner.appendChild(firstSlide);
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = 'translateX(0)';

                if (carouselInner.children[carouselInner.children.length - 1] === firstSlide) {
                    setTimeout(function() {
                        carouselInner.style.transition = 'none';
                        carouselInner.style.transform = 'translateX(0)';
                    }, 100);
                }
            });
        });
    }
}

initializeCarousel('nextButton1', '.row-two', 'carousel-item');
initializeCarousel('nextButton2', '.row-three', 'carousel-item2');
initializeCarousel('nextButton3', '.row-five', 'carousel-item');
initializeCarousel('nextButton4', '.row-six', 'carousel-item');
initializeCarousel('nextButton5', '.row-two-2', 'carousel-item');
initializeCarousel('nextButton6', '.row-three-2', 'carousel-item2-black');
initializeCarousel('nextButton7', '.row-four-3', 'carousel-item');
initializeCarousel('nextButton8', '.row-four-3', 'carousel-item');
initializeCarousel('nextButton9', '.row-four-3', 'carousel-item');
initializeCarousel('nextButton10', '.row-four-3', 'carousel-item');
initializeCarousel('nextButton11', '.row-four-3', 'carousel-item');
initializeCarousel('nextButton12', '.row-four-3', 'carousel-item');

});

	
	
	
