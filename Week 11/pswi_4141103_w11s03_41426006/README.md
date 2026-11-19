##Perubahan dari Sesi 2
-Loading: Tombol dinonaktifkan saat data sedang dimuat agar tidak terjadi klik berulang.
-Finally: Tombol diaktifkan kembali setelah proses selesai.
-Empty: Menampilkan pesan jika data kegiatan kosong.
-Timeout: Membatasi waktu tunggu maksimal 5 detik.
-Validasi: Memeriksa status HTTP dan bentuk data JSON.
-Reset daftar: Menghapus data lama sebelum menampilkan data baru.
##Penjelasan Promise dan Async/Await
Fetch menggunakan Promise karena data tidak langsung tersedia. Async/await membantu menunggu data agar kode lebih mudah dibaca. Try/catch digunakan untuk menangani error, sedangkan finally selalu dijalankan setelah proses selesai.
##Matriks Pengujian
-Normal: harusnya muncul "2 kegiatan dimuat". Hasil: sesuai, 2 item tampil (HTML dan CSS), request 200.
-Kosong: harusnya muncul "Belum ada kegiatan", bukan error. Hasil: sesuai, request 200 (3 B), tanpa error di Console.
-404: harusnya muncul "Data gagal dimuat", Network 404. Hasil: (isi setelah uji)
-JSON rusak: harusnya muncul "Data gagal dimuat", Console SyntaxError. Hasil: (isi setelah uji)
-Salah bentuk: harusnya muncul "Data gagal dimuat", Console "Struktur data tidak sesuai". Hasil: (isi setelah uji)
-Lambat: harusnya muncul "Memuat data..." dan tombol nonaktif. Hasil: sesuai, dengan GPRS tombol disabled dan hanya 1 request.
-Offline: harusnya gagal memuat dan tombol aktif lagi. Hasil: awalnya tetap berhasil karena respons diambil dari cache; setelah Disable Cache dicentang: (isi setelah uji).
-Timeout: harusnya muncul "Waktu tunggu habis", Console AbortError. Hasil: sesuai, request NS_BINDING_ABORTED dan tombol aktif lagi.
#l
-Data masih menggunakan file JSON lokal.
-Fetch ke domain lain dapat terkendala CORS.
-Dropdown hanya digunakan untuk pengujian.
-Pesan error ditampilkan secara umum, sedangkan detailnya dapat dilihat di Console.

##AI Use 
-Alat: Claude
-aku memakai untuk memperbaiki devtools ku yang error
-memperbaiki css dan json ku

constcontroller : Untuk menchek kecepatan pengiriman data melalui dengan cara melihat loading atau bukti loading nya
AbortController : penggunaan untuk menghindari server tidak lelet saat pengguna men spam klick nya (INi adalah sebuah clas)
Timer : melihat/memastikan apakah dia sudah melewati batas waktu atau tidak 
fungsi signal : apakah datanya masuk ke website sesuai dengan waktu yang ditentukan maka di hentik(Apabila tidak sesuai)

Batasan
Prototipe statis: Data dibaca dari file JSON lokal, bukan API atau database sungguhan. Data hanya berubah jika file diedit manual, dan kegagalan disimulasikan dengan file fixture.
CORS: Pengujian ini lancar karena halaman dan JSON berasal dari origin yang sama. Jika data diambil dari domain lain, server tujuan harus mengizinkan origin halaman lewat header Access-Control-Allow-Origin. Kalau tidak, browser memblokir fetch dan error masuk ke catch. Perbaikannya ada di sisi server, bukan di JavaScript halaman.
