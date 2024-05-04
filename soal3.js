function konversiWaktu(waktu24Jam) {
  // Memisahkan jam dan menit dari waktu dalam format 24 jam
  let jam = parseInt(waktu24Jam.substring(0, 2));
  let menit = waktu24Jam.substring(3);

  // Menentukan apakah itu AM atau PM
  let satuan = jam >= 12 ? "PM" : "AM";

  // Mengonversi jam ke format 12 jam
  if (jam > 12) {
    jam = jam - 12;
  } else if (jam === 0) {
    jam = 12; // 12:00 AM
  }

  // Mengembalikan waktu dalam format 12 jam
  return jam + ":" + menit + " " + satuan;
}

let waktu24Jam = "16:30"; // Waktu keberangkatan dalam format 24 jam (4:30 PM)
let waktu12Jam = konversiWaktu(waktu24Jam);
console.log("Waktu dalam format 24 jam : " + waktu24Jam);
console.log("Waktu keberangkatan (AM/PM) : " + waktu12Jam);
