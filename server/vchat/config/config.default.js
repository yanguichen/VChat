/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1554466149394_5625";

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: "mysql",
    password: "password",
    host: "localhost",
    port: 3306,
    dataset: "egg-sequelize-doc-default"
  };

  config.io = {
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: []
      }
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
