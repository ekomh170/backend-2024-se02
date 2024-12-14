/**
 * TODO: Refactor string ke ES6 Template Literals
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`); // Menggunakan Template Literals
};

/**
 * TODO: Refactor callback ke Promise
 * Fungsi untuk download file menggunakan Promise
 * @returns {Promise<string>} - Promise yang mengembalikan nama file
 */
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result); // Resolusi Promise menggantikan callback
    }, 3000);
  });
};

/**
 * TODO: Refactor penggunaan Async Await
 * Fungsi utama menggunakan Async/Await untuk menjalankan proses download
 */
const main = async () => {
  console.log("Memulai proses download...");
  const result = await download(); // Menunggu hasil Promise dari download
  showDownload(result);
};

// Menjalankan fungsi utama
main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */