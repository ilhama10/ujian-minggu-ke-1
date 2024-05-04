let pesananTiket = [];

function tambahPesanan(namaPenumpang, jumlahTiket, totalHarga) {
  let pesanan = {
    namaPenumpang: namaPenumpang,
    jumlahTiket: jumlahTiket,
    totalHarga: totalHarga,
  };
  pesananTiket.push(pesanan);
}

function tampilkanDetailPesanan() {
  console.log("Detail Pesanan Tiket:");
  pesananTiket.forEach(function (pesanan, index) {
    console.log("Pesanan ke-" + (index + 1) + ":");
    console.log("Nama Penumpang: " + pesanan.namaPenumpang);
    console.log("Jumlah Tiket: " + pesanan.jumlahTiket);
    console.log("Total Harga: Rp. " + pesanan.totalHarga);
  });
}

tambahPesanan("ilham", 3, 150000);
tambahPesanan("loki", 2, 100000);

tampilkanDetailPesanan();
