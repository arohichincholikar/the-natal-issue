const SIGN_NAMES = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces'
];

function normaliseSign(value) {
  if (!value) return null;

  const sign = String(value)
    .trim()
    .toLowerCase();

  return SIGN_NAMES.includes(sign)
    ? sign
    : null;
}

function findByName(items, names) {
  if (!Array.isArray(items)) return null;

  const acceptedNames = names.map(
    (name) => name.toLowerCase()
  );

  return items.find((item) => {
    const itemName = String(
      item.name ||
      item.planet ||
      item.body ||
      item.point ||
      ''
    ).toLowerCase();

    return acceptedNames.includes(itemName);
  });
}

function extractSign(item) {
  if (!item) return null;

  return normaliseSign(
    item.sign ||
    item.zodiac_sign ||
    item.zodiacSign ||
    item.sign_name ||
    item.signName
  );
}

function extractChart(apiData) {
  const data =
    apiData.data ||
    apiData.result ||
    apiData;

  const planets =
    data.planets ||
    data.planetary_positions ||
    data.planetaryPositions ||
    data.positions ||
    [];

  const angles =
    data.angles ||
    data.points ||
    data.houses ||
    [];

  const sun = findByName(
    planets,
    ['sun']
  );

  const moon = findByName(
    planets,
    ['moon']
  );

  const mercury = findByName(
    planets,
    ['mercury']
  );

  const venus = findByName(
    planets,
    ['venus']
  );

  const mars = findByName(
    planets,
    ['mars']
  );

  const jupiter = findByName(
    planets,
    ['jupiter']
  );

  const ascendant =
    data.ascendant ||
    data.rising ||
    findByName(
      angles,
      [
        'ascendant',
        'asc',
        'rising'
      ]
    );

  const chart = {
    sun: extractSign(sun),
    moon: extractSign(moon),
    rising:
      normaliseSign(
        typeof ascendant === 'string'
          ? ascendant
          : null
      ) ||
      extractSign(ascendant),
    mercury: extractSign(mercury),
    venus: extractSign(venus),
    mars: extractSign(mars),
    jupiter: extractSign(jupiter)
  };

  const missing = Object.entries(chart)
    .filter(([, sign]) => !sign)
    .map(([planet]) => planet);

  if (missing.length) {
    console.log(
      'Raw FreeAstroAPI response:',
      apiData
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error ||
      'Could not calculate your chart.'
    );
  }

  return extractChart(data);
}