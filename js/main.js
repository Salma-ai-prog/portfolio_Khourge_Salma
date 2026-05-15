// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
// =========================
// ANIMATION SCROLL
// =========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});
// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");

const messageInput = document.querySelector("#message");

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(
        nameInput.value === "" ||
        emailInput.value === "" ||
        messageInput.value === ""
    ){

        formMessage.textContent =
        "Veuillez remplir tous les champs.";

        formMessage.style.color = "red";

    }else{

        formMessage.textContent =
        "Message envoyé avec succès !";

        formMessage.style.color = "lightgreen";

        form.reset();

    }

});
// =========================
// SCROLL ANIMATION
// =========================

const hiddenElements = document.querySelectorAll(
    ".skill-card, .project-card"
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
// =========================
// FETCH GITHUB API
// =========================

const reposContainer = document.querySelector(
    ".repos-container"
);
const loader = document.querySelector(".loader");

async function getRepositories(){

    try{

        const response = await fetch(
            "https://api.github.com/users/Salma/repos"
        );

        const data = await response.json();
        loader.style.display = "none";
        data.slice(0,6).forEach((repo) => {

            reposContainer.innerHTML += `
            
            <div class="repo-card">

                <h3>${repo.name}</h3>

                <p>${repo.description || "Pas de description"}</p>

                <br>

                <a href="${repo.html_url}" target="_blank">
                    Voir Repository
                </a>

            </div>
            
            `;

        });

    }catch(error){

       loader.textContent =
        "Erreur de chargement des données.";

    }

}

getRepositories();
// =========================
// NAVBAR SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});