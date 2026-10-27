/**
 * HARIHARA — Cinematic Motion, Scroll Reveals, Cosmic Particles & Optional Ambience (animations.js)
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  let revealObserver = null;

  function observeReveals(root) {
    const scope = root || document;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = scope.querySelectorAll('.reveal:not(.is-visible)');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );
    }

    elements.forEach((el) => revealObserver.observe(el));
  }

  function initLuminousCards(root) {
    const scope = root || document;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    scope.querySelectorAll('.luminous-card').forEach((card) => {
      if (card.dataset.luminousBound) return;
      card.dataset.luminousBound = 'true';
      card.addEventListener(
        'mousemove',
        (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        },
        { passive: true }
      );
    });
  }

  function initCosmicParticles() {
    const canvas = document.getElementById('cosmic-particles');
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const count = isMobile ? 22 : 48;

    const palette = [
      'rgba(216, 180, 106, ',
      'rgba(243, 215, 146, ',
      'rgba(74, 128, 255, ',
      'rgba(156, 184, 210, '
    ];

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -Math.random() * 0.24 - 0.05,
      alpha: Math.random() * 0.55 + 0.15,
      phase: Math.random() * Math.PI * 2,
      colorPrefix: palette[Math.floor(Math.random() * palette.length)]
    }));

    let rafId = null;

    function render() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.015;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const twinkle = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${twinkle.toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(render);
    }

    window.addEventListener(
      'resize',
      () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      },
      { passive: true }
    );

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && !rafId) {
        rafId = requestAnimationFrame(render);
      }
    });

    rafId = requestAnimationFrame(render);
  }

  function initDevotionalAmbience() {
    const btn = document.getElementById('ambience-toggle-btn');
    const labelEl = document.getElementById('ambience-toggle-label');
    if (!btn) return { updateButtonUI: function () {} };

    let audioCtx = null;
    let isPlaying = false;
    let masterGain = null;
    let bellInterval = null;
    let oscillators = [];

    function updateButtonUI() {
      const t = window.HARIHARA.i18n ? window.HARIHARA.i18n.t : (k) => k;
      btn.setAttribute('aria-pressed', String(isPlaying));
      btn.classList.toggle('is-active', isPlaying);
      if (labelEl) {
        labelEl.textContent = isPlaying ? t('soundOn') : t('soundOff');
      }
    }

    function strikeGentleTempleBell() {
      if (!audioCtx || !isPlaying) return;
      const now = audioCtx.currentTime;
      const bellOsc = audioCtx.createOscillator();
      const bellHarmonic = audioCtx.createOscillator();
      const bellGain = audioCtx.createGain();

      bellOsc.type = 'sine';
      bellOsc.frequency.setValueAtTime(554.37, now);
      bellHarmonic.type = 'sine';
      bellHarmonic.frequency.setValueAtTime(830.61, now);

      bellGain.gain.setValueAtTime(0.0001, now);
      bellGain.gain.exponentialRampToValueAtTime(0.035, now + 0.04);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

      bellOsc.connect(bellGain);
      bellHarmonic.connect(bellGain);
      bellGain.connect(masterGain);

      bellOsc.start(now);
      bellHarmonic.start(now);
      bellOsc.stop(now + 5);
      bellHarmonic.stop(now + 5);
    }

    function startAmbience() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!audioCtx) audioCtx = new AudioContextClass();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 1.5);
        masterGain.connect(audioCtx.destination);

        const freqs = [138.59, 207.65, 277.18];
        oscillators = freqs.map((f, idx) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = idx === 1 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(f, audioCtx.currentTime);
          g.gain.setValueAtTime(idx === 0 ? 0.08 : 0.04, audioCtx.currentTime);
          osc.connect(g);
          g.connect(masterGain);
          osc.start();
          return osc;
        });

        isPlaying = true;
        strikeGentleTempleBell();
        bellInterval = setInterval(strikeGentleTempleBell, 11000);
        try { localStorage.setItem('harihara_ambience_pref', 'on'); } catch (_) {}
        updateButtonUI();
      } catch (e) {
        console.warn('Audio initialisation skipped:', e);
      }
    }

    function stopAmbience() {
      isPlaying = false;
      clearInterval(bellInterval);
      oscillators.forEach((osc) => {
        try { osc.stop(); osc.disconnect(); } catch (_) {}
      });
      oscillators = [];
      try { localStorage.setItem('harihara_ambience_pref', 'off'); } catch (_) {}
      updateButtonUI();
    }

    btn.addEventListener('click', () => {
      if (isPlaying) stopAmbience();
      else startAmbience();
    });

    updateButtonUI();
    return { updateButtonUI };
  }

  window.HARIHARA.animations = {
    observeReveals,
    initLuminousCards,
    initCosmicParticles,
    initDevotionalAmbience
  };
})();
