const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust this path to your DB config

const Favorite = sequelize.define('Favorite', {
    name: { type: DataTypes.STRING, allowNull: false },
    branchType: { type: DataTypes.STRING },
    deliveryStatus: { type: DataTypes.STRING },
    district: { type: DataTypes.STRING },
    region: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
});

module.exports = Favorite; // Ensure this is exported correctly
