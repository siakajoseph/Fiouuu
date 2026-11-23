const intro = document.querySelector('.logo-intro');
const introLogo = intro?.querySelector('img');
const brandLogo = document.querySelector('.brand img');
const finishIntro = () => {
  document.body.classList.remove('intro-active');
  intro?.classList.add('finished');
  window.setTimeout(() => intro?.remove(), 320);
};
if (intro && introLogo && brandLogo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const arrival = introLogo.animate([
    { opacity: 0, transform: 'translateX(-120vw) skewX(-10deg)', filter: 'blur(12px)' },
    { opacity: 1, offset: .72, transform: 'translateX(3vw) skewX(2deg)', filter: 'blur(1px)' },
    { opacity: 1, transform: 'translateX(0) skewX(0)', filter: 'blur(0)' }
  ], { duration: 620, easing: 'cubic-bezier(.12,.82,.22,1)', fill: 'forwards' });
  arrival.finished.then(() => new Promise(resolve => window.setTimeout(resolve, 280))).then(() => {
    const from = introLogo.getBoundingClientRect();
    const to = brandLogo.getBoundingClientRect();
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const scale = to.width / from.width;
    return introLogo.animate([
      { transform: 'translate(0,0) scale(1)' },
      { transform: `translate(${dx}px,${dy}px) scale(${scale})` }
    ], { duration: 520, easing: 'cubic-bezier(.65,0,.2,1)', fill: 'forwards' }).finished;
  }).then(finishIntro).catch(finishIntro);
} else {
  finishIntro();
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';
});
