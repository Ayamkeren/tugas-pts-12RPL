import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Transportasi = db.define(
  "Transportasi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jenis_transportasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kapasitas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "transportasi",
  }
);

export default Transportasi;
