// Send this JWT in the Authorization header to Bright.
import axios from 'axios';
import fs from 'fs';

// Define your JWT token here
const jwt = fs.readFileSync('jwt_token.txt', 'utf-8').trim();

async function fetchData() {
  try {
    const response = await axios.get(
      'https://uat.bright.gov.sg/api/external/providers/hello-world',
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          Accept: 'application/json',
        },
      }
    );
    console.log('Response from Bright:', response.data);
  } catch (error) {
    console.error('Error occurred:', error.response ? error.response.data : error.message);
  }
}

fetchData();

// Connectivity Test:
// https://uat.bright.gov.sg/api/external/providers/hello-world