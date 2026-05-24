// Initialize interactivity for the "à propos" page
// Note: As requested, no animations yet - next step

document.addEventListener("DOMContentLoaded", function () {
  // Skills tabs functionality
  const skillsTabs = document.querySelectorAll(".skills-tab");
  const skillsPanels = document.querySelectorAll(".skills-panel");

  skillsTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all tabs and panels
      skillsTabs.forEach((t) => t.classList.remove("active"));
      skillsPanels.forEach((p) => p.classList.remove("active"));

      // Add active class to clicked tab and corresponding panel
      this.classList.add("active");
      const activePanel = document.getElementById(tabId);
      if (activePanel) {
        activePanel.classList.add("active");
      }
    });
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Update active nav link based on scroll position
  function updateActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Check which section is in view
    const sections = document.querySelectorAll("section[id]");
    let currentSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) {
        currentSection = section.id;
      }
    });

    // Highlight corresponding nav link
    if (currentSection) {
      const activeLink = document.querySelector(
        `nav a[href="#${currentSection}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", updateActiveNavLink);

  // Accordion functionality
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all other items
      accordionItems.forEach((i) => {
        i.classList.remove("active");
        const icon = i.querySelector(".accordion-icon");
        if (icon) icon.textContent = "+";
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add("active");
        const icon = item.querySelector(".accordion-icon");
        if (icon) icon.textContent = "−"; // Using minus sign
      }
    });
  });
});
