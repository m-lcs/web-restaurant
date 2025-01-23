const menuDiv = document.getElementById('menu');

function afficherMenu(json) {
  let html = ''; 

  for (let categorie in json) {
    html += `<h2>${categorie.charAt(0).toUpperCase() + categorie.slice(1)}</h2><ul>`;
    json[categorie].forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
  }

  menuDiv.innerHTML = html;
}

fetch('/json/menu.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur dans le chargement du fichier JSON');
    }
    return response.json(); 
  })
  .then(data => {
    afficherMenu(data); 
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
