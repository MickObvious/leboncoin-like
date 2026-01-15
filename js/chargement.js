document.addEventListener("DOMContentLoaded", function () {

    // Vérifier si les données sont déjà dans le LocalStorage
    if (!localStorage.getItem("utilisateurs")) {
        chargerJSON("data/utilisateurs.json", "utilisateurs");
    }

    if (!localStorage.getItem("annonces")) {
        chargerJSON("data/annonces.json", "annonces");
    }

});

// Fonction qui charge un fichier JSON et le met dans le LocalStorage
function chargerJSON(fichier, cle) {
    fetch(fichier)
        .then(reponse => reponse.json())
        .then(donnees => {
            localStorage.setItem(cle, JSON.stringify(donnees));
        })
        .catch(() => {
            console.log("Erreur lors du chargement de " + fichier);
        });
}
