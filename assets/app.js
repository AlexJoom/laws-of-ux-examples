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
