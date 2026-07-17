// Before/After panel toggle, shared by every law page.
function showPanel(target) {
  document.querySelectorAll('.toggle [data-panel]').forEach((b) => {
    const active = b.dataset.panel === target;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.panel').forEach((p) => {
    p.hidden = !p.classList.contains('panel-' + target);
  });
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.toggle [data-panel]');
  if (btn) showPanel(btn.dataset.panel);
});

// Deep-link support: /laws/<law>.html#after opens directly on the improved version.
const initial = location.hash.slice(1);
if (initial === 'after' || initial === 'before') showPanel(initial);

// --- Learning progress, stored only in this browser (localStorage) ---

const LEARNED_KEY = 'laws-of-ux-learned';

function getLearned() {
  try { return new Set(JSON.parse(localStorage.getItem(LEARNED_KEY)) || []); }
  catch { return new Set(); }
}

function saveLearned(set) {
  try { localStorage.setItem(LEARNED_KEY, JSON.stringify([...set])); } catch {}
}

// Law page: the "Mark as learned" toggle
const learnBtn = document.querySelector('.learn-btn[data-law]');
if (learnBtn) {
  const slug = learnBtn.dataset.law;
  const render = () => {
    const done = getLearned().has(slug);
    learnBtn.classList.toggle('is-learned', done);
    learnBtn.textContent = done ? '✓ Learned' : 'Mark as learned';
  };
  learnBtn.addEventListener('click', () => {
    const set = getLearned();
    set.has(slug) ? set.delete(slug) : set.add(slug);
    saveLearned(set);
    render();
  });
  render();
}

// Index: learned badges, per-group counts, overall progress bar
if (document.querySelector('.law-group')) {
  const learned = getLearned();
  let total = 0, done = 0;
  document.querySelectorAll('.law-card').forEach((card) => {
    total += 1;
    const slug = card.getAttribute('href').replace('laws/', '').replace('.html', '');
    if (learned.has(slug)) { card.classList.add('learned'); done += 1; }
  });
  document.querySelectorAll('.law-group').forEach((group) => {
    const cards = group.querySelectorAll('.law-card');
    const n = group.querySelectorAll('.law-card.learned').length;
    group.querySelector('.group-count').textContent = `${n} / ${cards.length} learned`;
  });
  const fill = document.getElementById('progress-fill');
  const count = document.getElementById('progress-count');
  if (fill) fill.style.width = `${(done / total) * 100}%`;
  if (count) count.textContent = `${done} of ${total} laws learned`;
}
