// Find the contact form
const contactForm = document.getElementById("contact-form");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get information from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const business = document.getElementById("business").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Create WhatsApp message
    const whatsappMessage =
        "Hello Mars Web Studio!%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Business: " + business + "%0A" +
        "Service: " + service + "%0A%0A" +
        "Project Details:%0A" +
        message;

    // Create WhatsApp link
    const whatsappURL =
        "https://wa.me/254723416276?text=" + whatsappMessage;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});
// Find the mobile menu button
const menuButton = document.getElementById("menu-button");

// Find the navigation links
const navLinks = document.querySelector(".nav-links");

// Open and close mobile menu
menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("mobile-menu");

    menuButton.classList.toggle("active");

});
// Close mobile menu when a navigation link is clicked
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("mobile-menu");
        menuButton.classList.remove("active");

    });

});
// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".section-title, .service-card, .project-card, .project-details, .process-step, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal", "active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});