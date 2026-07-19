import { ZODIAC, PLANET_MEANINGS } from './zodiacdata.js';

function sign(key) {
  return ZODIAC[key];
}

function issueNumberFrom(meta) {
  const d = new Date(`${meta.date}T00:00:00`);
  const dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  return String(dayOfYear).padStart(4, '0');
}

function formatBirthLine(meta) {
  const d = new Date(`${meta.date}T${meta.time || '12:00'}:00`);
  const dateLabel = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const timeLabel = meta.time
    ? d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : 'time unknown';
  return `${dateLabel} — ${timeLabel} — ${meta.locationLabel}`;
}

/** Section 1: Your Big Three */
function buildBigThree(chart) {
  const entries = ['sun', 'moon', 'rising'].map((placementKey) => {
    const s = sign(chart[placementKey]);
    const meaning = PLANET_MEANINGS[placementKey];
    return {
      key: placementKey,
      planetLabel: meaning.label,
      symbol: meaning.symbol,
      tagline: meaning.tagline,
      explain: meaning.explain,
      signLabel: s.label,
      signSymbol: s.symbol,
      essence: s.essence,
      traits: s.traits,
      accent: s.accent
    };
  });
  return entries;
}

/** Section 2: Planetary Alignments (the "inner planets") */
function buildAlignments(chart) {
  return ['mercury', 'venus', 'mars', 'jupiter'].map((planetKey) => {
    const s = sign(chart[planetKey]);
    const meaning = PLANET_MEANINGS[planetKey];
    return {
      key: planetKey,
      planetLabel: meaning.label,
      symbol: meaning.symbol,
      tagline: meaning.tagline,
      explain: meaning.explain,
      signLabel: s.label,
      signSymbol: s.symbol,
      essence: s.essence,
      accent: s.accent
    };
  });
}

/** Section 3: Your Style — driven primarily by Venus (taste) with Rising (how it's worn/presented) */
function buildStyle(chart) {
  const venus = sign(chart.venus);
  const rising = sign(chart.rising);
  return {
    leadSign: venus.label,
    supportingSign: rising.label,
    palette: venus.style.palette,
    fabrics: venus.style.fabrics,
    jewellery: venus.style.jewellery,
    signature: venus.style.signature,
    presentation: `Filtered through your ${rising.label} rising, it reads less like a costume and more like ${rising.essence}.`
  };
}

/** Section 4: Your Comfort — driven by the Moon (emotional needs) */
function buildComfort(chart) {
  const moon = sign(chart.moon);
  return {
    leadSign: moon.label,
    ...moon.comfort
  };
}

/** Section 5: Your Playlist — driven by Venus (what you're drawn to) */
function buildPlaylist(chart) {
  const venus = sign(chart.venus);
  return {
    leadSign: venus.label,
    mood: venus.playlist.mood,
    tracks: venus.playlist.tracks
  };
}

/** Section 6: Your Home — driven by the Moon (inner sanctuary) with Sun as accent */
function buildHome(chart) {
  const moon = sign(chart.moon);
  const sun = sign(chart.sun);
  return {
    leadSign: moon.label,
    aesthetic: moon.home.aesthetic,
    description: moon.home.description,
    materials: moon.home.materials,
    accentNote: `A touch of ${sun.label} shows up too — ${sun.essence}, so the room always has one small element built for being seen.`
  };
}

/** Section 7: Your Weekend — a fictional day composed from Rising / Sun / Moon */
function buildWeekend(chart) {
  const rising = sign(chart.rising);
  const sunS = sign(chart.sun);
  const moonS = sign(chart.moon);
  return {
    risingLabel: rising.label,
    sunLabel: sunS.label,
    moonLabel: moonS.label,
    morning: rising.weekend.morning,
    day: sunS.weekend.day,
    evening: moonS.weekend.evening
  };
}

export function generateIssue(chart) {
  return {
    chart,
    issueNumber: issueNumberFrom(chart.meta),
    birthLine: formatBirthLine(chart.meta),
    coverLines: {
      sun: sign(chart.sun).label,
      moon: sign(chart.moon).label,
      rising: sign(chart.rising).label
    },
    bigThree: buildBigThree(chart),
    alignments: buildAlignments(chart),
    style: buildStyle(chart),
    comfort: buildComfort(chart),
    playlist: buildPlaylist(chart),
    home: buildHome(chart),
    weekend: buildWeekend(chart)
  };
}