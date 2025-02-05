// Fonction pour changer le thème
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

    // Ajouter la classe correspondant au thème choisi
    document.body.classList.add('theme-' + theme);
}

// Fonction pour afficher/masquer le menu des paramètres
function toggleSettingsMenu() {
    const menu = document.getElementById('settings-menu');
    menu.classList.toggle('open');
}

// Fonction pour afficher la popup des thèmes
function toggleThemePopup() {
    const popup = document.getElementById('theme-popup');
    popup.classList.toggle('open');

    // Masquer le menu des paramètres quand la popup des thèmes est ouverte
    const menu = document.getElementById('settings-menu');
    menu.classList.remove('open');
}

// Fonction pour fermer la popup
function closePopup() {
    const popup = document.getElementById('theme-popup');
    popup.classList.remove('open');
}
