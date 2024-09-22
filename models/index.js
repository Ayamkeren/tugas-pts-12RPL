import db from "../utils/connection.js";
import Hewan from "./HewanModels.js";
import Karyawan from "./KaryawanModels.js";
import Pakan from "./PakanModels.js";
import Pembeli from "./PembeliModels.js";
import Produksi from "./ProduksiModels.js";
import Pesanan from "./PesananModels.js";
import Supplier from "./SupplierModels.js";
import JadwalPakan from "./JadwalPakanModels.js";
import transportasi from "./TransportasiModels.js";
import Penjualan from "./PenjualanModels.js";

await db.sync({ alter: true });

await Hewan.sync();
await Karyawan.sync();
await Pakan.sync();
await Pembeli.sync();
await Produksi.sync();
await Pesanan.sync();
await Supplier.sync();
await JadwalPakan.sync();
await transportasi.sync();
await Penjualan.sync();
