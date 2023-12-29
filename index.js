// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(4000, () => {
  console.log('Server is running on port 3000');
});
