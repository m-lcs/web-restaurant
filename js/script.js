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
