
// On récupère les paramètres envoyés dans l'URL
const parametres = new URLSearchParams(window.location.search);

// On récupère chaque information du formulaire
const nom = parametres.get("name");
const prenom = parametres.get("firstname");
const naissance = parametres.get("birthday");
const adresse = parametres.get("address");
const email = parametres.get("email");

// On récupère la zone où afficher les résultats
const resultat = document.getElementById("resultat");


// On affiche les informations récupérées dans l'URL
resultat.innerHTML = `
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Prénom :</strong> ${prenom}</p>
    <p><strong>Date de naissance :</strong> ${naissance}</p>

    <!-- L'adresse devient un lien vers Google Maps -->
    <p><strong>Adresse :</strong>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}" target="_blank">
            ${adresse}
        </a>
    </p>

    <!-- L'email devient un lien pour envoyer un message -->
    <p><strong>Email :</strong>
       <a href="mailto:${email}">${email}</a>
    </p>
`;

