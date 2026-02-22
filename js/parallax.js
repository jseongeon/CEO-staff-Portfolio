// ==========================================
// PARALLAX EFFECTS (Lenis-based)
// ==========================================

// Hero video parallax
gsap.to('.hero-video-container', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
    }
});

// About image parallax (컨테이너 전체를 이동시켜 이미지 잘림 방지)
gsap.to('.about-image', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
    }
});
