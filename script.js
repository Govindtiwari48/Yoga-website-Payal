// ========================================
// Navigation Toggle for Mobile
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ========================================
// Form Validation Functions
// ========================================

function validateName(name) {
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    if (!name || name.trim().length === 0) {
        return { valid: false, message: 'Name is required' };
    }
    if (name.trim().length < 2) {
        return { valid: false, message: 'Name must be at least 2 characters' };
    }
    if (!nameRegex.test(name.trim())) {
        return { valid: false, message: 'Name should only contain letters and spaces' };
    }
    return { valid: true, message: '' };
}

function validateEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!email || email.trim().length === 0) {
        return { valid: false, message: 'Email is required' };
    }
    if (!emailRegex.test(email.trim())) {
        return { valid: false, message: 'Please enter a valid email address' };
    }
    return { valid: true, message: '' };
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || phone.trim().length === 0) {
        return { valid: false, message: 'Phone number is required' };
    }
    const cleanedPhone = phone.replace(/\D/g, ''); // Remove non-digits
    if (cleanedPhone.length !== 10) {
        return { valid: false, message: 'Phone number must be exactly 10 digits' };
    }
    if (!phoneRegex.test(cleanedPhone)) {
        return { valid: false, message: 'Please enter a valid 10-digit phone number' };
    }
    return { valid: true, message: '' };
}

function validateBatch(batch) {
    if (!batch || batch.trim().length === 0) {
        return { valid: false, message: 'Please select a batch type' };
    }
    return { valid: true, message: '' };
}

// ========================================
// Form Validation - Real-time
// ========================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const batchSelect = document.getElementById('batch');
const messageTextarea = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const batchError = document.getElementById('batchError');
const messageCount = document.getElementById('messageCount');

// Real-time validation
nameInput.addEventListener('blur', () => {
    const validation = validateName(nameInput.value);
    showError(nameInput, nameError, validation);
});

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) {
        const validation = validateName(nameInput.value);
        showError(nameInput, nameError, validation);
    }
});

emailInput.addEventListener('blur', () => {
    const validation = validateEmail(emailInput.value);
    showError(emailInput, emailError, validation);
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim().length > 0) {
        const validation = validateEmail(emailInput.value);
        showError(emailInput, emailError, validation);
    }
});

phoneInput.addEventListener('blur', () => {
    const validation = validatePhone(phoneInput.value);
    showError(phoneInput, phoneError, validation);
});

phoneInput.addEventListener('input', (e) => {
    // Only allow digits
    e.target.value = e.target.value.replace(/\D/g, '');
    if (phoneInput.value.trim().length > 0) {
        const validation = validatePhone(phoneInput.value);
        showError(phoneInput, phoneError, validation);
    }
});

batchSelect.addEventListener('change', () => {
    const validation = validateBatch(batchSelect.value);
    showError(batchSelect, batchError, validation);
});

// Message character counter
messageTextarea.addEventListener('input', () => {
    const length = messageTextarea.value.length;
    messageCount.textContent = length;
    if (length > 500) {
        messageTextarea.value = messageTextarea.value.substring(0, 500);
        messageCount.textContent = 500;
    }
});

function showError(input, errorElement, validation) {
    if (validation.valid) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    } else {
        input.classList.add('error');
        errorElement.textContent = validation.message;
        errorElement.style.display = 'block';
    }
}

// ========================================
// Form Submission Handler - Google Sheets
// ========================================

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxk8fb8f4Bd-UHLcUwV0zNq3LN38nNTpRIPe5zkdHQir13gmV3xsh0za3V3w1Jj9Tt1xA/exec';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValidation = validateName(nameInput.value);
    const emailValidation = validateEmail(emailInput.value);
    const phoneValidation = validatePhone(phoneInput.value);
    const batchValidation = validateBatch(batchSelect.value);

    // Show errors for all fields
    showError(nameInput, nameError, nameValidation);
    showError(emailInput, emailError, emailValidation);
    showError(phoneInput, phoneError, phoneValidation);
    showError(batchSelect, batchError, batchValidation);

    // Check if form is valid
    if (!nameValidation.valid || !emailValidation.valid || !phoneValidation.valid || !batchValidation.valid) {
        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        return;
    }

    // Get form data
    const formData = new FormData(contactForm);
    const cleanedPhone = phoneInput.value.replace(/\D/g, '');
    
    const formDataObj = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        phone: cleanedPhone,
        batch: batchSelect.value,
        message: messageTextarea.value.trim() || '',
        timestamp: new Date().toISOString()
    };

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    // Clear all errors
    [nameError, emailError, phoneError, batchError].forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });

    try {
        // Submit to Google Sheets via Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj)
        });

        // Show success message
        alert('Thank you! Your trial class request has been submitted. We will contact you soon.');

        // Reset form
        contactForm.reset();
        messageCount.textContent = '0';
        [nameInput, emailInput, phoneInput, batchSelect].forEach(input => {
            input.classList.remove('error');
        });

    } catch (error) {
        console.error('Error submitting form:', error);
        // Fallback to WhatsApp if Google Sheets fails
        const whatsappMessage = `
Hi! I'm interested in joining yoga classes.

Name: ${formDataObj.name}
Email: ${formDataObj.email}
Phone: ${formDataObj.phone}
Preferred Batch: ${formDataObj.batch}
${formDataObj.message ? `Message: ${formDataObj.message}` : ''}
        `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/919769576260?text=${encodedMessage}`, '_blank');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all class cards, testimonial cards, and schedule cards
const animatedElements = document.querySelectorAll('.class-card, .testimonial-card, .schedule-card, .gallery-item');

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ========================================
// Gallery Image Lazy Loading (Placeholder)
// ========================================

// This is a placeholder for when actual images are added
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// Scroll to Top Button (Optional Enhancement)
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Photo Gallery - Static Row (No animation needed)
// ========================================

// ========================================
// Console Message
// ========================================

console.log('%cYoga for wellness 🧘‍♀️', 'font-size: 20px; color: #6b8e6b; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #666;');
