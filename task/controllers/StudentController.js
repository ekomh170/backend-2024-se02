// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  // TODO 4: Tampilkan data students
  index = (req, res) => {
    res.status(200).json({
      message: "Daftar mahasiswa berhasil diambil",
      data: students,
    });
  };

  // TODO 5: Tambahkan data students
  store = (req, res) => {
    const { nama, umur } = req.body;

    // Validasi input
    if (!nama || !umur) {
      return res.status(400).json({
        message: "Nama dan umur wajib diisi",
      });
    }

    const newStudent = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1, // Handle ID untuk list kosong
      nama,
      umur: parseInt(umur),
    };

    students.push(newStudent);

    res.status(201).json({
      message: "Data mahasiswa berhasil ditambahkan",
      data: newStudent,
    });
  };

  // TODO 6: Update data students
  update = (req, res) => {
    const { id } = req.params;
    const { nama, umur } = req.body;

    // Cari data mahasiswa berdasarkan ID
    const student = students.find((s) => s.id === parseInt(id));

    // Jika data tidak ditemukan
    if (!student) {
      return res.status(404).json({
        message: "Data mahasiswa tidak ditemukan",
      });
    }

    // Update nama dan umur
    if (nama) student.nama = nama;
    if (umur) student.umur = parseInt(umur);

    res.status(200).json({
      message: "Data mahasiswa berhasil diperbarui",
      data: student,
    });
  };

  // TODO 7: Hapus data students
  destroy = (req, res) => {
    const { id } = req.params;

    // Cari index mahasiswa berdasarkan ID
    const studentIndex = students.findIndex((s) => s.id === parseInt(id));

    // Jika data tidak ditemukan
    if (studentIndex === -1) {
      return res.status(404).json({
        message: "Data mahasiswa tidak ditemukan",
      });
    }

    // Hapus data dari array
    students.splice(studentIndex, 1);

    res.status(200).json({
      message: "Data mahasiswa berhasil dihapus",
    });
  };
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
