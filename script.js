/* ========================================
   Video Modal Functions
   ======================================== */

function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");

  // Set TikTok embed URL
  videoFrame.src = `https://www.tiktok.com/embed/v2/${videoId}`;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");

  // Hide modal
  modal.classList.remove("active");
  videoFrame.src = ""; // Clear iframe
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the content
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeVideoModal();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeVideoModal();
      }
    });
  }
});

/* ========================================
   Booking System - Service Categories
   ======================================== */

const serviceCategories = {
  bestratingswerk: [
    { value: "grondwerk", label: "Grondwerk" },
    { value: "straattuin", label: "Straattuin" },
    { value: "bestrating", label: "Bestrating" },
    { value: "opritten", label: "Opritten" },
    { value: "terrassen", label: "Terrassen" },
    { value: "paden", label: "Paden" },
    { value: "anders-bestrating", label: "Anders" },
  ],
  hovenierswerk: [
    { value: "tuinontwerp", label: "Tuinontwerp" },
    { value: "tuinonderhoud", label: "Tuinonderhoud" },
    { value: "siertuin", label: "Siertuin" },
    { value: "tuinaanleg", label: "Tuinaanleg" },
    { value: "beplanting", label: "Beplanting" },
    { value: "onderhoud", label: "Onderhoud" },
    { value: "anders-hovenierswerk", label: "Anders" },
  ],
};

/* ========================================
   Booking Form Navigation
   ======================================== */

let currentStep = 1;
let bookingData = {};

function goToStep(step) {
  // Validate current step before moving
  if (!validateStep(currentStep)) {
    return;
  }

  // Hide all steps
  document.querySelectorAll(".form-step").forEach((stepEl) => {
    stepEl.classList.add("hidden");
  });

  // Show new step
  const nextStepEl = document.getElementById(`step-${step}`);
  if (nextStepEl) {
    nextStepEl.classList.remove("hidden");
    currentStep = step;

    // Update service dropdown if main category changed
    if (step === 2) {
      updateServiceOptions();
    }

    // Set minimum date to today
    if (step === 3) {
      const dateInput = document.getElementById("bookingDate");
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    // Scroll to form
    document.querySelector(".booking-form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function validateStep(step) {
  const mainCategory = document.querySelector(
    'input[name="mainCategory"]:checked',
  );
  const serviceType = document.getElementById("serviceType");
  const bookingDate = document.getElementById("bookingDate");
  const bookingTime = document.getElementById("bookingTime");

  switch (step) {
    case 1:
      if (!mainCategory) {
        showBookingMessage("Selecteer alstublieft een categorie.", "error");
        return false;
      }
      // Store main category
      bookingData.mainCategory = mainCategory.value;
      return true;

    case 2:
      if (!serviceType.value) {
        showBookingMessage("Selecteer alstublieft een soort klus.", "error");
        return false;
      }
      bookingData.serviceType = serviceType.value;
      return true;

    case 3:
      if (!bookingDate.value || !bookingTime.value) {
        showBookingMessage("Selecteer alstublieft een datum en tijd.", "error");
        return false;
      }
      bookingData.date = bookingDate.value;
      bookingData.time = bookingTime.value;
      return true;

    case 4:
      const name = document.getElementById("customerName");
      const phone = document.getElementById("customerPhone");
      const email = document.getElementById("customerEmail");
      const location = document.getElementById("customerLocation");
      const preference = document.getElementById("contactPreference");

      if (!name.value || !phone.value || !email.value || !location.value) {
        showBookingMessage(
          "Vul alstublieft alle verplichte contactgegevens in.",
          "error",
        );
        return false;
      }

      if (!validateEmail(email.value)) {
        showBookingMessage(
          "Voer alstublieft een geldig e-mailadres in.",
          "error",
        );
        return false;
      }

      bookingData.customerName = name.value;
      bookingData.customerPhone = phone.value;
      bookingData.customerEmail = email.value;
      bookingData.customerLocation = location.value;
      bookingData.customerAddress =
        document.getElementById("customerAddress").value || "Niet opgegeven";
      bookingData.contactPreference = preference.value;
      return true;

    case 5:
      const description = document.getElementById("klusDescription");
      if (!description.value) {
        showBookingMessage(
          "Geef alstublieft een beschrijving van uw klus.",
          "error",
        );
        return false;
      }
      bookingData.description = description.value;
      bookingData.timestamp = new Date().toISOString();
      return true;

    default:
      return true;
  }
}

function updateServiceOptions() {
  const mainCategory = document.querySelector(
    'input[name="mainCategory"]:checked',
  ).value;
  const serviceSelect = document.getElementById("serviceType");

  // Clear existing options
  serviceSelect.innerHTML =
    '<option value="">-- Selecteer een klus --</option>';

  // Add category-specific options
  const services = serviceCategories[mainCategory];
  services.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.value;
    option.textContent = service.label;
    serviceSelect.appendChild(option);
  });
}

/* ========================================
   Booking Form Submission
   ======================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Final validation
    const description = document.getElementById("klusDescription");
    if (!description.value) {
      showBookingMessage(
        "Geef alstublieft een beschrijving van uw klus.",
        "error",
      );
      return;
    }

    bookingData.description = description.value;
    bookingData.timestamp = new Date().toISOString();

    // Store booking in localStorage
    storeBookingData(bookingData);

    // Show success message
    showBookingMessage(
      "Bedankt voor uw afspraakaanvraag! Sjoerd neemt binnen 1–2 werkdagen contact met u op.",
      "success",
    );

    console.log("Booking data:", bookingData);

    // Reset form
    bookingForm.reset();
    document.querySelectorAll(".form-step").forEach((stepEl) => {
      stepEl.classList.add("hidden");
    });
    document.getElementById("step-1").classList.remove("hidden");
    currentStep = 1;

    // Scroll to message
    const messageEl = document.getElementById("bookingMessage");
    messageEl.scrollIntoView({ behavior: "smooth", block: "start" });

    // Reset message after 5 seconds
    setTimeout(() => {
      messageEl.style.display = "none";
    }, 8000);
  });
}

/* ========================================
   Booking Message Display
   ======================================== */

function showBookingMessage(message, type) {
  const messageEl = document.getElementById("bookingMessage");
  messageEl.textContent = message;
  messageEl.className = `booking-message ${type}`;
  messageEl.style.display = "block";
}

/* ========================================
   Local Storage for Booking Data
   ======================================== */

function storeBookingData(data) {
  // Get existing bookings
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Add new booking
  bookings.push(data);

  // Store back
  localStorage.setItem("bookings", JSON.stringify(bookings));

  console.log("Booking stored:", data);
  console.log("Total bookings:", bookings.length);
}

/* ========================================
   Email Validation
   ======================================== */

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ========================================
   Mobile Navigation Toggle
   ======================================== */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
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
}

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
