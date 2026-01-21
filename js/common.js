// ==========================================
// COMMON UTILITIES - 공통 유틸리티
// ==========================================

/**
 * DOM 요소 선택 헬퍼
 */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/**
 * 디바운스 함수
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 대기 시간 (ms)
 */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 스로틀 함수
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 제한 시간 (ms)
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 요소가 뷰포트에 있는지 확인
 * @param {HTMLElement} element - 확인할 요소
 * @param {number} offset - 오프셋 값
 */
function isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.bottom >= 0 - offset
    );
}

/**
 * 숫자 랜덤 생성
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 */
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * 값을 범위 내로 제한
 * @param {number} value - 값
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * 선형 보간
 * @param {number} start - 시작값
 * @param {number} end - 끝값
 * @param {number} t - 보간 비율 (0-1)
 */
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

/**
 * 값 매핑
 * @param {number} value - 값
 * @param {number} inMin - 입력 최소값
 * @param {number} inMax - 입력 최대값
 * @param {number} outMin - 출력 최소값
 * @param {number} outMax - 출력 최대값
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * 모바일 디바이스 체크
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * 터치 디바이스 체크
 */
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * 브레이크포인트 체크
 */
const breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280
};

function isBreakpoint(size) {
    return window.innerWidth <= breakpoints[size];
}

/**
 * CSS 변수 가져오기
 * @param {string} name - CSS 변수 이름
 */
function getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/**
 * CSS 변수 설정하기
 * @param {string} name - CSS 변수 이름
 * @param {string} value - 값
 */
function setCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
}

/**
 * 페이지 로드 완료 시 콜백 실행
 * @param {Function} callback - 콜백 함수
 */
function onPageLoad(callback) {
    if (document.readyState === 'complete') {
        callback();
    } else {
        window.addEventListener('load', callback);
    }
}

/**
 * 이벤트 위임 헬퍼
 * @param {string} parentSelector - 부모 선택자
 * @param {string} childSelector - 자식 선택자
 * @param {string} eventType - 이벤트 타입
 * @param {Function} handler - 핸들러 함수
 */
function delegate(parentSelector, childSelector, eventType, handler) {
    const parent = $(parentSelector);
    if (!parent) return;

    parent.addEventListener(eventType, (e) => {
        const target = e.target.closest(childSelector);
        if (target && parent.contains(target)) {
            handler.call(target, e);
        }
    });
}

// 공통 이징 함수
const easings = {
    easeOutExpo: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2,
    easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
    easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
};

// 전역으로 유틸리티 함수 노출
window.utils = {
    $,
    $$,
    debounce,
    throttle,
    isInViewport,
    randomRange,
    clamp,
    lerp,
    mapRange,
    isMobile,
    isTouchDevice,
    isBreakpoint,
    getCSSVariable,
    setCSSVariable,
    onPageLoad,
    delegate,
    easings
};
