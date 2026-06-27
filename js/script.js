document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

const heroCta = document.getElementById('hero-cta');
if (heroCta) {
    heroCta.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    });
}
