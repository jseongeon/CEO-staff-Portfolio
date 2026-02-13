// ==========================================
// ABOUT IMAGE CAROUSEL (Auto-rotate + Hover pause)
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.about-carousel-img');
    const aboutImage = document.getElementById('aboutImageTrigger');

    if (images.length === 0) return;

    let currentIndex = 0;
    let intervalId = null;

    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    function startCarousel() {
        if (intervalId) return;
        intervalId = setInterval(nextImage, 4000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
        intervalId = null;
    }

    // 시작
    startCarousel();

    // 호버 시 일시정지
    if (aboutImage) {
        aboutImage.addEventListener('mouseenter', stopCarousel);
        aboutImage.addEventListener('mouseleave', startCarousel);
    }
});