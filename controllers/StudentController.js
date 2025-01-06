const Student = require('../models/Student');
const { validationResult } = require('express-validator');

class StudentController {
    /**
     * Mengambil semua data mahasiswa
     */
    async index(req, res) {
        try {
            const students = await Student.all();

            if (students.length === 0) {
                return res.status(404).json({
                    message: 'Tidak ada data mahasiswa ditemukan',
                    data: [],
                });
            }

            res.json({
                message: 'Menampilkan semua mahasiswa',
                data: students,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan saat mengambil data mahasiswa',
                error: error.message,
            });
        }
    }

    /**
     * Menambahkan data mahasiswa baru
     */
    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validasi gagal',
                errors: errors.array(),
            });
        }

        try {
            const { nama, nim, email, jurusan } = req.body;
            const newStudent = await Student.create({
                nama,
                nim,
                email,
                jurusan,
            });

            res.status(201).json({
                message: 'Menambahkan data mahasiswa',
                data: newStudent,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan saat menambahkan data mahasiswa',
                error: error.message,
            });
        }
    }

    /**
     * Memperbarui data mahasiswa
     */
    async update(req, res) {
        const { id } = req.params;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validasi gagal',
                errors: errors.array(),
            });
        }

        try {
            const existingStudent = await Student.findById(id);
            if (!existingStudent) {
                return res.status(404).json({
                    message: `Mahasiswa dengan id ${id} tidak ditemukan`,
                });
            }

            const { nama, nim, email, jurusan } = req.body;
            const updatedData = {
                nama: nama || existingStudent.nama,
                nim: nim || existingStudent.nim,
                email: email || existingStudent.email,
                jurusan: jurusan || existingStudent.jurusan,
            };

            const updatedStudent = await Student.update(id, updatedData);

            res.json({
                message: `Mengedit mahasiswa id ${id}`,
                data: updatedStudent,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan saat mengedit data mahasiswa',
                error: error.message,
            });
        }
    }

    /**
     * Menghapus data mahasiswa
     */
    async destroy(req, res) {
        const { id } = req.params;

        try {
            const existingStudent = await Student.findById(id);
            if (!existingStudent) {
                return res.status(404).json({
                    message: `Mahasiswa dengan id ${id} tidak ditemukan`,
                });
            }

            await Student.destroy(id);
            res.json({
                message: `Menghapus mahasiswa id ${id}`,
                data: [],
            });
        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan saat menghapus data mahasiswa',
                error: error.message,
            });
        }
    }
}

module.exports = new StudentController();
