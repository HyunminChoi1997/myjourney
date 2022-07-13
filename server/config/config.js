require("dotenv").config();
{
  module.exports = {
    development: {
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: "myjourneydb",
      host: process.env.MYSQL_HOST,
      dialect: "mysql",
      port: process.env.MYSQL_PORT,
      timezone: "+09:00",
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql",
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
    },
  };
}
