import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Produksi = db.define(
  "Produksi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jenis_produk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_produksi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jumlah_produksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "produksi",
  }
);



export default Produksi;
