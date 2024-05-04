function validasiNamaPenumpang(namaPenumpang) {
  // Menghapus spasi di awal dan akhir nama penumpang untuk memastikan tidak hanya terdiri dari spasi
  let namaTrimmed = namaPenumpang.trim();

  if (namaTrimmed === "") {
    return false; // Jika nama penumpang kosong setelah di-trim
  } else {
    return true; // Jika nama penumpang tidak kosong setelah di-trim
  }
}

let penumpang = " ";

console.log("Nama penumpang : " + (validasiNamaPenumpang(penumpang) ? penumpang : "Invalid input (Nama Penumpang Kososng)"));
