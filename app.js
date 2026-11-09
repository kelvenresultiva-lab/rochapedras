'use strict';
/* Rocha Pedras: comportamento do template (entradas ao rolar, frase que acende, título que preenche, menu fixo, WhatsApp flutuante). */
const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;

// entradas ao rolar (texto, cards e fotos com cortina)
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -12% 0px'});
document.querySelectorAll('[data-reveal]').forEach(el => calmo ? el.classList.add('in') : io.observe(el));

// frase do "Sobre" acende palavra por palavra
const frase = document.querySelector('.js-frase');
frase.innerHTML = frase.textContent.trim().split(/\s+/).map(p => '<span class="pal">' + p + '</span>').join(' ');
const palavras = [...frase.querySelectorAll('.pal')];
const preenche = document.querySelector('.js-preenche');
const barra = document.querySelector('.progresso');
const paineis = [...document.querySelectorAll('.hero-paineis figure')];

// quanto do elemento já passou pela tela (0 a 1)
const avanco = (el, ini = .85, fim = .35) => {
  const r = el.getBoundingClientRect(), h = innerHeight;
  return Math.min(1, Math.max(0, (h * ini - r.top) / (h * (ini - fim) + r.height)));
};

const aoRolar = () => {
  const doc = document.documentElement;
  barra.style.transform = 'scaleX(' + (scrollY / (doc.scrollHeight - innerHeight) || 0) + ')';
  if (calmo) return;
  paineis.forEach(f => f.style.setProperty('--py', (scrollY * parseFloat(f.dataset.par) * -1) + 'px'));
  const n = Math.round(avanco(frase) * palavras.length);
  palavras.forEach((p, i) => p.classList.toggle('on', i < n));
  preenche.style.setProperty('--f', avanco(preenche, .9, .45).toFixed(3));
};
addEventListener('scroll', aoRolar, {passive: true});

// menu: fica sólido ao rolar, abre e fecha no celular, marca a seção atual
const topo = document.querySelector('.topo');
const menuBtn = topo.querySelector('.menu-btn');
const links = [...topo.querySelectorAll('.nav a')];
const solido = () => {
  topo.classList.toggle('solido', scrollY > 40);
  if (scrollY < innerHeight * .5) links.forEach(l => l.classList.remove('ativo'));
};
addEventListener('scroll', solido, {passive: true});
solido();
const fecha = () => { topo.classList.remove('aberto'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Abrir menu'); };
menuBtn.onclick = () => {
  const abrir = !topo.classList.contains('aberto');
  topo.classList.toggle('aberto', abrir);
  menuBtn.setAttribute('aria-expanded', String(abrir));
  menuBtn.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
};
links.forEach(a => a.addEventListener('click', fecha));
const ioMenu = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + e.target.id));
}), {rootMargin: '-45% 0px -50% 0px'});
links.forEach(a => { const alvo = document.querySelector(a.getAttribute('href')); if (alvo) ioMenu.observe(alvo); });
addEventListener('resize', aoRolar);
aoRolar();

(() => {
const foto = document.querySelector('.hero-foto-m'), wa = document.querySelector('.wa-float');
if (!foto || !wa || !('IntersectionObserver' in window)) return;
new IntersectionObserver(([e]) => wa.classList.toggle('longe', e.isIntersecting && getComputedStyle(foto).display !== 'none')).observe(foto);
})();
