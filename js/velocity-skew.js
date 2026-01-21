// ==========================================
// VELOCITY-BASED SKEW ON SCROLL
// ==========================================

let currentVelocity = 0;
const skewElements = document.querySelectorAll('.project-image, .core-competencies-item img, .skills-item img');

lenis.on('scroll', ({ velocity }) => {
    currentVelocity = velocity;

    const skewAmount = Math.min(Math.max(velocity * 0.05, -5), 5);

    skewElements.forEach(el => {
        gsap.to(el, {
            skewY: skewAmount,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Reset skew when scroll stops
let scrollTimeout;
lenis.on('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        skewElements.forEach(el => {
            gsap.to(el, {
                skewY: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    }, 150);
});
