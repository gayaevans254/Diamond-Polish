
// Initialize AOS animations
AOS.init({
    duration: 850,
    easing: "ease-in-out",
    once: true,
    offset: 70,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
});

// Navbar background and shadow on scroll
const navbar = document.querySelector(".custom-navbar");

function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// Automatically close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navCollapse = document.getElementById("mainNav");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
    });
});

// Highlight the current navigation section
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

// Contact form confirmation (demo route)
const params = new URLSearchParams(window.location.search);

if (params.get("contact") === "success") {
    const form = document.querySelector(".contact-form-card");

    if (form) {
        const alert = document.createElement("div");
        alert.className = "alert alert-success";
        alert.setAttribute("role", "status");
        alert.textContent =
            "Your enquiry was received by the demo server. Email delivery is not configured yet.";

        form.prepend(alert);
    }

    window.history.replaceState({}, "", "/#contact");
}
