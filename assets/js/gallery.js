/**
 * HARIHARA — Video Gallery & Interactive Modal Player (gallery.js)
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  function initVideoGallery(videos) {
    const list = videos || [];
    const featuredContainer = document.getElementById('video-featured-container');
    const filterContainer = document.getElementById('video-filters');
    const gridContainer = document.getElementById('videos-grid');
    const modal = document.getElementById('sacred-modal');
    const modalBody = document.getElementById('sacred-modal-body');

    if (!gridContainer || !list.length) return { render: function () {} };

    const { getLang, pickLang } = window.HARIHARA.i18n;
    const { observeReveals, initLuminousCards } = window.HARIHARA.animations;

    let activeCategory = 'All';
    let slideTimer = null;

    const categories = [
      { id: 'All', en: 'All Videos', hi: 'सभी वीडियो' },
      { id: 'Harihara Stories', en: 'Harihara Stories', hi: 'हरिहर कथाएँ' },
      { id: 'Shiva–Vishnu Unity', en: 'Shiva–Vishnu Unity', hi: 'शिव–विष्णु एकता' },
      { id: 'Sacred Shlokas', en: 'Sacred Shlokas', hi: 'पवित्र श्लोक' },
      { id: 'Divine Temples', en: 'Divine Temples', hi: 'दिव्य मंदिर' },
      { id: 'Spiritual Teachings', en: 'Spiritual Teachings', hi: 'आध्यात्मिक शिक्षाएँ' },
      { id: 'Mythology Explained', en: 'Mythology Explained', hi: 'पौराणिक रहस्य' }
    ];

    function openVideoModal(video) {
      if (!modal || !modalBody) return;
      clearInterval(slideTimer);
      const lang = getLang();

      const isPortrait = video.aspectRatio === '9:16';
      let mediaMarkup = '';

      if (video.videoUrl && video.videoUrl.trim() !== '') {
        mediaMarkup = `
          <div style="aspect-ratio:${isPortrait ? '9/16' : '16/9'}; max-height:70vh; margin:0 auto; border-radius:12px; overflow:hidden; background:#000;">
            <video src="${video.videoUrl}" controls autoplay playsinline style="width:100%; height:100%; object-fit:contain;"></video>
          </div>
        `;
      } else if (video.youtubeId && video.youtubeId.trim() !== '') {
        mediaMarkup = `
          <div style="aspect-ratio:${isPortrait ? '9/16' : '16/9'}; max-height:70vh; margin:0 auto; border-radius:12px; overflow:hidden; background:#000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0"
              title="${pickLang(video.title)}"
              style="width:100%; height:100%; border:0;"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        `;
      } else {
        const slides = video.storyboardSlides && video.storyboardSlides.length
          ? video.storyboardSlides
          : [{ image: video.thumbnail, captionEn: video.description.en, captionHi: video.description.hi }];

        mediaMarkup = `
          <div class="storyboard-player" id="active-storyboard" style="position:relative; border-radius:14px; overflow:hidden; border:1px solid rgba(216,180,106,0.45); background:#050813;">
            <div style="position:relative; aspect-ratio:${isPortrait ? '16/10' : '16/9'}; max-height:58vh; width:100%; overflow:hidden;">
              <img id="sb-slide-img" src="${slides[0].image}" alt="${pickLang(video.title)}" style="width:100%; height:100%; object-fit:cover; transition:opacity 0.45s ease;" />
              <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(5,8,19,0.2) 0%, transparent 45%, rgba(5,8,19,0.92) 100%);"></div>
              <div style="position:absolute; top:1rem; left:1rem; right:1rem; display:flex; justify-content:space-between; align-items:center;">
                <span class="video-badge">${lang === 'hi' ? 'संवादात्मक कथा स्टोरीबोर्ड' : 'Interactive Visual Storyboard'} • ${video.aspectRatio}</span>
                <span class="video-badge" id="sb-slide-counter">1 / ${slides.length}</span>
              </div>
              <div style="position:absolute; bottom:1.25rem; left:1.25rem; right:1.25rem;">
                <p id="sb-slide-caption" style="font-size:1.05rem; color:#FFF7E0; background:rgba(8,13,29,0.82); padding:0.9rem 1.15rem; border-radius:10px; border-left:3px solid var(--divine-gold);">
                  ${lang === 'hi' ? slides[0].captionHi : slides[0].captionEn}
                </p>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.85rem 1.25rem; background:rgba(14,21,44,0.95); border-top:1px solid rgba(216,180,106,0.25);">
              <button type="button" class="btn btn--ghost" id="sb-prev-btn">← ${lang === 'hi' ? 'पिछला दृश्य' : 'Previous Scene'}</button>
              <span style="font-size:0.8rem; color:var(--temple-ivory-subtle);">
                ${lang === 'hi' ? 'बाह्य वीडियो लिंक data/videos.json में जोड़े जा सकते हैं' : 'Ready for MP4 / YouTube ID in data/videos.json'}
              </span>
              <button type="button" class="btn btn--ghost" id="sb-next-btn">${lang === 'hi' ? 'अगला दृश्य' : 'Next Scene'} →</button>
            </div>
          </div>
        `;
      }

      modalBody.innerHTML = `
        <div style="display:grid; gap:1.25rem;">
          <div>
            <span class="section__eyebrow" style="margin-bottom:0.5rem;">${pickLang(video.categoryLabel)} • ${video.aspectRatio}</span>
            <h3 style="font-family:var(--font-heading); font-size:clamp(1.35rem,2.4vw,1.85rem); color:#FFF;">${pickLang(video.title)}</h3>
          </div>
          ${mediaMarkup}
          <p style="color:var(--temple-ivory-muted); font-size:0.98rem;">${pickLang(video.description)}</p>
          <div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; justify-content:space-between; padding-top:0.75rem; border-top:1px solid rgba(216,180,106,0.2);">
            ${video.relatedStoryId ? `<a href="pages/story.html?id=${video.relatedStoryId}" class="btn btn--secondary" style="padding:0.55rem 1.15rem; font-size:0.86rem;">${lang === 'hi' ? 'संबंधित पांडुलिपि अध्याय पढ़ें →' : 'Read Related Manuscript Story →'}</a>` : ''}
            ${video.instagramUrl ? `<a href="${video.instagramUrl}" target="_blank" rel="noopener" class="btn btn--ghost">Instagram Reel ↗</a>` : ''}
          </div>
        </div>
      `;

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      const slides = video.storyboardSlides || [];
      if (slides.length > 1) {
        let idx = 0;
        const imgEl = document.getElementById('sb-slide-img');
        const capEl = document.getElementById('sb-slide-caption');
        const cntEl = document.getElementById('sb-slide-counter');
        const prevBtn = document.getElementById('sb-prev-btn');
        const nextBtn = document.getElementById('sb-next-btn');

        const updateSlide = (newIdx) => {
          idx = (newIdx + slides.length) % slides.length;
          if (imgEl) imgEl.src = slides[idx].image;
          if (capEl) capEl.textContent = lang === 'hi' ? slides[idx].captionHi : slides[idx].captionEn;
          if (cntEl) cntEl.textContent = `${idx + 1} / ${slides.length}`;
        };

        if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(idx - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(idx + 1));
        slideTimer = setInterval(() => {
          if (!modal.classList.contains('is-open')) {
            clearInterval(slideTimer);
            return;
          }
          updateSlide(idx + 1);
        }, 5000);
      }
    }

    function render() {
      const lang = getLang();
      const featured = list.find((v) => v.featured) || list[0];

      if (featuredContainer && featured) {
        featuredContainer.innerHTML = `
          <div class="video-featured__thumb-wrap" role="button" tabindex="0" aria-label="${pickLang(featured.title)}" data-video-id="${featured.id}">
            <img src="${featured.thumbnail}" alt="${pickLang(featured.title)}" class="video-featured__thumb" loading="lazy" width="960" height="540" />
            <div class="play-overlay">
              <div class="play-btn-circle" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="video-card__badges">
              <span class="video-badge">★ ${lang === 'hi' ? 'प्रमुख प्रस्तुति' : 'Featured Presentation'}</span>
              <span class="video-badge">${featured.aspectRatio} • ${featured.duration}</span>
            </div>
          </div>
          <div style="display:grid; gap:0.9rem;">
            <span class="section__eyebrow" style="justify-self:start; margin-bottom:0;">${pickLang(featured.categoryLabel)}</span>
            <h3 style="font-family:var(--font-heading); font-size:clamp(1.4rem,2.4vw,2rem); color:#FFF;">${pickLang(featured.title)}</h3>
            <p style="color:var(--temple-ivory-muted);">${pickLang(featured.description)}</p>
            <div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin-top:0.5rem;">
              <button type="button" class="btn btn--primary" data-video-id="${featured.id}">
                ▶ ${lang === 'hi' ? 'प्रस्तुति देखें' : 'Watch Presentation'}
              </button>
              ${featured.relatedStoryId ? `<a href="pages/story.html?id=${featured.relatedStoryId}" class="btn btn--secondary">${lang === 'hi' ? 'अध्याय पढ़ें' : 'Read Chapter'}</a>` : ''}
            </div>
          </div>
        `;
      }

      if (filterContainer) {
        filterContainer.innerHTML = categories
          .map(
            (cat) => `
            <button
              type="button"
              class="filter-pill ${activeCategory === cat.id ? 'is-active' : ''}"
              data-cat="${cat.id}"
            >
              ${lang === 'hi' ? cat.hi : cat.en}
            </button>
          `
          )
          .join('');

        filterContainer.querySelectorAll('.filter-pill').forEach((btn) => {
          btn.addEventListener('click', () => {
            activeCategory = btn.getAttribute('data-cat');
            render();
          });
        });
      }

      const filtered = activeCategory === 'All'
        ? list
        : list.filter((v) => v.category === activeCategory);

      gridContainer.innerHTML = filtered
        .map(
          (v) => `
          <article class="video-card luminous-card reveal">
            <div class="video-card__media ${v.aspectRatio === '9:16' ? 'video-card__media--portrait' : ''}" role="button" tabindex="0" data-video-id="${v.id}" aria-label="${pickLang(v.title)}">
              <img src="${v.thumbnail}" alt="${pickLang(v.title)}" class="video-card__img" loading="lazy" width="640" height="360" />
              <div class="play-overlay">
                <div class="play-btn-circle" style="width:54px; height:54px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="video-card__badges">
                <span class="video-badge">${pickLang(v.categoryLabel)}</span>
                <span class="video-badge">${v.aspectRatio === '9:16' ? '📱 9:16 Reel' : '🎬 16:9'} • ${v.duration}</span>
              </div>
            </div>
            <div class="video-card__body">
              <h3 class="video-card__title">${pickLang(v.title)}</h3>
              <p style="font-size:0.9rem; color:var(--temple-ivory-muted); flex:1;">${pickLang(v.description)}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.65rem; border-top:1px solid rgba(216,180,106,0.15);">
                <button type="button" class="btn btn--ghost" data-video-id="${v.id}">
                  ▶ ${lang === 'hi' ? 'चलाएँ' : 'Play'}
                </button>
                ${v.relatedStoryId ? `<a href="pages/story.html?id=${v.relatedStoryId}" style="font-size:0.82rem;">${lang === 'hi' ? 'कथा संदर्भ →' : 'Story Ref →'}</a>` : ''}
              </div>
            </div>
          </article>
        `
        )
        .join('');

      document.querySelectorAll('[data-video-id]').forEach((el) => {
        const id = el.getAttribute('data-video-id');
        const vid = list.find((item) => item.id === id);
        if (!vid) return;
        el.addEventListener('click', () => openVideoModal(vid));
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openVideoModal(vid);
          }
        });
      });

      observeReveals(gridContainer);
      initLuminousCards(gridContainer);
    }

    render();
    return { render };
  }

  window.HARIHARA.initVideoGallery = initVideoGallery;
})();
