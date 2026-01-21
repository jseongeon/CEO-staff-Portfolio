// ==========================================
// HERO ANIMATION
// ==========================================

function animateHero() {
    const heroLines = document.querySelectorAll('.hero-title .line span');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    gsap.to(heroLines, {
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
    });

    gsap.to(heroSubtitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
    });

    gsap.to(scrollIndicator, {
        opacity: 1,
        duration: 1,
        delay: 1.2
    });
}
