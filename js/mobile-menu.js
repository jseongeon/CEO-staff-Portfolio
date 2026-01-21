// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
const body = document.body;

// 메뉴 토글
function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');

    // Lenis 스크롤 제어
    if (mobileMenu.classList.contains('active')) {
        lenis.stop();
    } else {
        lenis.start();
    }
}

// 햄버거 버튼 클릭
menuToggle.addEventListener('click', toggleMenu);

// 메뉴 링크 클릭 시 메뉴 닫기
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));

        // 메뉴 닫기
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
        lenis.start();

        // 부드러운 스크롤
        if (target) {
            setTimeout(() => {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }, 300);
        }
    });
});

// ESC 키로 메뉴 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// 리사이즈 시 메뉴 닫기 (데스크톱으로 전환 시)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
        lenis.start();
    }
});
