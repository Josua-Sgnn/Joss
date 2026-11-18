const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

const URL_DATA = "./data/kegiatan.json"; 
const BATAS_WAKTU_MS = 5000;

function tampilkanPesan(teks, isError = false) {
  pesan.textContent = teks;
  pesan.classList.toggle("error", isError);
}

async function muat() {
  tombol.disabled = true;
  daftar.replaceChildren();
  tampilkanPesan("Memuat kegiatan...");

  const pengendali = new AbortController();
  const timer = setTimeout(() => pengendali.abort(), BATAS_WAKTU_MS);

  try {
    const r = await fetch(URL_DATA, { signal: pengendali.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);

    const data = await r.json();
    console.log(data);

    if (!Array.isArray(data)) throw new Error("Data harus array");

    if (data.length === 0) {
      tampilkanPesan("Belum ada kegiatan.");
      return;
    }

    for (const k of data) {
      if (typeof k.judul !== "string") throw new Error("Judul tidak sesuai");
      const li = document.createElement("li");
      li.textContent = k.judul;
      daftar.append(li);
    }
    tampilkanPesan(`${data.length} kegiatan dimuat.`);
  } catch (error) {
    daftar.replaceChildren();
    if (error.name === "AbortError") {
      tampilkanPesan("Gagal memuat: waktu habis.", true);
    } else {
      tampilkanPesan("Gagal memuat", true);
    }
    console.error(error);
  } finally {
    clearTimeout(timer);
    tombol.disabled = false;
  }
}

tombol.addEventListener("click", muat);
