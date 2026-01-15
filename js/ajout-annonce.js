document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.getElementById("form-annonce");

    if (!formulaire) return;

    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();

        const titre = document.getElementById("titre").value;
        const categorie = document.getElementById("categorie").value;
        const prix = document.getElementById("prix").value;
        const ville = document.getElementById("ville").value;
        const photo = document.getElementById("photo").value;
        const description = document.getElementById("description").value;

        const utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte"));

        if (!utilisateur) {
            alert("Vous devez être connecté pour publier une annonce.");
            return;
        }

        let annonces = JSON.parse(localStorage.getItem("annonces")) || [];

        const nouvelleAnnonce = {
            titre: titre,
            categorie: categorie,
            prix: prix,
            ville: ville,
            photo: photo,
            description: description,
            vendeur: utilisateur.email
        };

        annonces.push(nouvelleAnnonce);

        localStorage.setItem("annonces", JSON.stringify(annonces));

        alert("Annonce publiée !");
        window.location.reload();
    });
});
