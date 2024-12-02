document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('section, .grid');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
  });