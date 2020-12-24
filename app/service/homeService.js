const Service = require('egg').Service;
const db = require('../db');

class HomeService extends Service {
  async getOneUser() {
    const [user] = await db.test.raw(
      `select * from users limit 1;`
    );
    return user;
  }
}

module.exports = HomeService;