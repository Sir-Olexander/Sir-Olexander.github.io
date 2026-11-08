# sir-olexander.github.io

Alexandre Belostecinic's research site: https://sir-olexander.github.io

Plain HTML and CSS. There is no build step: edit a file, push, and GitHub Pages publishes it within a minute.

## Permanent addresses (never rename these)

These paths are linked from emails, papers and citations. Redesign freely, but keep them working:

| Address | What it is |
|---|---|
| `/` | home |
| `/research/` | list of all studies |
| `/research/<slug>/` | one study per folder; the slug never changes once published |
| `/research/weight-space-programming-claude/` | the Sparks of Weight-Space Programming replication (cited in its BibTeX) |
| `/about/` | about and contact |

If a page must move, leave a small page at the old address that redirects to the new one (a
`<meta http-equiv="refresh" content="0; url=/new/path/">` page), so old links keep working.

## Adding a study

1. Copy `research/weight-space-programming-claude/index.html` into a new folder `research/<new-slug>/index.html`
   and replace the article.
2. Add an entry to the top of the lists in `research/index.html` and `index.html`.

## Files

- `assets/site.css`: all styles (same visual language as the portfolio).
- `assets/site.js`: mobile menu only.
- `404.html`: shown for unknown addresses.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.
