function cekKetersediaanKursi(jumlahKursiDiminta, jumlahKursiTersedia) {
  if (jumlahKursiDiminta <= jumlahKursiTersedia) {
    return true; // Kursi tersedia
  } else {
    return false; // Kursi tidak tersedia
  }
}


let jumlahKursiDiminta = 15;
let jumlahKursiTersedia = 10;

if (cekKetersediaanKursi(jumlahKursiDiminta, jumlahKursiTersedia)) {
  console.log("Kursi tersedia. Anda dapat memesan tiket.");
} else {
  console.log("Maaf, kursi tidak tersedia. Silakan coba lagi dengan jumlah kursi yang lebih sedikit.");
}
