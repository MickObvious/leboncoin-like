document.addEventListener("DOMContentLoaded", function () {

    const utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte"));

    const zoneDepot = document.getElementById("zone-depot");
    const zoneNonConnecte = document.getElementById("zone-non-connecte");

    if (utilisateur) {
        // L'utilisateur est connecté → il peut déposer une annonce
        zoneDepot.style.display = "block";
        zoneNonConnecte.style.display = "none";
    } else {
        // Pas connecté → on cache le formulaire
        zoneDepot.style.display = "none";
        zoneNonConnecte.style.display = "block";
    }

});
