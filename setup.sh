#!/bin/bash
echo "Installing dependancies.."
npm install
npm install jose
npm install axios

# Make it Executable: chmod +x setup.sh
# Run it            : ./setup.sh

# _________________________________________________________________________#

# Generate a 2048-bit RSA private key
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048

# Extract the public key from the private key
openssl rsa -in private.pem -pubout -out public.pem

# private.pem – This is your private key (keep this secure).
# public.pem – This is the public key (send this to OGP).



