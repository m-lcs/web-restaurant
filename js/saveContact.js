document.getElementById("name").addEventListener("input", function () {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    console.log("Nom sauvegardé :", name);
});

document.getElementById("email").addEventListener("input", function () {
    const email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    console.log("Email sauvegardé :", email);
});

window.onload = function () {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    
    if (savedName) {
        document.getElementById("name").value = savedName;
        console.log("Nom récupéré :", savedName);
    }
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        console.log("Email récupéré :", savedEmail);
    }
};
