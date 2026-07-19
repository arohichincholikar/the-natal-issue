export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        error: 'Method not allowed'
      }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    const birthData = await request.json();

    const requiredFields = [
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'city'
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        birthData[field] === undefined ||
        birthData[field] === ''
    );

    if (missingFields.length) {
      return new Response(
        JSON.stringify({
          error: `Missing fields: ${missingFields.join(', ')}`
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const apiResponse = await fetch(
      'https://api.freeastroapi.com/api/v1/natal/calculate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.FREE_ASTRO_API_KEY
        },
        body: JSON.stringify({
          year: Number(birthData.year),
          month: Number(birthData.month),
          day: Number(birthData.day),
          hour: Number(birthData.hour),
          minute: Number(birthData.minute),
          city: birthData.city
        })
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return new Response(
        JSON.stringify({
          error:
            data.message ||
            data.error ||
            'The astrology service could not calculate the chart.'
        }),
        {
          status: apiResponse.status,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Natal chart error:', error);

    return new Response(
      JSON.stringify({
        error: 'Unable to calculate the birth chart.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};