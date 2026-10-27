# HARIHARA (हरिहर) — Two Forms, One Divine Consciousness

> **“शिवाय विष्णुरूपाय शिवरूपाय विष्णवे। शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः॥”**
> *(Skanda Upanishad, Krishna Yajurveda, Verses 8–9)*

A production-ready, responsive, bilingual (**English & Hindi** with **Sanskrit** verses in original Devanagari) static digital sanctuary dedicated to **Lord Harihara (Shankaranarayana)** — celebrating the spiritual unity of **Lord Shiva** and **Lord Vishnu**.

Built strictly with **Semantic HTML5**, **Advanced CSS3**, and **Vanilla JavaScript (ES6+)** with zero frameworks, bundlers, or backend dependencies, and directly powered by the supplied manuscript **`HariHara_Unlocked_Hindi_final.docx`** (*“हरिहर: दो नाम, एक प्राण — शिव और विष्णु की दिव्य एकता”* by **Manu Siddharth**).

---

## 1. Local Preview Instructions

Because the website uses native ES6 JavaScript modules (`<script type="module">`) and fetches structured JSON from `/data/*.json` (with an automatic embedded fallback in `assets/js/content.js`), serve the folder over a lightweight local static HTTP server:

```bash
# Option A: Using Python 3
python -m http.server 8000
```

Then open **`http://localhost:8000`** in your browser.

- **First-Visit Doorway Experience:** On your first visit, the full-screen split cover (`images/bg_cover.png`) appears with **Lord Vishnu** on the left half and **Lord Shiva** on the right half. Clicking anywhere (or pressing `Enter`/`Space`) parts the two halves from the exact `50%` golden vertical seam like sacred temple doors.
- **Replaying the Entrance:** On subsequent visits, `localStorage` (`harihara_entered_v1`) remembers you and opens the homepage directly. Click **"Replay Intro" (`🚪`)** in the top header or **"Replay Divine Entrance"** in the footer (or visit `http://localhost:8000/?intro=1`) at any time to experience the doorway opening again.

---

## 2. Project Directory Structure

```text
Hari_Hara_Website/
├── index.html                        # Master homepage & all 8 interactive sections
├── README.md                         # Documentation & editorial customization guide
├── robots.txt                        # Search crawler configuration
├── sitemap.xml                       # Static XML sitemap
├── HariHara_Unlocked_Hindi_final.docx# Original manuscript in root
├── images/
│   └── bg_cover.png                  # Master full-resolution Harihara cover artwork
├── content/
│   └── manuscript/
│       ├── HariHara_Unlocked_Hindi_final.docx
│       └── manuscript_extracted.txt  # Extracted 454 paragraphs for reference
├── assets/
│   ├── css/
│   │   ├── main.css                  # Design tokens, layout, components
│   │   ├── animations.css            # 3D doors, mandala spin, particles, reduced-motion
│   │   └── responsive.css            # Tablet, mobile & landscape breakpoints
│   ├── js/
│   │   ├── main.js                   # App controller & section orchestrator
│   │   ├── intro.js                  # Center-opening doorway state machine
│   │   ├── animations.js             # IntersectionObserver, particles, Web Audio ambience
│   │   ├── content.js                # JSON data loader + embedded offline fallback
│   │   ├── gallery.js                # Video gallery & storyboard/embed modal player
│   │   ├── quiz.js                   # 8-category, 3-difficulty quiz engine
│   │   ├── search.js                 # Knowledge library search, highlight & reader
│   │   └── i18n.js                   # English / Hindi live bilingual translation engine
│   └── images/
│       ├── bg_cover.png
│       ├── harihara-cover.webp
│       ├── harihara-hero.webp
│       ├── stories/                  # Extracted manuscript illustrations (.jpeg & .webp)
│       ├── temples/                  # Temple visual cards (.webp)
│       └── videos/                   # Video gallery thumbnails (.webp)
├── data/
│   ├── site.json                     # Site metadata, philosophical traditions, reflections
│   ├── shlokas.json                  # Verified Sanskrit shlokas, translations & citations
│   ├── stories.json                  # 7 multi-scene story modules from the manuscript
│   ├── videos.json                   # Video gallery items (16:9 & 9:16 Reels)
│   ├── temples.json                  # Verified Harihara temples & historical notes
│   ├── quizzes.json                  # 20 verified bilingual quiz questions
│   └── articles.json                 # Knowledge library articles with TOC & bibliography
└── pages/
    ├── story.html                    # Standalone chapter reader (?id=...)
    ├── temple.html                   # Standalone temple profile reader (?id=...)
    └── article.html                  # Standalone knowledge library reader (?id=...)
```

