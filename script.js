// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and about section
document.querySelectorAll('.service-card, .about').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Load projects from JSON with staggered animations
const fallbackProjects = [
    {
        "title": "Car Dealership Website",
        "description": "A complete e-commerce solution for automotive sales. Features include vehicle listings with advanced search filters, inventory management, customer inquiry system, and mobile-responsive design. Built with HTML5, CSS3, JavaScript, and Python backend. Helped increase online inquiries by 150%.",
        "image": "images/car-dealership.png",
        "link": "https://example-car-dealership.netlify.app"
    },
    {
        "title": "Interactive Web Application",
        "description": "A modern, feature-rich web application showcasing best practices in responsive design and user interaction. Includes smooth animations, optimized performance, and accessibility compliance. Perfect example of interactive UI design with vanilla JavaScript. Achieves 95+ Lighthouse score.",
        "image": "images/small-project.png",
        "link": "https://example-web-app.netlify.app"
    }
];

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='images/car-dealership.png'">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Live Project</a>
            </div>
        `;
        container.appendChild(projectDiv);

        // Accessibility: mark as article and make keyboard-focusable
        projectDiv.setAttribute('role', 'article');
        projectDiv.tabIndex = 0;

        // Keyboard navigation for projects
        const projectLink = projectDiv.querySelector('a');
        projectDiv.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                if (projectLink && projectLink.href) {
                    window.open(projectLink.href, '_blank', 'noopener');
                }
            }
        });

        // Staggered animation
        setTimeout(() => {
            projectDiv.style.opacity = '1';
            projectDiv.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

fetch('projects.json')
    .then(response => {
        if (!response.ok) {
            console.warn('Failed to load projects.json, using fallback projects');
            throw new Error('HTTP ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Projects loaded successfully:', data.length, 'projects');
        renderProjects(data);
    })
    .catch(err => {
        console.warn('Error loading projects.json:', err.message, 'Using fallback projects');
        renderProjects(fallbackProjects);
    });

// Dynamic footer year
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Contact form handling with success message and fallback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const action = (contactForm.getAttribute('action') || '').trim();
        const isPlaceholder = 
            action.includes('formspree.io/f/your-form-id') || 
            action === '' || 
            action === 'https://formspree.io/f/your-form-id';
        
        if (isPlaceholder) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const service = formData.get('service') || '';
            const message = formData.get('message') || '';

            const emailBody = encodeURIComponent(
                `Hello WebMatrix,\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Service Interested: ${service}\n\n` +
                `Message:\n${message}`
            );
            
            const mailto = `mailto:webmatrix9s@protonmail.com?subject=${encodeURIComponent('New Project Inquiry - ' + name)}&body=${emailBody}`;
            window.location.href = mailto;
            
            setTimeout(() => {
                alert('If your mail client did not open, please email webmatrix9s@protonmail.com with your inquiry.');
            }, 1000);
        } else {
            // Formspree submission - show success message
            e.target.addEventListener('formspree:submit', function(event) {
                e.preventDefault();
                showFormSuccess();
            });
        }
    });
    
    // Listen for successful Formspree submission
    contactForm.addEventListener('formspree:success', function() {
        showFormSuccess();
    });
}

// Show success message and reset form
function showFormSuccess() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Create success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        margin-bottom: 1.5rem;
        text-align: center;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
    `;
    successMsg.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
    
    contactForm.parentNode.insertBefore(successMsg, contactForm);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => successMsg.remove(), 300);
    }, 5000);
}

// Form input validation visual feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if(this.checkValidity()) {
            this.style.borderColor = '#10b981';
        } else {
            this.style.borderColor = '#ef4444';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
});
