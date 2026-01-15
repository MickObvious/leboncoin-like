document.addEventListener("DOMContentLoaded", function () {

    const utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte"));
    const zoneBienvenue = document.getElementById("bienvenue");

    if (utilisateur && zoneBienvenue) {
        zoneBienvenue.textContent = "Bienvenue " + utilisateur.prenom + " !";
    }

});
