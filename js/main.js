/**
 * Geneva Soccer Website
 * Main JavaScript File
 */

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('#main-nav a');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Toggle mobile dropdowns
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== parent) {
                    dropdown.classList.remove('dropdown-active');
                }
            });
            
            // Toggle current dropdown
            parent.classList.toggle('dropdown-active');
        }
    });
});

// Close mobile menu when clicking on a link (except dropdown toggles on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('dropdown-toggle') || window.innerWidth > 768) {
            mainNav.classList.remove('active');
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('dropdown-active');
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Skip for dropdown toggles on mobile
        if (this.classList.contains('dropdown-toggle') && window.innerWidth <= 768) {
            return;
        }
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to the current nav item based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add 'active' class to corresponding nav link
            const correspondingLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Add fade-in animation for elements when they come into view
const fadeElements = document.querySelectorAll('.card, .testimonial');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s ease-in-out';
    fadeInObserver.observe(element);
});

// Add class to elements when they intersect
document.addEventListener('DOMContentLoaded', () => {
    fadeElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fade-in');
            element.style.opacity = '1';
        }
    });
});

// Add to the end of js/main.js

// Tab functionality for program sections
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Ensure mobile navigation works properly
    function handleMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.getElementById('main-nav');
        
        if (navToggle && mainNav) {
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
                    mainNav.classList.remove('active');
                }
            });
            
            // Close mobile menu when window is resized to desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    mainNav.classList.remove('active');
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('dropdown-active');
                    });
                }
            });
        }
    }
    
    handleMobileNavigation();
});