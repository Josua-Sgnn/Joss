###. Penjelasan Pengerjaan

**A. Form Input**

Membuat form untuk memasukkan nama peserta menggunakan elemen HTML `<form>`, `<label>`, dan `<input>`. Atribut `required` digunakan agar input wajib diisi.

**B. Tambah Peserta**

Menggunakan event `submit` untuk menangani pengiriman form. Nama peserta diambil menggunakan `FormData`, kemudian `trim()` digunakan untuk menghilangkan spasi di awal dan akhir serta memeriksa input kosong.

Data peserta disimpan dalam array menggunakan `peserta.push()`. Setiap peserta mendapatkan ID yang berbeda melalui penghitung `berikutnya`.

**C. Render Peserta**

Fungsi `render()` digunakan untuk menampilkan data peserta ke halaman. Elemen HTML dibuat menggunakan `document.createElement()` dan nama peserta dimasukkan menggunakan `textContent`.

**D. Tombol Hapus**

Setiap peserta memiliki tombol Hapus yang dibuat menggunakan `createElement("button")`. Atribut `data-id` digunakan untuk menyimpan ID peserta.

**E. Event Delegation**

Event listener dipasang pada elemen daftar menggunakan `addEventListener("click")`. Program mencari tombol yang diklik, mengambil ID peserta, kemudian menghapus data menggunakan `filter()` dan memperbarui tampilan melalui `render()`.

###. Catatan Pengamatan dan Diagnosis

Pengujian dilakukan menggunakan browser melalui Live Server.

Beberapa hal yang diperhatikan selama pengujian:

- Form dapat dikirim menggunakan tombol Tambah maupun tombol Enter.
- Input yang hanya berisi spasi harus ditolak oleh validasi JavaScript.
- Peserta dapat ditambahkan dan dihapus berdasarkan ID.
- Nama yang menyerupai markup HTML ditampilkan sebagai teks biasa karena menggunakan `textContent`.
- Data peserta belum tersimpan secara permanen sehingga kembali ke kondisi awal ketika halaman di-reload.

Jika terjadi kesalahan, pemeriksaan dilakukan melalui Console pada DevTools, selector HTML, struktur kode, serta lokasi event listener.

###. Batasan Program

Program ini masih menggunakan array JavaScript sebagai penyimpanan sementara. Data peserta belum menggunakan database maupun penyimpanan permanen. Oleh karena itu, data akan hilang ketika halaman browser di-reload.

###. AI Use Statement
Aku menggunakan AI sebagai alat bantu untuk memahami materi DOM, Event Form, validasi input, render, dan Event Delegation.

aku juaga memakai nya untuk membantu memberikan penjelasan serta contoh kode JavaScript. Kode kemudian dipelajari dan diuji kembali secara mandiri menggunakan VS Code dan browser.

###. Kesimpulan

Melalui praktikum Minggu 10 Sesi 3, saya mempelajari cara mengambil elemen HTML menggunakan `querySelector()`, membuat elemen menggunakan `createElement()`, mengolah form, melakukan validasi input, serta menggunakan Event Delegation untuk menangani tombol yang dibuat secara dinamis.

Saya juga memahami bahwa data dan tampilan dapat dikelola secara terpisah menggunakan array dan fungsi render().

###. Bukti Praktikum

Screenshot hasil pengujian disimpan dalam folder `bukti/`, meliputi:

1. Tampilan awal halaman.
2. Peserta berhasil ditambahkan.
3. Pengujian validasi nama kosong atau spasi.
4. Pengujian tombol Hapus.
5. Pengujian nama yang menyerupai markup HTML.
6. Hasil setelah halaman di-reload
