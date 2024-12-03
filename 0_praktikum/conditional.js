const nilai = 90;
let grade = "";

if (nilai > 90) { 
  grade = "A";
} else if (nilai > 80) {
  grade = "B";
} else {
  grade = "C";
}

console.log(`Nilai anda: ${grade}`);
