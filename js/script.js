// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 动态更新年龄
    const updateAge = () => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - 2000;
        const ageElement = document.getElementById('age-display');
        if (ageElement) {
            ageElement.textContent = age + '岁';
        }
    };
    
    // 页面加载时更新年龄
    updateAge();

    // 设置定时器，每小时检查一次是否需要更新年龄（用于跨年更新）
    setInterval(() => {
        updateAge();
    }, 3600000); // 每小时检查一次

    // 移动端导航菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 平滑滚动到锚点
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // 移动端关闭菜单
            navMenu.classList.remove('active');
        });
    });

    // 技能条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            }
        });
    };

    // 页面滚动事件
    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                // 导航栏背景变化
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }

                // 技能条动画
                animateSkillBars();

                // 活跃导航链接高亮
                highlightActiveSection();

                ticking = false;
            });
        }
        ticking = true;
    };

    window.addEventListener('scroll', onScroll);

    // 高亮当前活跃的导航链接
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('.section, .hero');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    };

    // 添加活跃链接样式
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: #3498db !important;
            position: relative;
        }
        
        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #3498db;
            border-radius: 1px;
        }
    `;
    document.head.appendChild(style);

    // 项目卡片悬停效果增强
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 联系信息复制功能
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('p').textContent;
            
            // 创建临时输入框来复制文本
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // 显示复制成功提示
            showNotification('已复制到剪贴板: ' + text);
        });
    });

    // 通知提示函数
    const showNotification = (message) => {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #2c3e50;
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 自动隐藏
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    };

    // 页面加载动画
    const animateOnLoad = () => {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .contact-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    };

    // 初始化动画
    animateOnLoad();

    // 下载简历按钮点击事件
    const downloadBtn = document.querySelector('.btn.secondary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // 检查文件是否存在
            fetch(this.href, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        showNotification('简历文件暂时无法下载，请稍后再试');
                    }
                })
                .catch(() => {
                    e.preventDefault();
                    showNotification('简历文件暂时无法下载，请稍后再试');
                });
        });
    }

    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // 初始加载时执行一次技能条动画检查
    setTimeout(animateSkillBars, 500);
    
    console.log('个人简历网站已加载完成 🚀');
});

// 返回顶部功能
const createBackToTop = () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('title', '返回顶部');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    `;
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.background = '#2980b9';
        backToTopBtn.style.transform = 'translateY(-3px)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.background = '#3498db';
        backToTopBtn.style.transform = 'translateY(0)';
    });
    
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
};

// 页面加载完成后创建返回顶部按钮
window.addEventListener('load', createBackToTop);