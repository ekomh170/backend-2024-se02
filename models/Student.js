// import database
const db = require('../config/database');

// membuat class Model Student
class Student {
    /**
     * Membuat method static all.
     */
    static all() {
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * from students';
            /**
             * Melakukan query menggunakan method query.
             * Menerima 2 params: query dan callback
             */
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data student yang baru diinsert.
     */
    static create({ nama, nim, email, jurusan }) {
        return new Promise((resolve, reject) => {
            const sql =
                'INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)';
            const values = [nama, nim, email, jurusan];

            db.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        id: results.insertId,
                        nama,
                        nim,
                        email,
                        jurusan,
                    });
                }
            });
        });
    }
}

// export class Student
module.exports = Student;
