// ==========================================
// CORE COMPETENCIES SECTION (Horizontal Scroll)
// ==========================================

const coreCompetenciesWrapper = document.querySelector('.core-competencies-wrapper');
const coreCompetenciesItems = document.querySelectorAll('.core-competencies-item');

if (coreCompetenciesWrapper && coreCompetenciesItems.length > 0) {
    // 120 여백 외에 추가적인 여유 스크롤 거리(버퍼)를 줘서 마지막 카드가 훌쩍 넘어가지 않게 방지합니다.
    const totalScroll = coreCompetenciesWrapper.scrollWidth - window.innerWidth + 120;
    const additionalBuffer = window.innerWidth * 0.4; // 화면 너비의 40% 정도 대기 시간 추가

    gsap.to(coreCompetenciesWrapper, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
            trigger: '.core-competencies-section',
            start: 'top top',
            end: () => `+=${totalScroll + additionalBuffer}`, // 스크롤(핀 고정) 길이를 늘림
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
    const additionalBuffer = window.innerWidth * 0.4; // 화면 너비의 40% 정도 대기 시간 추가

    gsap.to(skillsWrapper, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top top',
            end: () => `+=${totalScroll + additionalBuffer}`, // 스크롤(핀 고정) 길이를 늘림
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });
}
