'use strict';
const mount = require('./lib/xlsx');
module.exports = app => {
  if (app.config.xlsx.app) mount(app);
};
