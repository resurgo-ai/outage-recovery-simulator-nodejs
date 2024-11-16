const express = require('express');
const yaml = require('js-yaml');
const fs = require('node:fs');
const winston = require('winston');
const { format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const app = express();
const routes = require('./app/routes');

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level} - ${message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DDTHH:mm:ssZ' }),
    myFormat
  ),
  transports: [
    new transports.File({ filename: 'app.log', level: 'info' }),
    new transports.Console()
  ]
});

// Load configuration
const config = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
app.set('config', config);

// Set up logging
app.use((req, res, next) => {
  req.log_error = '';
  res.on('finish', () => {
    const message = `${req.method} ${req.path} ${res.statusCode} - ${req.log_error}`;
    res.statusCode < 499 ? logger.info(message) : logger.error(message);
  });
  next();
});

app.use(express.json()); // for parsing application/json

app.use('/', routes); // Use the defined routes

// Error handling middleware
app.use((err, req, res, next) => {
  const lines = err.stack.split('\n');

  // A naive filter to trim the stack down to app calls only
  const filteredStack = lines.filter(line => !line.includes('node_modules')).join("\n");

  req.log_error = filteredStack;

  if (res.headersSent) {
    return next(err)
  }

  res.status(500).json({ error: 'An internal server error occurred' });
});

module.exports = app
