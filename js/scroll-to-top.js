// ==========================================
// SCROLL TO TOP BUTTON FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (!scrollToTopBtn) return;

    // 스크롤 위치에 따라 버튼 표시/숨김
    function toggleScrollButton() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    // 최상단으로 부드럽게 스크롤
    function scrollToTop() {
        // Lenis가 있으면 Lenis 사용, 없으면 기본 스크롤
        if (window.lenis) {
            window.lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // 초기 상태 확인
    toggleScrollButton();

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', toggleScrollButton, { passive: true });

    // 버튼 클릭 이벤트
    scrollToTopBtn.addEventListener('click', scrollToTop);
});
