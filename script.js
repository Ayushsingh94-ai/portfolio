// ===== Mobile menu =====
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Let keyboard users dismiss the open menu without moving focus.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.focus();
  }
});

// Close the menu after a link is clicked
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
});

// ===== Theme toggle =====
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
}

// Read the saved choice (if any). Default is dark.
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch (error) {
  // Storage may be blocked. The site still works.
}
applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", function () {
  const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  try {
    localStorage.setItem("theme", newTheme);
  } catch (error) {
    // Ignore. The theme just won't be remembered.
  }
});

// ===== Fade-in on scroll =====
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const items = document.querySelectorAll(".section, .highlights");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function (item) {
    item.classList.add("reveal");
    observer.observe(item);
  });
}
