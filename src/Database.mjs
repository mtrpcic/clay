import Sequelize from 'sequelize';
import Player from './models/Player.mjs';

const Database = {
  Sequelize,
  sequelize: new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'data/gamedata.sqlite',
  }),

  ensureValidSchema() {
    return this.sequelize.sync();
  },
};

// Import all models automatically
Database.Player = Player(Database.sequelize, Sequelize);

// Build model associations
Object.keys(Database).forEach((modelName) => {
  if (Database[modelName] && 'associate' in Database[modelName]) {
    Database[modelName].associate(Database);
  }
});

// export shared model container
export default Database;
