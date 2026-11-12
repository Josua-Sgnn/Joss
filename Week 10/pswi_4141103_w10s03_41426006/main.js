const form = document.querySelector("#form-peserta");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");


let peserta = [];
let berikutnya = 1;
function render() {
    daftar.replaceChildren();
    for (const p of peserta) {
        const li = document.createElement("li");
        const nama = document.createElement("span");
        nama.textContent = p.nama;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Hapus";
        btn.dataset.id = String(p.id);
        li.append(nama, " ", btn);
        daftar.append(li);
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const nama = String(
        new FormData(form).get("nama") ?? ""
    ).trim();
    if (!nama) {
        pesan.textContent = "Nama harus diisi";
        return;
    }
    peserta.push({
        id: berikutnya++,
        nama: nama
    });
    render();
    form.reset();
    pesan.textContent = `${peserta.length} peserta di memori`;
    document.querySelector("#nama").focus();
});
daftar.addEventListener("click", event => {
    const btn = event.target.closest("button[data-id]");
    if (!btn || !daftar.contains(btn)) return;
    const id = Number(btn.dataset.id);
    peserta = peserta.filter(p => p.id !== id);
    render();
    pesan.textContent = peserta.length
        ? `${peserta.length} peserta di memori`
        : "Belum ada peserta";
    document.querySelector("#nama").focus();
});
render();
pesan.textContent = "Belum ada peserta";
