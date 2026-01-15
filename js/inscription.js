document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.querySelector(".login-form");

    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();
        effacerErreurs();

        let valide = true;

        const nom = document.getElementById("nom1");
        const prenom = document.getElementById("prenom");
        const ville = document.getElementById("ville");
        const naissance = document.getElementById("dateBirth");
        const email = document.getElementById("email");
        const motdepasse = document.getElementById("password");
        const confirmation = document.getElementById("password1");

        const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexMDP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        [nom, prenom, ville].forEach(champ => {
            if (!regexNom.test(champ.value.trim())) {
                afficherErreur(champ, "Seulement des lettres.");
                valide = false;
            }
        });

        const dateN = new Date(naissance.value);
        const aujourdHui = new Date();
        const age = aujourdHui.getFullYear() - dateN.getFullYear();

        if (!naissance.value || dateN >= aujourdHui || age < 18) {
            afficherErreur(naissance, "Vous devez avoir 18 ans.");
            valide = false;
        }

        if (!regexEmail.test(email.value)) {
            afficherErreur(email, "Email invalide.");
            valide = false;
        }

        if (!regexMDP.test(motdepasse.value)) {
            afficherErreur(motdepasse, "Mot de passe trop faible.");
            valide = false;
        }

        if (motdepasse.value !== confirmation.value) {
            afficherErreur(confirmation, "Les mots de passe ne correspondent pas.");
            valide = false;
        }

        if (!valide) return;

        let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

        const existe = utilisateurs.some(u => u.email === email.value);

        if (existe) {
            afficherErreur(email, "Email déjà utilisé.");
            return;
        }

        const nouvelUtilisateur = {
            nom: nom.value,
            prenom: prenom.value,
            ville: ville.value,
            naissance: naissance.value,
            email: email.value,
            motdepasse: motdepasse.value
        };

        utilisateurs.push(nouvelUtilisateur);

        localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

        alert("Inscription réussie !");
        window.location.href = "connexion.html";
    });

    function afficherErreur(champ, message) {
        const small = champ.nextElementSibling;
        small.textContent = message;
        small.style.color = "red";
    }

    function effacerErreurs() {
        document.querySelectorAll(".error").forEach(e => e.textContent = "");
    }
});
