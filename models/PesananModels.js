import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Pesanan = db.define(
  "Pesanan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_pesanan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pesanan",
  }
);

export default Pesanan;
