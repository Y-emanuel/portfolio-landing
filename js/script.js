// Animaciones simples al hacer scroll
        document.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll('.reveal');
            
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));
            
            // Año dinámico
            document.getElementById('year').textContent = new Date().getFullYear();
        });