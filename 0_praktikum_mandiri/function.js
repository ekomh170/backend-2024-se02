// Menghitung luas lingkaran dengan jari-jari 7
let jari = 7;
const phi = 3.14;
let hasil = phi * Math.pow(jari, 2);
// console.log(`Luas lingkaran dengan jari-jari 7: ${hasil}`);

// Menghitung luas lingkaran dengan jari-jari 9
jari = 9;
hasil = phi * Math.pow(jari, 2);
// console.log(`Luas lingkaran dengan jari-jari 9: ${hasil}`);

// Menghitung luas lingkaran dengan jari-jari 13
jari = 13;
hasil = phi * Math.pow(jari, 2);
// console.log(`Luas lingkaran dengan jari-jari 13: ${hasil}`);

// Menghitung luas lingkaran dengan jari-jari 25
jari = 25;
hasil = phi * Math.pow(jari, 2);
// console.log(`Luas lingkaran dengan jari-jari 25: ${hasil}`);


/**
 * Membuat fungsi menghitung luas lingkaran. Fungsi dibuat dengan gaya Function Declaration.
 * @param {number} radius - Jari-jari lingkaran.
 * @returns {number} area - Luas lingkaran.
 */
function calcAreaOfCircle(radius) {
    const PHI = 3.14;
    const area = PHI * radius * radius;
    return area;
  }
  
  // Memanggil fungsi dengan mengirimkan parameter
  console.log(calcAreaOfCircle(5));
  console.log(calcAreaOfCircle(6));
  
  /**
   * Membuat fungsi menghitung luas lingkaran. Fungsi dibuat dengan gaya Function Expression.
   * @param {number} radius - Jari-jari lingkaran.
   * @returns {number} area - Luas lingkaran.
   */
  const calcAreaOfCircleExpression = function (radius) {
    const PHI = 3.14;
    const area = PHI * radius * radius;
    return area;
  };
  
  // Memanggil fungsi dengan mengirimkan parameter
  console.log(calcAreaOfCircleExpression(5));
  console.log(calcAreaOfCircleExpression(6));

  
  /**
 * Membuat fungsi menghitung luas lingkaran.
 * Fungsi dibuat dengan gaya Arrow Function.
 * @param {number} radius - Jari-jari lingkaran.
 * @returns {number} area - Luas lingkaran.
 */
const calcAreaOfCircle = (radius) => {
    const PHI = 3.14;
    const area = PHI * radius * radius;
    return area;
  };
  
  // Memanggil fungsi dengan mengirimkan parameter
  console.log(calcAreaOfCircle(5));
  console.log(calcAreaOfCircle(6));
  
  /**
   * Membuat fungsi menghitung luas lingkaran.
   * Fungsi dibuat dengan gaya Arrow Function (versi singkat).
   * @param {number} radius - Jari-jari lingkaran.
   * @returns {number} area - Luas lingkaran.
   */
  const calcAreaOfCircleShort = (radius) => 3.14 * radius * radius;
  
  // Memanggil fungsi dengan mengirimkan parameter
  console.log(calcAreaOfCircleShort(5));
  console.log(calcAreaOfCircleShort(6));
  