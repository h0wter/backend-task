import { DataTypes, Model } from "sequelize";

import db from "../db.js";

class Profile extends Model {}

const model = Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isIn: {
          args: [["male", "female"]],
          msg: "State must be 'male' or 'female'",
        },
      },
    },
  },
  {
    sequelize: db,
    tableName: "profiles",
  }
);

export default model;
