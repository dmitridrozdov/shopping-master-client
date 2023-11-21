// netlify/functions/proxy.js
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const url = event.queryStringParameters.url;

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing URL parameter' }),
      };
    }

    const response = await fetch(url, { method: 'GET', mode: 'cors' });
    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    console.error('Error in proxy:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};