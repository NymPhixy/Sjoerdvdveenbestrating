/* ========================================
   Hero Canvas Animation
   ======================================== */

// Canvas animation disabled - using CSS gradient instead
function initHeroCanvas() {
  // Removed - using CSS background gradient for better performance
}

// Init on page load
document.addEventListener("DOMContentLoaded", initHeroCanvas);

/* ========================================
   Mobile Navigation Toggle
   ======================================== */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* ========================================
   Form Handling
   ======================================== */

const requestForm = document.getElementById("requestForm");
const formMessage = document.getElementById("formMessage");

requestForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value,
    description: document.getElementById("description").value,
    period: document.getElementById("period").value,
    contact: document.getElementById("contact").value,
    timestamp: new Date().toISOString(),
  };

  // Validate form data
  if (!validateFormData(formData)) {
    showFormMessage("Vul alstublieft alle verplichte velden in.", "error");
    return;
  }

  // Store in localStorage (frontend only for now)
  storeFormData(formData);

  // Show success message
  showFormMessage(
    "Bedankt voor uw aanvraag! Sjoerd neemt binnen 1–2 werkdagen contact met u op.",
    "success",
  );

  // Reset form
  requestForm.reset();

  // Optional: Send to backend/email service
  // sendFormToBackend(formData);

  // Scroll to message
  formMessage.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ========================================
   Form Validation
   ======================================== */

function validateFormData(data) {
  // Check required fields
  if (
    !data.name ||
    !data.phone ||
    !data.email ||
    !data.location ||
    !data.service ||
    !data.description ||
    !data.period ||
    !data.contact
  ) {
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return false;
  }

  // Validate phone (basic validation)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(data.phone)) {
    return false;
  }

  return true;
}

/* ========================================
   Form Message Display
   ======================================== */

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
}

/* ========================================
   Local Storage for Form Data
   ======================================== */

function storeFormData(data) {
  // Get existing data
  let submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];

  // Add new submission
  submissions.push(data);

  // Store back
  localStorage.setItem("formSubmissions", JSON.stringify(submissions));

  console.log("Form submission stored:", data);
  console.log("Total submissions:", submissions.length);
}

/* ========================================
   Backend Integration (Optional)
   ======================================== */

// Uncomment and configure when backend is ready
/*
function sendFormToBackend(formData) {
    fetch('/api/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form sent to backend:', data);
    })
    .catch(error => {
        console.error('Error sending form:', error);
    });
}
*/

/* ========================================
   Smooth Scroll Offset for Sticky Nav
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80; // Offset for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

/* ========================================
   Analytics Tracking (Optional)
   ======================================== */

// Track button clicks
function trackButtonClick(buttonText) {
  console.log(`Button clicked: ${buttonText}`);
  // Add analytics here (Google Analytics, etc.)
}

// WhatsApp buttons
const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');
whatsappButtons.forEach((button) => {
  button.addEventListener("click", () => {
    trackButtonClick("WhatsApp");
  });
});

// Phone buttons
const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
phoneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    trackButtonClick("Phone");
  });
});

/* ========================================
   Dynamic Phone Number Update
   ======================================== */

// Update this function if phone number changes
function updatePhoneNumber(newNumber) {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');

  phoneLinks.forEach((link) => {
    link.href = `tel:${newNumber}`;
  });

  whatsappLinks.forEach((link) => {
    const encodedNumber = newNumber.replace(/[^\d]/g, "");
    link.href = `https://wa.me/${encodedNumber}?text=Hallo%20Sjoerd%2C%20ik%20ben%20geïnteresseerd%20in%20uw%20diensten`;
  });
}

/* ========================================
   Service Cards Animation
   ======================================== */

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observe portfolio cards
document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

/* ========================================
   Form Data Retrieval (for admin panel later)
   ======================================== */

function getAllFormSubmissions() {
  return JSON.parse(localStorage.getItem("formSubmissions")) || [];
}

function getFormSubmissionsByService(service) {
  const submissions = getAllFormSubmissions();
  return submissions.filter((s) => s.service === service);
}

// Example: Check submissions in console
console.log("Form Submissions API ready");
console.log("Use: getAllFormSubmissions() to retrieve all submissions");
console.log(
  'Use: getFormSubmissionsByService("bestrating") to filter by service',
);

/* ========================================
   Keyboard Navigation
   ======================================== */

// Close mobile menu on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});

/* ========================================
   Window Scroll Effects
   ======================================== */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "var(--shadow-md)";
  } else {
    navbar.style.boxShadow = "var(--shadow-sm)";
  }
});

/* ========================================
   Initialization
   ======================================== */

console.log("Sjoerd van der Veen Website - Initialized");
console.log("Website is ready for interactions");
