====TEKS DAN ELEMEN BARU===
1. Jelaskan perbedaan textContent dan HTML parsing.
=Perbedaan textContent dan HTML parsing
textContent memperlakukan semua isi string sebagai teks biasa. Karakter seperti < dan > tidak dianggap sebagai tag, jadi li.textContent = "<b>Rina</b>" menampilkan tulisan <b>Rina</b> apa adanya, dan DOM tidak membuat elemen <b> baru. Buktinya, li.querySelector("b") hasilnya null dan li.children.length hasilnya 0.

HTML parsing (misalnya lewat innerHTML) membaca string sebagai markup HTML. Browser mengenali <b> sebagai tag, lalu membuat elemen <b> sungguhan di DOM, sehingga “Rina” tampil tebal.
/==============================================================================================\
Manipulasi DOM
##. Cara Menjalankan

1. Unduh atau salin seluruh folder proyek.
2. Buka `index.html` dengan browser (klik dua kali), atau gunakan ekstensi **Live Server** di VS Code.
3. Buka DevTools dengan **F12**, lalu pilih tab **Console** untuk menjalankan pengujian.

Tidak perlu instalasi tambahan.
##. Penjelasan Perubahan

### Starter DOM
- Membuat halaman minimum dengan elemen `<main>`, `<h1>`, `<p id="pesan" role="status">`, dan `<ul id="daftar">`.
- `main.js` dihubungkan dengan atribut `defer` agar dijalankan setelah DOM selesai dibaca.
- Memeriksa selector `h1` dan `#daftar`; selector yang salah (`#daftr`) mengembalikan `null`; selector yang benar mengembalikan elemen.

### Teks dan Elemen Baru
- Membuat `<li>` lewat `document.createElement("li")` dan menambahkannya dengan `append()`.
- Memakai `textContent`, sehingga `<b>Rina</b>` tampil literal sebagai teks dan tidak membuat elemen `<b>` baru.
- **Perbedaan:** `textContent` memperlakukan string sebagai teks biasa, sedangkan HTML parsing (`innerHTML`) mengubah string menjadi elemen. `textContent` lebih aman untuk input pengguna karena mencegah penyisipan HTML/script (XSS).

### State dan Render
- Array `peserta` menjadi sumber data (state), dan `render()` menggambar ulang daftar dari array tersebut.
- `daftar.replaceChildren()` mengosongkan `<ul>` sebelum digambar ulang, sehingga `render()` yang dipanggil berulang tidak menghasilkan item duplikat.

### Keadaan Kosong
- Di dalam `render()` ditambahkan: `pesan.textContent = peserta.length ? "" : "Belum ada peserta";`
- Gaya pesan dipisahkan ke `style.css` (selector `#pesan` dan `#pesan:empty`), bukan lewat JavaScript.

---

## 4. Hasil Uji

| No | Skenario | Langkah | Hasil yang diharapkan | Hasil aktual | Bukti |
|---|---|---|---|---|---|
| 1 | Periksa selector | `document.querySelector("h1")` dan `("#daftar")` | Mengembalikan elemen `<h1>` dan `<ul id="daftar">` | `[sesuai / tidak]` | `bukti/cek h1.png`, `bukti/cek(#daftar).png` |
| 2 | Selector salah | `document.querySelector("#daftr")` | `null` | `[sesuai / tidak]` | `bukti/cek null.png` |
| 3 | Selector benar | `document.querySelector("#daftar")` | Elemen `<ul id="daftar">` | `[sesuai / tidak]` | `bukti/cek benar daftar.png` |
| 4 | Teks literal | `li.textContent = "<b>Rina</b>"` | Tampil `<b>Rina</b>` sebagai teks | `[sesuai / tidak]` | `bukti/[nama file].png` |
| 5 | Tidak ada elemen `b` | `li.querySelector("b")`, `li.children.length` | `null` dan `0` | `[sesuai / tidak]` | `bukti/[nama file].png` |
| 6 | Render dua kali | `render(); render();` lalu `daftar.children.length` | `2` (tidak duplikat) | `[sesuai / tidak]` | `bukti/cek render dua kali.png` |
| 7 | Array kosong | `peserta = []; render();` | Daftar kosong, `children.length` = `0` | `[sesuai / tidak]` | `bukti/cek array kosong.png` |
| 8 | Pesan saat kosong | `pesan.textContent` setelah array kosong | `"Belum ada peserta"` | `[sesuai / tidak]` | `bukti/cek array kosong pesan.png` |
| 9 | Pesan saat berisi | `peserta = [{ id: 1, nama: "Rina" }]; render();` | `pesan.textContent` bernilai `""` | `[sesuai / tidak]` | `bukti/cek array berisi.png` |

---

## 5. Bukti Validator / Audit dan Catatan Before-After

- **Validator HTML (W3C): ku memakai validator NU

##. Batasan

- Data hanya disimpan di array pada memori; **hilang saat halaman di-refresh**.
- Belum ada fitur tambah/hapus peserta yang berfungsi penuh 
- Pengujian dilakukan manual lewat Console, belum ada pengujian otomatis.
- Diuji di browser `[Chrome/Edge/Firefox
---

##. Riwayat Commit / Log
Bukti Git Ku sertakan Di Bukti
##. AI Use Statement

> Isi dengan jujur sesuai penggunaanmu yang sebenarnya.

Saya menggunakan **Claude sebagai alat bantu belajar untuk:
- `[mis. memahami cara kerja querySelector, textContent, dan replaceChildren]`
- `[mis. memeriksa kesalahan pada kode main.js]`

Seluruh kode dan jawaban telah saya baca, jalankan, uji, dan pahami sendiri. Bagian yang saya tulis ulang atau ubah: 

---

##. Sumber Aset

- Tidak memakai gambar, font, atau pustaka eksternal.