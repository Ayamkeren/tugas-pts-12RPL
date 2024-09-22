import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import JadwalPakan from "./JadwalPakanModels.js";
import Karyawan from "./KaryawanModels.js";
import Pakan from "./PakanModels.js";
import Pembeli from "./PembeliModels.js";
import Penjualan from "./PenjualanModels.js";
import Pesanan from "./PesananModels.js";
import Produksi from "./ProduksiModels.js";
import Supplier from "./SupplierModels.js";
import Transportasi from "./TransportasiModels.js";

const Hewan = db.define(
  "Hewan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jenis_Hewan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    berat_Hewan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kesehatan_Hewan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "hewan",
  }
);

// Produksi.belongsTo(Hewan, { foreignKey: "id_Hewan" });


Hewan.hasMany(JadwalPakan, { foreignKey: "id_Hewan" });
JadwalPakan.belongsTo(Hewan, { foreignKey: "id_Hewan" });

Karyawan.hasMany(Produksi, { foreignKey: "id_Karyawan" });
Produksi.belongsTo(Karyawan, { foreignKey: "id_Karyawan" });

Supplier.hasMany(Pakan, { foreignKey: "id_Supplier" });
Pakan.belongsTo(Supplier, { foreignKey: "id_Supplier" });

Karyawan.hasMany(JadwalPakan, { foreignKey: "id_Karyawan" });
JadwalPakan.belongsTo(Karyawan, { foreignKey: "id_Karyawan" });

Produksi.hasMany(Pesanan, { foreignKey: "id_Pesanan" });
Pesanan.belongsTo(Produksi, { foreignKey: "id_Pesanan" });

Pesanan.hasMany(Pembeli, { foreignKey: "id_Pesanan" });
Pembeli.belongsTo(Pesanan, { foreignKey: "id_Pesanan" });

Pesanan.hasMany(Penjualan, { foreignKey:  "id_Pesanan" });
Penjualan.belongsTo(Pesanan, { foreignKey: "id_Pesanan" });

Penjualan.hasMany(Transportasi,  { foreignKey: "id_Penjualan" });
Transportasi.belongsTo(Penjualan, { foreignKey: "id_Penjualan" });

Hewan.hasMany(Produksi, {foreignKey:  "id_Hewan"});
Produksi.belongsTo(Hewan, {foreignKey:  "id_Hewan"});

Hewan.hasMany(Transportasi, {foreignKey:   "id_Hewan"});
Transportasi.belongsTo(Hewan, {foreignKey:   "id_Hewan"});

export default Hewan;
