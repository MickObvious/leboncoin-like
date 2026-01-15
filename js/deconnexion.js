document.addEventListener("DOMContentLoaded", function () {

    const boutonDeconnexion = document.getElementById("deconnexion");

    if (boutonDeconnexion) {
        boutonDeconnexion.addEventListener("click", function () {

            // Supprimer l'utilisateur connecté
            localStorage.removeItem("utilisateurConnecte");

            alert("Vous êtes déconnecté.");
            window.location.href = "index.html";
        });
    }

});
