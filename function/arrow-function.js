const hitungLuasLingkaran = (jariJari) => {
  const PHI = 3.14;
  const hasil = PHI * jariJari * jariJari;
  return hasil;
};

const hitungLuasLingkaran2 = (jariJari) => 3.14 * jariJari * jariJari;

console.log(hitungLuasLingkaran(5));
console.log(hitungLuasLingkaran2(10));
