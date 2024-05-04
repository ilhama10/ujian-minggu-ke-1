function hitungTotalHargaTiket(hargaTiket, jumlahTiket) {
  if (typeof hargaTiket !== "number" || typeof jumlahTiket !== "number" || hargaTiket < 0 || jumlahTiket < 0) {
    // Memastikan harga tiket dan jumlah tiket adalah angka positif
    return "Harga tiket dan jumlah tiket harus berupa angka positif";
  } else {
    return hargaTiket * jumlahTiket;
  }
}

// Contoh penggunaan fungsi:
let hargaPerTiket = 50000; // Harga per tiket
let jumlahTiketDibeli = 3; // Jumlah tiket yang dibeli

let totalHarga = hitungTotalHargaTiket(hargaPerTiket, jumlahTiketDibeli);
console.log("Harga Tiket : " + hargaPerTiket);
console.log("Jumlah Order Tiket : " + jumlahTiketDibeli);
console.log("Total harga tiket: Rp." + totalHarga);
