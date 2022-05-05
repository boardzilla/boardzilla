const log = require('loglevel');

if (process.env.NODE_ENV === 'production') {
  log.setLevel('info');
} else {
  log.setLevel('debug');
}

module.exports = log;
