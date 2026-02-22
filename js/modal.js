// ==========================================
// CONTACT MODAL FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactForm = document.getElementById('contactForm');

    // 모달 열기
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop();
        }
    }

    // 모달 닫기
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        }
    }

    // 모달 열기 버튼 클릭
    if (openModalBtn) {
        openModalBtn.addEventListener('click', function (e) {
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
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 폼 제출 처리
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
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

document.addEventListener('DOMContentLoaded', function () {
    // 프로젝트 데이터
    const projectData = {
        dashboard: {
            title: '데이터 대시보드 페이지 기획·제작',
            category: 'CEO Staff',
            image: './img/dashboard.png',
            background: '경영진의 의사결정을 지원하기 위해 실시간 KPI 모니터링이 가능한 데이터 대시보드를 기획하고 제작했습니다.<br /><br />기존에 흩어져 있던 데이터를 한눈에 파악할 수 있도록 시각화하여 업무 효율성을 크게 향상시켰습니다.',
            results: [
                '실시간 KPI 모니터링 시스템 구축',
                '데이터 기반 의사결정 시간 50% 단축',
                '주요 지표 시각화로 경영진 보고 효율화'
            ],
            websiteUrl: 'https://jseongeon.github.io/teheran-dashboard-mockup/',
            websiteText: '대시보드 가기',
            websiteSubText: '(목업 데이터 사이트 제공)',
            pdfUrl: 'https://drive.google.com/file/d/1E7Gx9rxotHPo3bwrVOl0jZL5CtZ1BvnC/view?usp=sharing'
        },
        bill: {
            title: '고객청구서 UX 개선 기획·제작',
            category: 'CEO Staff',
            image: './img/bill.png',
            background: '고객 불만이 많았던 청구서의 사용자 경험을 전면 개선했습니다.<br /><br />복잡한 정보 구조를 단순화하고, 직관적인 디자인을 적용하여 고객 만족도를 높였습니다.',
            results: [
                '고객 문의 30% 감소',
                '청구서 이해도 향상',
                '디자인 일관성 확보'
            ],
            websiteUrl: 'https://jseongeon.github.io/invoiceCX/',
            pdfUrl: 'https://drive.google.com/file/d/1cget5mZEjJAag_vXqlmjBgLfYYooffFI/view?usp=sharing'
        },
        process: {
            title: '업무 프로세스 개선 기획·실행',
            category: 'CEO Staff',
            image: './img/process.png',
            background: '업무 프로세스의 비효율 지점을 진단하고 최적화 전략을 수립·실행했습니다.<br /><br />협업 흐름의 병목을 해소하고 불필요한 절차를 간소화하여 효율적인 업무 구조를 완성했습니다.',
            results: [
                '업무 처리 효율 74% 향상',
                '내부 만족도 30%에서 95%로 개선',
                '표준 운영 절차(SOP) 매뉴얼 구축'
            ],
            websiteUrl: 'https://jseongeon.github.io/portfolio_patent_process/',
            pdfUrl: 'https://drive.google.com/file/d/1kkhHUAbCCQ_azZOnJnN7ybsUgnd7ShlC/view?usp=drive_link'
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
            websiteUrl: 'https://jseongeon.github.io/data-report/',
            pdfUrl: 'https://drive.google.com/file/d/14sZyuWbqqTnhhvJXlN4HtnKYziyzMb9F/view?usp=sharing'
        },
        reminder: {
            title: '리마인드 CRM 리타켓팅 앱 기획·제작',
            category: 'CEO Staff',
            image: './img/remiderapp.png',
            background: '고객 이탈 방지와 재구매 유도를 위한 CRM 리타켓팅 앱을 기획하고 제작했습니다.<br /><br />고객 행동 데이터를 분석하여 최적의 타이밍에 맞춤 메시지를 전송합니다.',
            results: [
                '고객 재방문율 25% 증가',
                '맞춤형 리타켓팅 캠페인 운영',
                '고객 생애가치(LTV) 향상'
            ],
            websiteUrl: 'https://jseongeon.github.io/remind-portfolio/',
            pdfUrl: 'https://drive.google.com/file/d/1ogx_pdtXcAE33tnAhoXDi1-iZYfjSZU4/view?usp=sharing'
        },
        faq: {
            title: '특허법인 자주묻는질문 FAQ 페이지 기획·제작',
            category: 'CEO Staff',
            image: './img/questions.png',
            background: '특허법인 고객들의 반복 문의를 줄이기 위해 체계적인 FAQ 페이지를 기획하고 제작했습니다.<br /><br />카테고리별 분류와 tel: 기능을 통해 고객이 쉽게 접근할 수 있도록 했습니다.',
            results: [
                '해당 문의 고객 약 35% 감소',
                '셀프 서비스 이용률 증가',
                '고객 만족도 향상'
            ],
            websiteUrl: 'https://jseongeon.github.io/teheranFQA/',
            pdfUrl: 'https://drive.google.com/file/d/1qtzKzGrtEy89ZUZwCW1LwknqfnKZdWG6/view?usp=sharing'
        },
        kakaopay: {
            title: '카카오페이 UI·UX 개선 기획',
            category: 'Project',
            image: './img/kakakopay.png',
            background: '카카오페이 서비스의 사용자 경험을 분석하고 개선안을 기획했습니다.<br /><br />사용자 리서치를 바탕으로 직관적인 인터페이스와 편리한 결제 플로우를 제안했습니다.',
            results: [
                '카카오페이 앱 UX 분석 및 문제점 도출',
                '개선된 UI/UX 프로토타입 제작',
                '사용자 플로우 최적화 방안 제안'
            ],
            websiteUrl: 'https://jseongeon.github.io/kakaoPortfolio/',
            pdfUrl: 'https://drive.google.com/file/d/1bLqiZl0RSQDgnq-Cg3uttcLz1hyYtudT/view?usp=sharing'
        },
        lottegiants: {
            title: '롯데 자이언츠 3000만 관중 달성 이벤트 기획',
            category: 'Project',
            image: './img/lottegiants.png',
            background: '롯데 자이언츠의 역사적인 3000만 관중 달성을 기념하는 이벤트를 기획했습니다.<br /><br />팬들과 함께하는 참여형 이벤트를 통해 브랜드 충성도를 높이고 화제성을 창출했습니다.',
            results: [
                '우수상 수상',
                '데이터 기반 전략 수립',
                '중간평가 1위'
            ],
            websiteUrl: 'https://jseongeon.github.io/Lotte-Giants-Project/',
            pdfUrl: 'https://drive.google.com/file/d/1iQq2iKrEJ2Zc5GenPtnBmEaDN_738Own/view?usp=sharing'
        },
        newsletter: {
            title: '특허법인 뉴스레터 자동화 시스템 구축',
            category: 'CEO Staff',
            image: './img/workflow.png',
            background: '매주 4시간 이상 소요되던 뉴스레터 수동 작업(뉴스 검색, 기사 선별, 요약 작성, 이메일 편집, 발송)을 n8n + Docker 기반으로 완전 자동화했습니다.<br /><br />담당자는 Google Sheets에서 체크박스를 클릭하는 것만으로(약 5분) 뉴스레터 발송이 완료됩니다.',
            results: [
                '자동화율 98% 달성 (수동 작업 5분, 나머지 전체 자동)',
                '주간 업무 시간 4시간 → 5분으로 단축',
                '기사당 카드뉴스 14장 자동 생성 (AI 2종 x 7장)',
                '94개 노드, 4개 트리거로 구성된 완전 자동화 워크플로우 구축'
            ],
            websiteUrl: 'https://jseongeon.github.io/newsletter-automation/',
            pdfUrl: 'https://drive.google.com/file/d/1w-P1Q9sGYBP_vtMy9iCyJfDHhAX8MqDj/view?usp=sharing'
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
        modalBackground.innerHTML = project.background;

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
            // 버튼 텍스트 변경 (websiteText가 있으면 사용, 없으면 기본값)
            const websiteTextNode = modalWebsite.childNodes[modalWebsite.childNodes.length - 1];
            websiteTextNode.textContent = project.websiteText || '웹사이트 가기';
        } else {
            modalWebsite.href = '#';
            modalWebsite.classList.add('disabled');
            const websiteTextNode = modalWebsite.childNodes[modalWebsite.childNodes.length - 1];
            websiteTextNode.textContent = project.websiteText || '웹사이트 가기';
        }

        if (project.pdfUrl && project.pdfUrl !== '#') {
            modalPdf.href = project.pdfUrl;
            modalPdf.classList.remove('disabled');
        } else {
            modalPdf.href = '#';
            modalPdf.classList.add('disabled');
        }

        // 웹사이트 보조 텍스트 처리
        const buttonsContainer = document.querySelector('#projectModal .project-modal-buttons');
        const existingSubText = buttonsContainer.querySelector('.project-modal-btn-subtext');
        if (existingSubText) existingSubText.remove();

        if (project.websiteSubText) {
            const subText = document.createElement('p');
            subText.className = 'project-modal-btn-subtext';
            subText.textContent = project.websiteSubText;
            buttonsContainer.after(subText);
        }

        // 모달 표시
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.lenis) window.lenis.stop();
    }

    // 프로젝트 모달 닫기
    function closeProjectModal() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        }
    }

    // 프로젝트 카드 클릭 이벤트
    projectCards.forEach(card => {
        card.addEventListener('click', function (e) {
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
        projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // 버튼 클릭 이벤트
    if (modalWebsite) {
        modalWebsite.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                const url = this.getAttribute('href');
                if (url && url !== '#') {
                    window.open(url, '_blank');
                }
            }
        });
    }

    if (modalPdf) {
        modalPdf.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                const url = this.getAttribute('href');
                if (url && url !== '#') {
                    window.open(url, '_blank');
                }
            }
        });
    }
});


