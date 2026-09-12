// ==============================
// SAFE PAGE LOADER
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {
            loader.classList.add("hide");
        }, 1800);

    }

});
// ==============================
// PAGE LOADER
// ==============================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 1800);
    }
});


// ==============================
// CUSTOM CURSOR
// ==============================

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const clickableElements = document.querySelectorAll(
    "a, button, input, textarea"
);

clickableElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-hover");
    });
});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".section, .hero-terminal, .project-card, .skill-card, .certificate-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });
});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


// ==============================
// MAGNETIC BUTTON EFFECT
// ==============================

const magneticButtons = document.querySelectorAll(
    ".btn, .nav-button, .project-link"
);

magneticButtons.forEach(function (button) {

    button.addEventListener("mousemove", function (e) {

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            "translate(" + (x * 0.15) + "px, " +
            (y * 0.15) + "px)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "translate(0, 0)";
    });
});


// ==============================
// BACKGROUND GLOW EFFECT
// ==============================

const glowOne = document.querySelector(".glow-one");
const glowTwo = document.querySelector(".glow-two");

document.addEventListener("mousemove", function (e) {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (glowOne) {
        glowOne.style.transform =
            "translate(" + (x * 40) + "px, " +
            (y * 40) + "px)";
    }

    if (glowTwo) {
        glowTwo.style.transform =
            "translate(" + (-x * 40) + "px, " +
            (-y * 40) + "px)";
    }
});


// ==============================
// CONTACT FORM
// ==============================


// ==============================
// MOBILE HAMBURGER MENU
// ==============================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

if (hamburger && mobileMenu) {

    hamburger.addEventListener("click", function () {

        hamburger.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });


    // Close menu after clicking a link

    mobileMenuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            hamburger.classList.remove("active");

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

}