const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get(path.join(publicPath, 'bundle.js'), (req, res) => {
  res.sendFile(path.join(publicPath, 'bundle.js'));
});

app.get(path.join(publicPath, 'vendor.js'), (req, res) => {
  res.sendFile(path.join(publicPath, 'vendor.js'));
});

app.get('*', (req, res) => {
  console.log(publicPath);
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
