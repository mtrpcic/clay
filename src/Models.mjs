import Sequelize from 'sequelize';
import bcrypt from 'bcrypt-nodejs';

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

Player.authenticate = function(username, password) {
    let player = Player.where({username: username});
    bcrypt.compare(password, player.password_hash, (err, success) => {
        return success;
    })
}

Player.prototype.generatePasswordHash = function(){
    if(this.hasOwnProperty('password')){
        return true;
    }
}



export default sequelize;
