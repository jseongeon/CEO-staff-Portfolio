/* ==========================================
   Marquee Animation - 마퀴 애니메이션
   무한 루프를 위한 정확한 너비 계산
   하나의 세트를 자동으로 복제하여 무한 반복
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    
    // 원본 아이템들 가져오기
    const originalItems = Array.from(marquee.querySelectorAll('.marquee-item'));
    
    // 원본 아이템들을 복제하여 두 번째 세트 생성
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
    });
    
    // 모든 마퀴 아이템 가져오기 (원본 + 복제본)
    const allItems = marquee.querySelectorAll('.marquee-item');
    
    // 첫 번째 세트(원본)의 너비 계산
    let firstSetWidth = 0;
    const firstSetItems = Array.from(allItems).slice(0, originalItems.length);
    
    // 폰트 로드 대기 후 너비 계산
    function calculateWidth() {
        firstSetWidth = 0;
        firstSetItems.forEach(item => {
            firstSetWidth += item.offsetWidth;
        });
        
        // gap 계산 (첫 번째 세트의 gap 개수)
        const gapCount = firstSetItems.length - 1;
        const gapWidth = gapCount * 80; // gap: 80px
        
        // 총 너비 = 아이템 너비 + gap 너비
        const totalFirstSetWidth = firstSetWidth + gapWidth;
        
        // CSS 변수로 설정하여 정확히 첫 번째 세트만큼만 이동
        marquee.style.setProperty('--marquee-width', `-${totalFirstSetWidth}px`);
    }
    
    // 초기 계산
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(calculateWidth);
    } else {
        setTimeout(calculateWidth, 100);
    }
    
    // 리사이즈 시 다시 계산
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(calculateWidth, 100);
    });
});
