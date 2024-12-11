const persiapan = () => {
  setTimeout(function () {
    console.log("Mempersiapkan Bahan ...");
  }, 3000);
};

const rebusAir = () => {
  setTimeout(function () {
    console.log("Merebus Air ...");
  }, 7000);
};

const masak = () => {
  setTimeout(function () {
    console.log("Memasak Mie ...");
    console.log("Selesai ...");
  }, 5000);
};

const main = () => {
  persiapan();
  rebusAir();
  masak();
};

main();
