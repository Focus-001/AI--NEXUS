// Fonction pour changer de thème et le sauvegarder
function changerTheme(theme) {
    // Supprimer toutes les classes de thème existantes
    document.body.classList.remove(
        'theme-hacking',
        'theme-rose',
        'theme-bleu-rouge',
        'theme-neon',
        'theme-spacial',
        'theme-sakura'
    );

    // Ajouter la classe du thème choisi
    document.body.classList.add('theme-' + theme);

    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', theme);
}

// Appliquer le thème sauvegardé au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        changerTheme(savedTheme);
    }
});

// Fonction pour afficher/masquer le menu des paramètres
function toggleSettingsMenu() {
    document.getElementById('settings-menu').classList.toggle('open');
}

// Fonction pour afficher/masquer la popup des thèmes
function toggleThemePopup() {
    document.getElementById('theme-popup').classList.toggle('open');
    document.getElementById('settings-menu').classList.remove('open');
}

// Fonction pour fermer la popup des thèmes
function closePopup() {
    document.getElementById('theme-popup').classList.remove('open');
}

// Fermer la popup et le menu si on clique en dehors
document.addEventListener("click", function (event) {
    const menu = document.getElementById('settings-menu');
    const popup = document.getElementById('theme-popup');
    const settingsButton = document.querySelector(".btn-settings");

    if (!menu.contains(event.target) && !settingsButton.contains(event.target)) {
        menu.classList.remove('open');
    }
    if (!popup.contains(event.target) && event.target.className !== "btn-theme") {
        popup.classList.remove('open');
    }
});
