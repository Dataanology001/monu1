// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the new Hero Swiper Slider
    const heroSwiper = new Swiper('.hero-swiper', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    // Navbar scroll effect
    const navbar = document.querySelector('.main-navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Live Filter for Permanent Search Bar ---
    const permanentSearchInput = document.querySelector('#permanent-search-form input');

    if (permanentSearchInput) {
        permanentSearchInput.addEventListener('input', (e) => {
            filterServices(e.target.value);
        });
    }

    function filterServices(searchTerm) {
        const term = searchTerm.toLowerCase();
        const serviceCards = document.querySelectorAll('.service-card-col');

        serviceCards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            const cardText = card.querySelector('.card-text').textContent.toLowerCase();
            const featureListItems = Array.from(card.querySelectorAll('.feature-list-item'));
            const featuresText = featureListItems.map(item => item.textContent.toLowerCase()).join(' ');

            if (cardTitle.includes(term) || cardText.includes(term) || featuresText.includes(term)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add active class to current nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Run on page load and scroll
    window.addEventListener('load', highlightNav);
    window.addEventListener('scroll', highlightNav);

});