/**
 * HARIHARA — Signature Cinematic Opening Experience (intro.js)
 * Implements Sequence A (First Appearance), Sequence B (User Invitation),
 * and Sequence C (Center-Opening Divine Temple Doors).
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  const INTRO_STORAGE_KEY = 'harihara_entered_v1';
  let isOpening = false;
  let openTimer = null;

  function markEntered() {
    try {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch (_) {}
  }

  function hideImmediately() {
    const introEl = document.getElementById('divine-intro');
    if (!introEl) return;
    clearTimeout(openTimer);
    isOpening = false;
    introEl.classList.remove('is-opening', 'is-ready');
    introEl.classList.add('is-hidden');
    introEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('intro-locked');
  }

  function triggerDoorwayOpening(skipAnimation) {
    const introEl = document.getElementById('divine-intro');
    if (!introEl || introEl.classList.contains('is-hidden')) return;
    if (isOpening && !skipAnimation) return;

    markEntered();

    if (skipAnimation) {
      hideImmediately();
      return;
    }

    isOpening = true;
    // Sequence C — Center-opening temple doors
    introEl.classList.add('is-opening');

    clearTimeout(openTimer);
    openTimer = setTimeout(() => {
      introEl.classList.add('is-hidden');
      introEl.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('intro-locked');
      isOpening = false;
    }, 1880);
  }

  function showIntroCover() {
    const introEl = document.getElementById('divine-intro');
    const enterBtn = document.getElementById('intro-enter-btn');
    if (!introEl) return;

    clearTimeout(openTimer);
    isOpening = false;
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.body.classList.add('intro-locked');
    introEl.classList.remove('is-hidden', 'is-opening');
    introEl.setAttribute('aria-hidden', 'false');

    // Sequence A — Gradual scale & atmospheric reveal
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        introEl.classList.add('is-ready');
        if (enterBtn) {
          try { enterBtn.focus({ preventScroll: true }); } catch (_) {}
        }
      });
    });
  }

  function initDivineIntro() {
    const introEl = document.getElementById('divine-intro');
    if (!introEl) return { replayIntro: function () {} };

    const stageEl = introEl.querySelector('.divine-intro__stage');
    const enterBtn = document.getElementById('intro-enter-btn');
    const skipBtn = document.getElementById('intro-skip-btn');
    const replayBtns = document.querySelectorAll('[data-action="replay-intro"]');

    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.get('intro') === '1';

    let hasVisited = false;
    try {
      hasVisited = localStorage.getItem(INTRO_STORAGE_KEY) === 'true';
    } catch (_) {}

    if (hasVisited && !forceIntro) {
      hideImmediately();
    } else {
      showIntroCover();
    }

    if (stageEl && !stageEl.dataset.introBound) {
      stageEl.dataset.introBound = 'true';
      stageEl.addEventListener('click', function () {
        triggerDoorwayOpening(false);
      });
    }

    if (enterBtn && !enterBtn.dataset.introBound) {
      enterBtn.dataset.introBound = 'true';
      enterBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        triggerDoorwayOpening(false);
      });
    }

    if (skipBtn && !skipBtn.dataset.introBound) {
      skipBtn.dataset.introBound = 'true';
      skipBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        triggerDoorwayOpening(true);
      });
    }

    window.addEventListener('keydown', function (e) {
      if (!introEl || introEl.classList.contains('is-hidden')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerDoorwayOpening(false);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        triggerDoorwayOpening(true);
      }
    });

    replayBtns.forEach(function (btn) {
      if (btn.dataset.replayBound) return;
      btn.dataset.replayBound = 'true';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        showIntroCover();
      });
    });

    return {
      replayIntro: showIntroCover,
      openDoors: function () { triggerDoorwayOpening(false); },
      skipDoors: function () { triggerDoorwayOpening(true); }
    };
  }

  // Expose globally so inline or programmatic triggers always work immediately
  window.openDivineDoors = function (e) {
    if (e && e.stopPropagation) e.stopPropagation();
    triggerDoorwayOpening(false);
  };
  window.skipDivineDoors = function (e) {
    if (e && e.stopPropagation) e.stopPropagation();
    triggerDoorwayOpening(true);
  };
  window.replayDivineDoors = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    showIntroCover();
  };

  window.HARIHARA.initDivineIntro = initDivineIntro;
})();
