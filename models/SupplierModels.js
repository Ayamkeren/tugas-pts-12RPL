import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Supplier = db.define(
  "Supplier",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_supplier: {
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
    jenis_pakan: {
			type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "supplier",
  }
);

export default Supplier;
