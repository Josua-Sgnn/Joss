const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");
const sumber = document.querySelector("#sumber");
const BATAS_WAKTU_MS = 1000;

async function muat() {
  tombol.disabled = true;                       
  pesan.className = "";
  pesan.textContent = "Memuat data...";         
  daftar.replaceChildren();                     

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), BATAS_WAKTU_MS);

  try {
    const r = await fetch(sumber.value, { signal: controller.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();               

    if (!Array.isArray(data) || !data.every(k =>
      Number.isInteger(k.id) && typeof k.judul === "string" &&
      Number.isFinite(k.kuota))) {
      throw new Error("Struktur data tidak sesuai");
    }

    for (const k of data) {
      const li = document.createElement("li");
      li.textContent = `${k.judul} - kuota ${k.kuota}`;
      daftar.append(li);
    }
    pesan.textContent = data.length
      ? `${data.length} kegiatan dimuat` : "Belum ada kegiatan"; 
  } catch (error) {
    pesan.className = "error";
    pesan.textContent = error.name === "AbortError"
      ? "Waktu tunggu habis. Coba lagi."
      : "Data gagal dimuat. Coba lagi.";
    console.error(error);
  } finally {
    clearTimeout(timer);                        
    tombol.disabled = false;                   
  }
}

tombol.addEventListener("click", muat);
