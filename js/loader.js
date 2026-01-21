// ==========================================
// LOADER ANIMATION
// ==========================================

const loader = document.querySelector('.loader');
const loaderText = document.querySelectorAll('.loader-text span');
const loaderProgress = document.querySelector('.loader-progress-bar');

// Disable scroll during loading
lenis.stop();

const loaderTl = gsap.timeline();

loaderTl
    .to(loaderText, {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out'
    })
    .to(loaderProgress, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
    }, '-=0.5')
    .to(loaderText, {
        y: -100,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power4.in'
    })
    .to(loader, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut'
    }, '-=0.3')
    .call(() => {
        loader.style.display = 'none';
        lenis.start(); // Enable scroll after loading
        animateHero();
    });
