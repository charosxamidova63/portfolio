 // Theme Toggle
    const themeBtn = document.getElementById('themeBtn');
    const html = document.documentElement;

    const saved = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', saved);

    themeBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });

    // Modal
    const projects = {
      calc: {
        icon: '🧮',
        title: 'Calculator',
        desc: 'Oddiy va qulay kalkulyator ilova. HTML, CSS va JavaScript bilan yaratilgan.',
        url: 'https://charosxamidova63.github.io/calculator/'
      },
      todo: {
        icon: '✅',
        title: 'To-Do List',
        desc: 'Vazifalarni boshqarish uchun productivity ilova. Qo\'shish, o\'chirish, belgilash imkoniyati.',
        url: 'https://charosxamidova63.github.io/to-do-list/'
      },
      contact: {
        icon: '📇',
        title: 'Contact List',
        desc: 'Kontaktlarni saqlash va boshqarish uchun utility ilova.',
        url: 'https://charosxamidova63.github.io/contact-list/'
      }
    };

    function openModal(e, key) {
      e.preventDefault();
      const p = projects[key];
      document.getElementById('modalIcon').textContent = p.icon;
      document.getElementById('modalTitle').textContent = p.title;
      document.getElementById('modalDesc').textContent = p.desc;
      document.getElementById('modalLink').href = p.url;
      document.getElementById('modalOverlay').classList.add('active');
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('active');
    }

    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i * 0.08) + 's';
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe-me').forEach(el => observer.observe(el));