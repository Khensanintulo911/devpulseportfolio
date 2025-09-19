// DevPulse Portfolio JavaScript

// DOM Elements
const profileModal = document.getElementById('profileModal');
const profileForm = document.getElementById('profileForm');
const contactForm = document.getElementById('contactForm');
const messageToast = document.getElementById('messageToast');
const mobileMenu = document.querySelector('.mobile-menu');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeContactLinks();
    setupFormHandlers();
    setupSmoothScrolling();
});

// Initialize contact links with profile data
function initializeContactLinks() {
    // We'll update these with real profile data when the profile modal loads
    updateContactLinks();
}

// Setup form handlers
function setupFormHandlers() {
    // Contact form handler
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Profile form handler
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmit);
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.remove('show');
            }
        });
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
}

// Profile Modal Functions
function openProfileModal() {
    if (profileModal) {
        profileModal.style.display = 'flex';
        loadProfileData();
    }
}

function closeProfileModal() {
    if (profileModal) {
        profileModal.style.display = 'none';
    }
}

// Load profile data into modal
async function loadProfileData() {
    try {
        const response = await fetch('/profile/');
        if (response.ok) {
            const data = await response.json();
            populateProfileForm(data);
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
        showToast('Error loading profile data', 'error');
    }
}

// Populate profile form with data
function populateProfileForm(data) {
    const form = profileForm;
    if (form) {
        form.querySelector('[name="name"]').value = data.name || '';
        form.querySelector('[name="bio"]').value = data.bio || '';
        form.querySelector('[name="location"]').value = data.location || '';
        form.querySelector('[name="linkedin_url"]').value = data.linkedin_url || '';
        form.querySelector('[name="whatsapp_number"]').value = data.whatsapp_number || '';
        form.querySelector('[name="phone_number"]').value = data.phone_number || '';
    }
}

// Handle contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    try {
        const response = await fetch('/contact/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCsrfToken()
            }
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        } else {
            showToast('Error sending message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        showToast('Error sending message. Please try again.', 'error');
    } finally {
        setButtonLoading(submitButton, false);
    }
}

// Handle profile form submission
async function handleProfileSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(profileForm);
    const submitButton = profileForm.querySelector('button[type="submit"]');
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    try {
        const response = await fetch('/profile/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCsrfToken()
            }
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast('Profile updated successfully!', 'success');
            closeProfileModal();
            // Reload page to show updated profile
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            showToast('Error updating profile. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error updating profile. Please try again.', 'error');
    } finally {
        setButtonLoading(submitButton, false);
    }
}

// Update contact links with profile data
function updateContactLinks() {
    // This will be called when profile data is available
    // For now, we'll set up click handlers that check for URLs
    setupContactCardHandlers();
}

// Setup contact card click handlers
function setupContactCardHandlers() {
    // LinkedIn card
    const linkedinCard = document.getElementById('linkedinCard');
    const footerLinkedin = document.getElementById('footerLinkedin');
    
    // WhatsApp card
    const whatsappCard = document.getElementById('whatsappCard');
    const footerWhatsapp = document.getElementById('footerWhatsapp');
    
    // Phone card
    const phoneCard = document.getElementById('phoneCard');
    
    // Add click handlers that will check for actual URLs when clicked
    [linkedinCard, footerLinkedin].forEach(element => {
        if (element) {
            element.addEventListener('click', handleLinkedInClick);
        }
    });
    
    [whatsappCard, footerWhatsapp].forEach(element => {
        if (element) {
            element.addEventListener('click', handleWhatsAppClick);
        }
    });
    
    if (phoneCard) {
        phoneCard.addEventListener('click', handlePhoneClick);
    }
}

// Contact link handlers
function handleLinkedInClick(e) {
    e.preventDefault();
    // This would normally use the profile data, but for now we'll show a message
    showToast('LinkedIn profile not configured. Please update your profile.', 'error');
}

function handleWhatsAppClick(e) {
    e.preventDefault();
    showToast('WhatsApp number not configured. Please update your profile.', 'error');
}

function handlePhoneClick(e) {
    e.preventDefault();
    showToast('Phone number not configured. Please update your profile.', 'error');
}

// Format contact links
function formatContactLink(type, value) {
    if (!value) return '#';
    
    switch (type) {
        case 'linkedin':
            return value.startsWith('http') ? value : `https://linkedin.com/in/${value}`;
        case 'whatsapp':
            const cleanNumber = value.replace(/\D/g, '');
            return `https://wa.me/${cleanNumber}`;
        case 'phone':
            return `tel:${value}`;
        default:
            return '#';
    }
}

// Utility Functions
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

function showToast(message, type = 'success') {
    if (messageToast) {
        messageToast.textContent = message;
        messageToast.className = `toast ${type}`;
        messageToast.classList.add('show');
        
        setTimeout(() => {
            messageToast.classList.remove('show');
        }, 5000);
    }
}

function getCsrfToken() {
    const token = document.querySelector('[name=csrfmiddlewaretoken]');
    return token ? token.value : '';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === profileModal) {
        closeProfileModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && profileModal.style.display === 'flex') {
        closeProfileModal();
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});