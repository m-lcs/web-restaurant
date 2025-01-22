// Sélection des éléments
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Charger le thème actuel depuis le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('bi-moon', 'bi-sun');
}

// Alterner entre clair et sombre au clic
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Modifier l'icône
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bi-moon', 'bi-sun');
        localStorage.setItem('theme', 'dark'); // Sauvegarde le thème sombre
    } else {
        themeIcon.classList.replace('bi-sun', 'bi-moon');
        localStorage.setItem('theme', 'light'); // Sauvegarde le thème clair
    }
});
