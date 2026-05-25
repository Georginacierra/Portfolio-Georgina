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
  const flowers = document.querySelectorAll(".flower-wrapper");

  flowers.forEach((flower) => {
    const flowerID = flower.getAttribute("data-flower-id");
    const closeButton = flower.querySelector(".card-close");

    // Hover enter
    flower.addEventListener("mouseenter", () => {
      openCard(flowerID);
    });

    // Hover leave
    flower.addEventListener("mouseleave", () => {
      if (currentOpenCard === flowerID) {
        closeCard();
      }
    });

    // Close button click
    if (closeButton) {
      closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeCard();
      });
    }
  });
}

function openCard(flowerID) {
  // Close any previously opened card
  if (currentOpenCard && currentOpenCard !== flowerID) {
    const prevCard = document.querySelector(
      `.flower-wrapper[data-flower-id="${currentOpenCard}"] .flower-card`,
    );
    if (prevCard) {
      prevCard.classList.remove("visible");
    }
  }

  // Open the new card
  const card = document.querySelector(
    `.flower-wrapper[data-flower-id="${flowerID}"] .flower-card`,
  );
  if (card) {
    card.classList.add("visible");
  }

  currentOpenCard = flowerID;
}

function closeCard() {
  if (currentOpenCard) {
    const card = document.querySelector(
      `.flower-wrapper[data-flower-id="${currentOpenCard}"] .flower-card`,
    );
    if (card) {
      card.classList.remove("visible");
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
