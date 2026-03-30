# Portfolio Website

Portfolio statis untuk Pande I Gede Sandiyasa, dibangun dengan HTML, CSS, dan JavaScript modular tanpa build step.

## Struktur

- `index.html`: shell markup untuk semua section.
- `assets/data/content.js`: sumber data tunggal untuk profil, resume, proyek, dan kontak.
- `assets/js/script.js`: entrypoint aplikasi.
- `assets/js/modules/`: modul render, navigasi, sidebar, portfolio, dan form kontak.
- `assets/css/style.css`: manifest stylesheet.
- `assets/css/{tokens,base,layout,sections,responsive}.css`: layer styling per concern.

## Cara mengubah konten

Semua konten utama sekarang dipusatkan di `assets/data/content.js`.

Yang bisa diubah langsung dari sana:

- identitas sidebar
- deskripsi singkat profil
- daftar layanan
- pengalaman dan skill
- daftar proyek portfolio
- email tujuan form kontak

## Menjalankan secara lokal

Karena JavaScript sekarang memakai ES modules, jalankan lewat HTTP server sederhana dari root repo:

```bash
python -m http.server 8000
```

Lalu buka `http://127.0.0.1:8000`.

## Hasil refactor

Perubahan utama yang sudah diselesaikan:

- memindahkan seluruh konten ke satu file data
- memecah JavaScript menjadi modul per concern
- memecah CSS menjadi layer terpisah
- menghapus section template yang tidak dipakai lagi
- membersihkan aset gambar sisa template
- merapikan perilaku navigasi, filter proyek, modal, dan form kontak
