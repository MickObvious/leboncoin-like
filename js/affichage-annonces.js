document.addEventListener("DOMContentLoaded", function () {

    const zone = document.getElementById("liste-annonces");
    if (!zone) return;

    let annonces = JSON.parse(localStorage.getItem("annonces")) || [];

    annonces.forEach(a => {
        const bloc = document.createElement("div");
        bloc.classList.add("carte-annonce");

        bloc.innerHTML = `
            <h3>${a.titre}</h3>
            <p><strong>Catégorie :</strong> ${a.categorie}</p>
            <p><strong>Prix :</strong> ${a.prix} €</p>
            <p><strong>Ville :</strong> ${a.ville}</p>
            <p>${a.description}</p>
        `;

        zone.appendChild(bloc);
    });

});
