document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    }

    // Add a scroll effect to reveal sections (optional but cool)
    const sections = document.querySelectorAll('section');

    const revealSection = function(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(function(section) {
        // Initially hide sections for the effect
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        sectionObserver.observe(section);
    });

    // Manually trigger the first section (hero) to be visible on load
    const heroSection = document.querySelector('.hero');
    if(heroSection){
        heroSection.style.opacity = 1;
        heroSection.style.transform = 'translateY(0)';
    }
});