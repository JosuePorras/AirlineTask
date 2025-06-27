import { DataTypes } from 'sequelize';
import db from '../db.js';


const Passenger =db.define('Passenger',{
    ID_PASSENGER: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      DSC_PASSPORT: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
      },
      DSC_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      DSC_SEC_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      DSC_BIRTHDAY: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      DSC_EMAIL: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      DSC_PHONE_NUMBER: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },{
        timestamps: false,
        tableName: 'tsit_passenger',
});

export default Passenger;