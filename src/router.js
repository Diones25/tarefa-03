const express = require('express');
const path = require('path');

const basePath = path.join(__dirname, 'templates');
const router = express.Router();

router.get('/sobre', (req, res) => {
  res.sendFile(`${basePath}/sobre.html`);
});

router.get('/contatos', (req, res) => {
  res.sendFile(`${basePath}/contatos.html`);
});

module.exports = router;