/**
 * HARIHARA — Digital Knowledge Library & Search Engine (search.js)
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatch(text, query) {
    if (!query || !query.trim()) return text;
    const safeQ = escapeRegExp(query.trim());
    const regex = new RegExp(`(${safeQ})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function initKnowledgeLibrary(articles, showToast) {
    const list = articles || [];
    const notify = showToast || function () {};
    const searchInput = document.getElementById('library-search-input');
    const filterContainer = document.getElementById('library-category-filters');
    const gridContainer = document.getElementById('library-articles-grid');
    const modal = document.getElementById('sacred-modal');
    const modalBody = document.getElementById('sacred-modal-body');

    if (!gridContainer || !list.length) return { render: function () {} };

    const { getLang, pickLang, t } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards } = window.HARIHARA.animations;

    let activeCategory = 'All';
    let searchQuery = '';

    const categories = [
      { id: 'All', en: 'All Topics', hi: 'सभी विषय' },
      { id: 'History and Origins', en: 'History & Origins', hi: 'इतिहास एवं उद्गम' },
      { id: 'Scriptural References', en: 'Scriptural References', hi: 'शास्त्रीय प्रमाण' },
      { id: 'Sacred Stories', en: 'Sacred Stories', hi: 'पवित्र कथाएँ' },
      { id: 'Divine Symbolism', en: 'Divine Symbolism', hi: 'दिव्य प्रतीक विज्ञान' },
      { id: 'Temples and Traditions', en: 'Temples & Traditions', hi: 'मंदिर एवं परंपराएँ' },
      { id: 'Spiritual Philosophy', en: 'Spiritual Philosophy', hi: 'आध्यात्मिक दर्शन' },
      { id: 'Common Questions', en: 'Common Questions', hi: 'सामान्य प्रश्न' }
    ];

    function openArticleModal(articleId) {
      const idx = list.findIndex((a) => a.id === articleId);
      if (idx === -1 || !modal || !modalBody) return;
      const art = list[idx];
      const prevArt = list[(idx - 1 + list.length) % list.length];
      const nextArt = list[(idx + 1) % list.length];
      const lang = getLang();

      const tocMarkup = (art.sections || [])
        .map(
          (sec, sIdx) => `
          <li>
            <a href="#modal-sec-${sIdx}" style="font-size:0.9rem; color:var(--divine-gold);">
              ${pickLang(sec.heading)}
            </a>
          </li>
        `
        )
        .join('');

      const sectionsMarkup = (art.sections || [])
        .map(
          (sec, sIdx) => `
          <section id="modal-sec-${sIdx}" style="padding-top:1rem; border-top:1px solid rgba(216,180,106,0.14);">
            <h4 style="font-family:var(--font-heading); font-size:1.25rem; color:var(--divine-gold-bright); margin-bottom:0.65rem;">
              ${highlightMatch(pickLang(sec.heading), searchQuery)}
            </h4>
            <p style="color:var(--temple-ivory); line-height:1.8;">
              ${highlightMatch(pickLang(sec.body), searchQuery)}
            </p>
          </section>
        `
        )
        .join('');

      modalBody.innerHTML = `
        <article style="display:grid; gap:1.35rem;">
          <div>
            <div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; margin-bottom:0.6rem;">
              <span class="verified-badge">${pickLang(art.categoryLabel)}</span>
              <span style="font-size:0.82rem; color:var(--divine-gold);">⏱ ${art.readingTime}</span>
              <span style="font-size:0.82rem; color:var(--temple-ivory-subtle);">• ${art.manuscriptRef}</span>
            </div>
            <h3 style="font-family:var(--font-heading); font-size:clamp(1.45rem,2.6vw,2.1rem); color:#FFF;">
              ${pickLang(art.title)}
            </h3>
          </div>

          <div style="padding:1rem 1.25rem; border-radius:12px; background:rgba(8,13,29,0.75); border:1px solid rgba(216,180,106,0.28);">
            <strong style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--sacred-saffron);">
              ${lang === 'hi' ? 'विषय-सूची (Table of Contents)' : 'Table of Contents'}
            </strong>
            <ul style="list-style:none; display:grid; gap:0.4rem; margin-top:0.5rem;">
              ${tocMarkup}
            </ul>
          </div>

          <div style="display:grid; gap:1.35rem;">
            ${sectionsMarkup}
          </div>

          <div style="padding:1rem 1.25rem; border-radius:12px; background:rgba(216,180,106,0.07); border:1px solid rgba(216,180,106,0.24);">
            <strong style="font-size:0.82rem; color:var(--divine-gold);">
              📚 ${lang === 'hi' ? 'संदर्भ ग्रंथ सूची (Source Bibliography):' : 'Source Bibliography:'}
            </strong>
            <ul style="margin-top:0.45rem; padding-left:1.2rem; font-size:0.88rem; color:var(--temple-ivory-muted);">
              ${(art.bibliography || []).map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem; padding-top:1rem; border-top:1px solid rgba(216,180,106,0.22);">
            <button type="button" class="btn btn--ghost" id="modal-prev-art">← ${pickLang(prevArt.title).slice(0, 28)}...</button>
            <div style="display:flex; gap:0.5rem;">
              <a href="pages/article.html?id=${art.id}" class="btn btn--secondary" style="padding:0.5rem 1rem; font-size:0.84rem;">
                ${lang === 'hi' ? 'स्वतंत्र पृष्ठ ↗' : 'Full Page View ↗'}
              </a>
              <button type="button" class="btn btn--ghost" id="modal-copy-art-link">
                🔗 ${lang === 'hi' ? 'लिंक कॉपी करें' : 'Copy Link'}
              </button>
            </div>
            <button type="button" class="btn btn--ghost" id="modal-next-art">${pickLang(nextArt.title).slice(0, 28)}... →</button>
          </div>
        </article>
      `;

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      document.getElementById('modal-prev-art')?.addEventListener('click', () => openArticleModal(prevArt.id));
      document.getElementById('modal-next-art')?.addEventListener('click', () => openArticleModal(nextArt.id));
      document.getElementById('modal-copy-art-link')?.addEventListener('click', async () => {
        const url = `${window.location.origin}${window.location.pathname.replace(/index\.html$/, '')}pages/article.html?id=${art.id}`;
        try {
          await navigator.clipboard.writeText(url);
          notify(t('copiedToast'));
        } catch (_) {}
      });
    }

    function render() {
      const lang = getLang();

      if (filterContainer) {
        filterContainer.innerHTML = categories
          .map(
            (cat) => `
            <button
              type="button"
              class="filter-pill ${activeCategory === cat.id ? 'is-active' : ''}"
              data-lib-cat="${cat.id}"
            >
              ${lang === 'hi' ? cat.hi : cat.en}
            </button>
          `
          )
          .join('');

        filterContainer.querySelectorAll('[data-lib-cat]').forEach((btn) => {
          btn.addEventListener('click', () => {
            activeCategory = btn.getAttribute('data-lib-cat');
            render();
          });
        });
      }

      const q = searchQuery.trim().toLowerCase();
      const filtered = list.filter((art) => {
        const catMatch = activeCategory === 'All' || art.category === activeCategory;
        if (!catMatch) return false;
        if (!q) return true;
        const haystack = [
          art.title.en,
          art.title.hi,
          art.summary.en,
          art.summary.hi,
          art.manuscriptRef,
          ...(art.sections || []).flatMap((s) => [s.heading.en, s.heading.hi, s.body.en, s.body.hi]),
          ...(art.bibliography || [])
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });

      if (filtered.length === 0) {
        gridContainer.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:2.5rem; border-radius:16px; background:rgba(14,21,44,0.65); border:1px solid rgba(216,180,106,0.25);">
            <p style="color:var(--temple-ivory-muted);">
              ${lang === 'hi' ? 'आपकी खोज से मेल खाने वाला कोई लेख नहीं मिला। कृपया अन्य शब्द खोजें।' : 'No articles matched your search query. Try another keyword or select All Topics.'}
            </p>
          </div>
        `;
        return;
      }

      gridContainer.innerHTML = filtered
        .map(
          (art) => `
          <article class="article-card luminous-card reveal">
            <div class="article-card__meta">
              <span>${pickLang(art.categoryLabel)}</span>
              <span>⏱ ${art.readingTime}</span>
            </div>
            <h3 class="article-card__title">
              ${highlightMatch(pickLang(art.title), searchQuery)}
            </h3>
            <p style="font-size:0.93rem; color:var(--temple-ivory-muted); flex:1;">
              ${highlightMatch(pickLang(art.summary), searchQuery)}
            </p>
            <div style="font-size:0.78rem; color:var(--sacred-saffron);">
              📖 ${art.manuscriptRef}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.75rem; border-top:1px solid rgba(216,180,106,0.16);">
              <button type="button" class="btn btn--ghost" data-open-article="${art.id}">
                ${t('readArticleBtn')}
              </button>
              <a href="pages/article.html?id=${art.id}" style="font-size:0.82rem; color:var(--divine-gold);">
                ${lang === 'hi' ? 'पृष्ठ खोलें ↗' : 'Standalone ↗'}
              </a>
            </div>
          </article>
        `
        )
        .join('');

      gridContainer.querySelectorAll('[data-open-article]').forEach((btn) => {
        btn.addEventListener('click', () => {
          openArticleModal(btn.getAttribute('data-open-article'));
        });
      });

      observeReveals(gridContainer);
      initLuminousCards(gridContainer);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        render();
      });
    }

    render();
    return { render, openArticleModal };
  }

  window.HARIHARA.initKnowledgeLibrary = initKnowledgeLibrary;
})();
