import bcrypt from 'bcrypt-nodejs';

export default function (sequelize, Sequelize) {
    const Player = sequelize.define('player', {
        id: {
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            validate: {
                unique: true,
                allowNull: false
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                unique: true,
                allowNull: true,
                isEmail: true
            }
        },
        password: {
            type: Sequelize.VIRTUAL,
            set: function (val) {
                this.setDataValue('password', val);
                this.setDataValue('password_hash', bcrypt.hashSync(val, 10));
            },
            get: function(){
                return null;
            },
            validate: {
                isLongEnough: function (val) {
                    if (val.length < 7) {
                        throw new Error("Please choose a longer password");
                    }
                }
            }
        },
        password_hash: Sequelize.STRING
    });
    
    Player.authenticate = function(username, password) {
        let player = Player.where({username: username});
        bcrypt.compare(password, player.password_hash, (err, success) => {
            return success;
        });
    }
    
    Player.prototype.generatePasswordHash = function(){
        /*if(this.hasOwnProperty('password')){
            return true;
        }*/
    }

    return Player;
}