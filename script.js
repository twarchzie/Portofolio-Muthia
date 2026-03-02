function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});