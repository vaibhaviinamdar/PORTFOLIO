// =========================
// NAVBAR TOGGLE (MOBILE)
// =========================

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
    }
  });
}

// =========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

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

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}