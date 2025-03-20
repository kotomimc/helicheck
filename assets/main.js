document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 115) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const servicesSection = document.querySelector(".services");
    const cards = document.querySelectorAll(".services .card");

    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", function () {
            servicesSection.classList.add(`service0${index + 1}`);
        });

        card.addEventListener("mouseleave", function () {
            servicesSection.classList.remove(`service0${index + 1}`);
        });
    });
});
