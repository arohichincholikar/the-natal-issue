const SIGN_MAP = {
  ari: 'aries',
  tau: 'taurus',
  gem: 'gemini',
  can: 'cancer',
  leo: 'leo',
  vir: 'virgo',
  lib: 'libra',
  sco: 'scorpio',
  sag: 'sagittarius',
  cap: 'capricorn',
  aqu: 'aquarius',
  pis: 'pisces',

  aries: 'aries',
  taurus: 'taurus',
  gemini: 'gemini',
  cancer: 'cancer',
  virgo: 'virgo',
  libra: 'libra',
  scorpio: 'scorpio',
  sagittarius: 'sagittarius',
  capricorn: 'capricorn',
  aquarius: 'aquarius',
  pisces: 'pisces'
};

function normaliseSign(value) {
  if (!value) return null;

  const sign = String(value)
    .trim()
    .toLowerCase();

  return SIGN_MAP[sign] || null;
}

function findPlanet(planets, name) {
  if (!Array.isArray(planets)) return null;

  const target = name.toLowerCase();

  return planets.find((planet) => {
    const planetName = String(
      planet.id ||
      planet.name ||
      planet.planet ||
      planet.body ||
      ''
    ).toLowerCase();

    return planetName === target;
  });
}

function extractSign(item) {
  if (!item) return null;

  return normaliseSign(
    item.sign_id ||
    item.sign ||
    item.zodiac_sign ||
    item.zodiacSign ||
    item.sign_name ||
    item.signName
  );
}

function extractChart(apiData) {
  const data =
    apiData?.data ||
    apiData?.result ||
    apiData;

  const planets = Array.isArray(data?.planets)
    ? data.planets
    : [];

  const sun = findPlanet(planets, 'sun');
  const moon = findPlanet(planets, 'moon');
  const mercury = findPlanet(planets, 'mercury');
  const venus = findPlanet(planets, 'venus');
  const mars = findPlanet(planets, 'mars');
  const jupiter = findPlanet(planets, 'jupiter');

  const ascendant =
    data?.angles_details?.asc ||
    data?.ascendant ||
    data?.rising ||
    null;

  const chart = {
    sun: extractSign(sun),
    moon: extractSign(moon),
    rising: extractSign(ascendant),
    mercury: extractSign(mercury),
    venus: extractSign(venus),
    mars: extractSign(mars),
    jupiter: extractSign(jupiter)
  };

  const missing = Object.entries(chart)
    .filter(([, sign]) => !sign)
    .map(([placement]) => placement);

  if (missing.length) {
    console.error(
      'Could not extract placements:',
      missing
    );

    console.log(
      'Raw FreeAstroAPI response:',
      JSON.stringify(apiData, null, 2)
    );

    throw new Error(
      `Could not read these placements: ${missing.join(', ')}`
    );
  }

  return chart;
}

export async function calculateBirthChart({
  date,
  time,
  city
}) {
  if (!date || !time || !city) {
    throw new Error(
      'Please enter your birth date, exact time and city.'
    );
  }

  const [year, month, day] = date
    .split('-')
    .map(Number);

  const [hour, minute] = time
    .split(':')
    .map(Number);

  const response = await fetch(
    '/.netlify/functions/natal-chart',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        year,
        month,
        day,
        hour,
        minute,
        city: city.trim()
      })
    }
  );

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      'The astrology service returned an invalid response.'
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.error ||
      data?.message ||
      'Could not calculate your chart.'
    );
  }

  return {
    ...extractChart(data),
    meta: {
      date,
      time,
      locationLabel: city.trim()
    }
  };
}