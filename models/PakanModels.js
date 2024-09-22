import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import JadwalPakan from "./JadwalPakanModels.js";

const Pakan = db.define(
  "Pakan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_pakan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_pakan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah_stok: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga_pakan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pakan",
  }
);

JadwalPakan.hasMany(Pakan, { foreignKey: "id_JadwalPakan" });
Pakan.belongsTo(JadwalPakan, { foreignKey: "id_JadwalPakan" });

export default Pakan;