// ==========================================
// ABOUT IMAGE MODAL (COVER LETTER) FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const aboutImageTrigger = document.getElementById('aboutImageTrigger');
    const aboutImageModal = document.getElementById('aboutImageModal');
    const aboutImageModalClose = document.getElementById('aboutImageModalClose');
    const aboutModalPdf = document.getElementById('aboutModalPdf');

    // 모달 열기
    function openAboutImageModal() {
        if (aboutImageModal) {
            aboutImageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop();
        }
    }

    // 모달 닫기
    function closeAboutImageModal() {
        if (aboutImageModal) {
            aboutImageModal.classList.remove('active');
            document.body.style.overflow = '';
            if (window.lenis) window.lenis.start();
        }
    }

    // About 이미지 클릭 시 모달 열기
    if (aboutImageTrigger) {
        aboutImageTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            openAboutImageModal();
        });
    }

    // 닫기 버튼 클릭
    if (aboutImageModalClose) {
        aboutImageModalClose.addEventListener('click', closeAboutImageModal);
    }

    // PDF 버튼 클릭
    if (aboutModalPdf) {
        aboutModalPdf.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            if (url && url !== '#') {
                window.open(url, '_blank');
            }
        });
    }

    // 오버레이 클릭 시 닫기
    if (aboutImageModal) {
        aboutImageModal.addEventListener('click', function (e) {
            if (e.target === aboutImageModal) {
                closeAboutImageModal();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && aboutImageModal && aboutImageModal.classList.contains('active')) {
            closeAboutImageModal();
        }
    });
});


