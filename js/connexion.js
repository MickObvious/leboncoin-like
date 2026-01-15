document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.querySelector(".login-form");
    const email = document.getElementById("email");
    const motdepasse = document.getElementById("password");
    const emailErreur = document.getElementById("emailError");
    const mdpErreur = document.getElementById("passwordError");

    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();

        emailErreur.textContent = "";
        mdpErreur.textContent = "";

        let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

        const utilisateur = utilisateurs.find(u => u.email === email.value);

        if (!utilisateur) {
            emailErreur.textContent = "Aucun compte trouvé.";
            emailErreur.style.color = "red";
            return;
        }

        if (utilisateur.motdepasse !== motdepasse.value) {
            mdpErreur.textContent = "Mot de passe incorrect.";
            mdpErreur.style.color = "red";
            return;
        }

        localStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateur));

        alert("Connexion réussie !");
        window.location.href = "index.html";
    });
});
