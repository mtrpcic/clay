import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'data/gamedata.sqlite'
});

export const Player = sequelize.define('player', {
    id: {
        type: Sequelize.UUIDV4,
        primaryKey: true
    },
    password_salt: Sequelize.STRING,
    password_hash: Sequelize.STRING,
    email: Sequelize.STRING,
    
});

export default sequelize;
