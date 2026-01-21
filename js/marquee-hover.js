/* ==========================================
   Marquee Hover Effect - 마퀴 호버 효과
   각 항목에 마우스를 올리면 해당 항목만 한글로 변경
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    
    const marqueeItems = document.querySelectorAll('.marquee-item[data-korean]');
    
    // 각 아이템의 초기 너비를 저장하여 레이아웃 변경 방지
    marqueeItems.forEach(item => {
        // 각 요소의 원본 텍스트를 저장 (초기 텍스트)
        const originalText = item.textContent.trim();
        const koreanText = item.getAttribute('data-korean');
        
        // 초기 너비 저장 (더 큰 값으로 설정하여 레이아웃 변경 최소화)
        const initialWidth = item.offsetWidth;
        item.style.minWidth = initialWidth + 'px';
        
        // 호버 시 해당 요소만 한글로 변경
        item.addEventListener('mouseenter', function(e) {
            // 이벤트가 발생한 요소(this)만 변경
            if (this.textContent.trim() === originalText) {
                // 너비 변경 최소화를 위해 min-width 유지
                this.textContent = koreanText;
                // 한글이 더 짧을 수 있으므로 최소 너비 보장
                const currentWidth = this.offsetWidth;
                if (currentWidth < initialWidth) {
                    this.style.minWidth = initialWidth + 'px';
                }
            }
        });
        
        // 호버 해제 시 해당 요소만 원래 텍스트로 복원
        item.addEventListener('mouseleave', function(e) {
            // 이벤트가 발생한 요소(this)만 복원
            if (this.textContent.trim() === koreanText) {
                this.textContent = originalText;
                // 원래 너비로 복원
                this.style.minWidth = initialWidth + 'px';
            }
        });
    });
});
