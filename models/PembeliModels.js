import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Pembeli = db.define(
  "Pembeli",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_pembeli: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_telepon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pembeli",
  }
);

export default Pembeli;
