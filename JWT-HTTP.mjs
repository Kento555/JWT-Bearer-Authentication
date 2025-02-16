// Send this JWT in the Authorization header to Bright.
import axios from 'axios';

// Define your JWT token here
const jwt = 'jwt_token';

const response = await axios.get('https://uat.bright.gov.sg/api/external/providers/hello-world', {   //https://your-bright-endpoint.com/api
  headers: {
    Authorization: `Bearer ${jwt}`
  }
});

console.log('Response from Bright:', response.data);

// Connectivity Test:
// https://uat.bright.gov.sg/api/external/providers/hello-world