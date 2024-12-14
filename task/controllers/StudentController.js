// TODO 3: Import data students dari folder data/students.js
// code here

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    // code here
  }

  update(req, res) {
    // TODO 6: Update data students
    // code here
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    // code here
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
