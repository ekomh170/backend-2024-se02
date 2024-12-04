// Membuat object literal
const user = {
    nama: "Eko Muchamad Haryono",
    umur: 21,
    alamat: "Kabupaten Bogor",
  };
  
  // Mengakses properti object
//   const nama = user.nama;
//   const umur = user.umur;
//   const alamat = user.alamat;
//   console.log(nama, umur, alamat);
  
  // Melakukan destructuring object
  const { nama, umur, alamat } = user;
  console.log(nama, umur, alamat);
  

  // Membuat array family
const family = ["Mikel", "Hannah", "Jonas", "Martha"];

// Mengakses elemen array berdasarkan indeks
// const husband = family[0];
// const wife = family[1];
// const firstChild = family[2];
// const lastChild = family[3];
// console.log(husband, wife, firstChild, lastChild);

// Array Destructuring
// Destructuring array berdasarkan posisi
const [husband, wife, firstChild, lastChild] = family;
console.log(husband, wife, firstChild, lastChild);
