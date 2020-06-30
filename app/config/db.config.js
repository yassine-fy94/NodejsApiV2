const env = require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  },
  // logging: false
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Temoinage = require('../model/TemoignageModel.js')(sequelize, Sequelize);
db.user_fos = require('../model/user_fosModel.js')(sequelize, Sequelize);
db.companies = require('../model/companiesModel.js')(sequelize, Sequelize);
db.Emploi = require('../model/EmploiModel.js')(sequelize, Sequelize);
 
module.exports = db;