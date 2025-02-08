// Fonction pour changer le thème
function changerTheme(theme) {
    // Supprimer toutes les classes de thème existantes
    document.body.classList.remove(
      'theme-hacking', 'theme-rose', 'theme-bleu-rouge', 'theme-neon', 'theme-spacial', 'theme-sakura'
    );
    // Ajouter la classe correspondante au thème choisi
    document.body.classList.add('theme-' + theme);
  }
  
  // Fonction pour afficher/masquer le menu des paramètres
  function toggleSettingsMenu() {
    const themeButton = document.querySelector('.btn-theme');
    const communityButton = document.querySelector('.btn-communaute');
    
    // Afficher/masquer les boutons Thème et Communauté
    if (themeButton.style.display === 'none') {
      themeButton.style.display = 'block';
      communityButton.style.display = 'block';
    } else {
      themeButton.style.display = 'none';
      communityButton.style.display = 'none';
    }
  }
  
  // Fonction pour afficher la popup des thèmes
  function toggleThemePopup() {
    const popup = document.getElementById('theme-popup');
    popup.classList.toggle('open');
  }
  
  // Fonction pour afficher la popup Communauté
  function toggleCommunityPopup() {
    const popup = document.getElementById('community-popup');
    popup.classList.toggle('open');
    // Masquer la popup des thèmes si elle est ouverte
    const themePopup = document.getElementById('theme-popup');
    themePopup.classList.remove('open');
  }
  
  // Fonction pour fermer la popup
  function closePopup() {
    const popup = document.getElementById('theme-popup');
    popup.classList.remove('open');
  }
  
  // Fonction pour fermer la popup communauté
  function closeCommunityPopup() {
    const popup = document.getElementById('community-popup');
    popup.classList.remove('open');
  }
  
