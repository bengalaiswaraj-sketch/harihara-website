/**
 * HARIHARA — Structured Content & Data Loader (content.js)
 * Works seamlessly on both static HTTP servers and direct file:// protocol.
 */
(function () {
  window.HARIHARA = window.HARIHARA || {};

  const EMBEDDED_FALLBACK = {
  "site": {
    "siteName": "HARIHARA",
    "sanskritTitle": "हरिहर",
    "subtitle": {
      "en": "Two Forms. One Eternal Truth.",
      "hi": "शिव में विष्णु, विष्णु में शिव।"
    },
    "bookReference": {
      "titleHi": "हरिहर: दो नाम, एक प्राण — शिव और विष्णु की दिव्य एकता",
      "titleEn": "Harihara: Two Names, One Prana — The Divine Unity of Shiva and Vishnu",
      "author": {
        "en": "Manu Siddharth",
        "hi": "मनु सिद्धार्थ"
      },
      "authorBio": {
        "en": "Manu Siddharth is an IT specialist by profession whose life is animated by an unwavering devotion to Lord Shiva and the timeless wisdom of the Sanatana scriptures. After authoring 'Shiva Purana Unlocked', his deep immersion in the Shiva Purana, Linga Purana, Vishnu Purana, Srimad Bhagavatam, Skanda Purana, Vamana Purana, and the Upanishads inspired 'Harihara: Do Naam, Ek Pran' — an invitation for seekers to look beyond sectarian walls and experience the indivisible oneness of Hari and Hara.",
        "hi": "मनु सिद्धार्थ पेशे से एक IT विशेषज्ञ हैं — किंतु इस तकनीकी प्रवीणता के भीतर भगवान शिव और सनातन शास्त्रों के प्रति एक गहरी, अटूट भक्ति की लौ जलती है। 'शिव पुराण अनलॉक्ड' लिखने के बाद, शिव पुराण, लिंग पुराण, विष्णु पुराण, श्रीमद् भागवतम्, स्कंद पुराण, वामन पुराण और उपनिषदों के गहन अध्ययन ने उन्हें 'हरिहर: दो नाम, एक प्राण' की रचना की प्रेरणा दी — ताकि साधक रूपों और नामों की सीमाओं से परे जाकर हरि और हर की अविभाज्य एकता का अनुभव कर सकें।"
      },
      "dedication": {
        "en": "Dedicated with supreme reverence at the lotus feet of Guru Maharaj Swami Purushottamanand Ji Maharaj; with respectful salutations to Swami Chaitanyanand Ji Maharaj of Vashistha Guha Ashram, whose divine narrations of the mutual devotion of Shiva and Vishnu sowed the first seeds of Harihara unity; and in deep gratitude to the Aghori saint Mahesh Baba of Sutwa Shamshan, Barabanki, who taught that nothing sacred can ever be impure — only our vision can be.",
        "hi": "परम श्रद्धा के साथ अपने प्रिय गुरु महाराज, स्वामी पुरुषोत्तमानंद जी महाराज के श्री चरण-कमलों में अर्पित; वशिष्ठ गुहा आश्रम के स्वामी चैतन्यानंद जी महाराज को सादर प्रणाम, जिनकी शिव-विष्णु परस्पर भक्ति की दिव्य कथाओं ने हरिहर एकता के प्रथम बीज बोए; और बाराबंकी के सुतवा श्मशान के अघोरी संत महेश बाबा के प्रति गहरी कृतज्ञता के साथ, जिन्होंने सिखाया कि कुछ भी पवित्र कभी अपवित्र नहीं हो सकता — केवल हमारी दृष्टि हो सकती है।"
      }
    },
    "coreVerse": {
      "sanskrit": "शिवाय विष्णुरूपाय शिवरूपाय विष्णवे।\nशिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥",
      "transliteration": "Śivāya Viṣṇurūpāya Śivarūpāya Viṣṇave |\nŚivasya hṛdayaṁ Viṣṇur Viṣṇoś ca hṛdayaṁ Śivaḥ ||",
      "meaningEn": "Salutations to Shiva who is of the form of Vishnu, and to Vishnu who is of the form of Shiva. Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu.",
      "meaningHi": "विष्णु-स्वरूप शिव को नमस्कार है और शिव-स्वरूप विष्णु को नमस्कार है। शिव के हृदय में विष्णु हैं और विष्णु के हृदय में शिव हैं।",
      "source": "Skanda Upanishad (Krishna Yajurveda), Verses 8–9",
      "verificationStatus": "verified"
    },
    "philosophicalTraditions": [
      {
        "id": "advaita",
        "name": {
          "en": "Advaita Vedanta (Smarta Synthesis)",
          "hi": "अद्वैत वेदांत (अद्वय दर्शन)"
        },
        "acharya": {
          "en": "Adi Shankaracharya",
          "hi": "आदि शंकराचार्य"
        },
        "summary": {
          "en": "Brahman alone is the unchanging ocean of reality; Shiva and Vishnu are luminous waves rising from that single infinite consciousness. Adi Shankaracharya composed both the Shivananda Lahari in praise of Shiva and the Krishnashtakam / Bhaja Govindam in praise of Vishnu, demonstrating that every divine form points toward the one indivisible Absolute.",
          "hi": "केवल ब्रह्म ही परम सत्य का अपरिवर्तनशील सागर है; शिव और विष्णु उसी अनंत चेतना के सागर की दो महिमाशाली लहरें हैं। आदि शंकराचार्य ने स्वयं शिव की स्तुति में 'शिवानंद लहरी' और विष्णु की स्तुति में 'कृष्णाष्टकम्' की रचना की, क्योंकि सभी रूप उसी एक निराकार सत्य की ओर इंगित करते हैं।"
        }
      },
      {
        "id": "vishishtadvaita",
        "name": {
          "en": "Vishishtadvaita (Qualified Non-Dualism)",
          "hi": "विशिष्टाद्वैत (सगुण अद्वैत)"
        },
        "acharya": {
          "en": "Sri Ramanujacharya",
          "hi": "श्री रामानुजाचार्य"
        },
        "summary": {
          "en": "Honors both unity and sacred distinctiveness: the Supreme Lord is the inner soul (Antaryami) whose cosmic body encompasses all conscious beings and divine cosmic functions. As highlighted in the manuscript, Maheshwara performs the sacred function of cosmic dissolution and renewal within the unified divine order.",
          "hi": "यह दर्शन एकता और विशिष्टता दोनों का सम्मान करता है: परम सत्ता अनंत आत्माओं और जगत की अंतर्यामी है। रामानुज परंपरा में भी महेश्वर के पवित्र विसर्जन कार्य को उसी एक दिव्य व्यवस्था की अभिव्यक्ति के रूप में देखा गया है।"
        }
      },
      {
        "id": "kashmir-shaivism",
        "name": {
          "en": "Kashmir Shaivism (Trika / Pratyabhijna)",
          "hi": "कश्मीर शैवदर्शन (शिव ही सर्वस्व)"
        },
        "acharya": {
          "en": "Vasugupta & Abhinavagupta",
          "hi": "वासुगुप्त एवं अभिनवगुप्त"
        },
        "summary": {
          "en": "Views Paramashiva as Pure Absolute Consciousness (Chit) performing five cosmic acts (Pancha-Kritya): creation, preservation, dissolution, concealment, and grace. Here, Vishnu is revered as Shiva's own sustaining power (Sthiti-Shakti) — just as one's hand is never separate from one's body.",
          "hi": "अभिनवगुप्त और वासुगुप्त का कश्मीर शैवदर्शन शिव को परम चित् (निरपेक्ष चेतना) के रूप में देखता है जो सृष्टि, स्थिति, संहार, तिरोधान और अनुग्रह के पाँच कार्य करते हैं। इसमें विष्णु को शिव की ही पालन-शक्ति के रूप में स्वीकार किया जाता है — जैसे हाथ शरीर से अलग नहीं है।"
        }
      },
      {
        "id": "puranic-synthesis",
        "name": {
          "en": "Puranic & Vedic Mutual Reverence",
          "hi": "वैदिक एवं पौराणिक परस्पर भक्ति"
        },
        "acharya": {
          "en": "Vedic Rishis & Vyasa Tradition",
          "hi": "वैदिक ऋषि एवं व्यास परंपरा"
        },
        "summary": {
          "en": "From the Rigveda ('Ekam Sat Vipra Bahudha Vadanti') to the Shiva, Vishnu, Vamana, Skanda, Linga, and Bhagavata Puranas, Shiva and Vishnu continuously worship, protect, and reflect one another — proving that devotion to one reaches completion only in reverence for the other.",
          "hi": "ऋग्वेद ('एकं सद्विप्रा बहुधा वदन्ति') से लेकर शिव, विष्णु, वामन, स्कंद, लिंग और भागवत पुराणों तक — शिव और विष्णु निरंतर एक-दूसरे की आराधना और रक्षा करते हैं, यह सिद्ध करते हुए कि एक के प्रति भक्ति दूसरे के सम्मान में ही पूर्ण होती है।"
        }
      }
    ],
    "iconographyComparison": [
      {
        "aspect": {
          "en": "Sacred Name & Etymology",
          "hi": "पवित्र नाम एवं व्युत्पत्ति"
        },
        "vishnu": {
          "title": {
            "en": "Hari (हरि)",
            "hi": "हरि (विष्णु)"
          },
          "detail": {
            "en": "He who removes sins, sorrow, and cosmic disharmony; 'Vishnu' (from root vish) means the All-Pervading Consciousness present in every atom.",
            "hi": "जो भक्तों के दुख, पाप और अज्ञान का हरण करते हैं; 'विष्णु' (विष् धातु) का अर्थ है कण-कण में व्याप्त सर्वव्यापी चेतना।"
          }
        },
        "shiva": {
          "title": {
            "en": "Hara (हर)",
            "hi": "हर (शिव)"
          },
          "detail": {
            "en": "He who dissolves ignorance, ego, and bondage at the end of time; 'Shiva' means the Auspicious, Pure, and Eternally Benevolent One.",
            "hi": "जो अज्ञान, अहंकार और भव-बंधन का संहार कर मुक्ति देते हैं; 'शिव' का अर्थ है परम कल्याणकारी और शुद्ध चेतना।"
          }
        },
        "unity": {
          "en": "Both 'Hari' and 'Hara' derive from the Sanskrit root 'hṛ' (to take away / uplift): Hari removes the veil of adharma in life, Hara dissolves the bondage of ego into liberation.",
          "hi": "'हरि' और 'हर' दोनों संस्कृत की 'हृ' धातु से जुड़े हैं — दोनों ही अज्ञान और बंधन का हरण कर आत्मा को परमात्मा से मिलाते हैं।"
        }
      },
      {
        "aspect": {
          "en": "Primary Weapon & Cosmic Rhythm",
          "hi": "दिव्य आयुध एवं ब्रह्मांडीय लय"
        },
        "vishnu": {
          "title": {
            "en": "Sudarshana Chakra & Panchajanya Shankha",
            "hi": "सुदर्शन चक्र एवं पाञ्चजन्य शंख"
          },
          "detail": {
            "en": "The spinning wheel of auspicious vision (Sudarshana) maintaining cosmic order (Dharma) and the primordial conch of creative Nada.",
            "hi": "धर्म और कालचक्र की मर्यादा बनाए रखने वाला सुदर्शन चक्र तथा सृजन की ध्वनि का प्रतीक पाञ्चजन्य शंख।"
          }
        },
        "shiva": {
          "title": {
            "en": "Trishula & Damaru",
            "hi": "त्रिशूल एवं डमरू"
          },
          "detail": {
            "en": "The trident transcending the three gunas (Sattva, Rajas, Tamas) and three states of time, paired with the Damaru beating the rhythm of cosmic evolution.",
            "hi": "तीनों गुणों (सत्त्व, रज, तम) और तीनों कालों से परे ले जाने वाला त्रिशूल तथा ब्रह्मांडीय स्पंदन का प्रतीक डमरू।"
          }
        },
        "unity": {
          "en": "In the battle against Guhasura, Harihara wielded both the Trishula and the Sudarshana Chakra simultaneously — proving that preservation and transformation act as two hands of one cosmic dancer.",
          "hi": "गुहासुर वध में हरिहर के हाथों में शिव का त्रिशूल और विष्णु का सुदर्शन चक्र दोनों एक साथ थे — यह दिखाते हुए कि पालन और परिवर्तन एक ही नर्तक के दो हस्त हैं।"
        }
      },
      {
        "aspect": {
          "en": "Adornment & Sacred Garments",
          "hi": "दिव्य अलंकरण एवं वस्त्र"
        },
        "vishnu": {
          "title": {
            "en": "Kirit Mukut, Kaustubha & Pitambara",
            "hi": "किरीट मुकुट, कौस्तुभ मणि एवं पीताम्बर"
          },
          "detail": {
            "en": "Crowned in radiant gold, wearing yellow silk (Pitambara) and the Vaijayanti garland — symbolizing engaged cosmic sovereignty and auspicious fullness.",
            "hi": "स्वर्ण मुकुट, पीताम्बर और वैजयंती माला — जो सृष्टि के सौंदर्य, ऐश्वर्य और धर्ममय संचालन के प्रतीक हैं।"
          }
        },
        "shiva": {
          "title": {
            "en": "Jata-Mukuta, Crescent Moon, Vibhuti & Tiger Skin",
            "hi": "जटाजूट, बालचंद्र, भस्म एवं व्याघ्रचर्म"
          },
          "detail": {
            "en": "Crowned with matted locks holding the Ganga and crescent moon, adorned with sacred ash (Vibhuti), Rudraksha, and Vasuki — symbolizing supreme detachment and stillness.",
            "hi": "जटाओं में गंगा और अर्धचंद्र, अंग पर भस्म, रुद्राक्ष और वासुकी नाग — जो परम वैराग्य, ध्यान और मृत्युंजय तत्व के प्रतीक हैं।"
          }
        },
        "unity": {
          "en": "Worldly responsibility (Pitambara) and inner renunciation (Vibhuti) are not enemies; in Harihara they meet in one body, teaching us to live in the world with a liberated heart.",
          "hi": "संसार का उत्तरदायित्व (पीताम्बर) और आंतरिक वैराग्य (भस्म) एक-दूसरे के विरोधी नहीं हैं; हरिहर के एक ही शरीर में दोनों का मिलन हमें संसार में रहते हुए मुक्त रहना सिखाता है।"
        }
      },
      {
        "aspect": {
          "en": "Cosmic Function & Breath of Life",
          "hi": "ब्रह्मांडीय कार्य एवं जीवन-श्वास"
        },
        "vishnu": {
          "title": {
            "en": "Sthiti — Compassionate Preservation",
            "hi": "स्थिति — करुणामय पालन"
          },
          "detail": {
            "en": "Nurturing, sustaining, and restoring balance through incarnations whenever righteousness declines.",
            "hi": "प्रेम, करुणा और व्यवस्था के माध्यम से सृष्टि को बनाए रखना और धर्म की रक्षा करना।"
          }
        },
        "shiva": {
          "title": {
            "en": "Samhara & Anugraha — Renewal & Liberation",
            "hi": "संहार एवं अनुग्रह — पुनरुद्धार और मोक्ष"
          },
          "detail": {
            "en": "Dissolving worn-out forms to clear space for new creation and granting ultimate liberation (Moksha).",
            "hi": "पुराने को समेटकर नए सृजन के लिए स्थान बनाना और जीवात्मा को परम मोक्ष प्रदान करना।"
          }
        },
        "unity": {
          "en": "As the manuscript beautifully states: 'Just as inhaling and exhaling are two acts of a single life-breath, Vishnu and Shiva are two expressions of the one Supreme Spirit. Preservation without renewal is stagnation; dissolution without preservation is emptiness. Together, they are Life.'",
          "hi": "जैसा पांडुलिपि में कहा गया है: 'जैसे श्वास लेना और छोड़ना एक ही जीवन की दो क्रियाएँ हैं, वैसे ही विष्णु और शिव एक ही परमात्मा की दो अभिव्यक्तियाँ हैं। पालन बिना संहार के ठहराव है; संहार बिना पालन के रिक्तता। दोनों मिलकर जीवन हैं।'"
        }
      }
    ],
    "reflections": [
      {
        "id": "refl-1",
        "quote": {
          "en": "Where Shiva ends, there Vishnu begins. Where Vishnu ends, there Shiva begins. And where both meet, only Brahman remains.",
          "hi": "जहाँ शिव समाप्त होते हैं, वहाँ विष्णु आरंभ होते हैं। जहाँ विष्णु समाप्त होते हैं, वहाँ शिव आरंभ होते हैं। और जहाँ दोनों मिलते हैं, वहाँ केवल ब्रह्म ही शेष रहता है।"
        },
        "context": {
          "en": "From the Introduction to 'Harihara: Do Naam, Ek Pran' — reminding us that the boundary between Hari and Hara exists only in limited human perception, never in the Divine.",
          "hi": "'हरिहर: दो नाम, एक प्राण' के परिचय से — यह स्मरण दिलाते हुए कि विभाजन केवल देखने वाले की सीमित दृष्टि में है, परमात्मा में नहीं।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Introduction)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, परिचय)"
        },
        "type": "manuscript-commentary"
      },
      {
        "id": "refl-2",
        "quote": {
          "en": "If you ever feel torn between the meditative ash-clad ascetic of Kailash and the lotus-eyed Preserver reclining on the Cosmic Ocean — know this: your heart was never meant to choose.",
          "hi": "यदि आप कभी कैलाश के उस ध्यानस्थ, भस्मलिप्त तपस्वी और क्षीरसागर पर लेटे उस कमलनयन पालनहार के बीच बँटा हुआ महसूस करते हैं — तो जान लें: आपका हृदय कभी चुनने के लिए बना ही नहीं था।"
        },
        "context": {
          "en": "Paths that were meant to be doorways to the Infinite should never be turned into walls between devotees. Loving Shiva expands naturally into loving Vishnu.",
          "hi": "जो पथ ईश्वर तक पहुँचने के द्वार बनने थे, उन्हें भक्तों के बीच की दीवार नहीं बनना चाहिए। शिव से प्रेम करने का अर्थ है विष्णु से भी उतना ही प्रेम करना।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Chapter 2)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, अध्याय २)"
        },
        "type": "manuscript-commentary"
      },
      {
        "id": "refl-3",
        "quote": {
          "en": "Guhasura believed Shiva and Vishnu were separate, and in that ignorance he asked for his boon. Those who divide Shiva and Vishnu today live in the same illusion.",
          "hi": "गुहासुर ने शिव और विष्णु को अलग-अलग माना — और इसी अज्ञान में उसने वरदान माँगा। आज जो भक्त शिव और विष्णु में विभेद करते हैं, वे भी सत्य के केवल एक पक्ष को देख रहे हैं, पूर्ण सत्य को नहीं।"
        },
        "context": {
          "en": "The spiritual moral of the Guhasura narrative: sectarian ego thrives on division, while awakening begins the moment we recognize the unified consciousness behind all sacred forms.",
          "hi": "गुहासुर कथा का आध्यात्मिक संदेश: अहंकार विभाजन पर पलता है, और जिस क्षण हम दोनों रूपों के पीछे एक ही चेतना को पहचानते हैं, अज्ञान का अंधकार मिट जाता है।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Chapter 1)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, अध्याय १)"
        },
        "type": "manuscript-commentary"
      },
      {
        "id": "refl-4",
        "quote": {
          "en": "Imagine reading a scripture dedicated entirely to Lord Shiva, and finding Lord Shiva himself teaching Parvati and the sages to chant the thousand names of Vishnu. What clearer proof could there be that they are reflections of one love?",
          "hi": "कल्पना करें: आप शिव को समर्पित एक ग्रंथ पढ़ रहे हैं, और स्वयं महादेव आपको विष्णु के सहस्र नाम जपना सिखा रहे हैं। क्या इससे स्पष्ट प्रमाण चाहिए कि ये दोनों प्रतिद्वंद्वी नहीं, एक परम प्रेम के प्रतिबिंब हैं?"
        },
        "context": {
          "en": "To dishonor Vishnu while claiming to worship Shiva is like claiming to love the moon while hating the night sky that holds it.",
          "hi": "शिव की पूजा करते हुए विष्णु का अनादर करना उस व्यक्ति की तरह है जो चंद्रमा से प्रेम का दावा करता है पर उसे थामे रखने वाले आकाश से घृणा करता है।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Chapter 5)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, अध्याय ५)"
        },
        "type": "manuscript-commentary"
      },
      {
        "id": "refl-5",
        "quote": {
          "en": "Preservation without transformation is stagnation. Transformation without preservation is emptiness. Together, as two hands of the Cosmic Dancer, they are Life.",
          "hi": "पालन बिना संहार के — ठहराव। संहार बिना पालन के — रिक्तता। दोनों मिलकर — जीवन।"
        },
        "context": {
          "en": "Day and night, inhalation and exhalation, sprouting seed and falling blossom — opposing forces in nature are never enemies; they are partners in a single sacred dance.",
          "hi": "दिन और रात, श्वास का भरना और छोड़ना, बीज का अंकुरित होना और पुष्प का झड़ना — प्रकृति की ये दोनों शक्तियाँ शत्रु नहीं, एक ही दिव्य नृत्य के दो हस्त हैं।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Chapters 15–16)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, अध्याय १५–१६)"
        },
        "type": "manuscript-commentary"
      },
      {
        "id": "refl-6",
        "quote": {
          "en": "The body of Harihara — Shiva on one side, Vishnu on the other — is your own heart. The day no wall remains between Shiva and Vishnu within your heart, that day your devotion becomes whole.",
          "hi": "हरिहर की यह देह आपका हृदय है। जिस दिन आपके हृदय में शिव और विष्णु के बीच कोई दीवार नहीं रही — उस दिन आपने एकम् की अनुभूति की। उस दिन आपकी भक्ति पूर्ण हुई।"
        },
        "context": {
          "en": "When we learn to see the unity of two deities, we also learn to see the unity across communities, traditions, and humanity itself.",
          "hi": "जब हम दो देवताओं की एकता देखना सीखते हैं, तब हम समाज, परंपराओं और समस्त मानवता में भी भिन्नता के भीतर एकता देखना सीखते हैं।"
        },
        "attribution": {
          "en": "Editorial Reflection — Manu Siddharth (Manuscript, Chapters 19–20)",
          "hi": "साधना चिंतन — मनु सिद्धार्थ (पांडुलिपि, अध्याय १९–२०)"
        },
        "type": "manuscript-commentary"
      }
    ]
  },
  "shlokas": [
    {
      "id": "skanda-upanishad-8-9",
      "category": "upanishad",
      "featured": true,
      "sanskrit": "शिवाय विष्णुरूपाय शिवरूपाय विष्णवे।\nशिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥\nयथा शिवमयो विष्णुरेवं विष्णुमयः शिवः।\nयथान्तरं न पश्यामि तथा मे स्वस्तिरायुषि॥",
      "transliteration": "Śivāya Viṣṇurūpāya Śivarūpāya Viṣṇave |\nŚivasya hṛdayaṁ Viṣṇur Viṣṇoś ca hṛdayaṁ Śivaḥ ||\nYathā Śivamayo Viṣṇur evaṁ Viṣṇumayaḥ Śivaḥ |\nYathāntaraṁ na paśyāmi tathā me svastir āyuṣi ||",
      "literalTranslation": {
        "en": "Salutations to Shiva who is of the form of Vishnu, and to Vishnu who is of the form of Shiva. Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu. Just as Vishnu is full of Shiva, so too is Shiva full of Vishnu. As I see no difference between them, may auspiciousness and peace abide throughout my life.",
        "hi": "विष्णु-स्वरूप शिव को नमस्कार है और शिव-स्वरूप विष्णु को नमस्कार है। शिव का हृदय विष्णु हैं और विष्णु का हृदय शिव हैं। जिस प्रकार विष्णु शिवमय हैं, उसी प्रकार शिव भी विष्णुमय हैं। जैसे मैं इन दोनों में कोई अंतर नहीं देखता, वैसे ही मेरे जीवन में सदा कल्याण और मंगल बना रहे।"
      },
      "commentary": {
        "en": "Placed at the very opening and conclusion of Manu Siddharth's manuscript ('Harihara: Do Naam, Ek Pran'), this foundational proclamation of the Skanda Upanishad declares that Shiva and Vishnu dwell inside each other's very heart. True auspiciousness (svasti) dawns in a seeker's life when the illusion of difference between Hari and Hara dissolves.",
        "hi": "'हरिहर: दो नाम, एक प्राण' पांडुलिपि के आरंभ और उपसंहार में उद्धृत स्कंद उपनिषद का यह अमर श्लोक घोषित करता है कि शिव और विष्णु एक-दूसरे के हृदय की धड़कन हैं। जब साधक की दृष्टि से दोनों के बीच का भेद मिट जाता है, तभी जीवन में वास्तविक कल्याण उतरता है।"
      },
      "source": {
        "scripture": {
          "en": "Skanda Upanishad (Krishna Yajurveda)",
          "hi": "स्कंद उपनिषद (कृष्ण यजुर्वेद)"
        },
        "reference": "Mantras 8–9 (Also echoed in Manuscript Epigraph & Ch. 20)",
        "status": "verified",
        "badge": {
          "en": "Verified Upanishadic Verse",
          "hi": "प्रमाणित उपनिषद मंत्र"
        }
      }
    },
    {
      "id": "vamana-purana-hari-rudra",
      "category": "purana",
      "featured": true,
      "sanskrit": "यो हरिः स तु वै रुद्रो यो रुद्रः स जनार्दनः।\nएकमूर्तिरियं द्वेधा भक्तानां दर्शनार्थिनाम्॥",
      "transliteration": "Yo Hariḥ sa tu vai Rudro yo Rudraḥ sa Janārdanaḥ |\nEkamūrtir iyaṁ dvedhā bhaktānāṁ darśanārthinām ||",
      "literalTranslation": {
        "en": "He who is Hari (Vishnu) is verily Rudra (Shiva), and He who is Rudra is truly Janardana (Vishnu). This single divine reality manifests in a twofold form to bless devotees who yearn for sacred vision.",
        "hi": "जो हरि (विष्णु) हैं वही निश्चय ही रुद्र (शिव) हैं, और जो रुद्र हैं वही जनार्दन (विष्णु) हैं। भक्तों को दर्शन देने के लिए ही यह एक परम मूर्ति दो रूपों में प्रकट होती है।"
      },
      "commentary": {
        "en": "Directly cited in Chapter 1(B) of the manuscript ('When the Sages' Illusion Broke'), this verse from the Vamana Purana recounts how the gods and rishis debated who was greater between Hari and Hara — until the Lord manifested in the unified Harihara form, dissolving all argument in a single flash of divine vision.",
        "hi": "पांडुलिपि के अध्याय १(ख) ('जब ऋषियों का भ्रम टूटा') में प्रत्यक्ष रूप से उद्धृत वामन पुराण का यह वचन उस क्षण का साक्षी है जब ऋषियों के विवाद को शांत करने के लिए भगवान ने संयुक्त हरिहर स्वरूप प्रकट किया और स्पष्ट किया कि दोनों में तनिक भी भेद नहीं है।"
      },
      "source": {
        "scripture": {
          "en": "Vamana Purana",
          "hi": "वामन पुराण"
        },
        "reference": "Adhyaya 62 / Manuscript Chapter 1(B)",
        "status": "verified",
        "badge": {
          "en": "Verified Puranic & Manuscript Verse",
          "hi": "प्रमाणित पौराणिक एवं पांडुलिपि श्लोक"
        }
      }
    },
    {
      "id": "rigveda-ekam-sat",
      "category": "veda",
      "featured": true,
      "sanskrit": "इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान्।\nएकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः॥",
      "transliteration": "Indraṁ Mitraṁ Varuṇam Agnim āhur atho divyaḥ sa suparṇo Garutmān |\nEkaṁ sad viprā bahudhā vadanty Agniṁ Yamaṁ Mātariśvānam āhuḥ ||",
      "literalTranslation": {
        "en": "They call It Indra, Mitra, Varuna, Agni, and the heavenly noble-winged Garutman; Reality is One (Ekam Sat), though wise seers speak of It by many names.",
        "hi": "उसे इंद्र, मित्र, वरुण, अग्नि और दिव्य गरुत्मान कहते हैं; सत्य (सत्) एक ही है, किंतु ज्ञानी विद्वान उसे अनेक नामों से पुकारते हैं।"
      },
      "commentary": {
        "en": "Highlighted in Chapter 3 of the manuscript ('Hari and Hara in the Vedas'), this Rigvedic proclamation is the bedrock of Sanatana Dharma's inclusive vision. The Vedic rishis saw Rudra (the transformer) and Vishnu (the all-pervading sustainer) as two radiant expressions of the one infinite Ocean of Consciousness.",
        "hi": "पांडुलिपि के अध्याय ३ ('वेदों में हरि और हर') में उद्धृत ऋग्वेद का यह महावाक्य सनातन धर्म की समावेशी दृष्टि की आधारशिला है। वैदिक ऋषियों ने ध्यान में देखा कि रुद्र और विष्णु एक ही अनंत चेतना के सागर की दो सबसे प्रिय अभिव्यक्तियाँ हैं।"
      },
      "source": {
        "scripture": {
          "en": "Rigveda Samhita",
          "hi": "ऋग्वेद संहिता"
        },
        "reference": "Mandala 1, Sukta 164, Mantra 46 (Manuscript Chapter 3)",
        "status": "verified",
        "badge": {
          "en": "Verified Vedic Shruti",
          "hi": "प्रमाणित वैदिक श्रुति"
        }
      }
    },
    {
      "id": "harivamsha-harihara-stuti",
      "category": "itihasa",
      "featured": false,
      "sanskrit": "शिवाय विष्णुरूपाय विष्णवे शिवरूपिणे।\nअथान्तरं न पश्यामि तेन ते दिशतः शिवम्॥\nअनादिमध्यनिधनमेकं तत्त्वं चिदात्मकम्।\nहरिः शङ्कररूपेण शङ्करो हरिरूपधृक्॥",
      "transliteration": "Śivāya Viṣṇurūpāya Viṣṇave Śivarūpiṇe |\nAthāntaraṁ na paśyāmi tena te diśataḥ śivam ||\nAnādimadhyanidhanam ekaṁ tattvaṁ cidātmakam |\nHariḥ Śaṅkararūpeṇa Śaṅkaro Harirūpadhṛk ||",
      "literalTranslation": {
        "en": "To Shiva who wears the form of Vishnu, and to Vishnu who wears the form of Shiva — because I behold no separation between them, both bestow supreme auspiciousness. Beginningless, middleless, and endless is that one Reality of pure Consciousness: Hari appears in the form of Shankara, and Shankara assumes the form of Hari.",
        "hi": "विष्णु-रूप धारी शिव को और शिव-रूप धारी विष्णु को नमन है; क्योंकि मैं उन दोनों में कोई भेद नहीं देखता, इसलिए वे दोनों मंगल प्रदान करते हैं। आदि, मध्य और अंत से रहित वह चिदात्मक तत्त्व एक ही है — हरि ही शंकर के रूप में हैं और शंकर ही हरि का रूप धारण करते हैं।"
      },
      "commentary": {
        "en": "In the Harivamsha (the appendix to the Mahabharata), Sage Markandeya beholds the unified glory of Lord Shiva and Lord Keshava, declaring that pure Consciousness (Chidatmaka Tattva) is one and undivided.",
        "hi": "महाभारत के खिलभाग हरिवंश पुराण में महर्षि मार्कण्डेय भगवान शिव और भगवान केशव के एकीकृत स्वरूप का दर्शन कर उद्घोष करते हैं कि परम चिदात्मक तत्त्व एक और अखंड है।"
      },
      "source": {
        "scripture": {
          "en": "Harivamsha Purana (Vishnu Parva)",
          "hi": "हरिवंश पुराण (विष्णु पर्व)"
        },
        "reference": "Vishnu Parva, Adhyaya 125, Verse 29+",
        "status": "verified",
        "badge": {
          "en": "Verified Itihasa-Purana Text",
          "hi": "प्रमाणित इतिहास-पुराण श्लोक"
        }
      }
    },
    {
      "id": "mahabharata-shanti-parva-rudra-narayana",
      "category": "itihasa",
      "featured": false,
      "sanskrit": "आत्मा हि परमं मह्यं यस्तं जानाति स प्रभुः।\nरुद्रो नारायणश्चैव सत्त्वमेकं द्विधा कृतम्॥\nलोके चरति कौन्तेय व्यक्तिस्थं सर्वकर्मसु।",
      "transliteration": "Ātmā hi paramaṁ mahyaṁ yas taṁ jānāti sa prabhuḥ |\nRudro Nārāyaṇaś caiva sattvam ekaṁ dvidhā kṛtam ||\nLoke carati Kaunteya vyaktisthaṁ sarvakarmasu |",
      "literalTranslation": {
        "en": "He is my supreme Self; whoever knows Him truly knows the Lord. O Son of Kunti (Arjuna), Rudra and Narayana are indeed one single Being (Sattvam Ekam) manifested in two forms, moving through the universe and presiding over all cosmic actions.",
        "hi": "वे रुद्र मेरी ही परम आत्मा हैं; जो उन्हें जानता है वही प्रभु तत्व को जानता है। हे कौन्तेय (अर्जुन)! रुद्र और नारायण वस्तुतः एक ही परम सत्ता (सत्त्वमेकं) हैं जो दो रूपों में विभक्त होकर संसार के समस्त कार्यों में विचरण करती है।"
      },
      "commentary": {
        "en": "As discussed in Chapters 10 and 14 of the manuscript, the Mahabharata's Shanti Parva records Lord Krishna teaching Arjuna that Rudra is His own inner Self, and that Rudra and Narayana are a single essence ('Sattvam Ekam Dvidha Kritam') acting in two complementary modes.",
        "hi": "पांडुलिपि के अध्याय १० और १४ में वर्णित महाभारत (शांति पर्व) के इस संवाद में स्वयं भगवान श्रीकृष्ण अर्जुन को उपदेश देते हैं कि रुद्र और नारायण एक ही परम सत्ता हैं जो लोक-कल्याण के लिए दो रूपों में प्रकट हुई है।"
      },
      "source": {
        "scripture": {
          "en": "Mahabharata (Shanti Parva — Mokshadharma)",
          "hi": "महाभारत (शांति पर्व — मोक्षधर्म पर्व)"
        },
        "reference": "Shanti Parva, Adhyaya 341–342 (Manuscript Chapters 10 & 14)",
        "status": "verified",
        "badge": {
          "en": "Verified Itihasa Scripture",
          "hi": "प्रमाणित महाभारत श्लोक"
        }
      }
    },
    {
      "id": "bhagavatam-vaishnavanam-yatha-shambhuh",
      "category": "purana",
      "featured": false,
      "sanskrit": "निम्नगानां यथा गङ्गा देवानामच्युतो यथा।\nवैष्णवानां यथा शम्भुः पुराणानामिदं तथा॥",
      "transliteration": "Nimnagānāṁ yathā Gaṅgā devānām Acyuto yathā |\nVaiṣṇavānāṁ yathā Śambhuḥ purāṇānām idaṁ tathā ||",
      "literalTranslation": {
        "en": "Just as the Ganga is the greatest among all rivers, just as Achyuta (Vishnu) is supreme among the deities, and just as Shambhu (Shiva) is the greatest of all lovers and devotees of Vishnu (Vaishnavas), so is this Srimad Bhagavatam among all Puranas.",
        "hi": "जिस प्रकार नदियों में गंगा श्रेष्ठ हैं, देवताओं में अच्युत (विष्णु) परम हैं, और वैष्णवों (विष्णु से प्रेम करने वालों) में शम्भु (भगवान शिव) सर्वोच्च हैं, उसी प्रकार पुराणों में यह श्रीमद्भागवत है।"
      },
      "commentary": {
        "en": "Complementing Chapters 5 and 8 of the manuscript ('The Glory of Vishnu in Shiva Purana' & 'Divine Unity in the Bhagavatam'), this celebrated verse from the Srimad Bhagavatam honors Lord Shiva as the supreme lover and knower of Vishnu — while Shaiva scriptures equally revere Vishnu as the greatest devotee of Shiva.",
        "hi": "पांडुलिपि के अध्याय ५ और ८ ('शिव पुराण में विष्णु की महिमा' एवं 'भागवतम् में दिव्य एकता') के अनुरूप, श्रीमद्भागवत महापुराण का यह प्रसिद्ध श्लोक भगवान शम्भु को परम वैष्णव के रूप में नमन करता है — और शिव पुराण में भगवान विष्णु को शिव का परम आराधक बताया गया है।"
      },
      "source": {
        "scripture": {
          "en": "Srimad Bhagavata Mahapurana",
          "hi": "श्रीमद्भागवत महापुराण"
        },
        "reference": "Skandha 12, Adhyaya 13, Verse 16 (Manuscript Chapters 5 & 8)",
        "status": "verified",
        "badge": {
          "en": "Verified Bhagavatam Verse",
          "hi": "प्रमाणित भागवत महापुराण श्लोक"
        }
      }
    },
    {
      "id": "shiva-purana-rudra-samhita-abheda",
      "category": "purana",
      "featured": false,
      "sanskrit": "नावयोर्विद्यते भेदः शिवयोर्विष्णुरूपयोः।\nआवां हि सर्वभूतानामात्मानौ परमेश्वरौ॥",
      "transliteration": "Nāvayor vidyate bhedaḥ Śivayor Viṣṇurūpayoḥ |\nĀvāṁ hi sarvabhūtānām ātmānau Parameśvarau ||",
      "literalTranslation": {
        "en": "There exists no distinction whatsoever between the two of Us — Shiva and Vishnu. Verily, We both are the inner Self and Supreme Lord of all living beings.",
        "hi": "शिव और विष्णु रूप हम दोनों में कोई भेद विद्यमान नहीं है। निश्चय ही हम दोनों समस्त प्राणियों की अंतरात्मा और परमेश्वर हैं।"
      },
      "commentary": {
        "en": "Expounded in Chapter 5 of the manuscript ('Shiva Purana: Rudra Samhita'), Lord Shiva teaches the sages that He and Vishnu are like fire and its heat, or the sun and its light — inseparable in essence, consciousness, and grace.",
        "hi": "पांडुलिपि के अध्याय ५ ('शिव पुराण में विष्णु की महिमा') में वर्णित रुद्र संहिता की शिक्षा के अनुसार, शिव और विष्णु अग्नि और उसकी ऊष्मा की तरह, सूर्य और उसके प्रकाश की तरह अभिन्न हैं।"
      },
      "source": {
        "scripture": {
          "en": "Shiva Mahapurana (Rudra Samhita) & Padma Purana Tradition",
          "hi": "शिव महापुराण (रुद्र संहिता) परंपरा"
        },
        "reference": "Rudra Samhita / Manuscript Chapter 5 Summary",
        "status": "verified",
        "badge": {
          "en": "Verified Puranic Teaching",
          "hi": "प्रमाणित पौराणिक सिद्धांत"
        }
      }
    }
  ],
  "stories": [
    {
      "id": "guhasura-manifestation",
      "number": "01",
      "manuscriptChapter": {
        "en": "Part 1 • Chapter 1: Guhasura Vadh — When Hari and Hara Became One",
        "hi": "भाग १ • अध्याय १: गुहासुर वध — जब हरि और हर एक हुए"
      },
      "title": {
        "en": "The Legend of Guhasura & The First Manifestation of Harihara",
        "hi": "गुहासुर वध — जब हरि और हर एक हुए"
      },
      "subtitle": {
        "en": "How a cunning demon's boon of separation was shattered by the eternal oneness of Shiva and Vishnu at the confluence of the Tungabhadra and Haridra rivers.",
        "hi": "कैसे तुंगभद्रा और हरिद्रा के संगम पर शिव और विष्णु की अखंड एकता ने गुहासुर के कपटपूर्ण वरदान का अंत कर उसका उद्धार किया।"
      },
      "coverImage": "assets/images/stories/guhasura-vadh.webp",
      "secondaryImage": "assets/images/stories/guhasura-reign.webp",
      "sources": [
        "Skanda Purana",
        "Brahma Purana",
        "Harihareshwara Temple Sthala Purana",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapter 1)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "शिवाय विष्णुरूपाय शिवरूपाय विष्णवे।",
        "meaningEn": "Salutations to Shiva who is of the form of Vishnu, and to Vishnu who is of the form of Shiva.",
        "meaningHi": "विष्णु-स्वरूप शिव को नमस्कार है और शिव-स्वरूप विष्णु को नमस्कार है।"
      },
      "introduction": {
        "en": "This is the story where everything begins. It is not merely a Puranic legend — it is the first cosmic proclamation of the supreme truth that Lord Shiva and Lord Vishnu are not two, and never were. And the first, clearest, most powerful manifestation of this unity took place for the redemption and vanquishing of a demon named Guhasura.",
        "hi": "यह वह कथा है जहाँ से सब कुछ आरंभ होता है। यह केवल एक पौराणिक आख्यान नहीं है — यह उस परम सत्य का प्रथम ब्रह्मांडीय उद्घोष है कि भगवान शिव और भगवान विष्णु दो नहीं हैं, वे मूलतः एक ही हैं। और इस एकता का सबसे पहला, सबसे स्पष्ट प्रकटन हुआ गुहासुर के वध और उद्धार के लिए।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "The Dark Empire of Guharanya",
            "hi": "गुहारण्य का राज — एक अंधकारमय साम्राज्य"
          },
          "image": "assets/images/stories/guhasura-reign.webp",
          "narrative": {
            "en": "In ancient times, across the land of modern-day Karnataka, a mighty demon named Guhasura ('the demon of caves') ruled a vast, dense forest known as Guharanya. His empire stretched from Ucchangi Durga in the east to Mudanur in the west, and from Govinahalu in the south to Airani in the north. Guhasura ruled through fear, disorder, and adharma — sages fled their hermitages, sacred fire-sacrifices were disrupted, and the righteous gasped under tyranny.",
            "hi": "प्राचीन काल में, वर्तमान कर्नाटक की भूमि पर, एक विशाल और घने वन में गुहासुर ('गुफाओं का असुर') का राज था। उसका साम्राज्य पूर्व में उच्चंगी दुर्गा से लेकर पश्चिम में मुदानूर तक, दक्षिण में गोविनहलु से लेकर उत्तर में ऐरानी तक फैला था, जिसे 'गुहारण्य' कहा जाता था। उसकी उपस्थिति मात्र से ऋषि-मुनि आश्रम छोड़ भागते थे और यज्ञ-हवन बाधित होते थे।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "The Deceptive Boon of Division",
            "hi": "ब्रह्मा से कपटपूर्ण वरदान"
          },
          "image": "assets/images/stories/guhasura-reign.webp",
          "narrative": {
            "en": "Burning with ambition to rule the universe unchallenged, Guhasura performed fierce penance without food or water until Lord Brahma appeared before him. Cleverly calculating, Guhasura asked: 'O Prajapati! Grant me the boon that no human, deva, gandharva — and not even Lord Shiva or Lord Vishnu themselves — may slay me.' He deliberately named Shiva (Hara) and Vishnu (Hari) as two separate entities, believing that so long as they remained separate, he was invincible. When the devas sought protection, neither Vishnu alone nor Shiva alone could bypass Brahma's word.",
            "hi": "समस्त सृष्टि पर अजेय राज की कामना से गुहासुर ने घोर तपस्या कर ब्रह्मा जी से वरदान माँगा: 'हे प्रजापति! कृपया मुझे यह वरदान दें कि कोई मनुष्य, देवता, गंधर्व — और यहाँ तक कि स्वयं भगवान शिव और भगवान विष्णु भी — मुझे न मार सकें।' उसने बड़ी चालाकी से शिव (हर) और विष्णु (हरि) को दो अलग-अलग नामों से माँगा था। वरदान की शर्त थी: 'अकेले शिव नहीं, अकेले विष्णु नहीं।'"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "The Greatest Cosmic Convergence — Harihara Appears",
            "hi": "इतिहास का महानतम संयोजन — हरिहर का प्राकट्य"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "Then something occurred that cosmic history had never witnessed before. Lord Shiva and Lord Vishnu united their powers, energies, and presence into one undivided form — revealing what had always been one in essence. Hari and Hara became One: HARIHARA (Shankaranarayana). On the right side of the divine body shone Shiva — with Trishula, matted locks, Vibhuti, and crescent moon; on the left side shone Vishnu — with Shankha, Sudarshana Chakra, Pitambara, and Vanamala. One body, one consciousness, one Supreme Truth to which Guhasura's boon of separation could never apply.",
            "hi": "तब ब्रह्मांड के इतिहास में अद्वितीय घटना घटी। भगवान शिव और भगवान विष्णु ने अपनी शक्तियों और सत्ताओं को एक कर दिया। हरि और हर एक हो गए — हरिहर (शंकरनारायण) का प्राकट्य हुआ। दाईं ओर शिव — त्रिशूल, जटा, विभूति, अर्धचंद्र; बाईं ओर विष्णु — शंख, चक्र, पीताम्बर, वनमाला। किंतु यह एक ही शरीर था, एक ही चेतना थी जिसके लिए ब्रह्मा का वरदान लागू नहीं होता था।"
          }
        },
        {
          "sceneNumber": 4,
          "title": {
            "en": "Final Battle at Kudalur & Guhasura's Liberation",
            "hi": "पवित्र भूमि पर अंतिम युद्ध और गुहासुर का मोक्ष"
          },
          "image": "assets/images/stories/guhasura-vadh.webp",
          "narrative": {
            "en": "Harihara descended at Kudalur, the sacred confluence of the Tungabhadra and Haridra rivers. Wielding both Shiva's Trishula and Vishnu's Sudarshana Chakra, Harihara shattered Guhasura's forces. As Guhasura fell and beheld the radiant half-Shiva, half-Vishnu form, the darkness of his heart dissolved. Weeping in surrender, he prayed: 'O Lord! Your divine form has redeemed me. Grant only that this land I defiled be sanctified by Your name.' Harihara granted him Moksha, and Guharanya became forever known as Harihar — where the 13th-century Hoysala Harihareshwara Temple stands today.",
            "hi": "हरिहर तुंगभद्रा और हरिद्रा नदियों के संगम — कुडलूर — पर अवतरित हुए। हाथ में शिव का त्रिशूल और विष्णु का सुदर्शन चक्र लिए हरिहर के सामने गुहासुर धराशायी हुआ। मृत्यु के द्वार पर उस अद्भुत दर्शन ने उसके अहंकार को गला दिया। उसने प्रार्थना की: 'हे प्रभु! यह भूमि जिसे मैंने कलुषित किया, आपके नाम से पावन हो जाए।' हरिहर ने उसे मोक्ष दिया और गुहारण्य का नाम 'हरिहर' पड़ा — जहाँ १३वीं शताब्दी का होयसल हरिहरेश्वर मंदिर आज भी खड़ा है।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "Guhasura assumed Shiva and Vishnu were separate — and in that ignorance he sought his boon. Whenever devotees today divide Shiva and Vishnu or argue over who is superior, they fall into the same illusion as Guhasura, seeing only half of an indivisible Truth.",
        "hi": "गुहासुर ने शिव और विष्णु को अलग-अलग माना — और इसी अज्ञान में उसने वरदान माँगा। आज जो भक्त शिव और विष्णु को अलग मानकर उनमें विभेद करते हैं, वे भी सत्य के केवल एक पक्ष को देख रहे हैं, पूर्ण सत्य को नहीं।"
      }
    },
    {
      "id": "vamana-purana-sages-illusion",
      "number": "02",
      "manuscriptChapter": {
        "en": "Part 1 • Chapter 1(B): Vamana Purana — When the Sages' Illusion Broke",
        "hi": "भाग १ • अध्याय १(ख): वामन पुराण — जब ऋषियों का भ्रम टूटा"
      },
      "title": {
        "en": "When the Sages' Illusion Broke — The Vamana Purana Darshan",
        "hi": "जब ऋषियों का भ्रम टूटा — वामन पुराण का दिव्य दर्शन"
      },
      "subtitle": {
        "en": "When even gods and sages fell into debate over who was supreme, the Supreme Spirit answered not with words, but with a unified vision.",
        "hi": "जब देवताओं और ऋषियों के मन में श्रेष्ठता का संशय उठा, तो परमात्मा ने शब्दों से नहीं बल्कि अखंड हरिहर दर्शन से उत्तर दिया।"
      },
      "coverImage": "assets/images/stories/harihara-cosmic-form.webp",
      "secondaryImage": "assets/images/harihara-hero.webp",
      "sources": [
        "Vamana Purana",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapter 1B)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "यो हरिः स तु वै रुद्रो यो रुद्रः स जनार्दनः।",
        "meaningEn": "He who is Hari is verily Rudra, and He who is Rudra is truly Janardana (Vishnu).",
        "meaningHi": "जो हरि हैं वही रुद्र हैं, और जो रुद्र हैं वही जनार्दन विष्णु हैं — दोनों में तनिक भी भेद नहीं।"
      },
      "introduction": {
        "en": "The account of Guhasura showed that when the cosmos needed both powers simultaneously, they came as One. The Vamana Purana reveals an even deeper truth: that this unity is not merely an emergency alliance for battle, but their eternal, primordial nature.",
        "hi": "गुहासुर की कथा ने दिखाया कि जब संसार को दोनों की एकसाथ आवश्यकता पड़ी, तो वे एक होकर आए। वामन पुराण की यह कथा बताती है कि यह एकता कोई संकटकालीन व्यवस्था नहीं — यह उनका शाश्वत, मूल स्वभाव है।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "The Crisis of Divided Devotion",
            "hi": "ऋषियों का संशय और अस्तित्व का संकट"
          },
          "image": "assets/images/harihara-hero.webp",
          "narrative": {
            "en": "According to the Vamana Purana, a doubt once arose among the devas and sages regarding who was greater and more powerful between Sri Hari Vishnu and Lord Shiva. While cosmic conflicts raged around Mount Mandara and the sacred land of Kurukshetra, even the sages began debating whom to worship. When seekers themselves become divided, cosmic harmony fractures.",
            "hi": "वामन पुराण के अनुसार, एक बार देवताओं और ऋषियों के मन में यह संशय उत्पन्न हुआ कि श्रीहरि विष्णु और भगवान शिव में से कौन अधिक श्रेष्ठ और शक्तिशाली हैं। मंदराचल और कुरुक्षेत्र की पावन भूमि पर जब द्वंद्व चल रहा था, तब भक्तों और ऋषियों का यह विभाजन एक अस्तित्व का संकट बन गया।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "The Seamless Form of Harihara",
            "hi": "अखंड और अभेद हरिहर स्वरूप का प्राकट्य"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "As the sages meditated simultaneously upon Sri Hari and Mahadeva for an answer, both Deities set aside their separate appearances and revealed a single, seamless form. On the right half of the body dwelt Shiva with crescent moon, matted locks, serpent garland, sacred ash, Trishula, Damaru, and tiger skin. On the left half dwelt Vishnu with Kirit Mukut, Vaijayanti garland, Pitambara, Shankha, Chakra, Gada, and Padma. What was right was also left; what was Shiva was also Vishnu.",
            "hi": "जब भक्त और ऋषि समाधान के लिए श्रीहरि और महादेव का एकसाथ ध्यान करने लगे, तब दोनों देवताओं ने संयुक्त, अभेद स्वरूप प्रकट किया। दाहिने भाग में बालचंद्र, जटाजूट, भस्म, त्रिशूल व डमरू धारी शिव; और बाएँ भाग में किरीट मुकुट, वैजयंती माला, पीताम्बर, शंख, चक्र, गदा व पद्म धारी विष्णु। न कोई सीमा, न कोई संधि — बस एक अखंड दिव्य अस्तित्व।"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "Two Breaths of One Life",
            "hi": "एक ही जीवन की दो श्वासें"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "In that single vision, all debates and mental knots vanished. Together, Vishnu and Shiva taught: 'Whoever worships Vishnu while harboring malice toward Shiva — his worship is fruitless. Whoever claims to be a devotee of Shiva while disparaging Vishnu — his devotion is hollow. For the one he rejects is merely another name of his own beloved Lord.' Just as inhaling and exhaling are two actions of one life, Vishnu and Shiva are two expressions of the one Supreme Consciousness.",
            "hi": "उस दर्शन से ऋषियों का सारा भ्रम एक पल में विलीन हो गया। भगवान ने संदेश दिया: 'जो मनुष्य विष्णु की भक्ति करता है लेकिन शिव से द्वेष रखता है — उसकी पूजा निष्फल है। जो शिव का भक्त होकर विष्णु की निंदा करता है — उसकी भक्ति भी खोखली है।' जैसे श्वास लेना और छोड़ना एक ही जीवन की दो क्रियाएँ हैं, वैसे ही विष्णु और शिव एक ही परमात्मा की दो अभिव्यक्तियाँ हैं।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "Questions that endless intellectual debates can never settle are dissolved immediately in true devotional vision: rejecting either Hari or Hara is rejecting half of one's own Beloved.",
        "hi": "जो प्रश्न अनंत तर्कों और बहसों से नहीं सुलझ सकता, वह समग्र भक्ति के दर्शन से तुरंत सुलझ जाता है: जिसे हम अस्वीकार करते हैं, वह वस्तुतः हमारे अपने ही इष्ट का दूसरा नाम है।"
      }
    },
    {
      "id": "vishnu-in-shiva-heart",
      "number": "03",
      "manuscriptChapter": {
        "en": "Part 3 & 4 • Chapters 5 & 14: Vishnu in the Heart of Shiva",
        "hi": "भाग ३ एवं ४ • अध्याय ५ एवं १४: शिव के हृदय में विष्णु"
      },
      "title": {
        "en": "Vishnu in the Heart of Shiva — Daksha's Sacrifice & The Thousand Names",
        "hi": "शिव पुराण में विष्णु की महिमा — जब महादेव ने विष्णु का नाम जपा"
      },
      "subtitle": {
        "en": "How the scripture dedicated to Lord Shiva proclaims Vishnu's glory, and how Vishnu alone could soothe Shiva's cosmic grief.",
        "hi": "कैसे भगवान शिव को समर्पित महापुराण में स्वयं महादेव विष्णु सहस्रनाम का गान करते हैं और दक्ष-यज्ञ की महाज्वाला केवल विष्णु के आलिंगन से शांत होती है।"
      },
      "coverImage": "assets/images/stories/vishnu-in-shiva-heart.webp",
      "secondaryImage": "assets/images/harihara-hero.webp",
      "sources": [
        "Shiva Mahapurana (Rudra Samhita)",
        "Mahabharata (Shanti Parva)",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapters 5 & 14)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः।",
        "meaningEn": "Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu.",
        "meaningHi": "शिव का हृदय विष्णु हैं और विष्णु का हृदय शिव हैं।"
      },
      "introduction": {
        "en": "Nothing touches the seeker's heart more deeply than opening the Shiva Mahapurana — a scripture bearing Shiva's name and celebrating His infinite majesty — only to discover within its pages the most tender praises of Lord Vishnu, spoken by Mahadeva Himself.",
        "hi": "हृदय को गहराई से छू लेने वाला अनुभव है — भगवान शिव को समर्पित 'शिव पुराण' खोलना और उसके पन्नों में स्वयं महादेव के मुख से भगवान विष्णु की सबसे सुंदर स्तुतियाँ पाना। स्वयं शिव विष्णु के परम भक्त हैं।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "Shiva's Words in the Rudra Samhita: 'Fire and Its Heat'",
            "hi": "रुद्र संहिता में शिव के वचन: 'अग्नि और उसकी ऊष्मा'"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "In the Rudra Samhita of the Shiva Purana, Lord Shiva instructs the sages directly: 'Supreme Lord Vishnu and I are not separate. I abide in Vishnu, and Vishnu abides in Me. Those who perceive any division between Us dwell in ignorance.' The Purana explains that Shiva and Vishnu are like fire and its heat, or the sun and its light — inseparable in reality.",
            "hi": "शिव पुराण की रुद्र संहिता में स्वयं शिव ऋषियों से कहते हैं: 'परम भगवान विष्णु और मैं अलग नहीं हैं। मैं विष्णु में हूँ और विष्णु मुझमें हैं। जो हममें कोई भेद देखते हैं वे अज्ञान में हैं।' शिव और विष्णु अग्नि और उसकी ऊष्मा की तरह हैं, सूर्य और उसके प्रकाश की तरह।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "The Embrace at Daksha's Yajna",
            "hi": "दक्ष के यज्ञ में शिव की पीड़ा और विष्णु का आलिंगन"
          },
          "image": "assets/images/harihara-hero.webp",
          "narrative": {
            "en": "When Goddess Sati entered the sacred fire at Daksha's sacrifice, Shiva's unfathomable grief erupted into cosmic wrath through Virabhadra, shaking the three worlds. In that hour of cataclysm, who could calm Mahadeva? Vishnu entered the sacrificial hall — not as a rival bearing weapons, but as an eternal friend who knows Shiva's heart better than anyone in existence. Seeing Vishnu, the flame of Shiva's third eye softened; grief found its companion. Bowing in deep mutual reverence, the Destroyer and the Preserver embraced, and the universe regained its balance.",
            "hi": "दक्ष के यज्ञ में जब देवी सती यज्ञ-कुंड में समा गईं, तो शिव के अथाह शोक और क्रोध से तीनों लोक काँप उठे। उस महातूफान को कौन थाम सकता था? विष्णु यज्ञशाला में आए — शस्त्र लेकर प्रतिद्वंद्वी के रूप में नहीं, बल्कि एक शाश्वत मित्र के रूप में जो शिव के हृदय को सबसे बेहतर जानते हैं। विष्णु को देखते ही तीसरी आँख की ज्वाला शांत हुई; दोनों ने गहरे आदर के साथ आलिंगन किया और सृष्टि फिर संतुलित हुई।"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "Mahadeva Chanting the Thousand Names of Vishnu",
            "hi": "महादेव द्वारा विष्णु सहस्रनाम का पाठ"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "Across multiple sections of the Shiva Purana and the Mahabharata's Shanti Parva, Lord Shiva praises Rama as the pinnacle of Dharma, bows to Krishna as Vasudeva, and teaches Parvati and the sages the thousand names of Vishnu (Vishnu Sahasranama). As the manuscript reminds us: claiming to love Shiva while disrespecting Vishnu is like claiming to love the moon while hating the night sky that cradles it.",
            "hi": "शिव पुराण के कई खंडों में और महाभारत के शांति पर्व में स्वयं शिव पार्वती और ऋषियों को विष्णु सहस्रनाम सिखाते हैं तथा श्रीराम और श्रीकृष्ण का स्मरण करते हैं। शिव की पूजा करते हुए विष्णु का अनादर करना चंद्रमा से प्रेम का दावा करते हुए रात्रि के आकाश से घृणा करने जैसा है।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "In the meditation of Mount Kailash, Shiva holds Vishnu in His heart. To truly honor Mahadeva is to honor the One whom Mahadeva loves ceaselessly.",
        "hi": "कैलाश की ध्यान-समाधि में महादेव अपने हृदय में श्रीहरि को धारण करते हैं। शिव को सच्चा प्रेम करने का अर्थ है उनसे प्रेम करना जिन्हें शिव स्वयं जपते हैं।"
      }
    },
    {
      "id": "shiva-in-vishnu-heart",
      "number": "04",
      "manuscriptChapter": {
        "en": "Part 3 & 4 • Chapters 6, 8, 9 & 13: Shiva in the Heart of Vishnu",
        "hi": "भाग ३ एवं ४ • अध्याय ६, ८, ९ एवं १३: जब विष्णु शिव के भक्त बने"
      },
      "title": {
        "en": "Shiva in the Heart of Vishnu — Rameshwaram, Mahakala & Linga Puja",
        "hi": "जब विष्णु और उनके अवतारों ने महादेव की आराधना की"
      },
      "subtitle": {
        "en": "From Lord Rama consecrating Rameshwaram to Lord Krishna worshipping Mahakala in Ujjain and Vishnu offering Linga-puja in the Kurma Purana.",
        "hi": "विष्णु पुराण और कूर्म पुराण से लेकर रामेश्वरम में श्रीराम की शिव-पूजा और उज्जैन में श्रीकृष्ण के महाकाल दर्शन तक।"
      },
      "coverImage": "assets/images/harihara-cover.webp",
      "secondaryImage": "assets/images/stories/harihara-cosmic-form.webp",
      "sources": [
        "Vishnu Purana (Book 1)",
        "Srimad Bhagavatam (Skandha 8 & 10)",
        "Kurma Purana & Linga Purana",
        "Ramayana Tradition",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapters 6, 7, 8, 9, 13)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "वैष्णवानां यथा शम्भुः पुराणानामिदं तथा।",
        "meaningEn": "Among all devotees of Vishnu, Shambhu (Shiva) is supreme — and Vishnu Himself worships the Shivalinga as the symbol of the same Supreme Reality.",
        "meaningHi": "विष्णु पुराण और कूर्म पुराण में स्वयं भगवान विष्णु रुद्र को अज्ञान का संहारक और अपना ही परम स्वरूप कहकर शिवलिंग की आराधना करते हैं।"
      },
      "introduction": {
        "en": "Turning to the other mirror — the Vaishnava Puranas and Itihasas — we find the exact same reverence reflected back. Everything the Shiva Purana proclaims in glory of Vishnu, the Vishnu Purana, Bhagavatam, and Kurma Purana proclaim in reverence of Shiva.",
        "hi": "जब हम दूसरे दर्पण — विष्णु पुराण, भागवतम् और कूर्म पुराण — की ओर मुड़ते हैं, तो पाते हैं कि शिव पुराण ने विष्णु की महिमा में जो कहा, वही सब वैष्णव ग्रंथ शिव की महिमा में कहते हैं।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "Vishnu Purana & Kurma Purana: Vishnu Worships the Shivalinga",
            "hi": "विष्णु पुराण एवं कूर्म पुराण: विष्णु द्वारा लिंग-पूजन"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "In Book 1 of the Vishnu Purana, Vishnu extols Rudra as the destroyer of ignorance and liberator of souls, arising from the same supreme consciousness like a ray from the sun. In the Kurma Purana, Lord Vishnu Himself worships a Shivalinga — declaring not 'This is other than Me,' but 'This is the sacred emblem of the Supreme Truth that I Myself am.' And in the Linga Purana, before the infinite pillar of fire (Jyotirlinga), Vishnu honors Shiva as a river honors the ocean.",
            "hi": "विष्णु पुराण की प्रथम पुस्तक में विष्णु रुद्र को 'अज्ञान का संहारक और आत्माओं का मुक्तिदाता' कहकर सम्मान देते हैं। कूर्म पुराण में स्वयं भगवान विष्णु शिवलिंग की पूजा करते हैं और कहते हैं — 'यह उसी परम सत्य का प्रतीक है जो मैं भी हूँ।' तथा लिंग पुराण में अनंत ज्योतिर्लिंग के समक्ष विष्णु पूर्ण श्रद्धा से नतमस्तक होते हैं।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "Samudra Manthan & Krishna Worshipping Mahakala",
            "hi": "समुद्र मंथन में हलाहल पान और श्रीकृष्ण की शिव-पूजा"
          },
          "image": "assets/images/harihara-cover.webp",
          "narrative": {
            "en": "In the 8th Skandha of the Srimad Bhagavatam, when the deadly Kalakuta poison emerged from the churning of the cosmic ocean, it was Shiva — with Vishnu's inspiration and reverence — who drank the poison to save all creation. Furthermore, in the Bhagavatam and Mahabharata, Lord Krishna Himself worships Shiva, journeys to Ujjain to behold Mahakala, and performs tapasya alongside Arjuna to receive the Pashupatastra.",
            "hi": "श्रीमद्भागवतम् के अष्टम स्कंध में समुद्र मंथन के समय जब कालकूट विष निकला, तब विष्णु की प्रेरणा और सम्मान के साथ शिव ने ही विष पीकर सृष्टि की रक्षा की। भागवतम् और महाभारत में स्वयं भगवान श्रीकृष्ण शिव की पूजा करते हैं, उज्जैन में महाकाल के दर्शन करते हैं और अर्जुन के साथ पाशुपतास्त्र के लिए शिव की आराधना करते हैं।"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "Sri Rama at Rameshwaram",
            "hi": "रामेश्वरम में मर्यादा पुरुषोत्तम श्रीराम की शिव-भक्ति"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "Before crossing the ocean to Lanka, Maryada Purushottama Sri Rama — the direct incarnation of Lord Vishnu — established the Shivalinga at Rameshwaram upon the seashore and bowed before Mahadeva to seek blessings for victory. When the incarnation of Vishnu bows to Shiva, how can any devotee of Vishnu ever neglect Shiva?",
            "hi": "लंका पर अभियान से पूर्व भगवान श्रीराम — साक्षात् विष्णु के अवतार — समुद्र तट पर रामेश्वरम में शिवलिंग की स्थापना कर महादेव के समक्ष नतमस्तक होते हैं। जब विष्णु के अवतार स्वयं शिव की पूजा करें, तो वैष्णव भक्त को भी अपने प्रभु के पथ का ही अनुसरण करना चाहिए।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "Loving Vishnu means loving whom Vishnu loves — and Vishnu loves Shiva with the fullness of His infinite being.",
        "hi": "विष्णु से प्रेम का अर्थ है विष्णु जिसे प्रेम करते हैं उसे प्रेम करना — और विष्णु अपनी असीम सत्ता की पूर्णता से शिव से प्रेम करते हैं।"
      }
    },
    {
      "id": "bhasmasura-mohini-hanuman",
      "number": "05",
      "manuscriptChapter": {
        "en": "Part 3 & 4 • Chapters 10 & 12: Hanuman, Krishna, Bhasmasura & Mohini",
        "hi": "भाग ३ एवं ४ • अध्याय १० एवं १२: हनुमान, कृष्ण, भस्मासुर और मोहिनी"
      },
      "title": {
        "en": "Living Proofs of Oneness — Hanuman's Devotion & Mohini's Dance",
        "hi": "एकता के जीवंत प्रमाण — हनुमान की राम-भक्ति और मोहिनी की लीला"
      },
      "subtitle": {
        "en": "How Shiva serves Rama in the form of Hanuman, and how Vishnu became the enchanting Mohini to protect Mahadeva from Bhasmasura.",
        "hi": "कैसे शिव के अंश हनुमान श्रीराम की सेवा करते हैं और कैसे महादेव की रक्षा के लिए विष्णु ने मोहिनी रूप धारण कर नृत्य किया।"
      },
      "coverImage": "assets/images/harihara-hero.webp",
      "secondaryImage": "assets/images/stories/harihara-cosmic-form.webp",
      "sources": [
        "Srimad Bhagavatam & Puranic Tradition",
        "Ramayana & Mahabharata",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapters 10 & 12)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "रुद्रो नारायणश्चैव सत्त्वमेकं द्विधा कृतम्।",
        "meaningEn": "Rudra and Narayana are one single Divine Essence manifested in two forms.",
        "meaningHi": "रुद्र और नारायण एक ही परम सत्ता हैं जो दो रूपों में प्रकट हुई है।"
      },
      "introduction": {
        "en": "Sometimes the deepest truths stand right before our eyes, yet we miss them because we are entangled in arguments. The sacred narratives of Hanuman, Krishna, and Mohini are living, breathing testimonies of Harihara unity.",
        "hi": "कभी-कभी सबसे गहरे सत्य हमारे ठीक सामने होते हैं। हनुमान जी की राम-भक्ति और भस्मासुर प्रसंग में विष्णु का मोहिनी अवतार — ये हरि और हर की अटूट एकता के सबसे जीवंत प्रमाण हैं।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "Hanuman — The Heart of Shiva Serving Lord Rama",
            "hi": "हनुमान — शिव का हृदय, श्रीराम की सेवा में"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "Across sacred traditions, Lord Hanuman is revered as Rudra-amsha — the very radiance and power of Lord Shiva manifested on earth. And whom does Hanuman serve with every breath? Lord Rama, the incarnation of Vishnu! In Hanuman's chest abides Rama, and that chest itself belongs to Shiva. What greater living proof of unity could exist?",
            "hi": "अनेक परंपराओं में हनुमान जी को रुद्र का अंश — भगवान शंकर की ही साक्षात् शक्ति — माना जाता है। और वे किसकी निरंतर सेवा करते हैं? विष्णु के अवतार श्रीराम की! हनुमान के हृदय में राम हैं, और वह हृदय स्वयं शिव का है।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "Bhasmasura's Boon & The Dance of Mohini",
            "hi": "भस्मासुर का वरदान और मोहिनी का दिव्य नृत्य"
          },
          "image": "assets/images/harihara-hero.webp",
          "narrative": {
            "en": "When the demon Bhasmasura obtained from innocent-hearted Shiva (Bholenath) the boon that anyone whose head he touched would turn to ash, he immediately tried to test it upon Shiva Himself! Seeing this, Lord Vishnu smiled and assumed the enchanting form of Mohini. Captivated, Bhasmasura agreed to match Mohini's dance step for step — until Mohini gracefully placed Her hand upon Her own head, and Bhasmasura reduced himself to ashes.",
            "hi": "जब भस्मासुर ने भोलेनाथ से 'जिसके सिर पर हाथ रखूँ वह भस्म हो जाए' का वरदान पाकर स्वयं शिव पर ही प्रयोग करना चाहा, तब विष्णु ने मुस्कुराकर अपूर्व सुंदरी मोहिनी का रूप धारण किया। मोहिनी के साथ नृत्य करते हुए भस्मासुर ने जैसे ही मोहिनी की मुद्रा का अनुसरण कर अपने सिर पर हाथ रखा, वह स्वयं भस्म हो गया।"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "Seeing Oneself in the Beloved",
            "hi": "एक-दूसरे में स्वयं का दर्शन"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "When Shiva beheld Vishnu's Mohini form, He was filled with divine wonder and affection — a union associated in regional Puranic traditions with the birth of Hariharaputra (Shasta / Ayyappa, and in some narratives connected with divine progeny). When Shiva was enchanted by Mohini, He was enchanted by Vishnu's form — which was truly His own reflection.",
            "hi": "जब शिव को बचाने के लिए विष्णु मोहिनी बने, तो यह केवल एक लीला नहीं थी — यह हर और हरि के उस गहरे बंधन का प्रतीक था जहाँ वे एक-दूसरे में स्वयं को देखते हैं।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "Where Shiva's simplicity grants a boon, Vishnu's wisdom protects cosmic order; where Vishnu descends for Dharma, Shiva descends as Hanuman to serve Him.",
        "hi": "जहाँ शिव की भोली करुणा वरदान देती है, वहाँ विष्णु की प्रज्ञा रक्षा करती है; और जहाँ विष्णु धर्म के लिए अवतरित होते हैं, वहाँ शिव हनुमान बनकर उनकी सेवा में खड़े होते हैं।"
      }
    },
    {
      "id": "cosmic-dance-of-creation",
      "number": "06",
      "manuscriptChapter": {
        "en": "Part 4 & 5 • Chapters 11, 15 & 16: The Spiritual Science of Harihara",
        "hi": "भाग ४ एवं ५ • अध्याय ११, १५ एवं १६: एकता का आध्यात्मिक विज्ञान और सृष्टि का नृत्य"
      },
      "title": {
        "en": "One Consciousness, Two Forces — The Cosmic Dance of Creation",
        "hi": "एक चेतना, दो शक्तियाँ — सृष्टि का दिव्य नृत्य"
      },
      "subtitle": {
        "en": "Understanding Ardhanarishwara and Harihara through the natural rhythm of day and night, birth and renewal, inhalation and exhalation.",
        "hi": "अर्धनारीश्वर और हरिहर स्वरूप के माध्यम से सृजन-पालन और परिवर्तन-विसर्जन के आध्यात्मिक विज्ञान का दर्शन।"
      },
      "coverImage": "assets/images/stories/harihara-cosmic-form.webp",
      "secondaryImage": "assets/images/stories/vishnu-in-shiva-heart.webp",
      "sources": [
        "Upanishadic Sat-Chit-Ananda Philosophy",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapters 11, 15, 16)"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "सच्चिदानन्दरूपाय विश्वोत्पत्त्यादिहेतवे।",
        "meaningEn": "To the Supreme Reality of Existence-Consciousness-Bliss, the single cause of cosmic creation, sustenance, and dissolution.",
        "meaningHi": "सत्-चित्-आनंद स्वरूप वह परम चेतना जब आनंद में लीला करती है, तो विष्णु के रूप में पालती है और शिव के रूप में मुक्त करती है।"
      },
      "introduction": {
        "en": "Just as the image of Ardhanarishwara (half Shiva, half Parvati) teaches us that Purusha and Prakriti are one, the image of Harihara (half Shiva, half Vishnu) reveals the spiritual science of how the universe breathes and moves.",
        "hi": "जिस प्रकार अर्धनारीश्वर की छवि हमें सिखाती है कि शिव और शक्ति एक हैं, उसी प्रकार हरिहर की छवि हमें वह आध्यात्मिक विज्ञान समझाती है जिससे यह समस्त ब्रह्मांड गतिमान है।"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "Day and Night, Inhale and Exhale",
            "hi": "दिन और रात, श्वास का भरना और छोड़ना"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "Look closely at nature: Day and night. Birth and death. Inhaling and exhaling. The sprouting of a seed and the falling of a petal. Are day and night enemies? Are inhalation and exhalation rivals? No — they are two halves of one living cycle. Vishnu is the sustaining energy of compassion, order, and preservation; Shiva is the transforming energy of detachment, renewal, and liberation.",
            "hi": "सृष्टि में दो शक्तियाँ कार्य कर रही हैं — दिन और रात, जन्म और मृत्यु, श्वास का भरना और छोड़ना, बीज का अंकुरित होना और पुष्प का झड़ना। क्या दिन और रात शत्रु हैं? नहीं — वे एक ही चक्र के दो भाग हैं। विष्णु संसार को बनाए रखने वाली करुणा और व्यवस्था हैं; शिव पुराने को हटाकर नए के लिए स्थान बनाने वाला रूपांतरण और मोक्ष हैं।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "The Two Hands of the Cosmic Dancer",
            "hi": "दिव्य नर्तक के दो हस्त"
          },
          "image": "assets/images/harihara-cover.webp",
          "narrative": {
            "en": "Have you ever watched a classical dance closely? The dancer's right arm rises while the left bends; one foot steps forward while the other anchors behind; a moment of stillness flows into a moment of motion. These movements do not oppose each other — together, they create the dance. Preservation without dissolution is stagnation; dissolution without preservation is emptiness. Together, they are Life.",
            "hi": "किसी नृत्य को ध्यान से देखिए — नर्तक की दाईं भुजा उठती है, बाईं झुकती है; एक क्षण स्थिरता, अगले क्षण गति। ये हरकतें विरोधी नहीं हैं, वे मिलकर नृत्य बनाती हैं। पालन बिना संहार के — ठहराव। संहार बिना पालन के — रिक्तता। दोनों मिलकर — जीवन।"
          }
        }
      ],
      "spiritualLesson": {
        "en": "He who sustains the universe also renews it; He who dissolves worn-out forms makes room for new blossoms. Both acts are acts of one infinite Love.",
        "hi": "जो संसार का पालन करता है वही उसका नवीनीकरण भी करता है; जो पुराने को मिटाता है वह नए निर्माण के लिए स्थान बनाता है। ये दोनों कार्य एक ही प्रेम के कार्य हैं।"
      }
    },
    {
      "id": "awakening-harihara-today",
      "number": "07",
      "manuscriptChapter": {
        "en": "Part 5 & 6 • Chapters 17, 18, 19 & 20: Healing Modern Misconceptions & Daily Sadhana",
        "hi": "भाग ५ एवं ६ • अध्याय १७, १८, १९ एवं २०: आधुनिक भ्रांतियाँ और एकम् की अनुभूति"
      },
      "title": {
        "en": "Healing the Wound of Division — Living Harihara in Daily Life",
        "hi": "आधुनिक भ्रांतियों का निवारण और दैनिक जीवन में हरिहर की जागृति"
      },
      "subtitle": {
        "en": "Why sectarian rivalry arose in history, how to dissolve the three modern misconceptions, and how to bring Harihara unity into daily worship.",
        "hi": "सांप्रदायिक विभाजन के तीन कारणों की पहचान, दैनिक पूजा में हरिहर भाव का समावेश, और अपने हृदय में 'एकम्' की अनुभूति।"
      },
      "coverImage": "assets/images/harihara-cover.webp",
      "secondaryImage": "assets/images/stories/vishnu-in-shiva-heart.webp",
      "sources": [
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapters 17–20)",
        "Skanda Upanishad"
      ],
      "verificationStatus": "verified-manuscript",
      "sanskritQuote": {
        "verse": "ॐ नमः शिवाय। ॐ नमो नारायणाय। हरि ॐ तत्सत्।",
        "meaningEn": "Om Namah Shivaya. Om Namo Narayanaya. Hari Om Tat Sat — two sacred doorways to the one Eternal Reality.",
        "meaningHi": "ॐ नमः शिवाय और ॐ नमो नारायणाय — एक ही परम सत्य के दो पावन द्वार।"
      },
      "introduction": {
        "en": "If the scriptures are so crystal clear — if Shiva Himself worships Vishnu and Vishnu Himself worships Shiva — then where did sectarian division come from? And how can we heal it in our own homes, temples, and hearts today?",
        "hi": "यदि शास्त्र इतने स्पष्ट हैं, यदि स्वयं शिव विष्णु की पूजा करते हैं और विष्णु शिव की — तो फिर यह विभाजन आया कहाँ से? और हम इसे अपने दैनिक जीवन और साधना में कैसे दूर कर सकते हैं?"
      },
      "scenes": [
        {
          "sceneNumber": 1,
          "title": {
            "en": "The Three Roots of Sectarian Misconception",
            "hi": "आधुनिक युग की तीन मुख्य भ्रांतियाँ"
          },
          "image": "assets/images/harihara-hero.webp",
          "narrative": {
            "en": "In Chapter 17, the manuscript identifies three roots of confusion: (1) Incomplete Study — reading only isolated verses praising one deity while skipping the chapters where that very deity praises the other; (2) Historical Sectarian Politics — periods when royal patronage turned spiritual paths into political competition not found in the scriptures; and (3) Egoistic Possessiveness in Devotion — distorting natural love for one's Ishta-Devata into disrespect toward other forms of the Divine.",
            "hi": "अध्याय १७ में तीन मुख्य भ्रांतियों का विश्लेषण है: (१) अपूर्ण अध्ययन — पुराणों के केवल कुछ अंश पढ़ना और उन अध्यायों को छोड़ देना जहाँ शिव विष्णु की और विष्णु शिव की स्तुति करते हैं; (२) सांप्रदायिक राजनीति — इतिहास में राजकीय प्रतिस्पर्धा का धर्म में प्रवेश; और (३) भक्ति में संकीर्ण अहंकार — 'मेरे इष्ट ही सर्वोच्च हैं' के सुंदर भाव को दूसरे रूपों के अनादर में बदल देना।"
          }
        },
        {
          "sceneNumber": 2,
          "title": {
            "en": "Four Simple Practices for Daily Sadhana",
            "hi": "दैनिक पूजा में एकता के चार सरल सूत्र"
          },
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "narrative": {
            "en": "Chapter 18 offers practical steps for every household: (1) In morning remembrance, chant both 'Om Namah Shivaya' and 'Om Namo Narayanaya' as two doorways to one Truth; (2) Hold the Harihara Bhava during puja — remembering Vishnu when worshipping Shiva, and remembering Shiva when worshipping Vishnu; (3) Teach children at home that both forms are supreme and one; and (4) Step away from debates of superiority with a peaceful smile, saying: 'Both are One.'",
            "hi": "अध्याय १८ में दैनिक साधना के चार सरल उपाय दिए गए हैं: (१) प्रातः स्मरण में 'ॐ नमः शिवाय' के साथ 'ॐ नमो नारायणाय' भी जपें; (२) पूजा में हरिहर भाव रखें; (३) बच्चों को बचपन से ही दोनों की एकता के संस्कार दें; और (४) 'कौन बड़ा है?' के विवाद से दूर रहकर शांति से कहें — 'दोनों एक हैं।'"
          }
        },
        {
          "sceneNumber": 3,
          "title": {
            "en": "Epilogue — Your Own Heart Is the Body of Harihara",
            "hi": "उपसंहार — यह देह आपका ही हृदय है"
          },
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "narrative": {
            "en": "In the culminating words of Chapter 20: 'In that Ardhanarishwara-like form of Harihara, where Shiva is on the right and Vishnu is on the left — both are one single body. That body is your own heart. The day no wall remains between Shiva and Vishnu within your heart — that day you have realized Ekam (the One). That day your devotion is complete. That day, you yourself have become Harihara.'",
            "hi": "अध्याय २० के उपसंहार के शब्दों में: 'हरिहर के उस स्वरूप में, जहाँ दाईं ओर शिव और बाईं ओर विष्णु हैं — दोनों एक ही देह हैं। यह देह आपका हृदय है। जिस दिन आपके हृदय में शिव और विष्णु के बीच कोई दीवार नहीं रही — उस दिन आपने एकम् की अनुभूति की। उस दिन आपकी भक्ति पूर्ण हुई। उस दिन आप हरिहार हो गए।'"
          }
        }
      ],
      "spiritualLesson": {
        "en": "When we learn to behold the oneness of two divine forms, we learn to behold unity across families, communities, and all humanity. That is Sanatana Dharma's universal gift to the world.",
        "hi": "जब हम दो देवताओं की एकता देखना सीखते हैं, तब हम परिवार, समाज और समस्त मानवता में भी भिन्नता के भीतर एकता देखना सीखते हैं। यही सनातन धर्म का सार्वभौमिक उपहार है।"
      }
    }
  ],
  "videos": [
    {
      "id": "vid-guhasura-epic",
      "title": {
        "en": "The Manifestation of Harihara: The Legend of Guhasura",
        "hi": "हरिहर का प्रथम प्राकट्य: गुहासुर वध की अमर गाथा"
      },
      "category": "Harihara Stories",
      "categoryLabel": {
        "en": "Harihara Stories",
        "hi": "हरिहर कथाएँ"
      },
      "aspectRatio": "16:9",
      "duration": "04:15",
      "featured": true,
      "isRecent": true,
      "thumbnail": "assets/images/videos/vid-guhasura-epic.webp",
      "description": {
        "en": "Based on Chapter 1 of Manu Siddharth's manuscript ('Harihara: Do Naam, Ek Pran'): witness how Guhasura's cunning boon of division collapsed when Lord Shiva and Lord Vishnu united as one at the confluence of the Tungabhadra and Haridra rivers.",
        "hi": "मनु सिद्धार्थ की पांडुलिपि ('हरिहर: दो नाम, एक प्राण', अध्याय १) पर आधारित: देखिए कैसे तुंगभद्रा और हरिद्रा नदियों के संगम पर शिव और विष्णु के एक होने से गुहासुर का कपटपूर्ण वरदान टूट गया।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "guhasura-manifestation",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/stories/guhasura-reign.webp",
          "captionEn": "Scene I: In ancient Guharanya (Karnataka), Guhasura obtains Brahma's boon that neither Shiva alone nor Vishnu alone can slay him.",
          "captionHi": "दृश्य १: प्राचीन गुहारण्य में गुहासुर ने ब्रह्मा जी से वरदान पाया कि अकेले शिव या अकेले विष्णु उसे न मार सकें।"
        },
        {
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "captionEn": "Scene II: To restore cosmic Dharma, Hari and Hara merge into one undivided form — Lord Harihara (Shankaranarayana).",
          "captionHi": "दृश्य २: धर्म की रक्षा के लिए हरि और हर ने अपनी सत्ताओं को एक कर लिया — भगवान हरिहर का प्राकट्य हुआ।"
        },
        {
          "image": "assets/images/stories/guhasura-vadh.webp",
          "captionEn": "Scene III: At Kudalur, wielding both Trishula and Sudarshana Chakra, Harihara vanquishes Guhasura's ego and grants him Moksha.",
          "captionHi": "दृश्य ३: कुडलूर संगम पर त्रिशूल और सुदर्शन चक्र धारी हरिहर के दर्शन से गुहासुर का अहंकार गला और उसे मोक्ष प्राप्त हुआ।"
        }
      ]
    },
    {
      "id": "vid-skanda-shloka-reel",
      "title": {
        "en": "Shivasya Hridayam Vishnuh — Sacred Verse of Oneness (Reel)",
        "hi": "शिवस्य हृदयं विष्णुः — एकता का दिव्य श्लोक (रील)"
      },
      "category": "Sacred Shlokas",
      "categoryLabel": {
        "en": "Sacred Shlokas",
        "hi": "पवित्र श्लोक"
      },
      "aspectRatio": "9:16",
      "duration": "00:58",
      "featured": false,
      "isRecent": true,
      "thumbnail": "assets/images/videos/vid-skanda-shloka-reel.webp",
      "description": {
        "en": "Vertical devotional visual (9:16 format for Reels & Shorts) exploring the Skanda Upanishad proclamation: 'Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu.'",
        "hi": "स्कंद उपनिषद के अमर श्लोक 'शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः' का ९:१६ (रील्स एवं शॉर्ट्स) प्रारूप में भावपूर्ण प्रस्तुतीकरण।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "vishnu-in-shiva-heart",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "captionEn": "शिवाय विष्णुरूपाय शिवरूपाय विष्णवे। शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥ (Skanda Upanishad 8)",
          "captionHi": "शिवाय विष्णुरूपाय शिवरूपाय विष्णवे। शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥ (स्कंद उपनिषद ८)"
        },
        {
          "image": "assets/images/harihara-cover.webp",
          "captionEn": "Just as Vishnu is full of Shiva, so too is Shiva full of Vishnu. Those who see no division abide in eternal peace.",
          "captionHi": "जिस प्रकार विष्णु शिवमय हैं, उसी प्रकार शिव भी विष्णुमय हैं। जो दोनों में भेद नहीं देखता, उसका जीवन मंगलमय होता है।"
        }
      ]
    },
    {
      "id": "vid-shiva-heart-vishnu",
      "title": {
        "en": "When Vishnu Calmed Shiva's Grief at Daksha's Yajna",
        "hi": "दक्ष-यज्ञ: जब विष्णु के आलिंगन ने महादेव का शोक शांत किया"
      },
      "category": "Shiva–Vishnu Unity",
      "categoryLabel": {
        "en": "Shiva–Vishnu Unity",
        "hi": "शिव–विष्णु एकता"
      },
      "aspectRatio": "16:9",
      "duration": "03:30",
      "featured": false,
      "isRecent": true,
      "thumbnail": "assets/images/videos/vid-shiva-heart-vishnu.webp",
      "description": {
        "en": "From Chapter 5 of the manuscript: When Sati entered the sacrificial fire and Shiva's grief shook the three worlds, Vishnu came not with weapons, but as the eternal friend who knows Shiva's heart.",
        "hi": "पांडुलिपि के अध्याय ५ से: जब माता सती के वियोग में महादेव के क्रोध से तीनों लोक काँप उठे, तब विष्णु शस्त्र लेकर नहीं बल्कि शाश्वत सखा के रूप में आए।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "vishnu-in-shiva-heart",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
          "captionEn": "In the Shiva Purana (Rudra Samhita), Shiva declares: 'Vishnu and I are like fire and its heat, the sun and its light.'",
          "captionHi": "शिव पुराण (रुद्र संहिता) में महादेव कहते हैं: 'विष्णु और मैं अग्नि और उसकी ऊष्मा की तरह, सूर्य और उसके प्रकाश की तरह अभिन्न हैं।'"
        },
        {
          "image": "assets/images/harihara-hero.webp",
          "captionEn": "At Daksha's sacrifice, the Destroyer and the Preserver embraced in deep reverence — restoring balance to the cosmos.",
          "captionHi": "दक्ष की यज्ञशाला में संहारक और पालनहार ने प्रेम और विश्वास से आलिंगन किया — और सृष्टि पुनः संतुलित हो गई।"
        }
      ]
    },
    {
      "id": "vid-harihareshwara-doc",
      "title": {
        "en": "Sacred Stones of Unity: Harihareshwara & Lingaraja Temples",
        "hi": "एकता के पावन तीर्थ: हरिहरेश्वर मंदिर और लिंगराज धाम"
      },
      "category": "Divine Temples",
      "categoryLabel": {
        "en": "Divine Temples",
        "hi": "दिव्य मंदिर"
      },
      "aspectRatio": "16:9",
      "duration": "05:10",
      "featured": false,
      "isRecent": false,
      "thumbnail": "assets/images/videos/vid-harihareshwara-doc.webp",
      "description": {
        "en": "A visual pilgrimage to the 1223 CE Hoysala Harihareshwara Temple in Karnataka, the 11th-century Lingaraja Temple in Odisha, and the 6th-century Badami rock-cut caves.",
        "hi": "कर्नाटक के १२२३ ईस्वी के होयसल हरिहरेश्वर मंदिर, ओडिशा के लिंगराज मंदिर और बादामी की प्राचीन गुफाओं की दिव्य दर्शन यात्रा।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "guhasura-manifestation",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/temples/harihareshwara-harihar.webp",
          "captionEn": "Harihareshwara Temple (1223 CE, Karnataka): Built in soapstone at the very site where Guharanya became Harihar.",
          "captionHi": "हरिहरेश्वर मंदिर (१२२३ ईस्वी, कर्नाटक): तुंगभद्रा तट पर सोपस्टोन से निर्मित वह पावन धाम जहाँ गुहारण्य 'हरिहर' बना।"
        },
        {
          "image": "assets/images/temples/lingaraja-bhubaneswar.webp",
          "captionEn": "Lingaraja Temple (Odisha): Where both Bilva leaves (Shiva) and Tulsi leaves (Vishnu) are offered together every day.",
          "captionHi": "लिंगराज मंदिर (ओडिशा): जहाँ प्रतिदिन बिल्वपत्र और तुलसी दल दोनों एक साथ भगवान हरिहर को अर्पित किए जाते हैं।"
        }
      ]
    },
    {
      "id": "vid-three-misconceptions-short",
      "title": {
        "en": "Why Do Devotees Divide Shiva & Vishnu? 3 Modern Misconceptions",
        "hi": "शिव और विष्णु में भेद क्यों? आधुनिक युग की ३ मुख्य भ्रांतियाँ"
      },
      "category": "Spiritual Teachings",
      "categoryLabel": {
        "en": "Spiritual Teachings",
        "hi": "आध्यात्मिक शिक्षाएँ"
      },
      "aspectRatio": "9:16",
      "duration": "01:15",
      "featured": false,
      "isRecent": true,
      "thumbnail": "assets/images/videos/vid-three-misconceptions-short.webp",
      "description": {
        "en": "From Chapter 17 of the manuscript: How incomplete scriptural reading, historical politics, and possessive ego created walls that the Puranas never taught.",
        "hi": "पांडुलिपि के अध्याय १७ से: कैसे अपूर्ण अध्ययन, ऐतिहासिक राजनीति और संकीर्ण अहंकार ने वे दीवारें खड़ी कीं जो शास्त्रों में कभी थीं ही नहीं।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "awakening-harihara-today",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/videos/vid-three-misconceptions-short.webp",
          "captionEn": "1. Incomplete Study  •  2. Historical Politics  •  3. Egoistic Possessiveness in Devotion.",
          "captionHi": "१. शास्त्रों का अपूर्ण अध्ययन  •  २. सांप्रदायिक राजनीति  •  ३. भक्ति में संकीर्ण अहंकार।"
        },
        {
          "image": "assets/images/harihara-cover.webp",
          "captionEn": "Remedy: Chant both 'Om Namah Shivaya' and 'Om Namo Narayanaya' — for your Beloved desires unity, not division.",
          "captionHi": "उपाय: 'ॐ नमः शिवाय' और 'ॐ नमो नारायणाय' दोनों को हृदय में स्थान दें — क्योंकि दोनों एक ही हैं।"
        }
      ]
    },
    {
      "id": "vid-iconography-explained",
      "title": {
        "en": "Decoding the Sacred Iconography of Lord Harihara",
        "hi": "भगवान हरिहर के दिव्य स्वरूप और प्रतीकों का रहस्य"
      },
      "category": "Mythology Explained",
      "categoryLabel": {
        "en": "Mythology Explained",
        "hi": "पौराणिक रहस्य"
      },
      "aspectRatio": "9:16",
      "duration": "01:20",
      "featured": false,
      "isRecent": false,
      "thumbnail": "assets/images/videos/vid-iconography-explained.webp",
      "description": {
        "en": "Explore why the Trishula and Sudarshana Chakra, Vibhuti and Pitambara, and the Crescent Moon and Kirit Mukut join into one seamless form.",
        "hi": "जानिए क्यों त्रिशूल और सुदर्शन चक्र, भस्म और पीताम्बर, तथा अर्धचंद्र और किरीट मुकुट एक ही देह में संगम करते हैं।"
      },
      "videoType": "storyboard",
      "videoUrl": "",
      "youtubeId": "",
      "instagramUrl": "",
      "relatedStoryId": "cosmic-dance-of-creation",
      "editorialStatus": "visual-storyboard-ready",
      "storyboardSlides": [
        {
          "image": "assets/images/stories/harihara-cosmic-form.webp",
          "captionEn": "Trishula + Sudarshana Chakra = Transformation and Preservation acting as two hands of one Cosmic Dancer.",
          "captionHi": "त्रिशूल + सुदर्शन चक्र = परिवर्तन और पालन, एक ही ब्रह्मांडीय नर्तक के दो हस्त।"
        },
        {
          "image": "assets/images/harihara-cover.webp",
          "captionEn": "Pitambara + Vibhuti = Living responsibly in the world while remaining inwardly free and detached.",
          "captionHi": "पीताम्बर + विभूति = संसार के कर्तव्यों का पालन करते हुए भीतर से पूर्णतः मुक्त और अनासक्त रहना।"
        }
      ]
    }
  ],
  "temples": [
    {
      "id": "harihareshwara-temple-karnataka",
      "name": {
        "en": "Sri Harihareshwara Temple",
        "hi": "श्री हरिहरेश्वर मंदिर, हरिहर"
      },
      "location": {
        "en": "Harihar, Davanagere District, Karnataka, India (Confluence of Tungabhadra & Haridra Rivers)",
        "hi": "हरिहर, दावणगेरे जिला, कर्नाटक (तुंगभद्रा और हरिद्रा नदियों के संगम के समीप)"
      },
      "period": {
        "en": "1223–1224 CE (Hoysala Empire, reign of King Vira Narasimha II)",
        "hi": "१२२३–१२२४ ईस्वी (होयसल साम्राज्य, राजा वीर नरसिंह द्वितीय का शासनकाल)"
      },
      "architecture": {
        "en": "Classical Hoysala Architecture in finely carved Soapstone (Chloritic Schist), featuring lathe-turned bell-shaped pillars, a square Mantapa, and ornate ceilings.",
        "hi": "उत्कृष्ट होयसल स्थापत्य कला (सोपस्टोन / क्लोरिटिक शिस्ट पत्थर से निर्मित), खराद पर तराशे गए घंटाकार स्तंभ और अलंकृत मंडप।"
      },
      "deityAndIconography": {
        "en": "Presiding image of Lord Harihara (approx. 4 feet tall), vertically divided down the center: the right half depicts Lord Shiva with matted locks (Jata-mukuta), crescent moon, Trishula, and Damaru; the left half depicts Lord Vishnu wearing the royal Kirit-mukuta and holding the Sudarshana Chakra and Panchajanya Shankha.",
        "hi": "भगवान हरिहर की लगभग ४ फीट ऊँची दिव्य प्रतिमा, जो ऊर्ध्वाधर रूप से दो भागों में विभाजित है: दाहिनी ओर जटाजूट, अर्धचंद्र, त्रिशूल और डमरू धारी शिव; बाईं ओर किरीट मुकुट, शंख और सुदर्शन चक्र धारी विष्णु।"
      },
      "historicalBackground": {
        "en": "Historically documented through Hoysala inscriptions, the temple was constructed in 1223–1224 CE by Polalva, a general and minister of the Hoysala ruler Vira Narasimha II. Later rulers of the Seuna (Yadava), Vijayanagara, and Keladi Nayaka dynasties made further endowments to the shrine, venerating it as 'Dakshin Kashi'.",
        "hi": "होयसल शिलालेखों के अनुसार इस मंदिर का निर्माण १२२३–१२२४ ईस्वी में होयसल सम्राट वीर नरसिंह द्वितीय के सेनापति और मंत्री पोलल्व द्वारा कराया गया था। बाद में विजयनगर और केलादी नायक शासकों ने भी इसे 'दक्षिण काशी' मानकर संरक्षण दिया।"
      },
      "sacredTraditions": {
        "en": "As detailed in Chapter 1 of Manu Siddharth's manuscript and the local Sthala Purana, this region was anciently called 'Guharanya' (the forest of Guhasura). At Kudalur — the confluence of the Tungabhadra and Haridra rivers — Shiva and Vishnu merged as Harihara to overcome Guhasura's boon and grant him liberation, renaming the town 'Harihar'.",
        "hi": "मनु सिद्धार्थ की पांडुलिपि के अध्याय १ और स्थानीय स्थल पुराण के अनुसार, यह क्षेत्र प्राचीन काल में 'गुहारण्य' कहलाता था। तुंगभद्रा और हरिद्रा नदियों के संगम (कुडलूर) पर भगवान शिव और विष्णु ने हरिहर रूप धरकर गुहासुर के वरदान को निष्फल किया और उसकी प्रार्थना पर यह भूमि 'हरिहर' नाम से प्रसिद्ध हुई।"
      },
      "interestingFacts": [
        {
          "en": "Pilgrims traditionally view a pilgrimage as complete when worshipping both Shaiva and Vaishnava aspects unified within the single sanctum.",
          "hi": "भक्त एक ही गर्भगृह में शैव और वैष्णव दोनों परंपराओं की संयुक्त आराधना का दुर्लभ सौभाग्य प्राप्त करते हैं।"
        },
        {
          "en": "The temple preserves dozens of Kannada and Sanskrit stone inscriptions recording grants across four centuries.",
          "hi": "मंदिर परिसर में कन्नड़ और संस्कृत के अनेक ऐतिहासिक शिलालेख सुरक्षित हैं।"
        }
      ],
      "image": "assets/images/temples/harihareshwara-harihar.webp",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Harihareshwara+Temple+Harihar+Karnataka",
      "sources": [
        "Archaeological Survey of India (ASI) — Dharwad Circle Records",
        "Epigraphia Carnatica (Davanagere / Chitradurga Inscriptions)",
        "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth (Chapter 1)"
      ],
      "verificationStatus": "verified"
    },
    {
      "id": "harihar-dham-jharkhand",
      "name": {
        "en": "Harihar Dham",
        "hi": "हरिहर धाम, बगोदर (झारखंड)"
      },
      "location": {
        "en": "Bagodar (near Jamua River along Grand Trunk Road / NH-19), Giridih District, Jharkhand, India",
        "hi": "बगोदर (जमुआ नदी के तट पर, जी.टी. रोड / NH-19 के समीप), गिरिडीह जिला, झारखंड"
      },
      "period": {
        "en": "Late 20th Century (Completed in 1988 after 30 years of construction)",
        "hi": "२०वीं शताब्दी का उत्तरार्ध (३० वर्षों के निर्माण के पश्चात १९८८ में पूर्ण)"
      },
      "architecture": {
        "en": "Monumental modern devotional architecture centered around a towering 65-foot (approx. 20-meter) exterior Shivalinga-shaped sanctum set amidst a serene 25-acre riverside campus.",
        "hi": "२५ एकड़ के शांत परिसर में निर्मित ६५ फीट (लगभग २० मीटर) ऊँचे विशाल शिवलिंग के आकार का भव्य आधुनिक मंदिर स्थापत्य।"
      },
      "deityAndIconography": {
        "en": "Dedicated primarily to Lord Shiva (housing the monumental Shivalinga structure) while bearing the inclusive sacred name 'Harihar Dham', honoring the spiritual harmony of Hari and Hara in popular North-Eastern Indian devotion.",
        "hi": "यह धाम मुख्य रूप से ६५ फीट ऊँचे विशाल शिवलिंग के लिए प्रसिद्ध है, और इसका पावन नाम 'हरिहर धाम' लोक-भक्ति में हरि और हर के समन्वय तथा पवित्रता का उद्घोष करता है।"
      },
      "historicalBackground": {
        "en": "Distinct from the medieval Hoysala temple in Karnataka, Harihar Dham in Jharkhand was conceived and built by devotee Baba Amarnath Mukhopadhyay over nearly three decades, reaching completion in 1988. Editorial Note: While sharing the revered name 'Harihar', its origin is modern devotional rather than the ancient Guhasura Sthala Purana site.",
        "hi": "कर्नाटक के मध्यकालीन होयसल मंदिर से भिन्न, झारखंड के इस हरिहर धाम का निर्माण बाबा अमरनाथ मुखोपाध्याय के ३० वर्षों के अथक समर्पण से १९८८ में पूर्ण हुआ। संपादकीय टिप्पणी: नाम की समानता होते हुए भी इसकी ऐतिहासिक पृष्ठभूमि आधुनिक भक्ति परंपरा से जुड़ी है।"
      },
      "sacredTraditions": {
        "en": "Draws hundreds of thousands of devotees during Shravani Mela (the holy month of Shravana) and Maha Shivaratri, and is widely revered across Jharkhand, Bihar, and West Bengal as an auspicious sanctuary for sacred vows.",
        "hi": "श्रावण मास (श्रावणी मेला) और महाशिवरात्रि पर यहाँ लाखों श्रद्धालु जलार्पण के लिए एकत्र होते हैं। झारखंड, बिहार और बंगाल में यह एक प्रमुख आध्यात्मिक केंद्र है।"
      },
      "interestingFacts": [
        {
          "en": "At 65 feet high, it is celebrated as one of the tallest Shivalinga-shaped temple structures in India.",
          "hi": "६५ फीट की ऊँचाई के साथ यह भारत की सबसे ऊँची शिवलिंग-आकार की मंदिर संरचनाओं में से एक है।"
        },
        {
          "en": "Demonstrates how the sacred name 'Harihara' continues to inspire living pilgrimage centers in modern India.",
          "hi": "यह दर्शाता है कि आधुनिक भारत में भी 'हरिहर' नाम भक्तों के हृदय में समन्वय और श्रद्धा का केंद्र बना हुआ है।"
        }
      ],
      "image": "assets/images/temples/harihar-dham-jharkhand.webp",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Harihar+Dham+Bagodar+Giridih+Jharkhand",
      "sources": [
        "Giridih District Official Gazetteer & Tourism Records, Government of Jharkhand"
      ],
      "verificationStatus": "verified"
    },
    {
      "id": "lingaraja-temple-bhubaneswar",
      "name": {
        "en": "Sri Lingaraja Temple (Harihara Kshetra)",
        "hi": "श्री लिंगराज मंदिर (एकाम्र क्षेत्र), भुवनेश्वर"
      },
      "location": {
        "en": "Bhubaneswar, Khordha District, Odisha, India",
        "hi": "भुवनेश्वर, खुर्दा जिला, ओडिशा"
      },
      "period": {
        "en": "11th Century CE (Somavamshi Dynasty, traditionally attributed to King Yayati Keshari), with Ganga Dynasty additions",
        "hi": "११वीं शताब्दी ईस्वी (सोमवंशी राजवंश, राजा ययाति केसरी के काल में निर्मित एवं गंग वंश द्वारा विस्तारित)"
      },
      "architecture": {
        "en": "Masterpiece of Kalinga Deula architecture featuring a 180-foot Rekha Deula spire, Jagamohana (assembly hall), Natamandira (festival hall), and Bhoga-mandapa.",
        "hi": "कलिंग स्थापत्य शैली का शिखर उदाहरण — १८० फीट ऊँचा रेखा देउल शिखर, जगमोहन, नटमंदिर और भोग-मंडप।"
      },
      "deityAndIconography": {
        "en": "The natural (Svayambhu) granite Linga in the sanctum is explicitly worshipped as HARIHARA — a unified manifestation of both Shiva and Vishnu, encircled by a natural silver-hued line thought by devotees to divide the Shiva and Vishnu halves.",
        "hi": "गर्भगृह में स्थित स्वयंभू पाषाण लिंग की पूजा प्रत्यक्ष रूप से 'हरिहर' (शिव और विष्णु के संयुक्त स्वरूप) के रूप में की जाती है।"
      },
      "historicalBackground": {
        "en": "Built during the 11th century under the Somavamshi rulers and later patronized by the Eastern Ganga kings (who also built the Jagannath Temple at Puri), Lingaraja Temple became the supreme architectural and liturgical synthesis of Shaivism and Vaishnavism in Eastern India.",
        "hi": "११वीं शताब्दी में सोमवंशी शासकों द्वारा निर्मित और बाद में पूर्वी गंग शासकों (जिन्होंने पुरी के जगन्नाथ मंदिर का भी निर्माण किया) द्वारा संरक्षित यह मंदिर पूर्वी भारत में शैव और वैष्णव समन्वय का सर्वोच्च प्रतीक बन गया।"
      },
      "sacredTraditions": {
        "en": "In a remarkable living liturgy of unity: both Bilva leaves (sacred to Shiva) and Tulsi leaves (sacred to Vishnu) are offered in daily worship, and the crowning finial atop the 180-foot spire bears both half-Trishula and half-Sudarshana Chakra (Pinaka-Chakra).",
        "hi": "एकता की अद्भुत जीवंत परंपरा: यहाँ दैनिक पूजा में शिव के प्रिय 'बिल्वपत्र' और विष्णु के प्रिय 'तुलसी दल' दोनों एक साथ अर्पित किए जाते हैं, और मंदिर के शिखर पर अर्ध-त्रिशूल एवं अर्ध-चक्र अंकित हैं।"
      },
      "interestingFacts": [
        {
          "en": "The temple priests address the deity as Harihara, and daily rituals blend Shaiva Agama and Vaishnava Pancharatra elements.",
          "hi": "मंदिर की दैनिक आरती और नैवेद्य में शैव और वैष्णव दोनों उपासना पद्धतियों का संगम है।"
        }
      ],
      "image": "assets/images/temples/lingaraja-bhubaneswar.webp",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lingaraja+Temple+Bhubaneswar+Odisha",
      "sources": [
        "Ekamra Purana & Archaeological Survey of India (ASI) Bhubaneswar Circle",
        "K.C. Panigrahi, 'Archaeological Remains at Bhubaneswar'"
      ],
      "verificationStatus": "verified"
    },
    {
      "id": "sankaranarayanar-temple-tamil-nadu",
      "name": {
        "en": "Sri Sankaranarayanar Swamy Temple",
        "hi": "श्री शंकरनारायणर स्वामी मंदिर, शंकरनकोविल"
      },
      "location": {
        "en": "Sankarankovil, Tenkasi District, Tamil Nadu, India",
        "hi": "शंकरनकोविल, तेनकासी जिला, तमिलनाडु"
      },
      "period": {
        "en": "1022 CE (Founded by Pandya King Ukkira Pandyan)",
        "hi": "१०२२ ईस्वी (पांड्य राजा उक्किर पांड्यन द्वारा स्थापित)"
      },
      "architecture": {
        "en": "Dravidian temple architecture featuring a towering nine-tiered Rajagopuram and three distinct shrines under one complex: Sankareshwarar (Shiva), Gomathi Amman (Parvati), and Sankaranarayanar (Harihara).",
        "hi": "द्रविड़ स्थापत्य कला का भव्य नौ-मंजिला राजगोपुरम और एक ही परिसर में तीन मुख्य गर्भगृह: शंकरेश्वरर (शिव), गोमती अम्मन (पार्वती), और शंकरनारायणर (हरिहर)।"
      },
      "deityAndIconography": {
        "en": "The central Sankaranarayanar shrine enshrines the composite deity with Shiva's crescent moon, cobra, and tiger skin on the right, and Vishnu's Chakra, Shankha, and garland on the left.",
        "hi": "शंकरनारायणर गर्भगृह में भगवान का संयुक्त विग्रह स्थापित है — दाईं ओर चंद्रमा, नाग व व्याघ्रचर्म से युक्त शंकर और बाईं ओर शंख-चक्र से युक्त नारायण।"
      },
      "historicalBackground": {
        "en": "According to Tamil temple chronicles and inscriptions, the temple was built in the 11th century CE to unite two serpent devotees — Sankha (a devotee of Vishnu) and Padma (a devotee of Shiva) — who longed to see their Lords as One, joined by Goddess Parvati's penance as Gomathi Amman.",
        "hi": "तमिल आगम परंपरा और अभिलेखों के अनुसार, दो नाग भक्तों — शंख (विष्णु भक्त) और पद्म (शिव भक्त) — के विवाद को शांत करने और माता गोमती की तपस्या के फलस्वरूप भगवान ने यहाँ शंकरनारायण रूप में दर्शन दिए।"
      },
      "sacredTraditions": {
        "en": "The annual 12-day 'Adi Thapasu' festival in the Tamil month of Aadi celebrates Goddess Gomathi's penance and the grand vision of Lord Shiva and Lord Vishnu uniting as Sankaranarayana before hundreds of thousands of devotees.",
        "hi": "प्रतिवर्ष तमिल मास 'आदि' में १२ दिवसीय 'आदि तपसु' उत्सव मनाया जाता है, जिसमें लाखों भक्त भगवान शिव और विष्णु के एकत्व दर्शन का उत्सव मनाते हैं।"
      },
      "interestingFacts": [
        {
          "en": "echoes the exact philosophical message of the Vamana Purana (Manuscript Chapter 1B) in the heart of Tamil devotional heritage.",
          "hi": "दक्षिण भारत की भक्ति परंपरा में यह मंदिर वामन पुराण (पांडुलिपि अध्याय १ख) के 'यो हरिः स तु वै रुद्रः' संदेश का जीवंत केंद्र है।"
        }
      ],
      "image": "assets/images/temples/sankaranarayanar-kovil.webp",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sankaranarayanar+Temple+Sankarankovil+Tamil+Nadu",
      "sources": [
        "Tamil Nadu Hindu Religious and Charitable Endowments (HR&CE) Department Records",
        "Sthala Purana of Sankarankovil"
      ],
      "verificationStatus": "verified"
    },
    {
      "id": "badami-cave-harihara-karnataka",
      "name": {
        "en": "Badami Cave Temples (Cave I & Cave III Harihara Reliefs)",
        "hi": "बादामी गुफा मंदिर (गुफा १ एवं ३ की प्राचीन हरिहर प्रतिमाएँ)"
      },
      "location": {
        "en": "Badami, Bagalkot District, Karnataka, India",
        "hi": "बादामी, बागलकोट जिला, कर्नाटक"
      },
      "period": {
        "en": "Late 6th Century CE (578 CE inscription of Chalukya King Mangalesha in Cave III)",
        "hi": "छठी शताब्दी ईस्वी का उत्तरार्ध (गुफा ३ में ५७८ ईस्वी का चालुक्य राजा मंगलेश का शिलालेख)"
      },
      "architecture": {
        "en": "Early Chalukya rock-cut red sandstone cave architecture carved into high cliffs overlooking the Agastya Tirtha lake.",
        "hi": "अगस्त्य तीर्थ सरोवर के सामने लाल बलुआ पत्थर की चट्टानों को काटकर बनाई गई प्रारंभिक चालुक्य गुफा स्थापत्य कला।"
      },
      "deityAndIconography": {
        "en": "Monumental rock-cut relief of Harihara standing in Samabhanga posture: flanked by Parvati and Nandi on the Shiva side, and Lakshmi and Garuda on the Vishnu side — visually uniting both divine families.",
        "hi": "समभंग मुद्रा में उत्कीर्ण विशाल हरिहर शिल्प: शिव पक्ष की ओर देवी पार्वती और नंदी, तथा विष्णु पक्ष की ओर देवी लक्ष्मी और गरुड़ — दोनों दिव्य परिवारों का एक साथ अद्भुत अंकन।"
      },
      "historicalBackground": {
        "en": "The Badami Cave Temples represent some of the earliest dated stone sculptures of Hindu iconography in Deccan history. Cave I is dedicated to Shiva and Cave III (dated 578 CE) to Vishnu, yet both caves feature prominent reliefs of Harihara — proving that 1,450 years ago, the Chalukya builders celebrated the non-duality of Shiva and Vishnu.",
        "hi": "बादामी की गुफाएँ दक्कन के इतिहास की सबसे प्राचीन दिनांकित पाषाण कलाकृतियों में से हैं। गुफा १ शिव को और गुफा ३ (५७८ ईस्वी) विष्णु को समर्पित है, किंतु दोनों ही गुफाओं में हरिहर की भव्य प्रतिमाएँ उकेरी गई हैं — जो १४५० वर्ष पूर्व भी शिव-विष्णु अद्वैत का प्रमाण देती हैं।"
      },
      "sacredTraditions": {
        "en": "Demonstrates through archaeological stone evidence that the worship and artistic celebration of Harihara predate medieval sectarian divisions by many centuries.",
        "hi": "यह पुरातात्विक प्रमाण सिद्ध करता है कि हरिहर स्वरूप की आराधना बाद के सांप्रदायिक विभाजनों से कई शताब्दियों पहले से भारतीय चेतना के केंद्र में रही है।"
      },
      "interestingFacts": [
        {
          "en": "One of the earliest surviving monumental Harihara sculptures in India, carved directly into living red sandstone cliff rock.",
          "hi": "जीवंत चट्टान में तराशी गई भारत की सबसे प्राचीन और विशाल हरिहर प्रतिमाओं में से एक।"
        }
      ],
      "image": "assets/images/temples/badami-cave-harihara.webp",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Badami+Cave+Temples+Karnataka",
      "sources": [
        "Archaeological Survey of India (ASI) — World Heritage Tentative List Documentation",
        "T.A. Gopinatha Rao, 'Elements of Hindu Iconography' (Vol. II)"
      ],
      "verificationStatus": "verified"
    }
  ],
  "quizzes": [
    {
      "id": "q-1",
      "category": "The Divine Form of Harihara",
      "difficulty": "Beginner",
      "question": {
        "en": "In the sacred name 'Harihara', which two Deities are united as One?",
        "hi": "पवित्र नाम 'हरिहर' में कौन-से दो देवता एक रूप में समाहित हैं?"
      },
      "options": {
        "en": [
          "Lord Vishnu (Hari) and Lord Shiva (Hara)",
          "Lord Brahma and Lord Indra",
          "Lord Surya and Lord Chandra",
          "Lord Agni and Lord Varuna"
        ],
        "hi": [
          "भगवान विष्णु (हरि) और भगवान शिव (हर)",
          "भगवान ब्रह्मा और भगवान इंद्र",
          "भगवान सूर्य और भगवान चंद्र",
          "भगवान अग्नि और भगवान वरुण"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "'Hari' is a revered name of Lord Vishnu, and 'Hara' is a revered name of Lord Shiva. Together as Harihara (also known as Shankaranarayana), they represent the indivisible unity of the Supreme Consciousness.",
        "hi": "'हरि' भगवान विष्णु का पावन नाम है और 'हर' भगवान शिव का। दोनों मिलकर 'हरिहर' (शंकरनारायण) कहलाते हैं, जो एक ही अनंत चेतना के दो स्वरूप हैं।"
      },
      "citation": {
        "en": "Manuscript: 'Harihara: Do Naam, Ek Pran' by Manu Siddharth, Preface & Chapter 1",
        "hi": "पांडुलिपि: 'हरिहर: दो नाम, एक प्राण' — मनु सिद्धार्थ, प्रस्तावना एवं अध्याय १"
      }
    },
    {
      "id": "q-2",
      "category": "The Divine Form of Harihara",
      "difficulty": "Intermediate",
      "question": {
        "en": "What is another widely revered Sanskrit name for the composite form of Lord Harihara?",
        "hi": "भगवान हरिहर के संयुक्त स्वरूप को किस अन्य प्रसिद्ध संस्कृत नाम से भी जाना जाता है?"
      },
      "options": {
        "en": [
          "Shankaranarayana",
          "Hiranyagarbha",
          "Dattatreya",
          "Panchamukha"
        ],
        "hi": [
          "शंकरनारायण",
          "हिरण्यगर्भ",
          "दत्तात्रेय",
          "पंचमुख"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Harihara is also celebrated across India as 'Shankaranarayana' — uniting Shankara (Shiva) and Narayana (Vishnu) in a single form.",
        "hi": "हरिहर को संपूर्ण भारत में 'शंकरनारायण' के नाम से भी पूजा जाता है — जिसमें शंकर (शिव) और नारायण (विष्णु) एक ही देह में विराजमान हैं।"
      },
      "citation": {
        "en": "Manuscript Chapter 1 ('जिसे शंकरनारायण भी कहते हैं') & Sankarankovil Tradition",
        "hi": "पांडुलिपि अध्याय १ ('जिसे शंकरनारायण भी कहते हैं') एवं शंकरनकोविल परंपरा"
      }
    },
    {
      "id": "q-3",
      "category": "The Divine Form of Harihara",
      "difficulty": "Advanced",
      "question": {
        "en": "In Chapter 11 of the manuscript, the form of Harihara is compared to which other composite divine form to illustrate the harmony of complementary cosmic principles?",
        "hi": "पांडुलिपि के अध्याय ११ में पूरक ब्रह्मांडीय शक्तियों के सामंजस्य को समझाने के लिए हरिहर स्वरूप की तुलना किस अन्य संयुक्त स्वरूप से की गई है?"
      },
      "options": {
        "en": [
          "Ardhanarishwara (half Shiva, half Parvati)",
          "Narasimha (half lion, half man)",
          "Hayagriva",
          "Garuda-Narayana"
        ],
        "hi": [
          "अर्धनारीश्वर (अर्ध शिव, अर्ध पार्वती)",
          "नरसिंह",
          "हयग्रीव",
          "गरुड़-नारायण"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Just as Ardhanarishwara teaches that Purusha and Prakriti (Shiva and Shakti) are inseparable, Harihara teaches that Dissolution and Preservation (Hara and Hari) are one single reality.",
        "hi": "जिस प्रकार अर्धनारीश्वर की छवि सिखाती है कि शिव और शक्ति एक हैं, उसी प्रकार हरिहर की छवि सिखाती है कि संहार और पालन (हर और हरि) एक ही चेतना हैं।"
      },
      "citation": {
        "en": "Manuscript Chapter 11: 'Ardhanarishwara aur Harihara Swaroop'",
        "hi": "पांडुलिपि अध्याय ११: 'अर्धनारीश्वर और हरिहर स्वरूप'"
      }
    },
    {
      "id": "q-4",
      "category": "Shiva and Vishnu — Sacred Unity",
      "difficulty": "Beginner",
      "question": {
        "en": "In Chapter 5 of the manuscript (Shiva Purana), which natural analogy is used to describe the inseparability of Shiva and Vishnu?",
        "hi": "पांडुलिपि के अध्याय ५ (शिव पुराण) में शिव और विष्णु की अभिन्नता को समझाने के लिए किस प्राकृतिक उदाहरण का प्रयोग किया गया है?"
      },
      "options": {
        "en": [
          "Fire and its heat, or the Sun and its light",
          "Mountain and desert",
          "Iron and gold",
          "Thunder and silence"
        ],
        "hi": [
          "अग्नि और उसकी ऊष्मा, तथा सूर्य और उसका प्रकाश",
          "पर्वत और मरुस्थल",
          "लोहा और स्वर्ण",
          "मेघगर्जन और मौन"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "The Shiva Purana compares Shiva and Vishnu to fire and its heat, or the sun and its light — asking how anyone could ever separate heat from fire or light from the sun.",
        "hi": "शिव पुराण बताता है कि शिव और विष्णु अग्नि और उसकी ऊष्मा की तरह हैं, सूर्य और उसके प्रकाश की तरह — जिन्हें कभी अलग नहीं किया जा सकता।"
      },
      "citation": {
        "en": "Shiva Purana (Rudra Samhita) / Manuscript Chapter 5",
        "hi": "शिव पुराण (रुद्र संहिता) / पांडुलिपि अध्याय ५"
      }
    },
    {
      "id": "q-5",
      "category": "Shiva and Vishnu — Sacred Unity",
      "difficulty": "Intermediate",
      "question": {
        "en": "At Daksha's sacrifice (Yajna), after Goddess Sati entered the sacred fire and Shiva's grief shook the three worlds, how did Lord Vishnu approach Shiva?",
        "hi": "दक्ष के यज्ञ में माता सती के आत्मदाह के पश्चात जब महादेव के शोक और क्रोध से तीनों लोक काँप उठे, तब भगवान विष्णु किस भाव से शिव के पास आए?"
      },
      "options": {
        "en": [
          "As an eternal friend who knows Shiva's heart, embracing Him in deep mutual reverence",
          "As a rival challenging Virabhadra to a duel for supremacy",
          "By hiding in Vaikuntha and refusing to attend",
          "By sending Indra to negotiate"
        ],
        "hi": [
          "एक शाश्वत मित्र के रूप में जो शिव के हृदय को जानते हैं, और दोनों ने गहरे आदर से आलिंगन किया",
          "श्रेष्ठता सिद्ध करने के लिए प्रतिद्वंद्वी के रूप में",
          "वैकुंठ में छिपकर",
          "इंद्र को दूत बनाकर"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "As described in Chapter 5 of the manuscript, Vishnu came as an eternal friend. Seeing Vishnu, the flame of Shiva's third eye softened; the Destroyer and the Preserver embraced in love and trust, restoring balance to creation.",
        "hi": "पांडुलिपि के अध्याय ५ के अनुसार, विष्णु एक शाश्वत मित्र के रूप में आए। विष्णु को देखकर शिव की तीसरी आँख की ज्वाला शांत हुई और दोनों ने गहरे आदर के साथ आलिंगन किया।"
      },
      "citation": {
        "en": "Manuscript Chapter 5: 'Shiva Purana mein Vishnu ki Mahima'",
        "hi": "पांडुलिपि अध्याय ५: 'शिव पुराण में विष्णु की महिमा'"
      }
    },
    {
      "id": "q-6",
      "category": "Shiva and Vishnu — Sacred Unity",
      "difficulty": "Advanced",
      "question": {
        "en": "According to Chapter 9 of the manuscript, which Purana describes Lord Vishnu Himself worshipping a Shivalinga as the symbol of the same Supreme Truth that He Himself is?",
        "hi": "पांडुलिपि के अध्याय ९ के अनुसार, किस पुराण में वर्णन है कि स्वयं भगवान विष्णु ने शिवलिंग की पूजा करते हुए उसे उसी परम सत्य का प्रतीक बताया जो वे स्वयं हैं?"
      },
      "options": {
        "en": [
          "Kurma Purana",
          "Garuda Purana",
          "Bhavishya Purana",
          "Markandeya Purana"
        ],
        "hi": [
          "कूर्म पुराण",
          "गरुड़ पुराण",
          "भविष्य पुराण",
          "मार्कण्डेय पुराण"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Chapter 9 ('Skanda Purana aur Kurma Purana') highlights the Kurma Purana account where Lord Vishnu worships the Shivalinga, teaching devotees that honoring Shiva is honoring the one Supreme Reality.",
        "hi": "अध्याय ९ ('स्कंद पुराण और कूर्म पुराण') में वर्णित है कि कूर्म पुराण में स्वयं भगवान विष्णु शिवलिंग की पूजा करते हैं।"
      },
      "citation": {
        "en": "Kurma Purana / Manuscript Chapter 9 & Introduction",
        "hi": "कूर्म पुराण / पांडुलिपि अध्याय ९ एवं परिचय"
      }
    },
    {
      "id": "q-7",
      "category": "The Story of Guhasura",
      "difficulty": "Beginner",
      "question": {
        "en": "What was the ancient name of the dense forest kingdom ruled by the demon Guhasura in present-day Karnataka?",
        "hi": "वर्तमान कर्नाटक की भूमि पर राक्षस गुहासुर के राज्य वाले घने वन का प्राचीन नाम क्या था?"
      },
      "options": {
        "en": [
          "Guharanya (The Forest of Guha)",
          "Dandakaranya",
          "Naimisharanya",
          "Khandavaprastha"
        ],
        "hi": [
          "गुहारण्य (गुह का वन)",
          "दण्डकारण्य",
          "नैमिषारण्य",
          "खाण्डवप्रस्थ"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Guhasura's forest kingdom was known as 'Guharanya', stretching from Ucchangi Durga in the east to Mudanur in the west, and from Govinahalu in the south to Airani in the north.",
        "hi": "गुहासुर के राज में जो घना वन था, वह 'गुहारण्य' कहलाया — जो पूर्व में उच्चंगी दुर्गा से पश्चिम में मुदानूर तक और दक्षिण में गोविनहलु से उत्तर में ऐरानी तक फैला था।"
      },
      "citation": {
        "en": "Manuscript Chapter 1 & Harihareshwara Sthala Purana",
        "hi": "पांडुलिपि अध्याय १ एवं हरिहरेश्वर स्थल पुराण"
      }
    },
    {
      "id": "q-8",
      "category": "The Story of Guhasura",
      "difficulty": "Intermediate",
      "question": {
        "en": "What was the fatal flaw in the cunning boon Guhasura requested from Lord Brahma?",
        "hi": "गुहासुर द्वारा ब्रह्मा जी से माँगे गए चालाक वरदान में उसकी सबसे बड़ी भूल क्या थी?"
      },
      "options": {
        "en": [
          "He assumed Shiva and Vishnu were two permanently separate beings, not realizing they are fundamentally One",
          "He forgot to ask for protection at night",
          "He forgot to mention weapons made of stone",
          "He only asked for immortality in water"
        ],
        "hi": [
          "उसने शिव और विष्णु को दो अलग-अलग सत्ता माना और यह नहीं जाना कि वे मूलतः एक ही हैं",
          "वह रात्रि में सुरक्षा माँगना भूल गया",
          "वह अस्त्र-शस्त्रों का उल्लेख करना भूल गया",
          "उसने केवल जल में अमरता माँगी"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Guhasura asked that neither Shiva nor Vishnu be able to kill him, assuming they were separate. The moment Hari and Hara manifested in their unified essence as Harihara, his deceptive shield shattered.",
        "hi": "गुहासुर ने शिव (हर) और विष्णु (हरि) को अलग-अलग मानकर वरदान माँगा था। जिस क्षण वे दोनों एक होकर 'हरिहर' रूप में प्रकट हुए, गुहासुर का छद्म कवच टूट गया।"
      },
      "citation": {
        "en": "Manuscript Chapter 1: 'Guhasura Vadh — Jab Hari aur Hara Ek Hue'",
        "hi": "पांडुलिपि अध्याय १: 'गुहासुर वध — जब हरि और हर एक हुए'"
      }
    },
    {
      "id": "q-9",
      "category": "The Story of Guhasura",
      "difficulty": "Advanced",
      "question": {
        "en": "At the confluence of which two rivers (known as Kudalur) did Lord Harihara descend for the final battle with Guhasura, and what was Guhasura's dying prayer?",
        "hi": "किन दो नदियों के संगम (कुडलूर) पर भगवान हरिहर अवतरित हुए, और मृत्यु से पूर्व गुहासुर ने क्या अंतिम प्रार्थना की?"
      },
      "options": {
        "en": [
          "Tungabhadra and Haridra rivers; he prayed that the land be sanctified by the Lord's name ('Harihar')",
          "Ganga and Yamuna rivers; he asked for his kingdom to be restored",
          "Kaveri and Bhavani rivers; he asked for wealth",
          "Godavari and Krishna rivers; he asked for revenge"
        ],
        "hi": [
          "तुंगभद्रा और हरिद्रा नदियों के संगम पर; उसने प्रार्थना की कि वह भूमि प्रभु के नाम ('हरिहर') से पावन हो जाए",
          "गंगा और यमुना के संगम पर; उसने अपना राज्य वापस माँगा",
          "कावेरी और भवानी के संगम पर; उसने धन माँगा",
          "गोदावरी और कृष्णा के संगम पर; उसने प्रतिशोध माँगा"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Harihara descended at Kudalur, the confluence of the Tungabhadra and Haridra rivers. Transformed by the sacred vision of Harihara, Guhasura prayed that the land he had defiled be sanctified by the Lord's name — becoming 'Harihar'.",
        "hi": "हरिहर तुंगभद्रा और हरिद्रा नदियों के संगम (कुडलूर) पर अवतरित हुए। हरिहर के दर्शन से गुहासुर का अहंकार गल गया और उसकी प्रार्थना पर उस भूमि का नाम 'हरिहर' पड़ा तथा उसे मोक्ष मिला।"
      },
      "citation": {
        "en": "Skanda Purana, Brahma Purana & Manuscript Chapter 1",
        "hi": "स्कंद पुराण, ब्रह्म पुराण एवं पांडुलिपि अध्याय १"
      }
    },
    {
      "id": "q-10",
      "category": "Shiva–Vishnu Shlokas",
      "difficulty": "Beginner",
      "question": {
        "en": "What is the meaning of the sacred verse 'शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः' from the Skanda Upanishad?",
        "hi": "स्कंद उपनिषद के प्रसिद्ध श्लोक 'शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः' का क्या अर्थ है?"
      },
      "options": {
        "en": [
          "Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu",
          "Shiva dwells only on mountains and Vishnu dwells only in the ocean",
          "Worship requires complex rituals",
          "Only sages can understand the scriptures"
        ],
        "hi": [
          "शिव का हृदय विष्णु हैं और विष्णु का हृदय शिव हैं",
          "शिव केवल पर्वत पर और विष्णु केवल सागर में रहते हैं",
          "पूजा के लिए जटिल अनुष्ठान आवश्यक हैं",
          "केवल ऋषि ही शास्त्र समझ सकते हैं"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "From the Skanda Upanishad (Krishna Yajurveda), this verse proclaims the intimate, inseparable oneness of Hari and Hara: Vishnu is the heart of Shiva, and Shiva is the heart of Vishnu.",
        "hi": "कृष्ण यजुर्वेद के स्कंद उपनिषद का यह मंत्र उद्घोष करता है कि शिव के हृदय में विष्णु हैं और विष्णु के हृदय में शिव हैं।"
      },
      "citation": {
        "en": "Skanda Upanishad, Mantra 8 (Manuscript Epigraph & Chapter 20)",
        "hi": "स्कंद उपनिषद, मंत्र ८ (पांडुलिपि मंगलाचरण एवं अध्याय २०)"
      }
    },
    {
      "id": "q-11",
      "category": "Shiva–Vishnu Shlokas",
      "difficulty": "Intermediate",
      "question": {
        "en": "Which Purana contains the verse 'यो हरिः स तु वै रुद्रो यो रुद्रः स जनार्दनः' ('He who is Hari is verily Rudra, and He who is Rudra is Janardana') cited in Chapter 1(B) of the manuscript?",
        "hi": "पांडुलिपि के अध्याय १(ख) में उद्धृत श्लोक 'यो हरिः स तु वै रुद्रो यो रुद्रः स जनार्दनः' किस पुराण से है?"
      },
      "options": {
        "en": [
          "Vamana Purana",
          "Agni Purana",
          "Matsya Purana",
          "Bhavishya Purana"
        ],
        "hi": [
          "वामन पुराण",
          "अग्नि पुराण",
          "मत्स्य पुराण",
          "भविष्य पुराण"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Cited in Chapter 1(B) of the manuscript, the Vamana Purana declares 'Yo Harih sa tu vai Rudro yo Rudrah sa Janardanah' when Harihara manifests to dispel the confusion of the debating sages.",
        "hi": "पांडुलिपि के अध्याय १(ख) में उद्धृत यह श्लोक वामन पुराण का है, जहाँ ऋषियों का भ्रम तोड़ने के लिए भगवान हरिहर रूप में दर्शन देते हैं।"
      },
      "citation": {
        "en": "Vamana Purana / Manuscript Chapter 1(B)",
        "hi": "वामन पुराण / पांडुलिपि अध्याय १(ख)"
      }
    },
    {
      "id": "q-12",
      "category": "Shiva–Vishnu Shlokas",
      "difficulty": "Advanced",
      "question": {
        "en": "In Chapter 3 of the manuscript ('Hari and Hara in the Vedas'), which Yajurvedic hymn to Rudra is highlighted for describing Rudra's all-pervasiveness — the exact etymological meaning of 'Vishnu'?",
        "hi": "पांडुलिपि के अध्याय ३ ('वेदों में हरि और हर') में यजुर्वेद की किस प्रसिद्ध स्तुति का उल्लेख किया गया है जो रुद्र की उसी 'सर्वव्यापकता' का वर्णन करती है जो 'विष्णु' शब्द का अर्थ है?"
      },
      "options": {
        "en": [
          "Sri Rudram (Yajurveda)",
          "Gayatri Mantra",
          "Nasadiya Sukta",
          "Bhumi Sukta"
        ],
        "hi": [
          "श्री रुद्रम् (यजुर्वेद)",
          "गायत्री मंत्र",
          "नासदीय सूक्त",
          "भूमि सूक्त"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Chapter 3 explains that Sri Rudram in the Yajurveda praises Rudra as pervading water, plants, mountains, rivers, and all beings — the very quality of all-pervasiveness that defines the name 'Vishnu'.",
        "hi": "अध्याय ३ बताता है कि यजुर्वेद में 'श्री रुद्रम्' रुद्र को जल, वनस्पतियों, पर्वतों और कण-कण में सर्वव्यापी बताती है — और सर्वव्यापकता का यही गुण 'विष्णु' शब्द को परिभाषित करता है।"
      },
      "citation": {
        "en": "Krishna Yajurveda (Sri Rudram) / Manuscript Chapter 3",
        "hi": "कृष्ण यजुर्वेद (श्री रुद्रम्) / पांडुलिपि अध्याय ३"
      }
    },
    {
      "id": "q-13",
      "category": "Harihareshwara Temple",
      "difficulty": "Beginner",
      "question": {
        "en": "In which Indian state and district is the historic Sri Harihareshwara Temple located?",
        "hi": "ऐतिहासिक श्री हरिहरेश्वर मंदिर भारत के किस राज्य और जिले में स्थित है?"
      },
      "options": {
        "en": [
          "Davanagere District, Karnataka",
          "Puri District, Odisha",
          "Varanasi District, Uttar Pradesh",
          "Madurai District, Tamil Nadu"
        ],
        "hi": [
          "दावणगेरे जिला, कर्नाटक",
          "पुरी जिला, ओडिशा",
          "वाराणसी जिला, उत्तर प्रदेश",
          "मदुरै जिला, तमिलनाडु"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Sri Harihareshwara Temple is located in the town of Harihar in Davanagere District, Karnataka, on the banks of the Tungabhadra river.",
        "hi": "श्री हरिहरेश्वर मंदिर कर्नाटक के दावणगेरे जिले के हरिहर नगर में तुंगभद्रा नदी के तट पर स्थित है।"
      },
      "citation": {
        "en": "Manuscript Chapter 1 & ASI Records",
        "hi": "पांडुलिपि अध्याय १ एवं भारतीय पुरातत्व सर्वेक्षण अभिलेख"
      }
    },
    {
      "id": "q-14",
      "category": "Harihareshwara Temple",
      "difficulty": "Intermediate",
      "question": {
        "en": "Which royal dynasty constructed the Sri Harihareshwara Temple in the 13th century (1223–1224 CE), and what stone was used?",
        "hi": "१३वीं शताब्दी (१२२३–१२२४ ईस्वी) में किस राजवंश ने श्री हरिहरेश्वर मंदिर का निर्माण कराया और इसमें किस पत्थर का उपयोग हुआ?"
      },
      "options": {
        "en": [
          "Hoysala Empire (under King Vira Narasimha II's minister Polalva), built of Soapstone",
          "Maurya Empire, built of White Marble",
          "Gupta Empire, built of Red Brick",
          "Chola Empire, built of Coral Stone"
        ],
        "hi": [
          "होयसल साम्राज्य (राजा वीर नरसिंह द्वितीय के मंत्री पोलल्व द्वारा), सोपस्टोन (सेलखड़ी) से निर्मित",
          "मौर्य साम्राज्य, श्वेत संगमरमर से",
          "गुप्त साम्राज्य, लाल ईंटों से",
          "चोल साम्राज्य, प्रवाल पत्थर से"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Built in 1223–1224 CE by Polalva, minister of Hoysala King Vira Narasimha II, the temple is crafted from soapstone (chloritic schist) with lathe-turned pillars.",
        "hi": "१२२३–१२२४ ईस्वी में होयसल राजा वीर नरसिंह द्वितीय के सेनापति-मंत्री पोलल्व ने सोपस्टोन से इस भव्य मंदिर का निर्माण कराया था।"
      },
      "citation": {
        "en": "Manuscript Chapter 1 & Epigraphia Carnatica",
        "hi": "पांडुलिपि अध्याय १ एवं एपिग्राफिया कर्नाटिका"
      }
    },
    {
      "id": "q-15",
      "category": "Harihar Dham",
      "difficulty": "Beginner",
      "question": {
        "en": "Where is the pilgrimage site 'Harihar Dham' (famous for its 65-foot monumental Shivalinga structure) located?",
        "hi": "६५ फीट ऊँचे विशाल शिवलिंग स्थापत्य के लिए प्रसिद्ध तीर्थस्थल 'हरिहर धाम' कहाँ स्थित है?"
      },
      "options": {
        "en": [
          "Bagodar, Giridih District, Jharkhand",
          "Hampi, Karnataka",
          "Ujjain, Madhya Pradesh",
          "Dwarka, Gujarat"
        ],
        "hi": [
          "बगोदर, गिरिडीह जिला, झारखंड",
          "हम्पी, कर्नाटक",
          "उज्जैन, मध्य प्रदेश",
          "द्वारका, गुजरात"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Harihar Dham is located in Bagodar, Giridih District, Jharkhand, along the Jamua River, and was completed in 1988 through the devotion of Baba Amarnath Mukhopadhyay.",
        "hi": "हरिहर धाम झारखंड के गिरिडीह जिले के बगोदर में स्थित है, जिसका निर्माण बाबा अमरनाथ मुखोपाध्याय के ३० वर्षों के समर्पण से १९८८ में पूर्ण हुआ।"
      },
      "citation": {
        "en": "Giridih District Gazetteer, Government of Jharkhand",
        "hi": "गिरिडीह जिला गजेटियर, झारखंड सरकार"
      }
    },
    {
      "id": "q-16",
      "category": "Harihar Dham",
      "difficulty": "Intermediate",
      "question": {
        "en": "Why is it important to distinguish the historical background of Harihareshwara Temple (Karnataka) from Harihar Dham (Jharkhand)?",
        "hi": "हरिहरेश्वर मंदिर (कर्नाटक) और हरिहर धाम (झारखंड) की ऐतिहासिक पृष्ठभूमि में अंतर समझना क्यों आवश्यक है?"
      },
      "options": {
        "en": [
          "Harihareshwara (Karnataka) is a 13th-century Hoysala temple enshrining a composite Harihara murti tied to the Guhasura legend, while Harihar Dham (Jharkhand) is a late-20th-century 65-foot Shivalinga shrine",
          "Both were built in the same year by the same king",
          "Both are rock-cut caves from the 6th century",
          "Neither is an active place of worship"
        ],
        "hi": [
          "हरिहरेश्वर (कर्नाटक) गुहासुर कथा से जुड़ा १३वीं सदी का होयसल मंदिर है जहाँ हरिहर विग्रह है, जबकि हरिहर धाम (झारखंड) २०वीं सदी में निर्मित ६५ फीट ऊँचा शिवलिंग तीर्थ है",
          "दोनों एक ही राजा द्वारा एक ही वर्ष में बनाए गए थे",
          "दोनों छठी शताब्दी की गुफाएँ हैं",
          "दोनों में पूजा नहीं होती"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Careful scholarship respects each shrine's distinct heritage: Harihar in Karnataka is the 1223 CE Hoysala temple of the Guhasura tradition, whereas Harihar Dham in Jharkhand is a modern (1988) monumental Shivalinga pilgrimage center.",
        "hi": "प्रामाणिक इतिहास की दृष्टि से कर्नाटक का हरिहरेश्वर मंदिर १२२३ ईस्वी का होयसल मंदिर है, जबकि झारखंड का हरिहर धाम १९८८ में पूर्ण हुआ ६५ फीट ऊँचे शिवलिंग का आधुनिक तीर्थ है।"
      },
      "citation": {
        "en": "Temple Historical Verification Notes (Section 10)",
        "hi": "मंदिर ऐतिहासिक प्रमाणीकरण संदर्भ"
      }
    },
    {
      "id": "q-17",
      "category": "Symbolism and Iconography",
      "difficulty": "Beginner",
      "question": {
        "en": "In traditional iconography of Lord Harihara, which attributes belong to the Shiva half and which belong to the Vishnu half?",
        "hi": "भगवान हरिहर की पारंपरिक प्रतिमा में शिव भाग और विष्णु भाग के प्रमुख प्रतीक कौन-से हैं?"
      },
      "options": {
        "en": [
          "Shiva half: Jata, Crescent Moon, Vibhuti, Trishula, Tiger skin; Vishnu half: Kirit Mukut, Pitambara, Shankha, Sudarshana Chakra",
          "Shiva half: Veena and Swan; Vishnu half: Bow and Arrow only",
          "Both halves hold only a lotus",
          "Neither half wears any ornaments"
        ],
        "hi": [
          "शिव भाग: जटाजूट, अर्धचंद्र, भस्म, त्रिशूल, व्याघ्रचर्म; विष्णु भाग: किरीट मुकुट, पीताम्बर, शंख, सुदर्शन चक्र",
          "शिव भाग: वीणा और हंस; विष्णु भाग: केवल धनुष",
          "दोनों भागों में केवल कमल",
          "कोई आभूषण या प्रतीक नहीं"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "As described in Chapters 1, 1(B), and 11 of the manuscript, the Shiva side features matted locks, crescent moon, ash, serpent, tiger skin, and Trishula/Damaru, while the Vishnu side features the golden crown (Mukut), yellow silk (Pitambara), Vaijayanti garland, Shankha, and Sudarshana Chakra.",
        "hi": "पांडुलिपि के अध्याय १, १(ख) और ११ के अनुसार, शिव भाग में जटा, अर्धचंद्र, भस्म, सर्प, व्याघ्रचर्म व त्रिशूल-डमरू हैं, तथा विष्णु भाग में किरीट मुकुट, पीताम्बर, वैजयंती माला, शंख व सुदर्शन चक्र हैं।"
      },
      "citation": {
        "en": "Manuscript Chapters 1, 1(B) & 11",
        "hi": "पांडुलिपि अध्याय १, १(ख) एवं ११"
      }
    },
    {
      "id": "q-18",
      "category": "Symbolism and Iconography",
      "difficulty": "Intermediate",
      "question": {
        "en": "In Odisha's 11th-century Lingaraja Temple (where the Linga is worshipped as Harihara), how is the unity of Shiva and Vishnu expressed in daily floral offerings?",
        "hi": "ओडिशा के ११वीं शताब्दी के लिंगराज मंदिर (जहाँ स्वयंभू लिंग की पूजा हरिहर रूप में होती है) में दैनिक पत्र-पुष्प अर्पण में यह एकता कैसे प्रकट होती है?"
      },
      "options": {
        "en": [
          "Both Bilva leaves (sacred to Shiva) and Tulsi leaves (sacred to Vishnu) are offered together in daily worship",
          "No leaves or flowers are ever offered",
          "Only lotus seeds are used once a year",
          "Only sandalwood paste is allowed"
        ],
        "hi": [
          "दैनिक पूजा में शिव के प्रिय 'बिल्वपत्र' और विष्णु के प्रिय 'तुलसी दल' दोनों एक साथ अर्पित किए जाते हैं",
          "कोई पत्र या पुष्प अर्पित नहीं होता",
          "वर्ष में केवल एक बार कमल गट्टा चढ़ता है",
          "केवल चंदन का लेप होता है"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "At Lingaraja Temple in Bhubaneswar, the deity is worshipped as Harihara, receiving both Bilva leaves and Tulsi leaves daily, and the temple spire bears the Pinaka-Chakra (half-Trishula, half-Sudarshana Chakra).",
        "hi": "भुवनेश्वर के लिंगराज मंदिर में भगवान की पूजा हरिहर रूप में होती है, जहाँ प्रतिदिन बिल्वपत्र और तुलसी दल दोनों एक साथ अर्पित किए जाते हैं।"
      },
      "citation": {
        "en": "Ekamra Purana & ASI Bhubaneswar Records",
        "hi": "एकाम्र पुराण एवं भारतीय पुरातत्व सर्वेक्षण अभिलेख"
      }
    },
    {
      "id": "q-19",
      "category": "Spiritual Teachings and Traditions",
      "difficulty": "Intermediate",
      "question": {
        "en": "In Chapter 4 of the manuscript ('Philosophical Foundations'), how does Kashmir Shaivism (as expounded by Abhinavagupta and Vasugupta) view Lord Vishnu?",
        "hi": "पांडुलिपि के अध्याय ४ ('दार्शनिक आधार') के अनुसार, कश्मीर शैवदर्शन (अभिनवगुप्त एवं वासुगुप्त) भगवान विष्णु को किस रूप में देखता है?"
      },
      "options": {
        "en": [
          "As Shiva's own sustaining power (Sthiti-Shakti) — inseparable from Shiva just as a hand is inseparable from the body",
          "As a separate rival deity outside consciousness",
          "As a purely historical king",
          "As unrelated to cosmic functions"
        ],
        "hi": [
          "शिव की ही अपनी पालन-शक्ति (स्थिति-शक्ति) के रूप में — जैसे हाथ शरीर से अलग नहीं होता",
          "चेतना से बाहर किसी प्रतिद्वंद्वी के रूप में",
          "केवल एक ऐतिहासिक राजा के रूप में",
          "सृष्टि के कार्यों से असंबंधित"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Chapter 4 explains that in Kashmir Shaivism, Paramashiva performs five cosmic acts (creation, preservation, dissolution, concealment, and grace), and Vishnu is revered as Shiva Himself expressing His nourishing, sustaining power.",
        "hi": "अध्याय ४ के अनुसार, कश्मीर शैवदर्शन में शिव पाँच ब्रह्मांडीय कार्य करते हैं और विष्णु को शिव की ही पोषण/पालन-शक्ति के रूप में स्वीकार किया जाता है — जैसे आपका हाथ आपके शरीर से अलग नहीं है।"
      },
      "citation": {
        "en": "Manuscript Chapter 4: 'Darshanik Aadhar'",
        "hi": "पांडुलिपि अध्याय ४: 'दार्शनिक आधार'"
      }
    },
    {
      "id": "q-20",
      "category": "Spiritual Teachings and Traditions",
      "difficulty": "Advanced",
      "question": {
        "en": "In Chapter 17 of the manuscript ('Modern Misconceptions'), what are the THREE main reasons identified for sectarian division among devotees?",
        "hi": "पांडुलिपि के अध्याय १७ ('आधुनिक युग की भ्रांतियाँ') में भक्तों के बीच सांप्रदायिक विभाजन के कौन-से तीन मुख्य कारण बताए गए हैं?"
      },
      "options": {
        "en": [
          "1. Incomplete study of scriptures, 2. Historical sectarian politics, and 3. The egoistic desire to make one's own devotion 'exclusive' by belittling other forms",
          "1. Lack of temples, 2. Lack of Sanskrit grammar, and 3. Geographic distance",
          "1. Astronomy, 2. Seasonal changes, and 3. Architecture",
          "1. Music styles, 2. Dietary rules, and 3. Clothing colors"
        ],
        "hi": [
          "१. शास्त्रों का अपूर्ण अध्ययन, २. सांप्रदायिक राजनीति, और ३. अपनी भक्ति को 'विशेष' बनाने के अहंकार में दूसरे रूपों को कम आँकना",
          "१. मंदिरों की कमी, २. व्याकरण का अभाव, और ३. भौगोलिक दूरी",
          "१. ज्योतिष, २. ऋतु परिवर्तन, और ३. वास्तुकला",
          "१. संगीत शैली, २. भोजन नियम, और ३. वस्त्रों के रंग"
        ]
      },
      "correctIndex": 0,
      "explanation": {
        "en": "Chapter 17 identifies (1) Apurna Adhyayan (reading only partial chapters of Puranas), (2) Sampradayik Rajniti (historical political patronage rivalries), and (3) turning natural love for one's Ishta into belittling other forms.",
        "hi": "अध्याय १७ में तीन मुख्य भ्रांतियाँ बताई गई हैं: (१) अपूर्ण अध्ययन, (२) सांप्रदायिक राजनीति, और (३) 'भक्ति' को 'विशेष' बनाने की चाहत में दूसरे देवताओं को कम मानना।"
      },
      "citation": {
        "en": "Manuscript Chapter 17: 'Aadhunik Yug ki Bhrantiyan'",
        "hi": "पांडुलिपि अध्याय १७: 'आधुनिक युग की भ्रांतियाँ'"
      }
    }
  ],
  "articles": [
    {
      "id": "art-vedic-origins-hari-hara",
      "category": "History and Origins",
      "categoryLabel": {
        "en": "History and Origins",
        "hi": "इतिहास एवं उद्गम"
      },
      "title": {
        "en": "Rudra and Vishnu in the Vedas: Ekam Sat & Sri Rudram",
        "hi": "वेदों में हरि और हर: 'एकं सत्' और श्री रुद्रम् की छिपी एकता"
      },
      "summary": {
        "en": "From the Rigveda's proclamation 'Ekam Sat Vipra Bahudha Vadanti' to the Yajurveda's Sri Rudram and the Purusha Sukta — exploring where the unity of Shiva and Vishnu truly begins.",
        "hi": "ऋग्वेद के महावाक्य 'एकं सद्विप्रा बहुधा वदन्ति' से लेकर यजुर्वेद के श्री रुद्रम् और पुरुष सूक्त तक — जानिए शिव और विष्णु की एकता का सबसे प्राचीन वैदिक मूल।"
      },
      "readingTime": "6 min read",
      "manuscriptRef": "Part 2 • Chapters 2 & 3",
      "image": "assets/images/stories/harihara-cosmic-form.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Shruti: The Voice of the Infinite",
            "hi": "१. श्रुति: अनंत की वाणी और 'एकम्' का सत्य"
          },
          "body": {
            "en": "When we speak of the Vedas, we speak of Shruti — that which was heard by sages whose minds had grown so still that they could receive the breath of the Infinite. What did those rishis behold? They beheld Ekam — the One without a second — shining across the sky of consciousness as Rudra and Vishnu. In the Rigveda, Rudra (Lord of transformation and fierce compassion) and Vishnu (the all-pervading Preserver) are never rivals; they are praised and invoked side by side.",
            "hi": "जब हम वेदों की बात करते हैं, तो हम 'श्रुति' की बात करते हैं — वह सत्य जो शांत चित्त ऋषियों की चेतना में उतरा। उन्होंने 'एकम्' का सत्य सुना। ऋग्वेद में रुद्र (परिवर्तन और तीव्र करुणा के स्वामी) और विष्णु (सर्वव्यापी संरक्षक) को कभी प्रतिद्वंद्वी नहीं माना गया, बल्कि एक ही परम सत्य के दो प्रकाशमान चेहरों के रूप में साथ-साथ वंदित किया गया।"
          }
        },
        {
          "heading": {
            "en": "2. Sri Rudram: The All-Pervasiveness That Defines Vishnu",
            "hi": "२. श्री रुद्रम्: रुद्र में विष्णु की सर्वव्यापकता"
          },
          "body": {
            "en": "In the Yajurveda, the sacred hymn Sri Rudram praises Rudra as all-pervading — dwelling in waters, plants, mountains, rivers, and the dust of the earth. Yet this very quality of all-pervasiveness (vyapti — being present everywhere in everything) is the exact etymological meaning of the word 'Vishnu'. When the Vedas praise Rudra's omnipresence, they describe the very nature that defines Vishnu.",
            "hi": "यजुर्वेद में 'श्री रुद्रम्' स्तुति रुद्र को जल, वनस्पतियों, पर्वतों, नदियों और पृथ्वी के कण-कण में सर्वव्यापी बताती है। हर स्थान पर व्याप्त होने का यही गुण ठीक वही है जो 'विष्णु' शब्द का अर्थ है। अर्थात् जब वेद रुद्र की सर्वव्यापकता की प्रशंसा करते हैं, तो वे उसी स्वभाव का वर्णन कर रहे हैं जो विष्णु को परिभाषित करता है।"
          }
        },
        {
          "heading": {
            "en": "3. Purusha Sukta: The Cosmic Person Before All Names",
            "hi": "३. पुरुष सूक्त: नाम और रूप से पूर्व का ब्रह्मांडीय पुरुष"
          },
          "body": {
            "en": "The Purusha Sukta describes the thousand-headed, thousand-eyed Cosmic Being from whose self-offering all creation arose. Some traditions behold this Cosmic Purusha as Vishnu; others behold Him as Shiva. Both are right — for the Purusha Sukta describes the One prior to name and form, of whom Hari and Hara are the two grandest manifestations: 'Ekam Sat Vipra Bahudha Vadanti' (Rigveda 1.164.46).",
            "hi": "पुरुष सूक्त उस सहस्र-शीर्ष ब्रह्मांडीय पुरुष का वर्णन करता है जिससे समस्त सृष्टि उत्पन्न हुई। विभिन्न परंपराएँ इसे विष्णु या शिव के रूप में देखती हैं — और दोनों सही हैं, क्योंकि वह नाम और रूप से पूर्व का 'एकं सत्' है जिसे विद्वान अनेक नामों से पुकारते हैं।"
          }
        }
      ],
      "relatedIds": [
        "art-philosophical-foundations",
        "art-puranic-proofs-of-unity"
      ],
      "bibliography": [
        "Rigveda Samhita 1.164.46 & Purusha Sukta (10.90)",
        "Krishna Yajurveda, Taittiriya Samhita 4.5 (Sri Rudram)",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 2 & 3"
      ]
    },
    {
      "id": "art-philosophical-foundations",
      "category": "Spiritual Philosophy",
      "categoryLabel": {
        "en": "Spiritual Philosophy",
        "hi": "आध्यात्मिक दर्शन"
      },
      "title": {
        "en": "Advaita, Vishishtadvaita & Kashmir Shaivism on Harihara Unity",
        "hi": "अद्वैत वेदांत, विशिष्टाद्वैत और कश्मीर शैवदर्शन में हरिहर तत्व"
      },
      "summary": {
        "en": "How Adi Shankaracharya, Sri Ramanujacharya, and Abhinavagupta built philosophical frameworks that honor the underlying unity of Shiva and Vishnu.",
        "hi": "आदि शंकराचार्य, श्री रामानुजाचार्य और अभिनवगुप्त के दार्शनिक सिद्धांत कैसे भिन्न भाषाओं में एक ही हरिहर सत्य की पुष्टि करते हैं।"
      },
      "readingTime": "7 min read",
      "manuscriptRef": "Part 2 & 5 • Chapters 4, 15 & 16",
      "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Advaita Vedanta: The Ocean and Its Waves",
            "hi": "१. अद्वैत वेदांत: सागर और उसकी लहरें"
          },
          "body": {
            "en": "Expounded by Adi Shankaracharya, Advaita ('not two') teaches that Brahman alone is the unchanging ocean of reality. Every wave has its own name, contour, and movement, yet if you ask any wave what it is, the answer is always water. Shankaracharya himself composed both the 'Shivananda Lahari' in praise of Shiva and the 'Krishnashtakam' in praise of Vishnu, showing that all sacred forms point toward the same non-dual Absolute.",
            "hi": "आदि शंकराचार्य द्वारा प्रतिपादित अद्वैत दर्शन में ब्रह्म सागर है और शिव तथा विष्णु उस सागर की दो महिमाशाली लहरें हैं। शंकराचार्य ने स्वयं शिव की स्तुति में 'शिवानंद लहरी' और विष्णु की स्तुति में 'कृष्णाष्टकम्' लिखा, क्योंकि सभी रूप उसी निराकार सत्य की ओर इशारा करते हैं।"
          }
        },
        {
          "heading": {
            "en": "2. Vishishtadvaita & Kashmir Shaivism: Different Maps of One Territory",
            "hi": "२. विशिष्टाद्वैत और कश्मीर शैवदर्शन: एक ही सत्य के भिन्न मानचित्र"
          },
          "body": {
            "en": "In Sri Ramanujacharya's Vishishtadvaita, the Supreme is understood as the inner Self whose cosmic body encompasses all souls and functions, accepting Maheshwara's sacred work of cosmic dissolution. Meanwhile, in the Kashmir Shaivism of Vasugupta and Abhinavagupta, Paramashiva is Pure Consciousness (Chit) performing five cosmic acts (Pancha-Kritya), and Vishnu is revered as Shiva's own nourishing, sustaining power — inseparable as a hand from the body.",
            "hi": "रामानुजाचार्य के विशिष्टाद्वैत और अभिनवगुप्त के कश्मीर शैवदर्शन में भाषाएँ भिन्न हैं, पर मूल एकता अखंड है। कश्मीर शैवदर्शन में शिव पाँच ब्रह्मांडीय कार्य करते हैं और विष्णु को शिव की ही पालन-शक्ति के रूप में स्वीकार किया जाता है — जैसे हाथ शरीर से अलग नहीं होता।"
          }
        },
        {
          "heading": {
            "en": "3. The Spiritual Science of Sat-Chit-Ananda",
            "hi": "३. सत्-चित्-आनंद और सृष्टि का दिव्य नृत्य"
          },
          "body": {
            "en": "As Chapters 15 and 16 explain, the universe operates through two complementary energies: preservation (Vishnu) and transformation (Shiva) — like day and night, or inhalation and exhalation. When Sat-Chit-Ananda plays in bliss, It nurtures as Vishnu and liberates as Shiva. Preservation without dissolution is stagnation; dissolution without preservation is emptiness. Together, they are Life.",
            "hi": "अध्याय १५ और १६ के अनुसार, जब सत्-चित्-आनंद स्वरूप परम चेतना अपनी लीला करती है, तो वह विष्णु के रूप में पालती है और शिव के रूप में मुक्त करती है। पालन बिना संहार के ठहराव है; संहार बिना पालन के रिक्तता। दोनों मिलकर ही जीवन का नृत्य बनाते हैं।"
          }
        }
      ],
      "relatedIds": [
        "art-vedic-origins-hari-hara",
        "art-modern-misconceptions-sadhana"
      ],
      "bibliography": [
        "Adi Shankaracharya, Shivananda Lahari & Krishnashtakam",
        "Abhinavagupta, Tantraloka & Pratyabhijna Hridayam",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 4, 15 & 16"
      ]
    },
    {
      "id": "art-puranic-proofs-of-unity",
      "category": "Scriptural References",
      "categoryLabel": {
        "en": "Scriptural References",
        "hi": "शास्त्रीय प्रमाण"
      },
      "title": {
        "en": "Scriptural Proofs Across Six Mahapuranas & The Mahabharata",
        "hi": "छह महापुराणों और महाभारत में हरिहर एकता के प्रामाणिक साक्ष्य"
      },
      "summary": {
        "en": "A systematic guide to Chapters 5–10 of the manuscript: how the Shiva, Vishnu, Linga, Bhagavata, Skanda, and Kurma Puranas establish mutual reverence.",
        "hi": "पांडुलिपि के अध्याय ५ से १० का संपूर्ण सार: शिव पुराण, विष्णु पुराण, लिंग पुराण, भागवतम्, स्कंद पुराण और कूर्म पुराण में परस्पर आराधना के प्रमाण।"
      },
      "readingTime": "8 min read",
      "manuscriptRef": "Part 3 • Chapters 5, 6, 7, 8, 9 & 10",
      "image": "assets/images/harihara-cover.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Shiva Purana & Vishnu Purana: Two Mirrors Reflecting One Light",
            "hi": "१. शिव पुराण और विष्णु पुराण: एक ही प्रकाश के दो दर्पण"
          },
          "body": {
            "en": "In the Rudra Samhita of the Shiva Purana (Chapter 5), Shiva declares: 'Vishnu and I are not separate; I am in Vishnu and Vishnu is in Me.' Shiva teaches the Vishnu Sahasranama and embraces Vishnu at Daksha's Yajna. Conversely, in Book 1 of the Vishnu Purana (Chapter 6), Vishnu praises Rudra as the supreme destroyer of ignorance and liberator of souls, arising like a ray from the sun without diminishing its source.",
            "hi": "शिव पुराण की रुद्र संहिता (अध्याय ५) में महादेव स्वयं कहते हैं: 'विष्णु और मैं अलग नहीं हैं; मैं विष्णु में हूँ और विष्णु मुझमें हैं।' वहीं विष्णु पुराण (अध्याय ६) में भगवान विष्णु रुद्र को अज्ञान का संहारक और आत्माओं का मुक्तिदाता कहकर उनकी स्तुति करते हैं।"
          }
        },
        {
          "heading": {
            "en": "2. Linga Purana, Srimad Bhagavatam & Kurma Purana",
            "hi": "२. लिंग पुराण, श्रीमद्भागवतम् और कूर्म पुराण"
          },
          "body": {
            "en": "In the Linga Purana (Chapter 7), Vishnu witnesses the infinite pillar of light (Jyotirlinga) with deep reverence. In the Srimad Bhagavatam (Chapter 8), Shiva drinks the Kalakuta poison during Samudra Manthan with Vishnu's inspiration, and Lord Krishna visits Ujjain to worship Mahakala. And in the Kurma Purana (Chapter 9), Lord Vishnu Himself worships a Shivalinga as the symbol of the same Supreme Truth.",
            "hi": "लिंग पुराण (अध्याय ७) में अनंत ज्योतिर्लिंग का दर्शन, श्रीमद्भागवतम् (अध्याय ८) में समुद्र मंथन के कालकूट विष का पान व श्रीकृष्ण की शिव-पूजा, तथा कूर्म पुराण (अध्याय ९) में स्वयं भगवान विष्णु द्वारा शिवलिंग का पूजन — ये सभी शास्त्र एक ही सत्य की घोषणा करते हैं।"
          }
        },
        {
          "heading": {
            "en": "3. Hanuman and Krishna: Living Proofs in the Itihasas",
            "hi": "३. हनुमान और श्रीकृष्ण: इतिहास ग्रंथों के जीवंत प्रमाण"
          },
          "body": {
            "en": "In the Ramayana, Hanuman — revered as Rudra-amsha (an aspect of Shiva) — eternally serves Sri Rama, and Rama Himself consecrates the Shivalinga at Rameshwaram (Chapter 13). In the Mahabharata's Shanti Parva (Chapters 10 & 14), Krishna and Arjuna worship Shiva for the Pashupatastra, while Shiva praises Krishna as Supreme Vasudeva.",
            "hi": "रामायण में शिव के अंश हनुमान श्रीराम की सेवा करते हैं और स्वयं श्रीराम रामेश्वरम में शिवलिंग की स्थापना करते हैं (अध्याय १३)। महाभारत के शांति पर्व (अध्याय १० व १४) में कृष्ण शिव की और शिव कृष्ण की स्तुति करते हैं।"
          }
        }
      ],
      "relatedIds": [
        "art-guhasura-vamana-narratives",
        "art-iconography-ardhanarishwara-harihara"
      ],
      "bibliography": [
        "Shiva Mahapurana (Rudra Samhita), Vishnu Purana (Book 1), Linga Purana, Kurma Purana",
        "Srimad Bhagavatam (Skandha 8, 10, 12) & Mahabharata (Shanti Parva)",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 5–10, 13–14"
      ]
    },
    {
      "id": "art-guhasura-vamana-narratives",
      "category": "Sacred Stories",
      "categoryLabel": {
        "en": "Sacred Stories",
        "hi": "पवित्र कथाएँ"
      },
      "title": {
        "en": "Guhasura, Vamana Purana & Bhasmasura: Sacred Narratives of Oneness",
        "hi": "गुहासुर वध, वामन पुराण दर्शन और भस्मासुर-मोहिनी की पावन कथाएँ"
      },
      "summary": {
        "en": "In-depth study of Chapters 1, 1(B), and 12 of the manuscript — how divine lila repeatedly shatters the illusion of separation.",
        "hi": "पांडुलिपि के अध्याय १, १(ख) और १२ का गहन अध्ययन — कैसे दिव्य लीला बार-बार पृथकता के भ्रम को तोड़ती है।"
      },
      "readingTime": "7 min read",
      "manuscriptRef": "Part 1 & 4 • Chapters 1, 1(B) & 12",
      "image": "assets/images/stories/guhasura-vadh.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Guhasura's Boon and Redemption at Kudalur",
            "hi": "१. गुहासुर का वरदान और कुडलूर संगम पर मोक्ष"
          },
          "body": {
            "en": "Ruling Guharanya in Karnataka, Guhasura obtained Brahma's boon that neither Shiva nor Vishnu could slay him individually. By manifesting as the unified Harihara at the confluence of the Tungabhadra and Haridra rivers, the Lord bypassed the boon of division, vanquished Guhasura's tyranny, and granted his dying wish that the land be sanctified as 'Harihar'.",
            "hi": "कर्नाटक के गुहारण्य में गुहासुर ने शिव और विष्णु को अलग मानकर ब्रह्मा जी से वरदान लिया। तुंगभद्रा और हरिद्रा के संगम पर हरिहर रूप में प्रकट होकर भगवान ने न केवल उसका अंत किया, बल्कि उसके अहंकार को गलाकर मोक्ष दिया और उस भूमि को 'हरिहर' नाम से पावन किया।"
          }
        },
        {
          "heading": {
            "en": "2. Vamana Purana: Dissolving the Sages' Debate",
            "hi": "२. वामन पुराण: जब ऋषियों का विवाद दर्शन में पिघल गया"
          },
          "body": {
            "en": "In the Vamana Purana (Chapter 1B), when sages debated who was superior between Hari and Hara, the Lord revealed a single seamless body — Shiva on the right, Vishnu on the left — proclaiming 'Yo Harih sa tu vai Rudro yo Rudrah sa Janardanah'. Worship of one while harboring malice toward the other was declared hollow.",
            "hi": "वामन पुराण (अध्याय १ख) में जब ऋषियों में श्रेष्ठता का विवाद उठा, तब भगवान ने संयुक्त दर्शन देकर घोषित किया — 'यो हरिः स तु वै रुद्रो यो रुद्रः स जनार्दनः।' एक की पूजा करते हुए दूसरे से द्वेष रखना निष्फल बताया गया।"
          }
        },
        {
          "heading": {
            "en": "3. Bhasmasura and Mohini: Protective Grace in Action",
            "hi": "३. भस्मासुर और मोहिनी: प्रेम और प्रज्ञा की लीला"
          },
          "body": {
            "en": "In Chapter 12, when Bhasmasura tried to use Shiva's own boon against Him, Vishnu assumed the enchanting form of Mohini and led Bhasmasura into placing his hand upon his own head in dance. Where Shiva's innocent compassion grants, Vishnu's protective wisdom safeguards.",
            "hi": "अध्याय १२ में जब भस्मासुर ने शिव के ही वरदान का प्रयोग शिव पर करना चाहा, तब विष्णु ने मोहिनी रूप धारण कर नृत्य की मुद्रा से महादेव की रक्षा की।"
          }
        }
      ],
      "relatedIds": [
        "art-puranic-proofs-of-unity",
        "art-temples-of-harihara"
      ],
      "bibliography": [
        "Skanda Purana, Brahma Purana & Vamana Purana",
        "Harihareshwara Temple Sthala Purana",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 1, 1(B) & 12"
      ]
    },
    {
      "id": "art-iconography-ardhanarishwara-harihara",
      "category": "Divine Symbolism",
      "categoryLabel": {
        "en": "Divine Symbolism",
        "hi": "दिव्य प्रतीक विज्ञान"
      },
      "title": {
        "en": "The Sacred Iconography of Harihara: Every Attribute Decoded",
        "hi": "हरिहर स्वरूप का प्रतीक विज्ञान: जटा-मुकुट और त्रिशूल-चक्र का रहस्य"
      },
      "summary": {
        "en": "Why the classical murti of Harihara places Shiva on the right and Vishnu on the left, and how each ornament and weapon reveals a deeper spiritual truth.",
        "hi": "शास्त्रीय प्रतिमा विज्ञान में दाहिना अंग शिव और बायाँ अंग विष्णु क्यों है, तथा प्रत्येक आभूषण और शस्त्र का आध्यात्मिक अर्थ क्या है।"
      },
      "readingTime": "5 min read",
      "manuscriptRef": "Part 1 & 4 • Chapters 1, 1(B) & 11",
      "image": "assets/images/stories/harihara-cosmic-form.webp",
      "sections": [
        {
          "heading": {
            "en": "1. The Split Form: Deity's Perspective vs. Viewer's Perspective",
            "hi": "१. अर्ध-विभाजन: प्रतिमा शास्त्रीय और दर्शक दृष्टिकोण"
          },
          "body": {
            "en": "In classical Shilpa Shastra and Puranic descriptions (Chapters 1, 1B, and 11), the right half of the deity's body (Dakshinanga) is Hara (Shiva) and the left half (Vamanga) is Hari (Vishnu). In devotional art, artists sometimes orient Vishnu on the viewer's left and Shiva on the viewer's right (as in our temple doorway cover artwork) or Shiva on the viewer's left (representing the deity's own right side). In both depictions, the central vertical axis represents the Sushumna — the indivisible seam of pure Brahman.",
            "hi": "शिल्प शास्त्र और पुराणों (अध्याय १, १ख एवं ११) में विग्रह के दाहिने अंग में शिव और बाएँ अंग में विष्णु का वर्णन है। कलाकृतियों में कभी दर्शक के बाईं ओर विष्णु और दाईं ओर शिव (जैसे मुख्य द्वार चित्र में) अथवा विग्रह के दाहिने भाग के अनुसार अंकन होता है। दोनों ही स्थितियों में मध्य की स्वर्णिम रेखा अविभाज्य ब्रह्म-चेतना का प्रतीक है।"
          }
        },
        {
          "heading": {
            "en": "2. Complementary Symbols in One Body",
            "hi": "२. एक ही देह में पूरक प्रतीकों का संगम"
          },
          "body": {
            "en": "Every symbol on the Shiva side finds its partner on the Vishnu side: the matted locks (Jata) with Ganga and crescent moon meet the golden Kirit Mukut; sacred ash (Vibhuti) and tiger skin meet yellow silk (Pitambara) and the Vaijayanti garland; the Trishula and Damaru meet the Sudarshana Chakra and Panchajanya Shankha. Together they teach that inner detachment and outer dharma are one.",
            "hi": "जटाजूट और अर्धचंद्र के साथ किरीट मुकुट; भस्म और व्याघ्रचर्म के साथ पीताम्बर और वैजयंती माला; त्रिशूल और डमरू के साथ सुदर्शन चक्र और शंख — ये सभी प्रतीक सिखाते हैं कि आंतरिक वैराग्य और बाह्य धर्म-पालन एक ही जीवन के दो पहलू हैं।"
          }
        }
      ],
      "relatedIds": [
        "art-temples-of-harihara",
        "art-philosophical-foundations"
      ],
      "bibliography": [
        "T.A. Gopinatha Rao, 'Elements of Hindu Iconography'",
        "Vamana Purana & Skanda Purana",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 1, 1(B) & 11"
      ]
    },
    {
      "id": "art-temples-of-harihara",
      "category": "Temples and Traditions",
      "categoryLabel": {
        "en": "Temples and Traditions",
        "hi": "मंदिर एवं परंपराएँ"
      },
      "title": {
        "en": "Sacred Geography of Harihara: From Karnataka & Odisha to Jharkhand & Tamil Nadu",
        "hi": "हरिहर के पावन तीर्थ: कर्नाटक और ओडिशा से झारखंड और तमिलनाडु तक"
      },
      "summary": {
        "en": "Historical and liturgical survey of Harihareshwara Temple (Harihar), Lingaraja Temple (Bhubaneswar), Sankaranarayanar Temple (Tamil Nadu), Badami Caves, and Harihar Dham (Jharkhand).",
        "hi": "हरिहरेश्वर मंदिर (हरिहर), लिंगराज मंदिर (भुवनेश्वर), शंकरनारायणर मंदिर (तमिलनाडु), बादामी गुफाओं और हरिहर धाम (झारखंड) का ऐतिहासिक परिचय।"
      },
      "readingTime": "6 min read",
      "manuscriptRef": "Part 1 • Chapter 1 & Regional Pilgrimage Traditions",
      "image": "assets/images/temples/harihareshwara-harihar.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Harihareshwara Temple (Karnataka) & Badami Cave Reliefs",
            "hi": "१. हरिहरेश्वर मंदिर (कर्नाटक) और बादामी गुफा शिल्प"
          },
          "body": {
            "en": "In Davanagere district, Karnataka, at the confluence of the Tungabhadra and Haridra rivers, stands the 1223–1224 CE Hoysala soapstone temple of Sri Harihareshwara, commemorating the Guhasura legend. Earlier still in Karnataka, the late-6th-century (578 CE) Chalukya rock-cut caves at Badami preserve monumental stone reliefs of Harihara flanked by both Parvati-Nandi and Lakshmi-Garuda.",
            "hi": "कर्नाटक के दावणगेरे जिले में तुंगभद्रा और हरिद्रा नदियों के संगम पर १२२३–१२२४ ईस्वी का होयसल हरिहरेश्वर मंदिर स्थित है। इससे भी पूर्व छठी शताब्दी (५७८ ईस्वी) की बादामी गुफाओं में चालुक्य कालीन विशाल हरिहर पाषाण प्रतिमाएँ उकेरी गई हैं।"
          }
        },
        {
          "heading": {
            "en": "2. Lingaraja (Odisha), Sankarankovil (Tamil Nadu) & Harihar Dham (Jharkhand)",
            "hi": "२. लिंगराज (ओडिशा), शंकरनकोविल (तमिलनाडु) और हरिहर धाम (झारखंड)"
          },
          "body": {
            "en": "In Bhubaneswar's 11th-century Lingaraja Temple, the Svayambhu Linga is worshipped as Harihara with both Bilva and Tulsi leaves. In Tamil Nadu's 1022 CE Sankarankovil, the Adi Thapasu festival celebrates the vision of Sankaranarayana. And in Bagodar, Jharkhand, the modern (1988) 65-foot Shivalinga shrine of Harihar Dham carries the inclusive name of Harihara into contemporary pilgrimage.",
            "hi": "भुवनेश्वर के ११वीं सदी के लिंगराज मंदिर में बिल्वपत्र और तुलसी दल दोनों से हरिहर पूजा होती है। तमिलनाडु के शंकरनकोविल (१०२२ ईस्वी) में 'आदि तपसु' उत्सव मनाया जाता है, और झारखंड के बगोदर में ६५ फीट ऊँचे शिवलिंग वाला आधुनिक 'हरिहर धाम' (१९८८) आस्था का केंद्र है।"
          }
        }
      ],
      "relatedIds": [
        "art-guhasura-vamana-narratives",
        "art-iconography-ardhanarishwara-harihara"
      ],
      "bibliography": [
        "Archaeological Survey of India (ASI) Epigraphic & Monument Records",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapter 1"
      ]
    },
    {
      "id": "art-modern-misconceptions-sadhana",
      "category": "Common Questions",
      "categoryLabel": {
        "en": "Common Questions",
        "hi": "सामान्य प्रश्न एवं समाधान"
      },
      "title": {
        "en": "Why Did Sectarian Division Arise & How Can We Practice Unity Daily?",
        "hi": "सांप्रदायिक भ्रांतियाँ क्यों उत्पन्न हुईं और दैनिक पूजा में एकता कैसे लाएँ?"
      },
      "summary": {
        "en": "Addressing the most common questions seekers ask today — based on Chapters 17, 18, 19, and 20 of Manu Siddharth's manuscript.",
        "hi": "पांडुलिपि के अध्याय १७ से २० के आधार पर आधुनिक साधकों के सबसे महत्वपूर्ण प्रश्नों का सरल और व्यावहारिक समाधान।"
      },
      "readingTime": "6 min read",
      "manuscriptRef": "Part 5 & 6 • Chapters 17, 18, 19 & 20",
      "image": "assets/images/stories/vishnu-in-shiva-heart.webp",
      "sections": [
        {
          "heading": {
            "en": "1. Question: If Scriptures Teach Unity, Why Do Some People Debate Who Is Supreme?",
            "hi": "१. प्रश्न: यदि शास्त्र एकता सिखाते हैं, तो 'कौन बड़ा है' का विवाद कहाँ से आया?"
          },
          "body": {
            "en": "Chapter 17 explains three causes: (1) Incomplete reading — quoting verses from one chapter while ignoring chapters in the same Purana where Shiva praises Vishnu or Vishnu praises Shiva; (2) Historical sectarian politics under certain medieval patronage systems; and (3) The human ego's tendency to turn sweet devotion ('My beloved Lord is everything to me') into sectarian pride ('Other forms are inferior').",
            "hi": "अध्याय १७ इसके तीन कारण स्पष्ट करता है: (१) अपूर्ण अध्ययन — पुराणों को पूरा न पढ़कर केवल चुने हुए अंश पढ़ना; (२) मध्यकालीन इतिहास में राजकीय संरक्षण से जुड़ी सांप्रदायिक राजनीति; और (३) मानवीय अहंकार द्वारा 'मेरे इष्ट सर्वोच्च हैं' की सुंदर भावना को दूसरे रूपों के अनादर में बदल देना।"
          }
        },
        {
          "heading": {
            "en": "2. Question: How Can a Devotee Practice Harihara Unity at Home?",
            "hi": "२. प्रश्न: गृहस्थ साधक अपनी दैनिक पूजा में हरिहर भाव कैसे अपनाएँ?"
          },
          "body": {
            "en": "Chapter 18 recommends four gentle practices: (1) Greet each morning with both 'Om Namah Shivaya' and 'Om Namo Narayanaya'; (2) Hold reverence for Vishnu while worshipping Shiva, and reverence for Shiva while worshipping Vishnu; (3) Raise children free from sectarian prejudice; and (4) When anyone starts an argument over who is greater, smile peacefully and share the story of Harihara.",
            "hi": "अध्याय १८ चार सरल सूत्र देता है: (१) प्रातः स्मरण में 'ॐ नमः शिवाय' और 'ॐ नमो नारायणाय' दोनों का जप करें; (२) शिव-पूजा में विष्णु के प्रति और विष्णु-पूजा में शिव के प्रति श्रद्धा रखें; (३) बच्चों को बचपन से ही दोनों की एकता सिखाएँ; और (४) किसी भी श्रेष्ठता के विवाद में शांति से कहें — 'दोनों एक हैं।'"
          }
        },
        {
          "heading": {
            "en": "3. The Universal Message: Realizing Ekam in the Heart",
            "hi": "३. सार्वभौमिक संदेश: हृदय में 'एकम्' की अनुभूति"
          },
          "body": {
            "en": "As Chapters 19 and 20 conclude, seeing the unity of Shiva and Vishnu trains our eyes to see harmony across all seeming opposites — in family, society, and humanity. The day no wall remains between Shiva and Vishnu in your heart, that day your devotion is complete.",
            "hi": "अध्याय १९ और २० के अनुसार, जब हम शिव और विष्णु में एकता देखना सीखते हैं, तब हम परिवार, समाज और मानवता में भी सामंजस्य देखना सीखते हैं। जिस दिन हृदय में कोई दीवार नहीं रहती, उसी दिन भक्ति पूर्ण होती है।"
          }
        }
      ],
      "relatedIds": [
        "art-philosophical-foundations",
        "art-puranic-proofs-of-unity"
      ],
      "bibliography": [
        "Skanda Upanishad, Verses 8–9",
        "Manu Siddharth, 'Harihara: Do Naam, Ek Pran', Chapters 17, 18, 19 & 20"
      ]
    }
  ]
};

  async function fetchJsonWithFallback(key, relativePath) {
    if (window.location.protocol === 'file:') {
      return EMBEDDED_FALLBACK[key];
    }
    try {
      const res = await fetch(relativePath, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (_) {
      return EMBEDDED_FALLBACK[key];
    }
  }

  async function loadAllContent(basePrefix) {
    const prefix = basePrefix || '';
    const [site, shlokas, stories, videos, temples, quizzes, articles] = await Promise.all([
      fetchJsonWithFallback('site', prefix + 'data/site.json'),
      fetchJsonWithFallback('shlokas', prefix + 'data/shlokas.json'),
      fetchJsonWithFallback('stories', prefix + 'data/stories.json'),
      fetchJsonWithFallback('videos', prefix + 'data/videos.json'),
      fetchJsonWithFallback('temples', prefix + 'data/temples.json'),
      fetchJsonWithFallback('quizzes', prefix + 'data/quizzes.json'),
      fetchJsonWithFallback('articles', prefix + 'data/articles.json')
    ]);

    return { site, shlokas, stories, videos, temples, quizzes, articles };
  }

  window.HARIHARA.EMBEDDED_FALLBACK = EMBEDDED_FALLBACK;
  window.HARIHARA.loadAllContent = loadAllContent;
})();
