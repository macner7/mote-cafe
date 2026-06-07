/* ============================================================
   MÖTE — Premium Motion & Interaction System
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // 1. HERO ENTRANCE TRIGGER
    // ============================================================
    window.addEventListener('load', () => {
        setTimeout(animateHeroEntrance, 200);
    });

    // ============================================================
    // 2. HERO ENTRANCE — Split Text + Staggered Reveal
    // ============================================================
    function splitTextIntoChars(element) {
        if (!element) return;
        const text = element.textContent;
        element.innerHTML = '';

        // Split into words, then chars within each word
        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';

            for (let i = 0; i < word.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = word[i];
                wordSpan.appendChild(charSpan);
            }

            element.appendChild(wordSpan);

            // Add space between words (except last)
            if (wordIndex < words.length - 1) {
                const space = document.createElement('span');
                space.className = 'word';
                space.innerHTML = '&nbsp;';
                element.appendChild(space);
            }
        });
    }

    // Initialize split text
    const heroTitle = document.getElementById('hero-title');
    splitTextIntoChars(heroTitle);

    function animateHeroEntrance() {
        // 1. Reveal characters with stagger
        const chars = document.querySelectorAll('.hero-title .char');
        chars.forEach((char, i) => {
            setTimeout(() => {
                char.classList.add('visible');
            }, i * 40);
        });

        // 2. Reveal eyebrow after title starts
        const heroEyebrow = document.getElementById('hero-eyebrow');
        setTimeout(() => {
            if (heroEyebrow) heroEyebrow.classList.add('visible');
        }, 300);

        // 3. Reveal subtitle
        const heroSubtitle = document.getElementById('hero-subtitle');
        setTimeout(() => {
            if (heroSubtitle) heroSubtitle.classList.add('visible');
        }, 600);

        // 4. Reveal scroll cue
        const scrollCue = document.getElementById('scroll-cue');
        setTimeout(() => {
            if (scrollCue) scrollCue.classList.add('visible');
        }, 1000);
    }

    // ============================================================
    // 3. NAVBAR — Scroll Effect (Optimized)
    // ============================================================
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    let navTicking = false;

    const updateNav = () => {
        if (nav) {
            nav.classList.toggle('scrolled', lastScrollY > 60);
        }
        navTicking = false;
    };

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!navTicking) {
            requestAnimationFrame(updateNav);
            navTicking = true;
        }
    }, { passive: true });

    // ============================================================
    // 4. MOBILE NAV — Hamburger Toggle & Overlay
    // ============================================================
    const navToggle = document.getElementById('nav-toggle');
    const navOverlay = document.getElementById('nav-overlay');

    if (navToggle && navOverlay) {
        navToggle.addEventListener('click', () => {
            const isOpen = navOverlay.classList.contains('open');
            navToggle.classList.toggle('active');
            navOverlay.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        // Close on link click
        navOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navOverlay.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================================
    // 5. SCROLL REVEAL — Choreographed IntersectionObserver
    // ============================================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback
        revealElements.forEach(el => el.classList.add('active'));
    }

    // ============================================================
    // 6. HERO MOUSE PARALLAX — Subtle Depth Effect (Desktop Only)
    // ============================================================
    const heroSection = document.querySelector('.hero');
    const heroImg = document.getElementById('hero-img');
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let heroAnimFrame;

    function smoothHeroParallax() {
        // Ease toward target — buttery smooth
        currentX += (mouseX - currentX) * 0.06;
        currentY += (mouseY - currentY) * 0.06;

        if (heroImg) {
            heroImg.style.transform = `scale(1.08) translate3d(${currentX}px, ${currentY}px, 0)`;
        }

        heroAnimFrame = requestAnimationFrame(smoothHeroParallax);
    }

    // Initialize parallax only if device supports hover interactions (mouse/desktop)
    if (heroSection && heroImg && window.matchMedia('(hover: hover)').matches) {
        heroSection.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.006;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.006;
        }, { passive: true });

        smoothHeroParallax();
    }

    // ============================================================
    // 7. HORIZONTAL GALLERY — Scroll-Linked Movement (Desktop Only)
    // ============================================================
    const galleryTrack = document.getElementById('gallery-track');
    const gallerySection = document.getElementById('gallery');

    if (galleryTrack && gallerySection) {
        let galleryTicking = false;

        const updateGallery = () => {
            // If screen is mobile size, reset style to let native horizontal CSS scroll take over
            if (window.innerWidth <= 768) {
                galleryTrack.style.transform = '';
                galleryTicking = false;
                return;
            }

            const rect = gallerySection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only animate when gallery is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate how far through the viewport the section has scrolled
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const maxShift = galleryTrack.scrollWidth - gallerySection.offsetWidth;
                const shift = -(progress * maxShift * 0.5);

                galleryTrack.style.transform = `translate3d(${shift}px, 0, 0)`;
            }

            galleryTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!galleryTicking) {
                requestAnimationFrame(updateGallery);
                galleryTicking = true;
            }
        }, { passive: true });

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                galleryTrack.style.transform = '';
            } else {
                updateGallery();
            }
        });

        // Initial position
        updateGallery();
    }

    // ============================================================
    // 8. SMOOTH SCROLL — Navigation Links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================================
    // 9. PAIRING GUIDE — Tab Switching
    // ============================================================
    const pairingButtons = document.querySelectorAll('.pairing-btn');
    const pairingCards = document.querySelectorAll('.pairing-card');

    pairingButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedPairing = btn.getAttribute('data-pairing');

            pairingButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            pairingCards.forEach(card => {
                card.classList.remove('active');
                if (card.id === `pair-${selectedPairing}`) {
                    card.classList.add('active');
                }
            });
        });
    });

    // ============================================================
    // 10. MENU TABS — Switching
    // ============================================================
    const menuTabButtons = document.querySelectorAll('.menu-tab-btn');
    const menuTabContents = document.querySelectorAll('.menu-tab-content');

    menuTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-menu-tab');

            menuTabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            menuTabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `menu-tab-${targetTab}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ============================================================
    // 11. MAGNETIC BUTTONS — Cursor Follow Effect (Desktop Only)
    // ============================================================
    const magneticElements = document.querySelectorAll('.magnetic');

    if (window.matchMedia('(hover: hover)').matches) {
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
                el.style.transform = `translate(${x}px, ${y}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ============================================================
    // 12. ACTIVE NAV TRACKING — IntersectionObserver
    // ============================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if ('IntersectionObserver' in window && navLinks.length) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            rootMargin: '-30% 0px -45% 0px'
        });

        sections.forEach(section => navObserver.observe(section));

        // Clear active state at very top
        window.addEventListener('scroll', () => {
            if (window.scrollY < 80) {
                navLinks.forEach(link => link.classList.remove('active'));
            }
        }, { passive: true });
    }

    // ============================================================
    // 13. BACK TO TOP BUTTON
    // ============================================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top magnetic';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
