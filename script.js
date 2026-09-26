/* =====================================
   NAVBAR
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================
   MOBILE MENU
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuBtn.setAttribute("aria-expanded", isOpen);

  menuBtn.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

navMenu.querySelectorAll(".nav-link, .nav-hire").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================
   PORTFOLIO FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 20);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});


const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");

const viewProjectButtons = document.querySelectorAll(".view-project");

viewProjectButtons.forEach(button => {
    button.addEventListener("click", () => {

        const imagePath = button.getAttribute("data-image");

        if (!imagePath) {
            console.error("Project image path not found");
            return;
        }

        window.open(imagePath, "_blank");
    });
});

function closeProjectModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeProjectModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeProjectModal();
    }
});


function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =====================================
   SERVICE → CONTACT
===================================== */

const serviceButtons =
    document.querySelectorAll(".service-btn");

const serviceSelect =
    document.getElementById("service");


serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedService =
            button.dataset.service;

        serviceSelect.value =
            selectedService;

        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =====================================
   CONTACT FORM
===================================== */


/* =====================================
   FOOTER YEAR
===================================== */

const yearElements =
    document.querySelectorAll(".current-year");

const currentYear =
    new Date().getFullYear();

yearElements.forEach(element => {

    element.textContent = currentYear;

});