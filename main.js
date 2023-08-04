const express = require('express');
const Wallet = require('ethereumjs-wallet');
const app = express();
const port = 3000;

app.post('/wallet', (req, res) => {
  // Generate a new Ethereum wallet
  const wallet = Wallet.generate();

  const publicKey = wallet.getPublicKeyString();
  const address = wallet.getAddressString();

  // Respond with the public key and address
  res.json({
    publicKey: publicKey,
    address: address,
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
