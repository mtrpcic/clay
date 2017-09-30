import bcrypt from 'bcrypt-nodejs';

export default function (sequelize, Sequelize) {
  const Player = sequelize.define('player', {
    id: {
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.VIRTUAL,
      set(val) {
        this.setDataValue('password', val);
        this.setDataValue('password_hash', bcrypt.hashSync(val));
      },
      // get() { return null; },
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error('Please choose a longer password');
          }
        },
      },
    },
    password_hash: Sequelize.STRING,
  });

  Player.authenticate = (username, password) => {
    const player = Player.where({ username });
    bcrypt.compare(password, player.password_hash, (err, success) => success);
  };

  Player.prototype.generatePasswordHash = () => {
    /* if(this.hasOwnProperty('password')){
        return true;
    } */
  };

  return Player;
}
