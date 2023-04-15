const path = require('path');
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Do I need this?
// const { User, Thought } = require('./models')

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now Listening! localhost:${PORT}`);
  });
});