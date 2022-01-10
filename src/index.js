const express = require('express');
const app = express();
const path = require('path');

const basePath = path.join(__dirname, './templates');
const port = 5000;
const routes = require('./router');

app.use(express.static('public'))
app.use('/emp', routes);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