---

## 3. Editorial & Content Customization Guide

> **Note on Updating `/data/*.json`:** If you edit any file in `/data/*.json` and want the offline fallback inside `assets/js/content.js` updated as well, run the one-line sync command or edit `/data/*.json` directly when serving via HTTP.

### How to Change the Opening Harihara Artwork
1. Replace `images/bg_cover.png` (and optionally `assets/images/harihara-cover.webp`) with your new artwork where Lord Vishnu is on the left 50% and Lord Shiva is on the right 50%.
2. The doorway split uses CSS `clip-path: inset(0 50% 0 0)` and `clip-path: inset(0 0 0 50%)` on `100vw x 100vh` layers with `background-position: center center; background-size: cover`, so the split always occurs at the exact vertical center (`50%`) without cropping misalignment.

### How to Add New Shlokas
Open `data/shlokas.json` and append an entry with:
- `id`, `category` (`upanishad`, `veda`, `purana`, `itihasa`), `sanskrit`, `transliteration`
- `literalTranslation`: `{ "en": "...", "hi": "..." }`
- `commentary`: `{ "en": "...", "hi": "..." }`
- `source`: `{ "scripture": { "en": "...", "hi": "..." }, "reference": "...", "status": "verified", "badge": { "en": "...", "hi": "..." } }`

### How to Add Video URLs (MP4, YouTube Shorts/Videos, Instagram Reels)
Open `data/videos.json`:
- For **YouTube**: set `"youtubeId": "YOUR_11_CHAR_YOUTUBE_ID"` (uses privacy-enhanced `youtube-nocookie.com`).
- For **Native MP4**: place your file in `assets/videos/` and set `"videoUrl": "assets/videos/your-video.mp4"`.
- For **Instagram Reels**: set `"instagramUrl": "https://www.instagram.com/reel/..."` and `"aspectRatio": "9:16"`.

### How to Add Stories from the Manuscript
Open `data/stories.json` and add a story object with `id`, `number`, `manuscriptChapter`, `title`, `subtitle`, `coverImage`, `sanskritQuote`, `introduction`, `scenes` (array of scene objects), `spiritualLesson`, and `sources`.

### How to Add Quizzes
Open `data/quizzes.json` and add a question object specifying `category` (one of the 8 categories), `difficulty` (`Beginner`, `Intermediate`, `Advanced`), `question` (`en`/`hi`), `options` (`en`/`hi` arrays of 4 strings), `correctIndex` (`0`–`3`), `explanation` (`en`/`hi`), and `citation` (`en`/`hi`).

### How to Add Temples
Open `data/temples.json` and add a shrine object with `id`, `name`, `location`, `period`, `architecture`, `deityAndIconography`, `historicalBackground`, `sacredTraditions`, `interestingFacts`, `image`, `mapUrl`, and `sources`.

### How to Change Colors or Typography
Open `assets/css/main.css` and edit the `:root` custom properties at the top of the file (`--bg-cosmic-navy`, `--shiva-blue-grey`, `--vishnu-royal-blue`, `--divine-gold`, `--sacred-saffron`, `--temple-ivory`, `--cosmic-violet`, and `--font-heading`, `--font-sanskrit`, `--font-hindi`, `--font-body`).

---

## 4. Static Deployment Steps

This website requires **no build step** and can be deployed directly to any static host:
- **GitHub Pages:** Push the repository to GitHub → Settings → Pages → Deploy from branch (`main`, root `/`).
- **Netlify / Cloudflare Pages / Vercel:** Drag-and-drop the project folder or connect your repository with **Build Command:** *(leave empty)* and **Publish Directory:** `.` (root).