// ==========================================
// RESOURCE MODAL FUNCTIONALITY (이력서 / 경력기술서)
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    // 리소스 모달 설정
    const resourceModals = {
        resume: {
            modal: document.getElementById('resumeModal'),
            close: document.getElementById('resumeModalClose'),
            pdf: document.getElementById('resumeModalPdf')
        },
        career: {
            modal: document.getElementById('careerModal'),
            close: document.getElementById('careerModalClose'),
            pdf: document.getElementById('careerModalPdf')
        }
    };

    // 리소스 아이템 클릭 이벤트
    const resourceItems = document.querySelectorAll('.resources-item[data-resource]');

    function openResourceModal(resourceId) {
        const config = resourceModals[resourceId];
        if (!config || !config.modal) return;

        config.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.lenis) window.lenis.stop();
    }

    function closeResourceModal(resourceId) {
        const config = resourceModals[resourceId];
        if (!config || !config.modal) return;

        config.modal.classList.remove('active');
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start();
    }

    // 리소스 아이템 클릭
    resourceItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const resourceId = this.dataset.resource;
            openResourceModal(resourceId);
        });
    });

    // 각 모달의 닫기 버튼, 오버레이 클릭, PDF 버튼 이벤트
    Object.keys(resourceModals).forEach(key => {
        const config = resourceModals[key];

        // 닫기 버튼
        if (config.close) {
            config.close.addEventListener('click', function () {
                closeResourceModal(key);
            });
        }

        // 오버레이 클릭
        if (config.modal) {
            config.modal.addEventListener('click', function (e) {
                if (e.target === config.modal) {
                    closeResourceModal(key);
                }
            });
        }

        // PDF 버튼
        if (config.pdf) {
            config.pdf.addEventListener('click', function (e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                if (url && url !== '#') {
                    window.open(url, '_blank');
                }
            });
        }

        // ESC 키로 닫기
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && config.modal && config.modal.classList.contains('active')) {
                closeResourceModal(key);
            }
        });
    });
});
