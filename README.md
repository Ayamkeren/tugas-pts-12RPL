# Sistem Manajemen Peternakan

Sistem ini dirancang untuk memudahkan memanajemen sebuah peternakan, Mendukung fungsi utama dari sebuah peternakan hingga meliputi manajemen hewan dan lainnya.

# Struktur Database

Database Manajemen Peternakan terdiri dari 10 tabel sebagai berikut:

1. **Hewan**

   - Menyimpan informasi tentang hewan ternak di peternakan.
   - Atribut: `id`, `jenis_Hewan`, `tanggal_Lahir`, `berat_hewan`, `kesehatan_Hewan`.

2. **Karyawan**

   - Menyimpan informasi tentang karyawan yang bekerja di peternakan.
   - Atribut: `id`, `nama_karyawan`, `password`, `email`.

3. **Pakan**

   - Mengelola data pakan yang diberikan ke hewan.
   - Atribut: `id`, `nama_pakan`, `jenis_pakan`, `jumlah_stock`, `harga_pakan`.

4. **Pembeli**

   - Menyimpan informasi tentang pembeli hasil produksi peternakan.
   - Atribut: `id`, `nama_pembeli`, `alamat`, `no_telepon`.

5. **Penjualan**

   - Mengelola penjualan hasil produksi peternakan.
   - Atribut: `id`, `jenis_hewan`, `tanggal_penjualan`, `jumlah_perunit`, `jumlah_terjual`.

6. **Pesanan**

   - Mengelola pesanan pembeli atas produk peternakan.
   - Atribut: `id`, `tanggal_pesanan`, `total_harga`.

7. **Jadwal Pakan**

   - Mencatat kapan dan berapa banyak pakan yang diberikan kepada hewan.
   - Atribut: `id`, `tanggal_pemberian`, `jumlah_pakan`.

8. **Produksi**

   - Mencatat hasil produksi hewan (susu, daging, telur, dll.)
   - Atribut: `id`, `jenis_produk`, `tanggal_produksi`, `jumlah_produksi`.

9. **Supplier**

   - Menyimpan data tentang pemasok pakan ternak.
   - Atribut: `id`, `nama_supplier`, `alamat`, `no_telepon`, `jenis_pakan`.

10. **Transportasi**
    - Mengelola data tentang transportasi untuk distribusi produk peternakan.
    - Atribut: `id`, `jenis_transportasi`, `kapasitas`.

## Relasi Antartabel

- **Hewan** memiliki banyak **JadwalPakan**.
- **Hewan** memiliki banyak **Produksi** dan **Transportasi**.
- **Pakan** memiliki banyak **JadwalPakan**.
- **Supplier** memiliki banyak **Pakan**.
- **Karyawan** memiliki banyak **Produksi** dan **JadwalPakan**.
- **Produksi** memiliki banyak **Pesanan**.
- **Pesanan** memiliki banyak **Pembeli**.
- **Pembeli** memiliki banyak **Penjualan**.
- **Penjualan** memiliki banyak **Transportasi**.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan buat pull request.

---

Silahkan gunakan sesuai kemauan
