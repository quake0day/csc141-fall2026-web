# csc141-fall2026-web

WolfCode CSC 141 lecture site — static Astro site, deployed to Cloudflare
Pages, embedded inside WolfCode via a "📖 Open Lesson Notes" action.

## What's here

Built for **Chapter 1: Variables & Types** (3 lessons) as the prototype. The
shape generalizes to the other ~20 lessons in `../csc141-fall2026/ROADMAP.md`.

```
src/
  layouts/
    Site.astro           — header / footer / fonts / global frame
    Lecture.astro        — per-lesson scaffold (title, KC chips, prev/next)
  components/
    CodePlayground.astro — runnable Python via Pyodide (lazy-loaded from CDN)
    Quiz.astro           — multiple-choice with explain-on-click
    Callout.astro        — tip / warning / pitfall / note boxes
    KCBadge.astro        — knowledge-component chip
    LessonNav.astro      — prev / next at lecture bottom
  data/
    course.ts            — single source of truth for chapter / lesson metadata
  pages/
    index.astro          — course outline
    chapters/01-variables-types/
      index.astro        — chapter overview
      01-first-variable.astro
      02-types-int-float.astro
      03-strings-and-fstring.astro
```

## Develop

```bash
pnpm install
pnpm dev          # http://127.0.0.1:4321
```

## Build & deploy

```bash
pnpm build        # → dist/
npx wrangler pages deploy dist --project-name=csc141-fall2026
```

First deploy: `npx wrangler pages project create csc141-fall2026 --production-branch=main`.

Once live, the site is at `https://csc141-fall2026.pages.dev` (or your custom
domain). The WolfCode `OpenLessonNotes` action hardcodes this URL — override
at build time with `WOLFCODE_NOTES_BASE_URL=https://staging.example` to point
WolfCode at a staging site without recompiling the URL constant.

## How the playground works

Pyodide (`v0.27.2`) is loaded **on first Run click**, not on page load.

- Loaded from `cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js` (~5 MB total
  including the interpreter + stdlib).
- Cached by the browser; second lesson in the same session reuses the same
  global interpreter.
- `stdout` and `stderr` are captured via `setStdout({ batched })` and printed
  to the output pane below the editor.
- `Ctrl+Enter` while focused in the editor runs the code.
- `Tab` inserts 4 spaces (not focus-next).

For complex lessons that need pandas / pytest / packages not in Pyodide's
default stdlib, fall back to a server sandbox by overriding the
`<CodePlayground>` to POST to `wolfcode-bff` instead. (Stub the swap with a
new `sandbox` prop; not implemented in this prototype.)

## WolfCode integration

WolfCode's command palette gains:

> **WolfCode: Open Lesson Notes**

The handler reads the current lesson's entry `.py` path, derives the URL
(`chapters/<chapter-slug>/<file-stem>/`), and calls `cx.open_url(...)`. Today
that opens in the system default browser. Future iteration could embed
WebView2 inside a gpui panel for an in-IDE experience.

## Content credits

Adapted from two open-licensed CC works in `../book/`:

- **Think Python** — Allen Downey · CC BY-NC · greenteapress.com
- **Automate the Boring Stuff** — Al Sweigart · CC BY-NC-SA · automatetheboringstuff.com

Both books cover ch. 1's three topics (variables, numeric types, strings)
more deeply if you want to extend a lecture. Page references checked into
the lecture files where directly inspired by a passage.

## Adding a new lesson

1. Add a row to `src/data/course.ts` under the right chapter's `lessons` array.
2. Create `src/pages/chapters/<chapter-slug>/<lesson-slug>.astro` using
   `<Lecture chapterSlug=... lessonSlug=... hook=...>` as the wrapper.
3. Use `<CodePlayground code={...} />`, `<Callout tone="tip">`, and `<Quiz>`
   inside the slot.
4. `pnpm build` to verify; `pnpm dev` to preview.

The corresponding `*.lesson.json` + `*.py` + `*.test.py` files live in
`../csc141-fall2026/chapters/<chapter-slug>/lessons/` (separate repo, but
they share lesson-slug naming so the URL resolution Just Works).
