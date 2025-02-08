document.addEventListener('DOMContentLoaded', () => {
  // Effet parallax léger sur le SVG de la section hero
  const heroSvg = document.querySelector('.hero-svg');
  if (heroSvg) {
    window.addEventListener('scroll', () => {
      let offset = window.pageYOffset;
      heroSvg.style.transform = `translateY(${offset * 0.5}px)`;
    });
  }

  // Configuration des thèmes
  const themes = {
    hacking: {
      name: 'Thème Hacking',
      class: '',
      style: { bg: '#003300', color: '#00ff00' }
    },
    pink: {
      name: 'Thème Rose',
      class: 'theme-pink',
      style: { bg: '#ff69b4', color: '#fff' }
    },
    bluered: {
      name: 'Thème Bleu-Rouge',
      class: 'theme-bluered',
      style: { bg: '#000428', color: '#ff3366' }
    },
    neon: {
      name: 'Thème Néon',
      class: 'theme-neon',
      style: { bg: '#000', color: '#ff00ff' }
    },
    space: {
      name: 'Thème Spatial',
      class: 'theme-space',
      style: { bg: '#000033', color: '#4a90e2' }
    },
    sakura: {
      name: 'Thème Sakura',
      class: 'theme-sakura',
      style: { bg: '#fde2e4', color: '#594a4e' }
    }
  };

  // Fonction pour changer de thème
  function setTheme(themeName) {
    if (!themes[themeName]) {
      console.error(`Theme "${themeName}" not found`);
      themeName = 'hacking';
    }

    Object.values(themes).forEach(theme => {
      if (theme.class) {
        document.body.classList.remove(theme.class);
      }
    });

    if (themes[themeName].class) {
      document.body.classList.add(themes[themeName].class);
    }

    localStorage.setItem('theme', themeName);
  }

  // Handle settings dropdown
  const settingsBtn = document.querySelector('.settings-btn');
  const settingsDropdown = document.querySelector('.settings-dropdown');

  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!settingsBtn.contains(e.target) && !settingsDropdown.contains(e.target)) {
      settingsDropdown.classList.remove('show');
    }
  });

  // Theme button click handler
  const themeBtn = document.querySelector('.theme-btn-dropdown');
  themeBtn.addEventListener('click', () => {
    document.getElementById('themeModal').style.display = 'flex';
    settingsDropdown.classList.remove('show');
  });

  // Create and handle modal
  function createThemeModal() {
    const modalHTML = `
      <div class="modal-overlay" id="themeModal">
        <div class="modal">
          <button class="close-modal">&times;</button>
          <h2>Choisir un thème</h2>
          <div class="theme-grid"></div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const themeGrid = document.querySelector('.theme-grid');
    Object.entries(themes).forEach(([key, theme]) => {
      const button = document.createElement('button');
      button.className = 'theme-btn';
      button.textContent = theme.name;
      button.style.backgroundColor = theme.style.bg;
      button.style.color = theme.style.color;
      button.addEventListener('click', () => {
        setTheme(key);
        document.getElementById('themeModal').style.display = 'none';
      });
      themeGrid.appendChild(button);
    });

    // Close modal handlers
    const modal = document.getElementById('themeModal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Initialize theme modal
  createThemeModal();

  // Set initial theme
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme || 'hacking');
});