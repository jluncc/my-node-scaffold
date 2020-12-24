'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.homeService.getOneUser();
    ctx.body = 'user:' + user;
  }
}

module.exports = HomeController;
