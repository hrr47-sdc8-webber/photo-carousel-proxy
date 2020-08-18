const express = require('express');

const app = express();
const port = 4000;

app.use('/:id', express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});