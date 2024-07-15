document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');
    header.classList.add('animate-fadeInUp');

    const services = document.querySelectorAll('.grid-cols-1 > div');
    services.forEach((service, index) => {
        service.style.animationDelay = `${index * 0.2}s`;
        service.classList.add('animate-fadeInUp');
    });

    const whyChooseUs = document.querySelectorAll('.grid-cols-2 > div');
    whyChooseUs.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('animate-slideInLeft');
    });

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.classList.add('animate-fadeInUp');
    }

    const logo = document.querySelector('img[alt="धनवृद्धि दर्शन Logo"]');
    if (logo) {
        logo.classList.add('animate-pulse');
    }
});
// Create a loading overlay
const loadingOverlay = document.createElement('div')
loadingOverlay.id = 'loading-overlay'
loadingOverlay.style.position = 'fixed'
loadingOverlay.style.top = '0'
loadingOverlay.style.left = '0'
loadingOverlay.style.width = '100%'
loadingOverlay.style.height = '100%'
loadingOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
loadingOverlay.style.display = 'flex'
loadingOverlay.style.justifyContent = 'center'
loadingOverlay.style.alignItems = 'center'
loadingOverlay.style.zIndex = '9999'

// Create a container for the logo
const logoContainer = document.createElement('div')
logoContainer.style.textAlign = 'center'

// Clone the existing logo
const loadingLogo = document.querySelector('img[alt="धनवृद्धि दर्शन Logo"]').cloneNode(true)
loadingLogo.style.width = '100px'
loadingLogo.style.height = 'auto'
loadingLogo.classList.add('animate-pulse')

// Add loading text
const loadingText = document.createElement('p')
loadingText.textContent = 'Loading...'
loadingText.style.marginTop = '10px'
loadingText.style.fontSize = '18px'

// Append elements
logoContainer.appendChild(loadingLogo)
logoContainer.appendChild(loadingText)
loadingOverlay.appendChild(logoContainer)
document.body.appendChild(loadingOverlay)

// Hide loading overlay when the page is fully loaded
window.addEventListener('load', () => {
    loadingOverlay.style.opacity = '0'
    loadingOverlay.style.transition = 'opacity 0.5s ease-out'
    setTimeout(() => {
        loadingOverlay.remove()
    }, 500)
})

// Add animation while scrolling
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in')
            } else {
                entry.target.classList.remove('animate-fade-in')
            }
        })
    }, { threshold: 0.1 })

    elements.forEach((element) => {
        observer.observe(element)
    })
}

// Add CSS for the animation
const style = document.createElement('style')
style.textContent = `
    .animate-on-scroll {
        opacity: 0
        transform: translateY(20px)
        transition: opacity 0.5s ease, transform 0.5s ease
    }
    .animate-fade-in {
        opacity: 1
        transform: translateY(0)
    }
`
document.head.appendChild(style)

// Call the function when the page is loaded
window.addEventListener('load', animateOnScroll)



document.addEventListener('DOMContentLoaded', function() {
    const firstTimeMessage = document.getElementById('firstTimeMessage');
    const closeMessageBtn = document.getElementById('closeMessage');

    // Check if it's the user's first visit
    if (!localStorage.getItem('visited')) {
        firstTimeMessage.classList.remove('hidden');
        
        // Enable the button after 5 seconds
        setTimeout(() => {
            closeMessageBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            closeMessageBtn.removeAttribute('disabled');
        }, 5000);

        closeMessageBtn.addEventListener('click', function() {
            firstTimeMessage.classList.add('hidden');
            localStorage.setItem('visited', 'true');
        });
    }
});

// send email
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm')
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        
        // Here you would typically send this data to a server
        // For demonstration, we'll just log it to the console
        console.log('Sending email:', { name, email, message })
        
        // You could use a service like EmailJS or a backend API to actually send the email
        // For example, using EmailJS:
        // emailjs.send("service_id", "template_id", { name, email, message })
        //     .then(function(response) {
        //         console.log('Email sent successfully:', response)
        //         alert('Thank you! Your message has been sent.')
        //     }, function(error) {
        //         console.error('Error sending email:', error)
        //         alert('Oops! There was an error sending your message. Please try again later.')
        //     })
        
        // Clear the form
        contactForm.reset()
        
        // Show a confirmation message to the user
        alert('Thank you! Your message has been sent.')
    })
})


// menu button
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});