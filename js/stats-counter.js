// ==========================================
// STATS COUNTER ANIMATION
// ==========================================

const statsSection = document.querySelector('.stats');
const stats = document.querySelectorAll('.stat-number');

if (statsSection && stats.length > 0) {
    // 초기값을 0으로 설정
    stats.forEach(stat => {
        stat.textContent = '0';
    });

    ScrollTrigger.create({
        trigger: statsSection,
        start: 'top 60%',
        onEnter: () => {
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                const hasPlus = target >= 100;
                
                // 라벨 확인하여 duration 설정
                const label = stat.parentElement.querySelector('.stat-label').textContent;
                let duration = 3.5; // 기본값 (CEO Staff)
                
                if (label.includes('Years of Experience') || label.includes('NCO')) {
                    duration = 2.5; // Years of Experience와 NCO는 더 빠르게
                }

                gsap.to(stat, {
                    innerText: target,
                    duration: duration,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function() {
                        stat.textContent = Math.ceil(stat.innerText) + (hasPlus ? '+' : '');
                    }
                });
            });
        },
        once: true
    });
}
