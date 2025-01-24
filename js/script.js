// Mise en application des événements : Switch Light & Dark Mode
// Interaction avec le stockage navigateur : Local Storage du choix de thème utilisateur

const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const navbar = document.querySelector('.navbar');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    navbar.classList.add('navbar-dark-mode');
    themeIcon.classList.replace('bi-moon', 'bi-sun');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        themeIcon.classList.replace('bi-moon', 'bi-sun');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        themeIcon.classList.replace('bi-sun', 'bi-moon');
    }
});

// Utilisation des principes de base algorithmique : Calcul de la moyenne des avis clients

function calculerMoyenneAvis(avis) {
    const somme = avis.reduce((total, note) => total + note, 0);
    return (somme / avis.length).toFixed(1);
}

const avisClients = [4, 5, 3, 5, 4, 5, 5, 4, 2, 3, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5];
const moyenneAvis = calculerMoyenneAvis(avisClients);
console.log(`Moyenne des avis : ${moyenneAvis}`);

const avisElement = document.getElementById("moyenne-avis");
if (avisElement) avisElement.textContent = `${moyenneAvis} / 5`;

// Utilisation des principes asynchrones : Changement de couleur des liens de la navbar

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ff5722";
        link.style.transition = "color 0.3s";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "";
    });
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("form-response").textContent = "Votre message a été envoyé avec succès !";
        document.getElementById("form-response").style.color = "green";
    } else {
        document.getElementById("form-response").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("form-response").style.color = "red";
    }
});