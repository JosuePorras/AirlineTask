import { DataTypes } from 'sequelize';
import db from '../db.js';


const UserType =db.define('UserType',{
    ID_USERTYPE: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      DSC_NAME: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },{
        timestamps: false,
        tableName: 'tsim_userType',
});



const User =db.define('User',{
    ID_USER: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      DSC_USERNAME: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      DSC_PASSWORD:{
        type: DataTypes.STRING(255),
        allowNull: true
      },
      ID_USERTYPE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: UserType,
          key: 'ID_USERTYPE'
        }
      },
      ID_STATUS:{
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },{
        timestamps: false,
        tableName: 'tsit_user',
});


User.belongsTo(UserType, {
    foreignKey: 'ID_USERTYPE',
    targetKey: 'ID_USERTYPE'
  });

  UserType.hasMany(User, {
    foreignKey: 'ID_USERTYPE',
    sourceKey: 'ID_USERTYPE'
  });




