// index.mjs
// Here’s how to generate the JWT:

import { readFile, writeFile } from 'fs/promises';  // Add writeFile import
import { importPKCS8, SignJWT } from 'jose';

try {
// Load RSA private key
const privateKeyText = await readFile('./werkdone-private_key.pem', 'utf8');

// Convert to a format compatible with jose
const privateKey = await importPKCS8(privateKeyText, 'RS256');

// JWT Payload and Metadata
const jwt = await new SignJWT({})
  .setProtectedHeader({ alg: 'RS256' })      // Set algorithm
  .setIssuer('bright')          // Issuer (from OGP) issuerProvidedByOGP
  .setSubject('sp-werkdone')        // Subject (from OGP) subjectProvidedByOGP
  .setIssuedAt()                             // Current timestamp (iat)
  .setExpirationTime('2000 minutes')            // Valid for 5 minutes
  .sign(privateKey);                         // Sign with RSA private key

console.log('Your JWT:', jwt);

// Save JWT to a file
await writeFile('./jwt_token.txt', jwt, 'utf8');
console.log('JWT saved to jwt_token.txt');
}catch (error){
console.error('Error generating or saving JWT:', error);
}