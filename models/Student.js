const db = require('../config/database');

class Student {
    /**
     * Mengambil semua data mahasiswa
     */
    static all() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM students';
            db.query(sql, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }

    /**
     * Menambahkan data mahasiswa baru
     */
    static create({ nama, nim, email, jurusan }) {
        return new Promise((resolve, reject) => {
            const sql =
                'INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)';
            const values = [nama, nim, email, jurusan];

            db.query(sql, values, (err, results) => {
                if (err) {
                    return reject(err);
                }
                const newId = results.insertId;
                const selectSql = 'SELECT * FROM students WHERE id = ?';
                db.query(selectSql, [newId], (err, results) => {
                    if (err) reject(err);
                    else resolve(results[0]);
                });
            });
        });
    }

    /**
     * Mencari mahasiswa berdasarkan ID
     */
    static findById(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM students WHERE id = ?';
            db.query(sql, [id], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }

    /**
     * Memperbarui data mahasiswa
     */
    static update(id, { nama, nim, email, jurusan }) {
        return new Promise((resolve, reject) => {
            const sql =
                'UPDATE students SET nama = ?, nim = ?, email = ?, jurusan = ? WHERE id = ?';
            const values = [nama, nim, email, jurusan, id];

            db.query(sql, values, (err, results) => {
                if (err) {
                    return reject(err);
                }
                this.findById(id)
                    .then((student) => resolve(student))
                    .catch((err) => reject(err));
            });
        });
    }

    /**
     * Menghapus data mahasiswa
     */
    static destroy(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM students WHERE id = ?';
            db.query(sql, [id], (err, results) => {
                if (err) reject(err);
                else
                    resolve({
                        message: `Mahasiswa dengan id ${id} berhasil dihapus.`,
                    });
            });
        });
    }
}

module.exports = Student;
