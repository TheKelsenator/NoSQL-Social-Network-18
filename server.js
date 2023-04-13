const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// TODO: Add middleware?

// TODO: Add an app.get?

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now Listening! ${PORT}`);
  });
});