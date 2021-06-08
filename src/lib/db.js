const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

sequelize.authenticate()
    .then(() => console.log("Connected to database"))
    .catch(() => console.error("Failed to connect to database."));

const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address2: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            hasCorrectDigits(zip) {
                if(zip.length != 5 && zip.length != 9) {
                    throw new Error('Zip code must be 5 or 9 digits.');
                }
            }
        }
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: "US"
        }
    }
}, {
    freezeTableName: true
});

User.sync();
sequelize.sync();

module.exports.User = User;
