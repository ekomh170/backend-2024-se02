/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 * @hint - Gunakan Destructuring Object
 */

// Menggunakan destructuring untuk mengimpor semua method dari fruitController
const { index, store, update, destroy } = require('./controller/fruitController');

/**
 * Fungsi main tidak perlu diubah
 * Jalankan program: node app.js
 */
const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  index(); // Tampilkan lagi setelah menambahkan Pisang
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(0, "Kelapa");
  index(); // Tampilkan lagi setelah update
  console.log("\nMethod destroy - Menghapus data 0");
  destroy(0);
  index(); // Tampilkan lagi setelah menghapus
};

main();
