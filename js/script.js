const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

function closeNavMenu() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function(e) {
        if (!navMenu.classList.contains('open')) return;
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeNavMenu();
        }
    });

    window.addEventListener('resize', closeNavMenu);
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
        closeNavMenu();
    });
});

const heroCta = document.getElementById('hero-cta');
if (heroCta) {
    heroCta.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    });
}
