const el = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

/** Draws a minimal hairline chart-wheel SVG, tinted per sign accent. */
function chartWheelSVG(accentA, accentB, accentC) {
  return `
  <svg viewBox="0 0 200 200" class="wheel-svg" aria-hidden="true">
    <circle cx="100" cy="100" r="92" class="wheel-ring" />
    <circle cx="100" cy="100" r="66" class="wheel-ring wheel-ring--soft" />
    <circle cx="100" cy="100" r="40" class="wheel-ring wheel-ring--soft" />
    ${Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30) * (Math.PI / 180);
      const x1 = 100 + 40 * Math.cos(angle);
      const y1 = 100 + 40 * Math.sin(angle);
      const x2 = 100 + 92 * Math.cos(angle);
      const y2 = 100 + 92 * Math.sin(angle);
      return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" class="wheel-tick" />`;
    }).join('')}
    <circle cx="100" cy="30" r="5" fill="${accentA}" />
    <circle cx="169" cy="135" r="5" fill="${accentB}" />
    <circle cx="31" cy="135" r="5" fill="${accentC}" />
  </svg>`;
}

/** Decorative barcode-style rule for the cover, encoding nothing — pure editorial texture. */
function barcodeSVG(seedNumber) {
  const bars = [];
  let seed = seedNumber || 1234;
  for (let i = 0; i < 40; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const width = 1 + (seed % 100) / 100 * 2.5;
    bars.push(`<rect x="${i * 4}" y="0" width="${width.toFixed(2)}" height="28" />`);
  }
  return `<svg viewBox="0 0 160 28" class="barcode-svg" aria-hidden="true">${bars.join('')}</svg>`;
}

export function renderCover(issue) {
  const root = document.getElementById('cover');
  root.innerHTML = '';

  const kicker = el('p', 'cover-kicker', `VOL. I &mdash; NO. ${issue.issueNumber}`);
  const title = el('h1', 'cover-title', 'The Natal Issue');
  const sub = el('p', 'cover-birthline', issue.birthLine);

  const linesWrap = el('div', 'cover-lines');
  [
    { label: 'Sun', value: issue.coverLines.sun },
    { label: 'Moon', value: issue.coverLines.moon },
    { label: 'Rising', value: issue.coverLines.rising }
  ].forEach((item) => {
    const line = el('div', 'cover-line');
    line.innerHTML = `<span class="cover-line-label">${item.label} in</span><span class="cover-line-value">${item.value}</span>`;
    linesWrap.appendChild(line);
  });

  const quote = el(
    'p',
    'cover-quote',
    `&ldquo;${sentenceCase(quoteFor(issue))}&rdquo;`
  );

  const wheel = el('div', 'cover-wheel');
  const accents = issue.bigThree.map((p) => p.accent);
  wheel.innerHTML = chartWheelSVG(accents[0], accents[1], accents[2]);

  const barcode = el('div', 'cover-barcode');
  barcode.innerHTML = barcodeSVG(parseInt(issue.issueNumber, 10));

  const top = el('div', 'cover-top');
  top.append(kicker, el('span', 'cover-imprint', 'EDITORIAL ASTROLOGY'));

  const body = el('div', 'cover-body');
  body.append(title, sub, linesWrap, quote);

  const frame = el('div', 'cover-frame');
  frame.append(top, body, wheel, barcode);
  root.appendChild(frame);
}

function quoteFor(issue) {
  const sunEssence = issue.bigThree.find((p) => p.key === 'sun').essence;
  const moonEssence = issue.bigThree.find((p) => p.key === 'moon').essence;
  return `${sunEssence}, with the private heart of ${moonEssence}`;
}

function sentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function renderBigThree(issue) {
  const root = document.getElementById('big-three-content');
  root.innerHTML = '';

  issue.bigThree.forEach((p, i) => {
    const card = el('article', 'placement-card reveal');
    card.style.setProperty('--accent', p.accent);
    card.innerHTML = `
      <div class="placement-index">${String(i + 1).padStart(2, '0')}</div>
      <div class="placement-glyphs">
        <span class="placement-planet-symbol">${p.symbol}</span>
        <span class="placement-sign-symbol">${p.signSymbol}</span>
      </div>
      <p class="placement-tagline">${p.tagline}</p>
      <h3 class="placement-heading">${p.planetLabel} in ${p.signLabel}</h3>
      <p class="placement-explain">${p.explain}</p>
      <p class="placement-essence">You are ${p.essence} &mdash; ${p.traits.join(', ')}.</p>
    `;
    root.appendChild(card);
  });
}

export function renderAlignments(issue) {
  const root = document.getElementById('alignments-content');
  root.innerHTML = '';

  issue.alignments.forEach((p) => {
    const row = el('div', 'alignment-row reveal');
    row.style.setProperty('--accent', p.accent);
    row.innerHTML = `
      <div class="alignment-symbol">${p.symbol}</div>
      <div class="alignment-text">
        <p class="alignment-tagline">${p.tagline}</p>
        <h4 class="alignment-heading">${p.planetLabel} in ${p.signLabel}</h4>
        <p class="alignment-explain">${p.explain} For you, that shows up as ${p.essence}.</p>
      </div>
    `;
    root.appendChild(row);
  });
}

export function renderStyle(issue) {
  const root = document.getElementById('style-content');
  const s = issue.style;
  root.innerHTML = `
    <p class="section-lead reveal">Ruled by Venus in ${s.leadSign}, your instinct runs toward:</p>
    <div class="style-grid">
      <div class="style-block reveal">
        <span class="style-block-label">Palette</span>
        <ul class="style-list">${s.palette.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
      <div class="style-block reveal">
        <span class="style-block-label">Fabrics</span>
        <ul class="style-list">${s.fabrics.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
      <div class="style-block reveal">
        <span class="style-block-label">Jewellery</span>
        <ul class="style-list">${s.jewellery.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
    </div>
    <p class="style-signature reveal">${s.signature}</p>
    <p class="section-lead reveal">${s.presentation}</p>
  `;
}

export function renderComfort(issue) {
  const root = document.getElementById('comfort-content');
  const c = issue.comfort;
  root.innerHTML = `
    <p class="section-lead reveal">Your Moon in ${c.leadSign} knows exactly what soothes it:</p>
    <div class="comfort-grid">
      <div class="comfort-block reveal">
        <span class="comfort-block-label">To eat</span>
        <ul class="comfort-list">${c.foods.map((f) => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="comfort-block reveal">
        <span class="comfort-block-label">To drink</span>
        <ul class="comfort-list">${c.drinks.map((f) => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="comfort-block reveal">
        <span class="comfort-block-label">Café, ideally</span>
        <p class="comfort-prose">${c.cafe}</p>
      </div>
      <div class="comfort-block reveal">
        <span class="comfort-block-label">Scent</span>
        <p class="comfort-prose">${c.scent}</p>
      </div>
      <div class="comfort-block reveal">
        <span class="comfort-block-label">Flower</span>
        <p class="comfort-prose">${c.flower}</p>
      </div>
      <div class="comfort-block reveal">
        <span class="comfort-block-label">Unwinds by</span>
        <p class="comfort-prose">${c.hobby}</p>
      </div>
    </div>
  `;
}

export function renderPlaylist(issue) {
  const root = document.getElementById('playlist-content');
  const p = issue.playlist;
  root.innerHTML = `
    <p class="section-lead reveal">Venus in ${p.leadSign} sets the mood: ${p.mood}.</p>
    <ol class="track-list reveal">
      ${p.tracks.map((t, i) => `
        <li class="track-row">
          <span class="track-index">${String(i + 1).padStart(2, '0')}</span>
          <span class="track-title">${t.title}</span>
          <span class="track-artist">${t.artist}</span>
        </li>
      `).join('')}
    </ol>
    <p class="track-note reveal">A starting point &mdash; open your own player and build outward from here.</p>
  `;
}

export function renderHome(issue) {
  const root = document.getElementById('home-content');
  const h = issue.home;
  root.innerHTML = `
    <p class="section-lead reveal">${h.aesthetic}</p>
    <p class="home-description reveal">${h.description}</p>
    <div class="home-materials reveal">
      <span class="comfort-block-label">Materials</span>
      <ul class="style-list">${h.materials.map((m) => `<li>${m}</li>`).join('')}</ul>
    </div>
    <p class="section-lead reveal home-accent-note">${h.accentNote}</p>
  `;
}

export function renderWeekend(issue) {
  const root = document.getElementById('weekend-content');
  const w = issue.weekend;
  root.innerHTML = `
    <div class="weekend-timeline">
      <div class="weekend-block reveal">
        <span class="weekend-time">Morning</span>
        <span class="weekend-driver">Rising in ${w.risingLabel}</span>
        <p class="weekend-text">You ${w.morning}.</p>
      </div>
      <div class="weekend-block reveal">
        <span class="weekend-time">Afternoon</span>
        <span class="weekend-driver">Sun in ${w.sunLabel}</span>
        <p class="weekend-text">You ${w.day}.</p>
      </div>
      <div class="weekend-block reveal">
        <span class="weekend-time">Evening</span>
        <span class="weekend-driver">Moon in ${w.moonLabel}</span>
        <p class="weekend-text">You ${w.evening}.</p>
      </div>
    </div>
  `;
}

export function renderIssue(issue) {
  renderCover(issue);
  renderBigThree(issue);
  renderAlignments(issue);
  renderStyle(issue);
  renderComfort(issue);
  renderPlaylist(issue);
  renderHome(issue);
  renderWeekend(issue);
}

/** IntersectionObserver-driven fade/rise reveal for elements with .reveal */
export function initScrollReveal(root = document) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  root.querySelectorAll('.reveal:not(.is-visible)').forEach((node) => observer.observe(node));
}

/** Smooth-scrolls to a section id, accounting for the fixed running header. */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerOffset = 88;
  const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}