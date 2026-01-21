// ==========================================
// TEXT SCRAMBLE EFFECT ON HOVER
// ==========================================

class TextScramble {
    constructor(el, targetChars = null) {
        this.el = el;
        // 기본 특수문자 (다른 곳에서 사용할 경우)
        this.defaultChars = '!<>-_\\/[]{}—=+*^?#________';
        // 타겟 문자 세트 (한글↔영어 변환용)
        this.targetChars = targetChars || this.defaultChars;
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.targetChars[Math.floor(Math.random() * this.targetChars.length)];
                    this.queue[i].char = char;
                }
                output += `<span class="scramble">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}

// Apply text transformation effect to resources names on hover (한글 ↔ 영어)
document.querySelectorAll('.resources-name').forEach(el => {
    const originalText = el.innerText.trim();
    const alternateText = el.getAttribute('data-alternate');
    
    if (!alternateText) return;
    
    // 한글인지 영어인지 판단
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(originalText);
    
    // 한글 → 영어: 영어 알파벳으로 스크램블
    // 영어 → 한글: 한글 자모로 스크램블
    const scrambleChars = isKorean 
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        : 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ가나다라마바사아자차카타파하';
    
    const fx = new TextScramble(el, scrambleChars);
    let isOriginal = true;

    el.parentElement.addEventListener('mouseenter', () => {
        if (isOriginal) {
            fx.setText(alternateText);
            isOriginal = false;
        }
    });

    el.parentElement.addEventListener('mouseleave', () => {
        if (!isOriginal) {
            fx.setText(originalText);
            isOriginal = true;
        }
    });
});
