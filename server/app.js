const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;


app.use('/dist', express.static(path.join(path.dirname(__dirname), 'dist')));
app.use('/static', express.static(path.join(path.dirname(__dirname), 'dist/static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});