const env = process.env.NODE_ENV;

const envStr = env ? env.trim() : 'LOCAL';

module.exports = require('./config.local');
// if (envStr === 'LOCAL') {
//   module.exports = require('./config.local');
// } else if (envStr === 'DEV') {
//   module.exports = require('./config.local');
// } else if (envStr === 'TEST') {
//   module.exports = require('./config.local');
// } else if (envStr === 'PROD') {
//   module.exports = require('./config.local');
// }