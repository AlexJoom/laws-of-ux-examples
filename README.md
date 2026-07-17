# Laws of UX — Before & After Examples

A companion to [lawsofux.com](https://lawsofux.com/) for explaining design decisions to
non-designers. Each of the 21 core Laws of UX gets a small, realistic product demo shown twice:

- **✗ Before** — a plausible real-world UI that violates the law
- **✓ After** — the same product with the law applied

Every page also includes a "What changed" breakdown and a ready-made
**"Explaining it to stakeholders"** pitch in plain business language.

## Running it

It's a fully static site with zero dependencies and no build step:

```bash
# any static server works, e.g.:
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Structure

```
index.html          # gallery of all 21 laws
assets/style.css    # shared design system
assets/app.js       # the before/after toggle
laws/<slug>.html    # one self-contained page per law
```

Each law page is self-contained (demo-specific CSS/JS lives inline), so pages can be
shared or embedded individually. Some demos are interactive — e.g. the Doherty Threshold
search and Postel's Law phone input are live, so you can *feel* the difference.

## Credits &amp; license

This project is dual-licensed — see [LICENSE](LICENSE) for the full text:

- **Original work** (all HTML/CSS/JS, the before/after demos, and their copy) is
  open source under the **[MIT license](LICENSE)** — use it freely, attribution
  appreciated.
- **Laws of UX content** — the law names, one-sentence definitions, and the card
  illustrations (`assets/img/*.svg`, reproduced unmodified) — is by
  [Jon Yablonski](https://jonyablonski.com/) from [Laws of UX](https://lawsofux.com/)
  and remains under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/):
  non-commercial use only, no derivatives, attribution required. It is **not**
  covered by the MIT license and cannot be relicensed by this project.

Every page links back to the corresponding law on lawsofux.com.
