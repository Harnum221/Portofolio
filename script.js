
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Harnum berhasil dimuat!");
});



// ================= MOBILE NAVIGATION =================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );

});


// ================= CLOSE MENU AFTER CLICK =================

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Buka menu navigasi"
        );

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection = section.id;
        }

    });

    // Jika sudah sampai bagian bawah halaman
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = "contact";
    }

    navigationItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);

