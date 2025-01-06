// Import express dan router
const express = require('express');
const router = require('./routes/api'); // Pastikan path sesuai dengan struktur proyek Anda

// Buat objek express
const app = express();

// Menggunakan middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan router dengan prefix '/'
app.use('/', router);

// Menambahkan middleware untuk menangani error (opsional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Terjadi kesalahan pada server',
        error: err.message,
    });
});

// Mendefinisikan port, bisa melalui environment variable atau default 3000
const PORT = process.env.PORT || 3000;

// Menjalankan server dan menampilkan pesan di console
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
