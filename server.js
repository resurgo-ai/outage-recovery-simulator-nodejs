// Simple stand-alone server
const app = require('./app');
const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server
