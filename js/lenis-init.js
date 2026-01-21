// ==========================================
// LENIS SMOOTH SCROLL INITIALIZATION
// ==========================================

// Lenis 인스턴스 생성
const lenis = new Lenis({
    duration: 1.2,                // 스크롤 지속 시간 (높을수록 부드러움)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 이징 함수
    orientation: 'vertical',      // 스크롤 방향
    gestureOrientation: 'vertical',
    smoothWheel: true,            // 마우스 휠 부드럽게
    wheelMultiplier: 1,           // 휠 속도 배수
    touchMultiplier: 2,           // 터치 속도 배수
    infinite: false,              // 무한 스크롤 여부
});

// 전역으로 lenis 노출 (다른 모듈에서 접근 가능)
window.lenis = lenis;

// Lenis RAF (Request Animation Frame) loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger와 Lenis 연동
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Lenis 초기화 확인 로그
console.log('Lenis Smooth Scroll Initialized');
