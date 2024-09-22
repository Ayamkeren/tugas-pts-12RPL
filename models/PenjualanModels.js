import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Penjualan = db.define(
  "Penjualan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jenis_hewan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_penjualan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jumlah_perunit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah_terjual: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "penjualan",
  }
);

export default Penjualan;
