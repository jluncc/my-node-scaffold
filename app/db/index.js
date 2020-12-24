const config = require('../config');
const knex = require('knex');

const test = knex({
  client: 'mysql',
  connection: config.db.testDB,
});

module.exports = {
  test
}
