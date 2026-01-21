// ==========================================
// CORE COMPETENCIES SECTION (Horizontal Scroll)
// ==========================================

const coreCompetenciesWrapper = document.querySelector('.core-competencies-wrapper');
const coreCompetenciesItems = document.querySelectorAll('.core-competencies-item');

if (coreCompetenciesWrapper && coreCompetenciesItems.length > 0) {
    const totalScroll = coreCompetenciesWrapper.scrollWidth - window.innerWidth + 120;

    gsap.to(coreCompetenciesWrapper, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
            trigger: '.core-competencies-section',
            start: 'top top',
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });
}

// ==========================================
// SKILLS SECTION (Horizontal Scroll)
// ==========================================

const skillsWrapper = document.querySelector('.skills-wrapper');
const skillsItems = document.querySelectorAll('.skills-item');

if (skillsWrapper && skillsItems.length > 0) {
    const totalScroll = skillsWrapper.scrollWidth - window.innerWidth + 120;

    gsap.to(skillsWrapper, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top top',
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });
}
