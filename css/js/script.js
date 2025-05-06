// Mobile navigation toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

// Simple form validation message
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  });
}
