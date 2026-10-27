/**
 * HARIHARA — Bilingual Internationalization Manager (i18n.js)
 * Supports English ('en') and Hindi ('hi') while preserving Sanskrit in Devanagari.
 * Works on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  const UI_STRINGS = {
    en: {
      skipToContent: "Skip to main content",
      navHome: "Home",
      navUnity: "Divine Unity",
      navShlokas: "Sacred Shlokas",
      navStories: "Stories",
      navVideos: "Videos",
      navTemples: "Temples",
      navQuiz: "Quiz",
      navLibrary: "Knowledge Library",
      replayIntro: "Replay Intro",
      replayIntroFull: "Replay Divine Entrance",
      soundOff: "Ambience Off",
      soundOn: "Temple Ambience",
      langToggleLabel: "हिन्दी",
      introMantra: "शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥",
      introSkip: "Skip Intro ✕",
      introTagline: "Two Forms. One Eternal Truth.",
      introHindiTagline: "शिव में विष्णु, विष्णु में शिव।",
      introEnterMain: "Enter the Divine Unity",
      introEnterSub: "Tap or Press Enter to Open the Sacred Doors",
      vishnuHalfTitle: "Lord Vishnu (Hari)",
      vishnuHalfSub: "Preservation • Chakra • Pitambara",
      shivaHalfTitle: "Lord Shiva (Hara)",
      shivaHalfSub: "Transformation • Trishula • Vibhuti",
      heroTitle: "Where Shiva and Vishnu Are One",
      heroLead: "Beyond names, beyond forms, beyond division lies the eternal truth of divine unity.",
      heroBookNote: "Inspired by the sacred manuscript “Harihara: Do Naam, Ek Pran” by Manu Siddharth — exploring the indivisible oneness of Hari and Hara across the Vedas, Upanishads, and Puranas.",
      heroCtaTruth: "Explore the Eternal Truth",
      heroCtaStories: "Discover the Divine Stories",
      heroScrollCue: "Scroll into the Sanctum",
      unityEyebrow: "Section I • Sacred Philosophy",
      unityTitle: "Two Divine Forms. One Eternal Essence.",
      unitySubtitle: "Just as inhaling and exhaling are two actions of a single life-breath, Vishnu (Hari) and Shiva (Hara) are two expressions of the one Supreme Consciousness.",
      vishnuPillarTag: "Left Half of the Portal • Sri Hari",
      vishnuPillarTitle: "Lord Vishnu — The All-Pervading Preserver",
      vishnuPillarDesc: "Radiant royal-blue complexion, crowned with the golden Kirit Mukut, adorned in yellow Pitambara silk, bearing the Sudarshana Chakra, Panchajanya Shankha, and Kaustubha gem — embodying cosmic order, compassion, and sustenance.",
      shivaPillarTag: "Right Half of the Portal • Mahadeva",
      shivaPillarTitle: "Lord Shiva — The Auspicious Transformer",
      shivaPillarDesc: "Ash-blue meditative radiance, crowned with matted locks holding the Ganga and crescent moon, adorned with Tripundra, Rudraksha, and Vasuki, wielding the Trishula and Damaru — embodying supreme stillness, renewal, and liberation.",
      convergenceHeading: "Complementary Symbolism & Shared Essence",
      traditionsHeading: "How Sacred Traditions Behold Their Unity",
      shlokasEyebrow: "Section II • Scriptural Authority",
      shlokasTitle: "Divine Words of Unity",
      shlokasSubtitle: "When sacred wisdom reminds us that devotion need not divide. Every verse below is verified with its scriptural source, transliteration, literal translation, and devotional commentary.",
      filterAll: "All Scriptures",
      filterUpanishad: "Upanishads",
      filterVeda: "Vedas",
      filterPurana: "Puranas",
      filterItihasa: "Itihasa (Mahabharata)",
      literalLabel: "Literal Translation",
      commentaryLabel: "Devotional & Philosophical Meaning",
      copyVerse: "Copy Shloka",
      shareVerse: "Share",
      copiedToast: "Copied to clipboard with sacred citation!",
      storiesEyebrow: "Section III • Manuscript Storytelling",
      storiesTitle: "When Two Divine Powers Became One",
      storiesSubtitle: "Directly adapted from Manu Siddharth's manuscript 'Harihara: Do Naam, Ek Pran' — explore the Puranic manifestations, mutual devotion, and spiritual science of Lord Harihara.",
      spiritualLessonHeading: "Concluding Spiritual Lesson",
      openFullStoryPage: "Open Standalone Chapter View ↗",
      videosEyebrow: "Section IV • Devotional Cinema",
      videosTitle: "Stories That Awaken Devotion",
      videosSubtitle: "Explore visual storyboards, sacred shloka reels (9:16), and documentary presentations celebrating Shiva–Vishnu unity.",
      templesEyebrow: "Section V • Sacred Geography",
      templesTitle: "Where Divine Unity Is Worshipped",
      templesSubtitle: "From the 13th-century Hoysala Harihareshwara Temple in Karnataka and the 6th-century Badami Caves to Odisha's Lingaraja Temple, Tamil Nadu's Sankarankovil, and Jharkhand's Harihar Dham.",
      getDirections: "Directions on Map ↗",
      viewTemplePage: "Detailed Shrine Profile →",
      quizEyebrow: "Section VI • Interactive Learning",
      quizTitle: "How Well Do You Know Harihara?",
      quizSubtitle: "Test your understanding of the Guhasura legend, Vedic and Puranic shlokas, sacred iconography, and historic temples.",
      quizCatLabel: "Select Category",
      quizDiffLabel: "Select Difficulty",
      quizModeLabel: "Challenge Mode",
      quizModeStandard: "Contemplative (Untimed)",
      quizModeTimed: "Timed Challenge (30s / Question)",
      quizStartBtn: "Begin Sacred Knowledge Quiz",
      quizNextBtn: "Next Question →",
      quizFinishBtn: "View Final Results",
      quizRetryBtn: "Take Another Quiz",
      quizShareBtn: "Share My Score",
      reflectionsEyebrow: "Section VII • Quiet Contemplation",
      reflectionsTitle: "The Light Beyond Division",
      reflectionsSubtitle: "Meditative reflections from the manuscript on harmony between traditions, devotion beyond rivalry, and realizing the One within the heart.",
      nextReflectionBtn: "Reveal Another Reflection ✦",
      libraryEyebrow: "Section VIII • Digital Knowledge Archive",
      libraryTitle: "The Harihara Knowledge Library",
      librarySubtitle: "Search and study structured articles derived from all six parts and twenty chapters of the manuscript, complete with bibliographies and deep links.",
      searchPlaceholder: "Search articles by topic, Purana, Guhasura, Advaita, temples...",
      readArticleBtn: "Read Full Article →",
      footerMission: "A sacred digital sanctuary celebrating Lord Harihara — the eternal oneness of Lord Shiva and Lord Vishnu — based on authentic scriptures and 'Harihara: Do Naam, Ek Pran' by Manu Siddharth.",
      footerTraditionNote: "Respectful Note on Traditions: Sanatana Dharma encompasses diverse theological schools — including Shaiva, Vaishnava, and Smarta traditions. This platform honors each tradition's distinctive philosophical lens while celebrating their shared reverence and harmony.",
      footerClosing: "“May devotion unite what ignorance divides.”"
    },
    hi: {
      skipToContent: "मुख्य सामग्री पर जाएँ",
      navHome: "मुखपृष्ठ",
      navUnity: "दिव्य एकता",
      navShlokas: "पवित्र श्लोक",
      navStories: "पौराणिक कथाएँ",
      navVideos: "वीडियो दीर्घा",
      navTemples: "पावन तीर्थ",
      navQuiz: "ज्ञान प्रश्नोत्तरी",
      navLibrary: "ज्ञान पुस्तकालय",
      replayIntro: "दिव्य प्रवेश पुनः देखें",
      replayIntroFull: "दिव्य द्वार प्रवेश पुनः देखें",
      soundOff: "ध्वनि बंद",
      soundOn: "मंदिर नाद चालू",
      langToggleLabel: "English",
      introMantra: "शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥",
      introSkip: "प्रवेश छोड़ें ✕",
      introTagline: "दो रूप। एक सनातन सत्य।",
      introHindiTagline: "शिव में विष्णु, विष्णु में शिव।",
      introEnterMain: "दिव्य एकता में प्रवेश करें",
      introEnterSub: "पवित्र द्वार खोलने के लिए स्पर्श करें या Enter दबाएँ",
      vishnuHalfTitle: "भगवान विष्णु (हरि)",
      vishnuHalfSub: "पालन • सुदर्शन चक्र • पीताम्बर",
      shivaHalfTitle: "भगवान शिव (हर)",
      shivaHalfSub: "रूपांतरण • त्रिशूल • विभूति",
      heroTitle: "जहाँ शिव और विष्णु एक हैं",
      heroLead: "नामों से परे, रूपों से परे, विभाजन से परे — दिव्य एकता का सनातन सत्य विराजमान है।",
      heroBookNote: "मनु सिद्धार्थ रचित पांडुलिपि “हरिहर: दो नाम, एक प्राण” पर आधारित — वेद, उपनिषद और पुराणों के आलोक में हरि और हर की अविभाज्य एकता की आध्यात्मिक यात्रा।",
      heroCtaTruth: "सनातन सत्य का अन्वेषण करें",
      heroCtaStories: "दिव्य कथाएँ पढ़ें",
      heroScrollCue: "गर्भगृह की ओर नीचे बढ़ें",
      unityEyebrow: "खंड १ • आध्यात्मिक दर्शन",
      unityTitle: "दो दिव्य स्वरूप। एक शाश्वत तत्व।",
      unitySubtitle: "जैसे श्वास लेना और छोड़ना एक ही जीवन की दो क्रियाएँ हैं, वैसे ही विष्णु (हरि) और शिव (हर) एक ही परमात्मा की दो अभिव्यक्तियाँ हैं।",
      vishnuPillarTag: "वाम भाग • श्रीहरि विष्णु",
      vishnuPillarTitle: "भगवान विष्णु — सर्वव्यापी पालनहार",
      vishnuPillarDesc: "दिव्य नील वर्ण, स्वर्ण किरीट मुकुट, पीताम्बर, कौस्तुभ मणि, पाञ्चजन्य शंख और सुदर्शन चक्र धारी — करुणा, धर्म और सृष्टि-पालन के साक्षात् स्वरूप।",
      shivaPillarTag: "दक्षिण भाग • देवाधिदेव महादेव",
      shivaPillarTitle: "भगवान शिव — कल्याणकारी रूपांतरणकर्ता",
      shivaPillarDesc: "भस्म-नील आभा, जटाजूट में गंगा और बालचंद्र, त्रिपुंड्र, रुद्राक्ष व वासुकी नाग, हाथ में त्रिशूल और डमरू — परम ध्यान, वैराग्य और मोक्ष के दाता।",
      convergenceHeading: "पूरक प्रतीक विज्ञान एवं साझा आध्यात्मिक तत्व",
      traditionsHeading: "विभिन्न दार्शनिक परंपराओं में हरिहर एकता",
      shlokasEyebrow: "खंड २ • शास्त्रीय प्रमाण",
      shlokasTitle: "एकता के दिव्य शास्त्र-वचन",
      shlokasSubtitle: "जब पवित्र प्रज्ञा हमें याद दिलाती है कि भक्ति विभाजन के लिए नहीं है। प्रत्येक श्लोक अपने मूल ग्रंथ संदर्भ, शब्दार्थ और भावार्थ के साथ प्रमाणित है।",
      filterAll: "सभी शास्त्र",
      filterUpanishad: "उपनिषद",
      filterVeda: "वेद श्रुति",
      filterPurana: "महापुराण",
      filterItihasa: "इतिहास (महाभारत)",
      literalLabel: "शब्दार्थ (Literal Translation)",
      commentaryLabel: "भक्ति एवं दार्शनिक भावार्थ",
      copyVerse: "श्लोक कॉपी करें",
      shareVerse: "साझा करें",
      copiedToast: "श्लोक और शास्त्र संदर्भ क्लिपबोर्ड पर कॉपी हो गया!",
      storiesEyebrow: "खंड ३ • पांडुलिपि कथा-यात्रा",
      storiesTitle: "जब दो दिव्य शक्तियाँ एक हो गईं",
      storiesSubtitle: "मनु सिद्धार्थ की पांडुलिपि 'हरिहर: दो नाम, एक प्राण' से प्रत्यक्ष रूप से संकलित — गुहासुर वध, वामन पुराण दर्शन और शिव-विष्णु की परस्पर भक्ति की अमर कथाएँ।",
      spiritualLessonHeading: "कथा का आध्यात्मिक संदेश",
      openFullStoryPage: "स्वतंत्र अध्याय पृष्ठ खोलें ↗",
      videosEyebrow: "खंड ४ • भक्ति दृश्य-दीर्घा",
      videosTitle: "कथाएँ जो भक्ति जगाती हैं",
      videosSubtitle: "हरिहर कथाओं, पवित्र श्लोक रील्स (९:१६) और दिव्य मंदिरों पर आधारित दृश्य प्रस्तुतियाँ।",
      templesEyebrow: "खंड ५ • पावन तीर्थ एवं धाम",
      templesTitle: "जहाँ दिव्य एकता की पूजा होती है",
      templesSubtitle: "कर्नाटक के १३वीं सदी के होयसल हरिहरेश्वर मंदिर और बादामी गुफाओं से लेकर ओडिशा के लिंगराज मंदिर, तमिलनाडु के शंकरनकोविल और झारखंड के हरिहर धाम तक।",
      getDirections: "मानचित्र पर मार्ग देखें ↗",
      viewTemplePage: "विस्तृत मंदिर परिचय →",
      quizEyebrow: "खंड ६ • संवादात्मक ज्ञान परीक्षा",
      quizTitle: "आप भगवान हरिहर को कितना जानते हैं?",
      quizSubtitle: "गुहासुर कथा, वैदिक व पौराणिक श्लोक, प्रतिमा विज्ञान और ऐतिहासिक मंदिरों पर आधारित ज्ञान प्रश्नोत्तरी।",
      quizCatLabel: "विषय श्रेणी चुनें",
      quizDiffLabel: "कठिनाई स्तर चुनें",
      quizModeLabel: "चुनौती मोड",
      quizModeStandard: "शांत मनन मोड (बिना समय सीमा)",
      quizModeTimed: "समयबद्ध चुनौती (३० सेकंड / प्रश्न)",
      quizStartBtn: "ज्ञान प्रश्नोत्तरी आरंभ करें",
      quizNextBtn: "अगला प्रश्न →",
      quizFinishBtn: "अंतिम परिणाम देखें",
      quizRetryBtn: "पुनः प्रयास करें",
      quizShareBtn: "अपना स्कोर साझा करें",
      reflectionsEyebrow: "खंड ७ • शांत आत्म-चिंतन",
      reflectionsTitle: "विभाजन से परे का प्रकाश",
      reflectionsSubtitle: "पांडुलिपि से संकलित शांत विचार — संप्रदायों के सामंजस्य, प्रतिद्वंद्विता से मुक्त भक्ति और हृदय में 'एकम्' की अनुभूति पर।",
      nextReflectionBtn: "अगला आध्यात्मिक विचार देखें ✦",
      libraryEyebrow: "खंड ८ • डिजिटल ज्ञान पुस्तकालय",
      libraryTitle: "हरिहर ज्ञान पुस्तकालय",
      librarySubtitle: "पांडुलिपि के सभी ६ भागों और २० अध्यायों पर आधारित शोधपूर्ण लेख — खोज सुविधा, विषय-सूची और शास्त्रीय संदर्भों के साथ।",
      searchPlaceholder: "विषय, पुराण, गुहासुर, अद्वैत, मंदिर आदि खोजें...",
      readArticleBtn: "पूरा लेख पढ़ें →",
      footerMission: "भगवान शिव और भगवान विष्णु की शाश्वत एकता — भगवान हरिहर — को समर्पित एक पावन डिजिटल मंदिर, प्रामाणिक शास्त्रों एवं मनु सिद्धार्थ रचित 'हरिहर: दो नाम, एक प्राण' पर आधारित।",
      footerTraditionNote: "परंपराओं के प्रति आदर: सनातन धर्म में शैव, वैष्णव और स्मार्त सहित अनेक समृद्ध दार्शनिक परंपराएँ हैं। यह मंच प्रत्येक परंपरा की विशिष्टता का सम्मान करते हुए उनके परस्पर आदर और समन्वय का उत्सव मनाता है।",
      footerClosing: "“भक्ति उसे जोड़ दे जिसे अज्ञान विभाजित करता है।”"
    }
  };

  const STORAGE_KEY_LANG = 'harihara_lang';
  let currentLang = 'en';
  try {
    currentLang = localStorage.getItem(STORAGE_KEY_LANG) || 'en';
  } catch (_) {}
  const subscribers = new Set();

  function getLang() {
    return currentLang;
  }

  function t(key) {
    return (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key]) || UI_STRINGS.en[key] || key;
  }

  function pickLang(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[currentLang] || obj.en || obj.hi || '';
  }

  function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (val) el.setAttribute('aria-label', val);
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'hi') return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch (_) {}
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);
    applyStaticTranslations();
    subscribers.forEach((fn) => {
      try { fn(currentLang); } catch (err) { console.error(err); }
    });
  }

  function toggleLang() {
    setLang(currentLang === 'en' ? 'hi' : 'en');
  }

  function onLangChange(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  }

  window.HARIHARA.i18n = {
    UI_STRINGS,
    getLang,
    t,
    pickLang,
    setLang,
    toggleLang,
    onLangChange,
    applyStaticTranslations
  };
})();
