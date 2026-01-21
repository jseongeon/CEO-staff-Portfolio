// ==========================================
// CONTACT MODAL FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactForm = document.getElementById('contactForm');

    // 모달 열기
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 스크롤 방지
        }
    }

    // 모달 닫기
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // 스크롤 복원
        }
    }

    // 모달 열기 버튼 클릭
    if (openModalBtn) {
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    // 모달 닫기 버튼 클릭
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // 오버레이 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 폼 제출 처리
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email-id').value + '@' + document.getElementById('email-domain').value,
                department: document.getElementById('department').value,
                message: document.getElementById('message').value
            };

            // 이메일 링크 생성 (mailto:)
            const subject = encodeURIComponent(`[${formData.department}] ${formData.name}님의 문의`);
            const body = encodeURIComponent(
                `이름/회사명: ${formData.name}\n` +
                `연락처: ${formData.phone}\n` +
                `이메일: ${formData.email}\n` +
                `문의 유형: ${formData.department}\n\n` +
                `메시지:\n${formData.message}`
            );
            
            // 실제 이메일 주소로 변경 필요
            const emailLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
            
            // 새 창에서 이메일 클라이언트 열기
            window.location.href = emailLink;
            
            // 폼 초기화
            contactForm.reset();
            
            // 모달 닫기 (선택사항 - 이메일 클라이언트가 열리면 자동으로 닫힘)
            // closeModal();
        });
    }
});


