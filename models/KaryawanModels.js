import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import JadwalPakan from "./JadwalPakanModels.js";

const Karyawan = db.define(
  "Karyawan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_karyawan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "karyawan",
  }
);



export default Karyawan;
