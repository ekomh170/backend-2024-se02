/**
 * Membuat fungsi download
 * @returns {object} Promise
 */
const download = () => {
  /**
   * Promise dibuat menggunakan class Promise.
   * Promise menerima callback function/executor.
   * Executor menerima 2 params: resolve dan reject.
   * resolve dipanggil jika proses berhasil.
   * reject dipanggil jika proses gagal.
   */
  return new Promise((resolve, reject) => {
    const status = true;

    setTimeout(() => {
      if (status) {
        resolve("Download Selesai");
      } else {
        reject("Download Gagal");
      }
    }, 5000);
  });
};

/**
 * .then menangkap hasil resolve
 * .catch menangkap hasil reject
 */
download()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
