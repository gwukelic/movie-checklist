// variable to define the port and easily chance the number  
const port = process.env.PORT || 8000;

const path = require('path');
const express = require('express');
const app = express();

app
  .use(express.static(path.join(__dirname, 'dist/movie-checklist' )))
  .listen(port, () => console.log(`Express listening on port ${ port }`));