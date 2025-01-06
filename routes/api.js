const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const StudentController = require('../controllers/StudentController');

// Rute Selamat Datang
router.get('/', (req, res) => {
    console.log('Rute GET / diakses');
    res.send('Selamat datang di API Mahasiswa');
});

// Rute Mengambil Semua Mahasiswa
router.get('/students', async (req, res) => {
    console.log('Rute GET /students diakses');
    await StudentController.index(req, res);
});

// Rute Menambahkan Mahasiswa Baru
router.post(
    '/students',
    [
        check('nama', 'Nama harus diisi').not().isEmpty(),
        check('nim', 'NIM harus diisi').not().isEmpty(),
        check('email', 'Email harus valid').isEmail(),
        check('jurusan', 'Jurusan harus diisi').not().isEmpty(),
    ],
    async (req, res) => {
        console.log('Rute POST /students diakses');
        await StudentController.store(req, res);
    }
);

// Rute Memperbarui Data Mahasiswa
router.put(
    '/students/:id',
    [
        check('nama', 'Nama harus diisi').optional().not().isEmpty(),
        check('nim', 'NIM harus diisi').optional().not().isEmpty(),
        check('email', 'Email harus valid').optional().isEmail(),
        check('jurusan', 'Jurusan harus diisi').optional().not().isEmpty(),
    ],
    async (req, res) => {
        console.log(`Rute PUT /students/${req.params.id} diakses`);
        await StudentController.update(req, res);
    }
);

// Rute Menghapus Mahasiswa
router.delete('/students/:id', async (req, res) => {
    console.log(`Rute DELETE /students/${req.params.id} diakses`);
    await StudentController.destroy(req, res);
});

module.exports = router;
