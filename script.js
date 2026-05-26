/**
 * Landing Page Vanilla JavaScript
 * Handles flower hover interactions and card management
 */

// ============================================
// STATE MANAGEMENT
// ============================================

let currentOpenCard = null;

// ============================================
// DARK MODE HANDLING
// ============================================

function initializeLightMode() {
  // Force light mode by removing any dark class
  document.documentElement.classList.remove("dark");
  // Disable system dark mode preference
  const html = document.documentElement;
  html.style.colorScheme = "light";
}

// ============================================
// INITIALIZE APP
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initializeLightMode();
  initializeFlowerInteractions();
  initializeNavigation();
  ensureHeroVisibility();
});

// ============================================
// HERO VISIBILITY
// ============================================

function ensureHeroVisibility() {
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.classList.add("is-visible");
  }
}

// ============================================
// FLOWER INTERACTIONS (DESKTOP)
// ============================================

function initializeFlowerInteractions() {
  const ctaButtons = document.querySelectorAll(".flower-cta");
  const flowerImages = document.querySelectorAll(".flower-image-wrapper");
  const overlay = document.getElementById("modal-overlay");
  const closeButtons = document.querySelectorAll(".card-close");

  // Open modal on CTA click
  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const flowerID = btn.getAttribute("data-flower-id");
      openCard(flowerID);
    });
  });

  // Open modal on Flower image click
  flowerImages.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      const flowerWrapper = img.closest(".flower-wrapper");
      const flowerID = flowerWrapper.getAttribute("data-flower-id");
      openCard(flowerID);
    });
  });

  // Close modal on overlay click
  if (overlay) {
    overlay.addEventListener("click", () => {
      closeCard();
    });
  }

  // Close modal on close button click
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeCard();
    });
  });
}

function openCard(flowerID) {
  // Close any previously opened card
  closeCard();

  // Open the new card
  const card = document.getElementById(`card-${flowerID}`);
  const overlay = document.getElementById("modal-overlay");
  const wrapper = card ? card.closest(".flower-wrapper") : null;

  if (card) {
    card.classList.add("is-active");
  }
  if (overlay) {
    overlay.classList.add("is-active");
  }
  if (wrapper) {
    wrapper.classList.add("is-active");
  }

  currentOpenCard = flowerID;
}

function closeCard() {
  if (currentOpenCard) {
    const card = document.getElementById(`card-${currentOpenCard}`);
    const overlay = document.getElementById("modal-overlay");
    const wrapper = card ? card.closest(".flower-wrapper") : null;

    if (card) {
      card.classList.remove("is-active");
    }
    if (overlay) {
      overlay.classList.remove("is-active");
    }
    if (wrapper) {
      wrapper.classList.remove("is-active");
    }
    currentOpenCard = null;
  }
}




// ============================================
// NAVIGATION ACTIVE STATE
// ============================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const href = link.getAttribute("data-path");

    // Determine if link is active
    if (
      (href === "/" && currentPath === "/") ||
      (href !== "/" && currentPath.startsWith(href))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Handle navigation clicks (for demo purposes)
    link.addEventListener("click", (e) => {
      // In a real app, use router navigation here
      // For now, just update active state
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// ============================================
// ACCESSIBILITY & UTILITIES
// ============================================

// Ensure navigation links are properly focused
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      element.click();
    }
  });
});

// Handle window resize to update responsive behavior
window.addEventListener("resize", () => {
  // Could add logic here to handle responsive behavior changes
});

// Reduce motion preference
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
