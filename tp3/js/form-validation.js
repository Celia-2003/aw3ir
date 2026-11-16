
// Fonction pour afficher une fenêtre modale Bootstrap
function afficherModal(titre, message) {

    // Modifier le titre de la fenêtre
    document.querySelector("#exampleModalLabel").textContent = titre;

    // Modifier le contenu de la fenêtre
    document.querySelector(".modal-body").textContent = message;

    // Récupérer la fenêtre modale
    const modalElement = document.querySelector("#myModal");

    // Créer et afficher la modale
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Attendre le chargement complet de la page
window.onload = function () {

    // Récupérer le formulaire
    const formulaire = document.querySelector("#formulaire");

    // Intercepter l'envoi du formulaire
    formulaire.addEventListener("submit", function (event) {

        // Empêcher le rechargement de la page
        event.preventDefault();

        // Récupérer les valeurs des champs
        const nom = document.querySelector("#name").value.trim();
        const prenom = document.querySelector("#firstname").value.trim();
        const anniversaire = document.querySelector("#birthday").value;
        const adresse = document.querySelector("#address").value.trim();
        const email = document.querySelector("#email").value.trim();

        console.log("Formulaire soumis !");

        // Vérifier si un champ est vide
        if (nom === "" || prenom === "" || anniversaire === "" ||
            adresse === "" || email === "") {

            afficherModal(
                "Erreur dans le formulaire",
                "Tous les champs sont obligatoires !"
            );
            return;
        }

        // Vérifier que les champs texte contiennent au moins 5 caractères
        if (nom.length < 5 || prenom.length < 5 || adresse.length < 5) {

            afficherModal(
                "Erreur dans le formulaire",
                "Les champs texte doivent contenir au moins 5 caractères !"
            );
            return;
        }

        // Vérifier le format de l'adresse e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {

            afficherModal(
                "Erreur dans le formulaire",
                "Veuillez saisir une adresse e-mail valide !"
            );
            return;
        }

        // Récupérer la date du jour
        const aujourdHui = new Date();
        aujourdHui.setHours(0, 0, 0, 0);

        // Convertir la date de naissance
        const dateNaissance = new Date(anniversaire + "T00:00:00");

        // Vérifier que la date n'est pas dans le futur
        if (dateNaissance > aujourdHui) {

            afficherModal(
                "Erreur dans le formulaire",
                "La date de naissance ne peut pas être dans le futur !"
            );
            return;
        }

        // Afficher les informations dans la fenêtre modale
        const modalBody = document.querySelector(".modal-body");

        // Ajouter la date de naissance et le texte de présentation
        modalBody.textContent = "Vous êtes né(e) le " + anniversaire
            + " et vous habitez à ";

        // Créer un lien vers Google Maps
        const lien = document.createElement("a");

        lien.href = "https://www.google.com/maps/search/?api=1&query="
            + encodeURIComponent(adresse);

        lien.textContent = adresse;
        lien.target = "_blank";

        // Ajouter le lien dans la fenêtre modale
        modalBody.appendChild(lien);

        // Modifier le titre de la fenêtre modale
        document.querySelector("#exampleModalLabel").textContent =
            "Bienvenue " + prenom;

        // Afficher la fenêtre modale sans effacer son contenu
        const modal = new bootstrap.Modal(
            document.querySelector("#myModal")
        );

        modal.show();
    });
};
