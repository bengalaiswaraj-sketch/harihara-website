/**
 * HARIHARA — Master Application Controller (main.js)
 * Orchestrates all interactive sections, data rendering, i18n, and accessibility.
 * Works seamlessly on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  let toastTimer = null;

  function showToast(message) {
    const toastEl = document.getElementById('sacred-toast');
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, 3200);
  }

  function initHeaderAndNavigation() {
    const header = document.getElementById('site-header');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navList = document.getElementById('main-nav-list');
    const langBtn = document.getElementById('lang-toggle-btn');
    const { toggleLang } = window.HARIHARA.i18n;

    window.addEventListener(
      'scroll',
      () => {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.scrollY > 40);
      },
      { passive: true }
    );

    if (mobileToggle && navList) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navList.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navList.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    if (langBtn) {
      langBtn.addEventListener('click', () => {
        toggleLang();
      });
    }

    const modal = document.getElementById('sacred-modal');
    const modalCloseBtn = document.getElementById('sacred-modal-close');
    const closeModal = () => {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      const body = document.getElementById('sacred-modal-body');
      if (body) body.innerHTML = '';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal && modal.classList.contains('is-open')) closeModal();
        if (navList && navList.classList.contains('is-open')) {
          navList.classList.remove('is-open');
          if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  function renderUnitySection(siteData) {
    const compContainer = document.getElementById('unity-comparison-grid');
    const philContainer = document.getElementById('unity-philosophy-grid');
    if (!siteData) return;

    const { pickLang } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards } = window.HARIHARA.animations;

    if (compContainer && siteData.iconographyComparison) {
      compContainer.innerHTML = siteData.iconographyComparison
        .map(
          (row) => `
          <div class="comparison-row luminous-card reveal">
            <div>
              <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#6CA0FF; font-weight:700;">
                ${pickLang(row.vishnu.title)}
              </span>
              <p style="font-size:0.92rem; color:var(--temple-ivory-muted); margin-top:0.3rem;">
                ${pickLang(row.vishnu.detail)}
              </p>
            </div>

            <div class="comparison-cell--center">
              <strong style="display:block; font-family:var(--font-heading); font-size:0.9rem; color:var(--divine-gold-bright); margin-bottom:0.35rem;">
                ✦ ${pickLang(row.aspect)} ✦
              </strong>
              <p style="font-size:0.88rem; color:#FFF7E0;">
                ${pickLang(row.unity)}
              </p>
            </div>

            <div style="text-align:right;">
              <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#A8C5DE; font-weight:700;">
                ${pickLang(row.shiva.title)}
              </span>
              <p style="font-size:0.92rem; color:var(--temple-ivory-muted); margin-top:0.3rem;">
                ${pickLang(row.shiva.detail)}
              </p>
            </div>
          </div>
        `
        )
        .join('');
      observeReveals(compContainer);
      initLuminousCards(compContainer);
    }

    if (philContainer && siteData.philosophicalTraditions) {
      philContainer.innerHTML = siteData.philosophicalTraditions
        .map(
          (trad) => `
          <article class="philosophy-card luminous-card reveal">
            <span class="philosophy-card__acharya">❖ ${pickLang(trad.acharya)}</span>
            <h4 class="philosophy-card__title">${pickLang(trad.name)}</h4>
            <p style="font-size:0.93rem; color:var(--temple-ivory-muted);">
              ${pickLang(trad.summary)}
            </p>
          </article>
        `
        )
        .join('');
      observeReveals(philContainer);
      initLuminousCards(philContainer);
    }
  }

  function initShlokasSection(shlokas) {
    const list = shlokas || [];
    const grid = document.getElementById('shlokas-grid');
    const filterWrap = document.getElementById('shloka-filters');
    if (!grid || !list.length) return { render: function () {} };

    const { getLang, pickLang, t } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards } = window.HARIHARA.animations;

    let activeFilter = 'all';

    function render() {
      const lang = getLang();
      const filtered = activeFilter === 'all'
        ? list
        : list.filter((s) => s.category === activeFilter);

      grid.innerHTML = filtered
        .map(
          (s) => `
          <article class="shloka-card luminous-card reveal">
            <div>
              <div class="shloka-card__top">
                <span class="shloka-card__source">📖 ${pickLang(s.source.scripture)} • ${s.source.reference}</span>
                <span class="verified-badge">✓ ${pickLang(s.source.badge)}</span>
              </div>

              <div class="shloka-card__sanskrit" lang="sa" style="margin-top:1rem;">${s.sanskrit}</div>

              <p class="shloka-card__translit" style="margin-top:0.85rem;">${s.transliteration}</p>

              <div class="shloka-card__translation-block" style="margin-top:1rem;">
                <div>
                  <span class="shloka-card__label">${t('literalLabel')} (${lang === 'hi' ? 'हिन्दी एवं अंग्रेज़ी' : 'Hindi & English'})</span>
                  <p class="hindi-text" lang="hi" style="color:#FFF6DC; font-size:0.98rem; margin-top:0.25rem;">
                    <strong>हिन्दी:</strong> ${s.literalTranslation.hi}
                  </p>
                  <p lang="en" style="color:var(--temple-ivory-muted); font-size:0.94rem; margin-top:0.35rem;">
                    <strong>English:</strong> ${s.literalTranslation.en}
                  </p>
                </div>

                <div class="shloka-card__commentary">
                  <span class="shloka-card__label" style="display:block; margin-bottom:0.25rem;">${t('commentaryLabel')}</span>
                  ${pickLang(s.commentary)}
                </div>
              </div>
            </div>

            <div class="shloka-card__actions">
              <button type="button" class="btn btn--ghost" data-copy-shloka="${s.id}">
                📋 ${t('copyVerse')}
              </button>
              <button type="button" class="btn btn--ghost" data-share-shloka="${s.id}">
                ✦ ${t('shareVerse')}
              </button>
            </div>
          </article>
        `
        )
        .join('');

      grid.querySelectorAll('[data-copy-shloka]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const shloka = list.find((item) => item.id === btn.getAttribute('data-copy-shloka'));
          if (!shloka) return;
          const text = `${shloka.sanskrit}\n\n${shloka.transliteration}\n\nहिन्दी: ${shloka.literalTranslation.hi}\nEnglish: ${shloka.literalTranslation.en}\n— ${shloka.source.scripture.en} (${shloka.source.reference})`;
          try {
            await navigator.clipboard.writeText(text);
            showToast(t('copiedToast'));
          } catch (_) {}
        });
      });

      grid.querySelectorAll('[data-share-shloka]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const shloka = list.find((item) => item.id === btn.getAttribute('data-share-shloka'));
          if (!shloka) return;
          const text = `${shloka.sanskrit}\n\n"${pickLang(shloka.literalTranslation)}"\n— ${pickLang(shloka.source.scripture)}`;
          if (navigator.share) {
            try {
              await navigator.share({ title: 'Sacred Shloka of Harihara Unity', text, url: window.location.href });
              return;
            } catch (_) {}
          }
          try {
            await navigator.clipboard.writeText(text);
            showToast(t('copiedToast'));
          } catch (_) {}
        });
      });

      observeReveals(grid);
      initLuminousCards(grid);
    }

    if (filterWrap) {
      filterWrap.querySelectorAll('[data-shloka-filter]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeFilter = btn.getAttribute('data-shloka-filter');
          filterWrap.querySelectorAll('[data-shloka-filter]').forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          render();
        });
      });
    }

    render();
    return { render };
  }

  function initStoriesExplorer(stories) {
    const list = stories || [];
    const navContainer = document.getElementById('stories-nav');
    const stageContainer = document.getElementById('story-stage');
    if (!navContainer || !stageContainer || !list.length) return { render: function () {} };

    const { getLang, pickLang, t } = window.HARIHARA.i18n;
    let activeStoryId = list[0].id;

    function render() {
      const lang = getLang();
      const activeStory = list.find((s) => s.id === activeStoryId) || list[0];

      navContainer.innerHTML = list
        .map(
          (s) => `
          <button
            type="button"
            class="story-tab ${s.id === activeStory.id ? 'is-active' : ''}"
            data-story-id="${s.id}"
          >
            <span class="story-tab__num">${s.number}</span>
            <div>
              <div class="story-tab__title">${pickLang(s.title)}</div>
              <div style="font-size:0.75rem; color:var(--temple-ivory-subtle); margin-top:0.2rem;">
                ${pickLang(s.manuscriptChapter)}
              </div>
            </div>
          </button>
        `
        )
        .join('');

      navContainer.querySelectorAll('[data-story-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeStoryId = btn.getAttribute('data-story-id');
          render();
        });
      });

      stageContainer.innerHTML = `
        <div class="story-stage__hero">
          <img src="${activeStory.coverImage}" alt="${pickLang(activeStory.title)}" class="story-stage__hero-img" loading="lazy" width="960" height="540" />
          <div class="story-stage__hero-overlay"></div>
          <div class="story-stage__hero-content">
            <span class="story-stage__chapter-badge">📜 ${pickLang(activeStory.manuscriptChapter)}</span>
            <h3 class="story-stage__title">${pickLang(activeStory.title)}</h3>
            <p style="color:var(--temple-ivory-muted); font-size:1.02rem;">${pickLang(activeStory.subtitle)}</p>
          </div>
        </div>

        <div class="story-stage__body">
          <div style="padding:1.15rem 1.4rem; border-radius:12px; background:rgba(6,10,23,0.75); border-left:3px solid var(--divine-gold);">
            <p class="sanskrit-text" lang="sa" style="font-size:1.18rem; color:var(--divine-gold-bright); font-weight:600;">
              “${activeStory.sanskritQuote.verse}”
            </p>
            <p style="font-size:0.9rem; color:var(--temple-ivory-muted); margin-top:0.25rem;">
              ${lang === 'hi' ? activeStory.sanskritQuote.meaningHi : activeStory.sanskritQuote.meaningEn}
            </p>
          </div>

          <p style="font-size:1.05rem; color:var(--temple-ivory);">
            ${pickLang(activeStory.introduction)}
          </p>

          <div class="story-scenes">
            ${(activeStory.scenes || [])
              .map(
                (sc) => `
              <div class="story-scene">
                <div class="story-scene__img-wrap">
                  <img src="${sc.image}" alt="${pickLang(sc.title)}" class="story-scene__img" loading="lazy" width="360" height="270" />
                </div>
                <div>
                  <div class="story-scene__num">
                    ${lang === 'hi' ? `दृश्य ${sc.sceneNumber}` : `Scene 0${sc.sceneNumber}`}
                  </div>
                  <h4 class="story-scene__title">${pickLang(sc.title)}</h4>
                  <p style="color:var(--temple-ivory-muted); font-size:0.95rem;">
                    ${pickLang(sc.narrative)}
                  </p>
                </div>
              </div>
            `
              )
              .join('')}
          </div>

          <div class="story-lesson-box">
            <strong style="display:block; font-family:var(--font-heading); font-size:0.88rem; text-transform:uppercase; letter-spacing:0.14em; color:var(--divine-gold-bright); margin-bottom:0.4rem;">
              ✦ ${t('spiritualLessonHeading')}
            </strong>
            <p style="color:#FFF8E6; font-size:1rem;">
              ${pickLang(activeStory.spiritualLesson)}
            </p>
          </div>

          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; padding-top:0.75rem; border-top:1px solid rgba(216,180,106,0.2);">
            <div style="font-size:0.8rem; color:var(--temple-ivory-subtle);">
              <strong>${lang === 'hi' ? 'स्रोत:' : 'Verified Sources:'}</strong> ${(activeStory.sources || []).join(' • ')}
            </div>
            <a href="pages/story.html?id=${activeStory.id}" class="btn btn--secondary" style="padding:0.6rem 1.25rem; font-size:0.86rem;">
              ${t('openFullStoryPage')}
            </a>
          </div>
        </div>
      `;
    }

    render();
    return { render };
  }

  function renderTemplesSection(temples) {
    const list = temples || [];
    const grid = document.getElementById('temples-grid');
    if (!grid || !list.length) return;

    const { getLang, pickLang, t } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards } = window.HARIHARA.animations;
    const lang = getLang();

    grid.innerHTML = list
      .map(
        (tp) => `
        <article class="temple-card luminous-card reveal">
          <div class="temple-card__img-wrap">
            <img src="${tp.image}" alt="${pickLang(tp.name)}" class="temple-card__img" loading="lazy" width="600" height="400" />
            <span class="temple-card__period">🏛 ${pickLang(tp.period)}</span>
          </div>
          <div class="temple-card__body">
            <h3 class="temple-card__title">${pickLang(tp.name)}</h3>
            <div class="temple-card__loc">📍 ${pickLang(tp.location)}</div>
            <p style="font-size:0.93rem; color:var(--temple-ivory);">
              ${pickLang(tp.historicalBackground)}
            </p>
            <div class="temple-card__details">
              <div>
                <strong style="color:var(--divine-gold);">${lang === 'hi' ? 'प्रतिमा एवं स्वरूप:' : 'Iconography:'}</strong>
                ${pickLang(tp.deityAndIconography)}
              </div>
              <div>
                <strong style="color:var(--divine-gold);">${lang === 'hi' ? 'पवित्र परंपरा:' : 'Sacred Tradition:'}</strong>
                ${pickLang(tp.sacredTraditions)}
              </div>
            </div>
            <div class="temple-card__footer">
              <a href="pages/temple.html?id=${tp.id}" class="btn btn--secondary" style="padding:0.55rem 1.1rem; font-size:0.84rem;">
                ${t('viewTemplePage')}
              </a>
              <a href="${tp.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
                ${t('getDirections')}
              </a>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    observeReveals(grid);
    initLuminousCards(grid);
  }

  function initReflectionsSection(reflections) {
    const list = reflections || [];
    const quoteEl = document.getElementById('reflection-quote-text');
    const contextEl = document.getElementById('reflection-context-text');
    const metaEl = document.getElementById('reflection-meta-text');
    const nextBtn = document.getElementById('next-reflection-btn');
    if (!quoteEl || !list.length) return { render: function () {} };

    const { pickLang } = window.HARIHARA.i18n;
    let idx = 0;

    function render() {
      const item = list[idx];
      quoteEl.textContent = `“${pickLang(item.quote)}”`;
      if (contextEl) contextEl.textContent = pickLang(item.context);
      if (metaEl) metaEl.textContent = `❖ ${pickLang(item.attribution)}`;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        idx = (idx + 1) % list.length;
        render();
      });
    }

    render();
    return { render };
  }

  async function bootstrap() {
    const { getLang, setLang, onLangChange } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards, initCosmicParticles, initDevotionalAmbience } = window.HARIHARA.animations;

    // 1. Initialize Divine Intro FIRST so the Enter button is immediately responsive
    window.HARIHARA.initDivineIntro();
    initHeaderAndNavigation();
    initCosmicParticles();
    const ambienceCtrl = initDevotionalAmbience();

    setLang(getLang());

    const data = await window.HARIHARA.loadAllContent('');

    renderUnitySection(data.site);
    const shlokasCtrl = initShlokasSection(data.shlokas);
    const storiesCtrl = initStoriesExplorer(data.stories);
    const galleryCtrl = window.HARIHARA.initVideoGallery(data.videos);
    renderTemplesSection(data.temples);
    const quizCtrl = window.HARIHARA.initQuizEngine(data.quizzes, showToast);
    const reflCtrl = initReflectionsSection(data.site && data.site.reflections ? data.site.reflections : []);
    const libCtrl = window.HARIHARA.initKnowledgeLibrary(data.articles, showToast);

    observeReveals(document);
    initLuminousCards(document);

    onLangChange(() => {
      renderUnitySection(data.site);
      shlokasCtrl.render();
      storiesCtrl.render();
      galleryCtrl.render();
      renderTemplesSection(data.temples);
      quizCtrl.render();
      reflCtrl.render();
      libCtrl.render();
      if (ambienceCtrl) ambienceCtrl.updateButtonUI();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
