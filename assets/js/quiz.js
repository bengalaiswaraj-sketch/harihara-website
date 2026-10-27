/**
 * HARIHARA — Interactive Knowledge Quiz Engine (quiz.js)
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  const QUIZ_STORAGE_KEY = 'harihara_quiz_best_v1';

  function initQuizEngine(allQuestions, showToast) {
    const list = allQuestions || [];
    const notify = showToast || function () {};
    const container = document.getElementById('quiz-engine-container');
    if (!container || !list.length) return { render: function () {} };

    const { getLang, pickLang, t } = window.HARIHARA.i18n;

    const categories = [
      { id: 'All', en: 'All Categories (Comprehensive)', hi: 'सभी श्रेणियाँ (संपूर्ण परीक्षा)' },
      { id: 'The Divine Form of Harihara', en: '1. The Divine Form of Harihara', hi: '१. भगवान हरिहर का दिव्य स्वरूप' },
      { id: 'Shiva and Vishnu — Sacred Unity', en: '2. Shiva and Vishnu — Sacred Unity', hi: '२. शिव और विष्णु — पवित्र एकता' },
      { id: 'The Story of Guhasura', en: '3. The Story of Guhasura', hi: '३. गुहासुर वध की कथा' },
      { id: 'Shiva–Vishnu Shlokas', en: '4. Shiva–Vishnu Shlokas', hi: '४. शिव–विष्णु एकता श्लोक' },
      { id: 'Harihareshwara Temple', en: '5. Harihareshwara Temple', hi: '५. श्री हरिहरेश्वर मंदिर' },
      { id: 'Harihar Dham', en: '6. Harihar Dham', hi: '६. हरिहर धाम' },
      { id: 'Symbolism and Iconography', en: '7. Symbolism and Iconography', hi: '७. प्रतीक एवं प्रतिमा विज्ञान' },
      { id: 'Spiritual Teachings and Traditions', en: '8. Spiritual Teachings and Traditions', hi: '८. आध्यात्मिक शिक्षाएँ एवं परंपराएँ' }
    ];

    const difficulties = [
      { id: 'All', en: 'All Levels', hi: 'सभी स्तर' },
      { id: 'Beginner', en: 'Beginner (प्रारंभिक)', hi: 'प्रारंभिक (Beginner)' },
      { id: 'Intermediate', en: 'Intermediate (मध्यम)', hi: 'मध्यम (Intermediate)' },
      { id: 'Advanced', en: 'Advanced (गहन)', hi: 'गहन (Advanced)' }
    ];

    let state = {
      view: 'setup',
      selectedCategory: 'All',
      selectedDifficulty: 'All',
      timedMode: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      answered: false,
      userAnswers: [],
      timeLeft: 30,
      timerId: null
    };

    function getBestScore() {
      try {
        const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
        return raw ? JSON.parse(raw) : { percent: 0, score: 0, total: 0 };
      } catch (_) {
        return { percent: 0, score: 0, total: 0 };
      }
    }

    function saveBestScore(score, total) {
      const percent = Math.round((score / total) * 100);
      const currentBest = getBestScore();
      if (percent >= currentBest.percent) {
        try {
          localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify({ percent, score, total }));
        } catch (_) {}
      }
    }

    function stopTimer() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function startTimer() {
      stopTimer();
      if (!state.timedMode) return;
      state.timeLeft = 30;
      const timerDisplay = document.getElementById('quiz-timer-val');
      state.timerId = setInterval(() => {
        state.timeLeft -= 1;
        if (timerDisplay) timerDisplay.textContent = `${state.timeLeft}s`;
        if (state.timeLeft <= 0) {
          stopTimer();
          handleAnswer(-1);
        }
      }, 1000);
    }

    function startQuiz() {
      let pool = list.filter((q) => {
        const catMatch = state.selectedCategory === 'All' || q.category === state.selectedCategory;
        const diffMatch = state.selectedDifficulty === 'All' || q.difficulty === state.selectedDifficulty;
        return catMatch && diffMatch;
      });

      if (pool.length === 0) {
        pool = list.filter((q) => state.selectedCategory === 'All' || q.category === state.selectedCategory);
      }

      const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
      state.questions = shuffled;
      state.currentIndex = 0;
      state.score = 0;
      state.answered = false;
      state.userAnswers = [];
      state.view = 'active';
      render();
      startTimer();
    }

    function handleAnswer(selectedIndex) {
      if (state.answered) return;
      stopTimer();
      state.answered = true;

      const currentQ = state.questions[state.currentIndex];
      const isCorrect = selectedIndex === currentQ.correctIndex;
      if (isCorrect) state.score += 1;

      state.userAnswers.push({
        question: currentQ,
        selectedIndex,
        isCorrect
      });

      render();
    }

    function nextQuestion() {
      if (state.currentIndex + 1 < state.questions.length) {
        state.currentIndex += 1;
        state.answered = false;
        render();
        startTimer();
      } else {
        stopTimer();
        saveBestScore(state.score, state.questions.length);
        state.view = 'results';
        render();
      }
    }

    function render() {
      const lang = getLang();
      const best = getBestScore();

      if (state.view === 'setup') {
        container.innerHTML = `
          <div class="quiz-setup">
            <div class="quiz-best-bar">
              <div>
                <strong style="color:var(--divine-gold-bright);">✦ ${lang === 'hi' ? 'आपका सर्वश्रेष्ठ प्रदर्शन (Personal Best):' : 'Your Personal Best:'}</strong>
                <span style="margin-left:0.5rem; color:var(--temple-ivory);">
                  ${best.total > 0 ? `${best.percent}% (${best.score}/${best.total})` : (lang === 'hi' ? 'अभी तक कोई प्रयास नहीं' : 'No attempts yet — begin below!')}
                </span>
              </div>
              <span class="verified-badge">${list.length} ${lang === 'hi' ? 'प्रमाणित प्रश्न उपलब्ध' : 'Verified Questions Ready'}</span>
            </div>

            <div class="quiz-controls-grid">
              <div class="quiz-field">
                <label for="quiz-cat-select">${t('quizCatLabel')}</label>
                <select id="quiz-cat-select" class="quiz-select">
                  ${categories
                    .map(
                      (c) => `<option value="${c.id}" ${state.selectedCategory === c.id ? 'selected' : ''}>${lang === 'hi' ? c.hi : c.en}</option>`
                    )
                    .join('')}
                </select>
              </div>

              <div class="quiz-field">
                <label for="quiz-diff-select">${t('quizDiffLabel')}</label>
                <select id="quiz-diff-select" class="quiz-select">
                  ${difficulties
                    .map(
                      (d) => `<option value="${d.id}" ${state.selectedDifficulty === d.id ? 'selected' : ''}>${lang === 'hi' ? d.hi : d.en}</option>`
                    )
                    .join('')}
                </select>
              </div>

              <div class="quiz-field">
                <label for="quiz-mode-select">${t('quizModeLabel')}</label>
                <select id="quiz-mode-select" class="quiz-select">
                  <option value="standard" ${!state.timedMode ? 'selected' : ''}>${t('quizModeStandard')}</option>
                  <option value="timed" ${state.timedMode ? 'selected' : ''}>${t('quizModeTimed')}</option>
                </select>
              </div>
            </div>

            <div style="text-align:center; padding-top:0.5rem;">
              <button type="button" class="btn btn--primary" id="quiz-start-btn">${t('quizStartBtn')}</button>
            </div>
          </div>
        `;

        document.getElementById('quiz-cat-select')?.addEventListener('change', (e) => {
          state.selectedCategory = e.target.value;
        });
        document.getElementById('quiz-diff-select')?.addEventListener('change', (e) => {
          state.selectedDifficulty = e.target.value;
        });
        document.getElementById('quiz-mode-select')?.addEventListener('change', (e) => {
          state.timedMode = e.target.value === 'timed';
        });
        document.getElementById('quiz-start-btn')?.addEventListener('click', startQuiz);
        return;
      }

      if (state.view === 'active') {
        const q = state.questions[state.currentIndex];
        const total = state.questions.length;
        const progressPct = Math.round(((state.currentIndex + 1) / total) * 100);
        const opts = pickLang(q.options) || q.options.en;
        const lastAns = state.userAnswers[state.userAnswers.length - 1];

        container.innerHTML = `
          <div>
            <div class="quiz-hud">
              <div>
                <span style="font-size:0.82rem; color:var(--divine-gold); font-weight:700;">
                  ${lang === 'hi' ? `प्रश्न ${state.currentIndex + 1} / ${total}` : `Question ${state.currentIndex + 1} of ${total}`}
                </span>
                <span style="margin-left:0.75rem; font-size:0.78rem; color:var(--temple-ivory-subtle);">
                  • ${q.difficulty}
                </span>
              </div>
              <div style="display:flex; align-items:center; gap:1rem;">
                ${state.timedMode ? `<span class="video-badge" id="quiz-timer-val">⏱ ${state.timeLeft}s</span>` : ''}
                <span style="font-size:0.86rem; color:var(--divine-gold-bright);">
                  ${lang === 'hi' ? 'स्कोर:' : 'Score:'} ${state.score}
                </span>
              </div>
            </div>

            <div class="quiz-progress-bar" role="progressbar" aria-valuenow="${progressPct}" aria-valuemin="0" aria-valuemax="100">
              <div class="quiz-progress-fill" style="width:${progressPct}%;"></div>
            </div>

            <h3 class="quiz-question-text">${pickLang(q.question)}</h3>

            <div class="quiz-options" role="group" aria-label="Answer Options">
              ${opts
                .map((optText, idx) => {
                  let cls = 'quiz-option-btn';
                  if (state.answered) {
                    if (idx === q.correctIndex) cls += ' is-correct';
                    else if (lastAns && lastAns.selectedIndex === idx) cls += ' is-wrong';
                  }
                  const letter = ['A', 'B', 'C', 'D'][idx] || idx + 1;
                  return `
                    <button
                      type="button"
                      class="${cls}"
                      data-opt-idx="${idx}"
                      ${state.answered ? 'disabled' : ''}
                    >
                      <span class="story-tab__num">${letter}</span>
                      <span>${optText}</span>
                    </button>
                  `;
                })
                .join('')}
            </div>

            ${
              state.answered
                ? `
              <div class="quiz-feedback" aria-live="polite">
                <p style="font-weight:700; color:${lastAns.isCorrect ? '#7CE3B4' : '#F29B9B'}; margin-bottom:0.4rem;">
                  ${
                    lastAns.isCorrect
                      ? (lang === 'hi' ? '✓ सही उत्तर! (Correct)' : '✓ Correct Answer!')
                      : (lang === 'hi' ? '✦ सही व्याख्या देखें:' : '✦ Sacred Explanation:')
                  }
                </p>
                <p style="color:var(--temple-ivory); font-size:0.95rem; margin-bottom:0.5rem;">
                  ${pickLang(q.explanation)}
                </p>
                <p style="font-size:0.8rem; color:var(--divine-gold);">
                  📖 ${lang === 'hi' ? 'संदर्भ:' : 'Source Citation:'} ${pickLang(q.citation)}
                </p>
              </div>
              <div style="display:flex; justify-content:flex-end;">
                <button type="button" class="btn btn--primary" id="quiz-next-btn">
                  ${state.currentIndex + 1 < total ? t('quizNextBtn') : t('quizFinishBtn')}
                </button>
              </div>
            `
                : ''
            }
          </div>
        `;

        container.querySelectorAll('[data-opt-idx]').forEach((btn) => {
          btn.addEventListener('click', () => {
            handleAnswer(Number(btn.getAttribute('data-opt-idx')));
          });
        });

        document.getElementById('quiz-next-btn')?.addEventListener('click', nextQuestion);
        return;
      }

      if (state.view === 'results') {
        const total = state.questions.length;
        const percent = Math.round((state.score / total) * 100);
        const radius = 64;
        const circumference = 2 * Math.PI * radius;
        const dashOffset = circumference - (percent / 100) * circumference;

        container.innerHTML = `
          <div class="quiz-results">
            <div class="score-ring-wrap">
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="${radius}" stroke="rgba(216,180,106,0.18)" stroke-width="10" fill="none" />
                <circle
                  cx="80"
                  cy="80"
                  r="${radius}"
                  stroke="var(--divine-gold-bright)"
                  stroke-width="10"
                  fill="none"
                  stroke-linecap="round"
                  stroke-dasharray="${circumference}"
                  stroke-dashoffset="${dashOffset}"
                  transform="rotate(-90 80 80)"
                  style="transition: stroke-dashoffset 1s ease;"
                />
              </svg>
              <div class="score-ring-text">${percent}%</div>
            </div>

            <div>
              <h3 style="font-family:var(--font-heading); font-size:1.75rem; color:#FFF; margin-bottom:0.4rem;">
                ${lang === 'hi' ? `आपने ${total} में से ${state.score} अंक प्राप्त किए!` : `You Scored ${state.score} out of ${total}!`}
              </h3>
              <p style="color:var(--temple-ivory-muted); max-width:54ch;">
                ${
                  percent >= 80
                    ? (lang === 'hi' ? 'अद्भुत! आपने हरि और हर की एकता के शास्त्रीय सत्य को गहराई से आत्मसात किया है।' : 'Extraordinary! You have deeply absorbed the scriptural and philosophical wisdom of Lord Harihara.')
                    : (lang === 'hi' ? 'सुंदर प्रयास! नीचे दिए गए उत्तरों और शास्त्रीय संदर्भों की समीक्षा करें।' : 'Well done! Review the explanations and manuscript citations below to deepen your journey.')
                }
              </p>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:0.85rem; justify-content:center;">
              <button type="button" class="btn btn--primary" id="quiz-retry-btn">${t('quizRetryBtn')}</button>
              <button type="button" class="btn btn--secondary" id="quiz-share-btn">${t('quizShareBtn')}</button>
            </div>

            <div style="width:100%; text-align:left; margin-top:1rem; display:grid; gap:0.85rem;">
              <h4 style="font-family:var(--font-heading); color:var(--divine-gold);">
                ${lang === 'hi' ? 'उत्तर एवं शास्त्र समीक्षा (Answer Review):' : 'Answer & Citation Review:'}
              </h4>
              ${state.userAnswers
                .map(
                  (item, i) => `
                <div style="padding:1rem 1.25rem; border-radius:12px; background:rgba(8,13,29,0.72); border-left:3px solid ${item.isCorrect ? '#46B886' : '#E06C75'};">
                  <p style="font-weight:600; color:#FFF; margin-bottom:0.35rem;">
                    ${i + 1}. ${pickLang(item.question.question)}
                  </p>
                  <p style="font-size:0.88rem; color:var(--temple-ivory-muted); margin-bottom:0.3rem;">
                    ${pickLang(item.question.explanation)}
                  </p>
                  <p style="font-size:0.78rem; color:var(--divine-gold);">
                    📖 ${pickLang(item.question.citation)}
                  </p>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `;

        document.getElementById('quiz-retry-btn')?.addEventListener('click', () => {
          state.view = 'setup';
          render();
        });

        document.getElementById('quiz-share-btn')?.addEventListener('click', async () => {
          const shareText = `I scored ${percent}% (${state.score}/${total}) on the HARIHARA Sacred Knowledge Quiz! "शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः"`;
          if (navigator.share) {
            try {
              await navigator.share({ title: 'HARIHARA Knowledge Quiz', text: shareText, url: window.location.href });
              return;
            } catch (_) {}
          }
          try {
            await navigator.clipboard.writeText(shareText);
            notify(t('copiedToast'));
          } catch (_) {}
        });
      }
    }

    render();
    return { render };
  }

  window.HARIHARA.initQuizEngine = initQuizEngine;
})();
