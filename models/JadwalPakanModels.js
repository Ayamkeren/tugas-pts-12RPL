import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const JadwalPakan = db.define(
  "JadwalPakan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_pemberian: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jumlah_pakan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "jadwalpakan",
  }
);

export default JadwalPakan;
