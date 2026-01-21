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

// About image parallax
gsap.to('.parallax-img', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
    }
});
