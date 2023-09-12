const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from backend 1!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