// ==========================================
// PROJECT MODAL FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // 프로젝트 데이터
    const projectData = {
        dashboard: {
            title: '데이터 대시보드 페이지 기획·제작',
            category: 'CEO Staff',
            image: './img/dashboard.png',
            background: '경영진의 의사결정을 지원하기 위해 실시간 KPI 모니터링이 가능한 데이터 대시보드를 기획하고 제작했습니다. 기존에 흩어져 있던 데이터를 한눈에 파악할 수 있도록 시각화하여 업무 효율성을 크게 향상시켰습니다.',
            results: [
                '실시간 KPI 모니터링 시스템 구축',
                '데이터 기반 의사결정 시간 50% 단축',
                '주요 지표 시각화로 경영진 보고 효율화'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        bill: {
            title: '고객청구서 UX 개선 기획·제작',
            category: 'CEO Staff',
            image: './img/bill.png',
            background: '고객 불만이 많았던 청구서의 사용자 경험을 전면 개선했습니다. 복잡한 정보 구조를 단순화하고, 직관적인 디자인을 적용하여 고객 만족도를 높였습니다.',
            results: [
                '고객 문의 30% 감소',
                '청구서 이해도 향상',
                '디자인 일관성 확보'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        process: {
            title: '업무 프로세스 개선 기획·실행',
            category: 'CEO Staff',
            image: './img/process.png',
            background: '비효율적인 업무 프로세스를 분석하고 개선안을 도출하여 실행했습니다. 부서 간 협업 흐름을 최적화하고 불필요한 단계를 제거하여 생산성을 향상시켰습니다.',
            results: [
                '업무 처리 시간 40% 단축',
                '부서 간 협업 효율성 증가',
                '표준 업무 매뉴얼 수립'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        dataanalysis: {
            title: '데이터 분석·리포트 작성',
            category: 'CEO Staff',
            image: './img/dataanalysis.png',
            background: '다양한 비즈니스 데이터를 분석하여 인사이트를 도출하고, 경영진에게 전략적 의사결정을 위한 리포트를 작성했습니다.',
            results: [
                '월간 경영 리포트 체계화',
                '데이터 기반 전략 수립 지원',
                '핵심 지표 트렌드 분석 및 예측'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        reminder: {
            title: '리마인드 CRM 리타켓팅 앱 기획·제작',
            category: 'CEO Staff',
            image: './img/remiderapp.png',
            background: '고객 이탈 방지와 재구매 유도를 위한 CRM 리타켓팅 앱을 기획하고 제작했습니다. 고객 행동 데이터를 분석하여 최적의 타이밍에 맞춤 메시지를 전송합니다.',
            results: [
                '고객 재방문율 25% 증가',
                '맞춤형 리타켓팅 캠페인 운영',
                '고객 생애가치(LTV) 향상'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        faq: {
            title: '특허법인 자주묻는질문 FAQ 페이지 기획·제작',
            category: 'CEO Staff',
            image: './img/datadashboard.png',
            background: '특허법인 고객들의 반복 문의를 줄이기 위해 체계적인 FAQ 페이지를 기획하고 제작했습니다. 카테고리별 분류와 검색 기능을 통해 고객이 쉽게 정보를 찾을 수 있도록 했습니다.',
            results: [
                '고객 문의 전화 35% 감소',
                '셀프 서비스 이용률 증가',
                '고객 만족도 향상'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        kakaopay: {
            title: '카카오페이 UI·UX 개선 기획',
            category: 'Project',
            image: './img/kakakopay.png',
            background: '카카오페이 서비스의 사용자 경험을 분석하고 개선안을 기획했습니다. 사용자 리서치를 바탕으로 직관적인 인터페이스와 편리한 결제 플로우를 제안했습니다.',
            results: [
                '사용자 여정 맵 분석 및 개선점 도출',
                'UI/UX 개선안 프로토타입 제작',
                '사용성 테스트 진행 및 피드백 반영'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        },
        lottegiants: {
            title: '롯데 자이언츠 3000만 관중 달성 이벤트 기획',
            category: 'Project',
            image: './img/lottegiants.png',
            background: '롯데 자이언츠의 역사적인 3000만 관중 달성을 기념하는 이벤트를 기획했습니다. 팬들과 함께하는 참여형 이벤트를 통해 브랜드 충성도를 높이고 화제성을 창출했습니다.',
            results: [
                '팬 참여형 이벤트 기획 및 운영',
                'SNS 바이럴 캠페인 진행',
                '브랜드 인지도 및 팬 충성도 향상'
            ],
            websiteUrl: '#',
            pdfUrl: '#'
        }
    };

    // DOM 요소
    const projectModal = document.getElementById('projectModal');
    const projectModalClose = document.getElementById('projectModalClose');
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    // 모달 내부 요소
    const modalImage = document.getElementById('projectModalImage');
    const modalCategory = document.getElementById('projectModalCategory');
    const modalTitle = document.getElementById('projectModalTitle');
    const modalBackground = document.getElementById('projectModalBackground');
    const modalResults = document.getElementById('projectModalResults');
    const modalWebsite = document.getElementById('projectModalWebsite');
    const modalPdf = document.getElementById('projectModalPdf');

    // 프로젝트 모달 열기
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project || !projectModal) return;

        // 데이터 채우기
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalBackground.textContent = project.background;
        
        // 성과 리스트 생성
        modalResults.innerHTML = '';
        project.results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            modalResults.appendChild(li);
        });

        // 버튼 URL 설정
        if (project.websiteUrl && project.websiteUrl !== '#') {
            modalWebsite.href = project.websiteUrl;
            modalWebsite.classList.remove('disabled');
        } else {
            modalWebsite.href = '#';
            modalWebsite.classList.add('disabled');
        }

        if (project.pdfUrl && project.pdfUrl !== '#') {
            modalPdf.href = project.pdfUrl;
            modalPdf.classList.remove('disabled');
        } else {
            modalPdf.href = '#';
            modalPdf.classList.add('disabled');
        }

        // 모달 표시
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // 프로젝트 모달 닫기
    function closeProjectModal() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // 프로젝트 카드 클릭 이벤트
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.project;
            openProjectModal(projectId);
        });
    });

    // 닫기 버튼 클릭
    if (projectModalClose) {
        projectModalClose.addEventListener('click', closeProjectModal);
    }

    // 오버레이 클릭 시 닫기
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // 비활성화된 버튼 클릭 방지
    document.querySelectorAll('.project-modal-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
            }
        });
    });
});
