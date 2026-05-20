/* ========================================
   CONFIG.JS - Centralized Configuration
   Easy to update contact info, colors, etc.
   ======================================== */

const CONFIG = {
  // Business Information
  business: {
    name: "Vdveen",
    description: "Hovenier & Bestrating",
    region: "Noord-Nederland en omgeving",
  },

  // Contact Information
  contact: {
    phone: "+31645570389", // Update here
    phoneFormatted: "+31 6 45570389",
    email: "info@vdveenhovenier.nl",
    whatsapp: "31645570389", // Without +
  },

  // Social Media Links
  social: {
    tiktok: "https://www.tiktok.com", // Update here
    instagram: "https://www.instagram.com", // Optional
    facebook: "https://www.facebook.com", // Optional
  },

  // Services
  services: [
    {
      id: "bestrating",
      name: "Bestrating",
      icon: "◆",
      description:
        "Vakkundig aanleggen van betonstraten, grindpaden en keien. Duurzaam en netjes afgewerkt.",
    },
    {
      id: "tuinaanleg",
      name: "Tuinaanleg",
      icon: "🌿",
      description:
        "Complete tuinontwerp en aanleg, van grondwerk tot afwerking. Uw wensen worden werkelijkheid.",
    },
    {
      id: "hovenierswerk",
      name: "Hovenierswerk",
      icon: "✂",
      description:
        "Professionele tuinonderhoud, snoeien en plantwerk. Uw tuin het hele jaar mooi.",
    },
    {
      id: "opritten",
      name: "Opritten",
      icon: "↔",
      description:
        "Sterke, duurzame opritten voor uw inrit. Functioneel en netjes aangelegd.",
    },
    {
      id: "terrassen",
      name: "Terrassen",
      icon: "☕",
      description:
        "Gezellige terrassen voor uw tuin. Professioneel aangelegd en afgewerkt.",
    },
    {
      id: "paden",
      name: "Paden",
      icon: "🛤",
      description:
        "Functionele paden door uw tuin of bedrijfsterrein. Mooi en praktisch.",
    },
    {
      id: "onderhoud",
      name: "Onderhoud & Herstel",
      icon: "🔧",
      description:
        "Herstel en onderhoud van bestaande tuinen en terrassen. Vakkundig en netjes.",
    },
  ],

  // Color Scheme (matches CSS variables)
  colors: {
    primary: "#f5f5f5",
    secondary: "#666666",
    accent: "#ff9d4f",
    accentDark: "#ff8533",
    lightBg: "#f9f7f4",
    white: "#ffffff",
    lightGray: "#e8e6e3",
    border: "#f0ede9",
    success: "#27ae60",
  },

  // WhatsApp Message Templates
  messages: {
    default: "Hallo Vdveen, ik ben geïnteresseerd in uw diensten",
    inquiry: "Hallo Vdveen, ik wil graag een offerte voor mijn project",
    contact: "Hallo Vdveen, ik wil graag contact met u opnemen",
  },

  // Form Configuration
  form: {
    successMessage:
      "Bedankt voor uw aanvraag! Vdveen neemt binnen 1–2 werkdagen contact met u op.",
    errorMessage:
      "Er is een fout opgetreden. Vul alstublieft alle verplichte velden in.",
    responseTime: "1–2 werkdagen",
  },

  // API Endpoints (for future backend integration)
  api: {
    submitForm: "/api/submit-form",
    getSubmissions: "/api/submissions",
    sendEmail: "/api/send-email",
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Add Google Analytics ID
    trackEvents: true,
    trackPageViews: true,
  },
};

/* ========================================
   Helper Functions
   ======================================== */

// Generate WhatsApp URL
function getWhatsAppURL(message = CONFIG.messages.default) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodedMessage}`;
}

// Generate Phone Link
function getPhoneLink() {
  return `tel:${CONFIG.contact.phone}`;
}

// Generate Email Link
function getEmailLink() {
  return `mailto:${CONFIG.contact.email}`;
}

// Get Service by ID
function getServiceById(id) {
  return CONFIG.services.find((service) => service.id === id);
}

// Get All Services
function getAllServices() {
  return CONFIG.services;
}

/* ========================================
   Update Functions
   ======================================== */

// Update Contact Information in DOM
function updateContactInfo() {
  // Update phone links
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.href = getPhoneLink();
    if (!link.textContent.includes("0")) {
      link.textContent = CONFIG.contact.phoneFormatted;
    }
  });

  // Update WhatsApp links
  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    link.href = getWhatsAppURL();
  });

  // Update email links
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = getEmailLink();
  });

  // Update business name
  document.querySelectorAll(".logo-primary").forEach((el) => {
    el.textContent = CONFIG.business.name;
  });

  // Update business description
  document.querySelectorAll(".logo-secondary").forEach((el) => {
    el.textContent = CONFIG.business.description;
  });

  console.log("Contact info updated from CONFIG");
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateContactInfo);

/* ========================================
   Export for Use in Other Files
   ======================================== */

// Usage examples:
// CONFIG.contact.phone
// getWhatsAppURL()
// getPhoneLink()
// CONFIG.services
// getServiceById('bestrating')
