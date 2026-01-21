// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el, i) => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: i * 0.02,
                ease: 'power4.out'
            });
        },
        once: true
    });
});
