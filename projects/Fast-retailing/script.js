/**
 * Fast Retailing Case Study Page - Vanilla JavaScript
 * Handles navigation, scroll-based section tracking, and UI interactions
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeSectionTracking();
  ensureFirstAnimation();
  initializeScrollBehavior();
});

// ============================================
// NAVIGATION - Active Link Management
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

    // Handle navigation clicks
    link.addEventListener("click", (e) => {
      // Update active state for demo
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// ============================================
// SCROLL-BASED SECTION TRACKING
// ============================================

function initializeSectionTracking() {
  const sections = document.querySelectorAll(".case-section");
  const sidebarNavItems = document.querySelectorAll(".sidebar-nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  // Create an intersection observer to track which section is in view
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");

        // Update sidebar nav
        sidebarNavItems.forEach((item) => {
          const itemSection = item.getAttribute("data-section");
          if (itemSection === sectionId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });

        // Update mobile nav
        mobileNavItems.forEach((item) => {
          const itemSection = item.getAttribute("data-section");
          if (itemSection === sectionId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Also handle manual nav clicks
  const allNavItems = document.querySelectorAll(
    ".sidebar-nav-item, .mobile-nav-item",
  );

  allNavItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetSection = item.getAttribute("data-section");

      // Remove active from all items
      allNavItems.forEach((i) => {
        if (
          i.getAttribute("data-section") === targetSection &&
          (i.classList.contains("sidebar-nav-item") ||
            i.classList.contains("mobile-nav-item"))
        ) {
          // Will be updated by scroll observer
        }
      });
    });
  });
}

// ============================================
// REVEAL ANIMATIONS
// ============================================

function ensureFirstAnimation() {
  // Trigger reveal animations for elements
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

function initializeScrollBehavior() {
  // Handle hash anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#" || href === "#top") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ============================================
// ACCESSIBILITY & UTILITIES
// ============================================

// Keyboard navigation support
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      element.click();
    }
  });
});

// Handle window resize for responsive adjustments
window.addEventListener("resize", () => {
  // Could add logic here for responsive behavior changes if needed
});

// Respect prefers-reduced-motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
  // Could remove animations here if needed
}
