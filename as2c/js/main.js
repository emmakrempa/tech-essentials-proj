// Profile background image upload //

document.addEventListener('DOMContentLoaded', function() {
    const chooseBackgroundBtn = document.querySelector('.choose-background-btn');
    const backgroundImageUpload = document.querySelector('#background-image-upload');
    const profilePage = document.querySelector('body');

    chooseBackgroundBtn.addEventListener('click', function() {
        backgroundImageUpload.click();
    });

    backgroundImageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                profilePage.style.backgroundImage = `url('${reader.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });
});


// Choose Profile Pic or Avatar //
document.addEventListener('DOMContentLoaded', function() {
    const chooseProfilePicLabel = document.querySelector('.choose-avatar-btn'); 
    const avatarModal = document.querySelector('.avatar-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const profilePicture = document.querySelector('#profile-image');
    
    chooseProfilePicLabel.addEventListener('click', function() { 
        avatarModal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        avatarModal.style.display = 'none';
    });

    avatarOptions.forEach(function(avatar) {
        avatar.addEventListener('click', function() {
            profilePicture.src = this.src;
            avatarModal.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const chooseProfilePicLabel = document.querySelector('.choose-profile-pic');
    const profilePicUploadInput = document.querySelector('#profile-pic-upload');
    const profilePicture = document.querySelector('#profile-image');

    chooseProfilePicLabel.addEventListener('click', function() {
        profilePicUploadInput.click();
    });

    profilePicUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                profilePicture.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const chooseProfilePicLabel = document.querySelector('.choose-profile-pic');
    const profilePicUploadInput = document.querySelector('#profile-pic-upload');
    const profilePicture = document.querySelector('#profile-picture');

    chooseProfilePicLabel.addEventListener('click', function() {
        profilePicUploadInput.click();
    });

    profilePicUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                profilePicture.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const chooseProfilePicLabel = document.querySelector('.choose-avatar-btn'); // Updated selector
    const avatarModal = document.querySelector('.avatar-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const profilePicture = document.querySelector('#profile-picture');
    
    chooseProfilePicLabel.addEventListener('click', function() { // Updated event listener
        avatarModal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        avatarModal.style.display = 'none';
    });

    avatarOptions.forEach(function(avatar) {
        avatar.addEventListener('click', function() {
            profilePicture.src = this.src;
            avatarModal.style.display = 'none';
        });
    });
});


// Account Registration //

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
	const btnPopup2 = document.querySelector('.btnLogin-popup-2'); 
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });
	
	btnPopup2.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active');
    });
});

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
initializeCarousel('nextButton14', '.row-three-4', 'carousel-item');
initializeCarousel('nextButton15', '.row-three', 'carousel-item');
initializeCarousel('nextButton16', '.row-four', 'carousel-item');
initializeCarousel('nextButton17', '.row-two', 'carousel-item');	
initializeCarousel('nextButton18', '.row-three', 'carousel-item');	
initializeCarousel('nextButton19', '.row-four', 'carousel-item');
initializeCarousel('nextButton20', '.row-four', 'carousel-item2');
	
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
	


// Fire Transformation - Coming Soon
	
function playImageTransition() {
    var images = document.querySelectorAll('#image-container img');
    var currentImageIndex = 0;
    var interval = setInterval(function() {
        images[currentImageIndex].classList.add('fade-out');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.remove('fade-out');
        images[currentImageIndex].style.opacity = 1; 
        if (currentImageIndex === images.length - 1) {
            clearInterval(interval);
        }
    }, 300);
}

playImageTransition();
	
// Hamburger Menu //
	
	$("#menu").hide();
	$("#burger").click(function() {
		$("#menu").slideToggle("fast");
	});
	
	$(document).click(function() {
		$("#menu").slideUp("fast");
		
	});
	
	$("#burger").click(function(e) {
		e.stopPropagation();
		return false;
	});
	
// Community popup
	
$(document).ready(function(){
$("#popup").hide()});

$(".readbutton").on('click', function() {
$("#popup").show()
});

$("#closepopup").on('click', function() {
$("#popup").hide()
});
  
	//
//$("#closepopup").on('click', function(){
 // $("#popup").hide()
});//
  




	
	
	
