'use strict';
const mount = require('./lib/xlsx');
module.exports = agent => {
  if (agent.config.xlsx.agent) mount(agent);
};
