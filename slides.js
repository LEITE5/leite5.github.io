function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    //index = index + isMobile ? 1 : 3;
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - (isMobile ? 1 : 3); // Adjusted to show three images at a time
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * (100 / (isMobile ? 1 : 3)) + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    isMobile = window.innerWidth <= 670;
    let nextSlideDistance = isMobile ? 1 : 3;
    if (currentSlide + nextSlideDistance < slides.length) {
        currentSlide += 1; // Move one slide at a time
    } else {
        currentSlide = 0; // Loop back to the beginning
    }
    showSlide(currentSlide);
}

function prevSlide() {
    if (currentSlide - 1 >= 0) {
        currentSlide -= 1; // Move one slide at a time
    } else {
        currentSlide = slides.length - 3; // Loop to the end
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);