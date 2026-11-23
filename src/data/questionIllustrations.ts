/**
 * Ilustrasi Vektor SVG Presisi untuk 40 Soal Matematika (Pecahan, Desimal & Rasio)
 * Disusun sesuai kisi-kisi pada kisikisimat_d983b300.pdf
 */

export const QUESTION_ILLUSTRATIONS = {
  // Soal 2: Cerita belanja pecahan (4 kantong gula @ 3/4 kg + 2 bungkus tepung @ 1/2 kg)
  q2_belanja_pecahan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 195" width="560" height="195">
  <rect width="560" height="195" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Ilustrasi Belanjaan Ibu di Toko Sembako</text>
  <!-- 4 Kantong Gula -->
  <rect x="20" y="42" width="320" height="135" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="180" y="62" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">4 Kantong Gula Pasir (@ 3/4 kg)</text>
  <g transform="translate(36, 76)">
    <rect x="0" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="30" y="34" font-family="Arial" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GULA</text>
    <text x="30" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">3/4 kg</text>
    <rect x="74" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="104" y="34" font-family="Arial" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GULA</text>
    <text x="104" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">3/4 kg</text>
    <rect x="148" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="178" y="34" font-family="Arial" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GULA</text>
    <text x="178" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">3/4 kg</text>
    <rect x="222" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="252" y="34" font-family="Arial" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GULA</text>
    <text x="252" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">3/4 kg</text>
  </g>
  <!-- 2 Bungkus Tepung -->
  <rect x="356" y="42" width="184" height="135" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="448" y="62" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">2 Bungkus Tepung (@ 1/2 kg)</text>
  <g transform="translate(380, 76)">
    <rect x="0" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="30" y="34" font-family="Arial" font-size="10.5" font-weight="bold" fill="#78350f" text-anchor="middle">TEPUNG</text>
    <text x="30" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#d97706" text-anchor="middle">1/2 kg</text>
    <rect x="76" y="0" width="60" height="78" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="106" y="34" font-family="Arial" font-size="10.5" font-weight="bold" fill="#78350f" text-anchor="middle">TEPUNG</text>
    <text x="106" y="56" font-family="Arial" font-size="13" font-weight="bold" fill="#d97706" text-anchor="middle">1/2 kg</text>
  </g>
</svg>`,

  // Soal 4: Pembagian pita 3/4 meter menjadi 3 bagian sama panjang
  q4_potong_pita: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 175" width="560" height="175">
  <rect width="560" height="175" rx="16" fill="#fdf2f8" stroke="#f9a8d4" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9d174d" text-anchor="middle">Ilustrasi Pemotongan Pita Sepanjang 3/4 Meter</text>
  <!-- Kurung total -->
  <line x1="70" y1="54" x2="490" y2="54" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="48" x2="70" y2="60" stroke="#334155" stroke-width="2"/>
  <line x1="490" y1="48" x2="490" y2="60" stroke="#334155" stroke-width="2"/>
  <rect x="215" y="42" width="130" height="22" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="280" y="57" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Panjang Awal = 3/4 m</text>
  <!-- Pita dibagi 3 -->
  <g transform="translate(70, 78)">
    <rect x="0" y="0" width="138" height="44" rx="6" fill="#ec4899" stroke="#9d174d" stroke-width="2"/>
    <text x="69" y="27" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Potongan 1 (? m)</text>
    <rect x="141" y="0" width="138" height="44" rx="6" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
    <text x="210" y="27" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Potongan 2 (? m)</text>
    <rect x="282" y="0" width="138" height="44" rx="6" fill="#ec4899" stroke="#9d174d" stroke-width="2"/>
    <text x="351" y="27" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Potongan 3 (? m)</text>
  </g>
  <text x="280" y="152" font-family="Arial, sans-serif" font-size="11.5" font-weight="bold" fill="#831843" text-anchor="middle">Pita dipotong menjadi 3 bagian yang sama panjang</text>
</svg>`,

  // Soal 10: Data buah (6 Apel Merah & 4 Jeruk Manis)
  q10_buah_rasio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="16" y="16" width="256" height="173" rx="12" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
  <text x="144" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239" text-anchor="middle">Apel Merah (6 buah)</text>
  <g transform="translate(56, 54)">
    <g transform="translate(0,0)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
    <g transform="translate(64,0)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
    <g transform="translate(128,0)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
    <g transform="translate(0,60)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
    <g transform="translate(64,60)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
    <g transform="translate(128,60)"><circle cx="24" cy="24" r="18" fill="#ef4444"/><ellipse cx="18" cy="18" rx="4" ry="7" fill="#fca5a5" opacity="0.5"/><path d="M24 6 Q28 0 33 4" stroke="#15803d" stroke-width="3" fill="none"/></g>
  </g>
  <rect x="288" y="16" width="256" height="173" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
  <text x="416" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9a3412" text-anchor="middle">Jeruk Manis (4 buah)</text>
  <g transform="translate(348, 56)">
    <g transform="translate(0,0)"><circle cx="24" cy="24" r="18" fill="#f97316"/><circle cx="18" cy="17" r="4" fill="#fed7aa" opacity="0.6"/><circle cx="24" cy="8" r="2.5" fill="#15803d"/></g>
    <g transform="translate(80,0)"><circle cx="24" cy="24" r="18" fill="#f97316"/><circle cx="18" cy="17" r="4" fill="#fed7aa" opacity="0.6"/><circle cx="24" cy="8" r="2.5" fill="#15803d"/></g>
    <g transform="translate(0,60)"><circle cx="24" cy="24" r="18" fill="#f97316"/><circle cx="18" cy="17" r="4" fill="#fed7aa" opacity="0.6"/><circle cx="24" cy="8" r="2.5" fill="#15803d"/></g>
    <g transform="translate(80,60)"><circle cx="24" cy="24" r="18" fill="#f97316"/><circle cx="18" cy="17" r="4" fill="#fed7aa" opacity="0.6"/><circle cx="24" cy="8" r="2.5" fill="#15803d"/></g>
  </g>
</svg>`,

  // Soal 11: Tabel rasio rumpang (Buku Tulis : Harga)
  q11_tabel_rasio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tabel Kesamaan Rasio Harga Buku Tulis</text>
  <g transform="translate(24, 44)">
    <!-- Header Col -->
    <rect x="0" y="0" width="152" height="42" fill="#1e3a8a" stroke="#1e293b"/>
    <text x="76" y="26" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Jumlah Buku</text>
    <rect x="0" y="42" width="152" height="44" fill="#1d4ed8" stroke="#1e293b"/>
    <text x="76" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Total Harga</text>
    <!-- Col 1: 2 -> 9.000 -->
    <rect x="152" y="0" width="90" height="42" fill="#ffffff" stroke="#94a3b8"/>
    <text x="197" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">2</text>
    <rect x="152" y="42" width="90" height="44" fill="#ffffff" stroke="#94a3b8"/>
    <text x="197" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp9.000</text>
    <!-- Col 2: 4 -> 18.000 -->
    <rect x="242" y="0" width="90" height="42" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="287" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">4</text>
    <rect x="242" y="42" width="90" height="44" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="287" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp18.000</text>
    <!-- Col 3: 6 -> ? -->
    <rect x="332" y="0" width="90" height="42" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="377" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">6</text>
    <rect x="332" y="42" width="90" height="44" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="377" y="69" font-family="Arial" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">... ?</text>
    <!-- Col 4: 10 -> 45.000 -->
    <rect x="422" y="0" width="90" height="42" fill="#ffffff" stroke="#94a3b8"/>
    <text x="467" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">10</text>
    <rect x="422" y="42" width="90" height="44" fill="#ffffff" stroke="#94a3b8"/>
    <text x="467" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp45.000</text>
  </g>
</svg>`,

  // Soal 14: Kelereng Merah (9 butir) dan Biru (6 butir) -> Total 15
  q14_kelereng_total: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 195" width="560" height="195">
  <rect width="560" height="195" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="16" y="16" width="276" height="163" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="154" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Kelereng Merah (9 butir)</text>
  <g transform="translate(36, 52)">
    <circle cx="20" cy="18" r="14" fill="#dc2626"/><circle cx="15" cy="13" r="3.5" fill="#fecaca"/>
    <circle cx="68" cy="18" r="14" fill="#dc2626"/><circle cx="63" cy="13" r="3.5" fill="#fecaca"/>
    <circle cx="116" cy="18" r="14" fill="#dc2626"/><circle cx="111" cy="13" r="3.5" fill="#fecaca"/>
    <circle cx="164" cy="18" r="14" fill="#dc2626"/><circle cx="159" cy="13" r="3.5" fill="#fecaca"/>
    <circle cx="212" cy="18" r="14" fill="#dc2626"/><circle cx="207" cy="13" r="3.5" fill="#fecaca"/>
    <circle cx="44" cy="64" r="14" fill="#dc2626"/><circle cx="39" cy="59" r="3.5" fill="#fecaca"/>
    <circle cx="92" cy="64" r="14" fill="#dc2626"/><circle cx="87" cy="59" r="3.5" fill="#fecaca"/>
    <circle cx="140" cy="64" r="14" fill="#dc2626"/><circle cx="135" cy="59" r="3.5" fill="#fecaca"/>
    <circle cx="188" cy="64" r="14" fill="#dc2626"/><circle cx="183" cy="59" r="3.5" fill="#fecaca"/>
  </g>
  <rect x="308" y="16" width="236" height="163" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="426" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Kelereng Biru (6 butir)</text>
  <g transform="translate(346, 56)">
    <circle cx="22" cy="18" r="14" fill="#2563eb"/><circle cx="17" cy="13" r="3.5" fill="#93c5fd"/>
    <circle cx="80" cy="18" r="14" fill="#2563eb"/><circle cx="75" cy="13" r="3.5" fill="#93c5fd"/>
    <circle cx="138" cy="18" r="14" fill="#2563eb"/><circle cx="133" cy="13" r="3.5" fill="#93c5fd"/>
    <circle cx="22" cy="68" r="14" fill="#2563eb"/><circle cx="17" cy="63" r="3.5" fill="#93c5fd"/>
    <circle cx="80" cy="68" r="14" fill="#2563eb"/><circle cx="75" cy="63" r="3.5" fill="#93c5fd"/>
    <circle cx="138" cy="68" r="14" fill="#2563eb"/><circle cx="133" cy="63" r="3.5" fill="#93c5fd"/>
  </g>
</svg>`,

  // Soal 18: Garis bilangan 0 sampai 1 dengan titik X di 0,75
  q18_garis_bilangan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Garis Bilangan Desimal (0 sampai 1)</text>
  <line x1="40" y1="95" x2="520" y2="95" stroke="#1e293b" stroke-width="2.5"/>
  <!-- 11 tick marks dari x=50 ke x=500 (step 45px) -->
  <g font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">
    <line x1="50" y1="86" x2="50" y2="104" stroke="#1e293b" stroke-width="2"/><text x="50" y="122">0</text>
    <line x1="95" y1="88" x2="95" y2="102" stroke="#475569" stroke-width="1.5"/><text x="95" y="122">0,1</text>
    <line x1="140" y1="88" x2="140" y2="102" stroke="#475569" stroke-width="1.5"/><text x="140" y="122">0,2</text>
    <line x1="185" y1="88" x2="185" y2="102" stroke="#475569" stroke-width="1.5"/><text x="185" y="122">0,3</text>
    <line x1="230" y1="88" x2="230" y2="102" stroke="#475569" stroke-width="1.5"/><text x="230" y="122">0,4</text>
    <line x1="275" y1="86" x2="275" y2="104" stroke="#1e293b" stroke-width="2"/><text x="275" y="122">0,5</text>
    <line x1="320" y1="88" x2="320" y2="102" stroke="#475569" stroke-width="1.5"/><text x="320" y="122">0,6</text>
    <line x1="365" y1="88" x2="365" y2="102" stroke="#475569" stroke-width="1.5"/><text x="365" y="122">0,7</text>
    <line x1="410" y1="88" x2="410" y2="102" stroke="#475569" stroke-width="1.5"/><text x="410" y="122">0,8</text>
    <line x1="455" y1="88" x2="455" y2="102" stroke="#475569" stroke-width="1.5"/><text x="455" y="122">0,9</text>
    <line x1="500" y1="86" x2="500" y2="104" stroke="#1e293b" stroke-width="2"/><text x="500" y="122">1</text>
  </g>
  <!-- Titik X tepat di tengah antara 0,7 (x=365) dan 0,8 (x=410) => x=387.5 -->
  <circle cx="387.5" cy="95" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
  <path d="M387.5 68 L387.5 85" stroke="#dc2626" stroke-width="2.5"/>
  <rect x="355" y="44" width="65" height="24" rx="6" fill="#dc2626"/>
  <text x="387.5" y="60" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Titik X</text>
  <text x="280" y="142" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">Titik X terletak tepat di tengah-tengah antara 0,7 dan 0,8</text>
</svg>`,

  // Soal 19: Komposisi adonan kue (Terigu 300g, Gula 150g, Mentega 150g)
  q19_adonan_kue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 185" width="560" height="185">
  <rect width="560" height="185" rx="16" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">Komposisi Bahan Adonan Kue</text>
  <g transform="translate(28, 48)">
    <rect x="0" y="0" width="155" height="115" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
    <text x="77.5" y="34" font-family="Arial" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Tepung Terigu</text>
    <rect x="35" y="48" width="85" height="32" rx="8" fill="#fef3c7"/>
    <text x="77.5" y="69" font-family="Arial" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">300 gram</text>

    <rect x="174" y="0" width="155" height="115" rx="12" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/>
    <text x="251.5" y="34" font-family="Arial" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Gula Pasir</text>
    <rect x="209" y="48" width="85" height="32" rx="8" fill="#e0f2fe"/>
    <text x="251.5" y="69" font-family="Arial" font-size="14" font-weight="bold" fill="#075985" text-anchor="middle">150 gram</text>

    <rect x="348" y="0" width="155" height="115" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <text x="425.5" y="34" font-family="Arial" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">Mentega</text>
    <rect x="383" y="48" width="85" height="32" rx="8" fill="#d1fae5"/>
    <text x="425.5" y="69" font-family="Arial" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">150 gram</text>
  </g>
</svg>`,

  // Soal 20: Tabel rasio satuan resep jus buah (1 gelas = 150 ml jus, 50 ml gula)
  q20_tabel_resep: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Tabel Rasio Satuan Resep Minuman Jus Buah</text>
  <g transform="translate(24, 42)">
    <rect x="0" y="0" width="160" height="34" fill="#15803d" stroke="#14532d"/><text x="80" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Banyak Porsi</text>
    <rect x="160" y="0" width="175" height="34" fill="#15803d" stroke="#14532d"/><text x="247.5" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Sari Buah (ml)</text>
    <rect x="335" y="0" width="175" height="34" fill="#15803d" stroke="#14532d"/><text x="422.5" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Gula Cair (ml)</text>

    <rect x="0" y="34" width="160" height="22" fill="#ffffff" stroke="#bbf7d0"/><text x="80" y="49" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">1 Gelas</text>
    <rect x="160" y="34" width="175" height="22" fill="#ffffff" stroke="#bbf7d0"/><text x="247.5" y="49" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">150 ml</text>
    <rect x="335" y="34" width="175" height="22" fill="#ffffff" stroke="#bbf7d0"/><text x="422.5" y="49" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">50 ml</text>

    <rect x="0" y="56" width="160" height="22" fill="#f0fdf4" stroke="#bbf7d0"/><text x="80" y="71" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">2 Gelas</text>
    <rect x="160" y="56" width="175" height="22" fill="#f0fdf4" stroke="#bbf7d0"/><text x="247.5" y="71" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">300 ml</text>
    <rect x="335" y="56" width="175" height="22" fill="#f0fdf4" stroke="#bbf7d0"/><text x="422.5" y="71" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">100 ml</text>

    <rect x="0" y="78" width="160" height="24" fill="#fef3c7" stroke="#f59e0b"/><text x="80" y="94" font-family="Arial" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">5 Gelas</text>
    <rect x="160" y="78" width="175" height="24" fill="#fef3c7" stroke="#f59e0b"/><text x="247.5" y="94" font-family="Arial" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">... ? ml</text>
    <rect x="335" y="78" width="175" height="24" fill="#fef3c7" stroke="#f59e0b"/><text x="422.5" y="94" font-family="Arial" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">250 ml</text>
  </g>
</svg>`,

  // Soal 24: Tabel rasio harga barang (Buku Gambar)
  q24_tabel_harga: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tabel Rasio Senilai Harga Buku Gambar</text>
  <g transform="translate(24, 44)">
    <rect x="0" y="0" width="152" height="42" fill="#0f172a" stroke="#1e293b"/>
    <text x="76" y="26" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Buku Gambar</text>
    <rect x="0" y="42" width="152" height="44" fill="#334155" stroke="#1e293b"/>
    <text x="76" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Harga Total</text>

    <rect x="152" y="0" width="90" height="42" fill="#ffffff" stroke="#94a3b8"/>
    <text x="197" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">2</text>
    <rect x="152" y="42" width="90" height="44" fill="#ffffff" stroke="#94a3b8"/>
    <text x="197" y="69" font-family="Arial" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp12.000</text>

    <rect x="242" y="0" width="90" height="42" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="287" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">3</text>
    <rect x="242" y="42" width="90" height="44" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="287" y="69" font-family="Arial" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp18.000</text>

    <rect x="332" y="0" width="90" height="42" fill="#ffffff" stroke="#94a3b8"/>
    <text x="377" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">5</text>
    <rect x="332" y="42" width="90" height="44" fill="#ffffff" stroke="#94a3b8"/>
    <text x="377" y="69" font-family="Arial" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp30.000</text>

    <rect x="422" y="0" width="90" height="42" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="467" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">8</text>
    <rect x="422" y="42" width="90" height="44" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="467" y="69" font-family="Arial" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">... ?</text>
  </g>
</svg>`,

  // Soal 28 (PGK): Grid seperempat (1/4) dan senilai 25/100
  q28_grid_seperempat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 175" width="560" height="175">
  <rect width="560" height="175" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Model Pecahan Seperempat (1/4) pada Persegi</text>
  <!-- Persegi dibagi 4 -->
  <g transform="translate(115, 44)">
    <rect x="0" y="0" width="55" height="55" fill="#2563eb" stroke="#1e293b" stroke-width="2"/>
    <rect x="55" y="0" width="55" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <rect x="0" y="55" width="55" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <rect x="55" y="55" width="55" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  </g>
  <text x="285" y="96" font-family="Arial" font-size="22" font-weight="bold" fill="#1e3a8a">=</text>
  <!-- Kotak label 1/4 = .../100 -->
  <g transform="translate(330, 48)">
    <rect x="0" y="0" width="140" height="100" rx="12" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
    <text x="70" y="38" font-family="Arial" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1 / 4</text>
    <text x="70" y="64" font-family="Arial" font-size="12" fill="#475569" text-anchor="middle">1 bagian dari 4 bagian</text>
    <text x="70" y="84" font-family="Arial" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">Desimal = ... ?</text>
  </g>
</svg>`,

  // Soal 31 (PGK): Tabel rasio senilai sirup (2:3, 4:A, B:9, 8:12)
  q31_tabel_sirup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239" text-anchor="middle">Tabel Rasio Senilai Pembuatan Minuman Sirup</text>
  <g transform="translate(24, 44)">
    <rect x="0" y="0" width="152" height="42" fill="#be123c" stroke="#881337"/>
    <text x="76" y="26" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Gelas Air</text>
    <rect x="0" y="42" width="152" height="44" fill="#e11d48" stroke="#881337"/>
    <text x="76" y="69" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Sendok Sirup</text>

    <rect x="152" y="0" width="90" height="42" fill="#ffffff" stroke="#fda4af"/>
    <text x="197" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">2</text>
    <rect x="152" y="42" width="90" height="44" fill="#ffffff" stroke="#fda4af"/>
    <text x="197" y="69" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">3</text>

    <rect x="242" y="0" width="90" height="42" fill="#ffffff" stroke="#fda4af"/>
    <text x="287" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">4</text>
    <rect x="242" y="42" width="90" height="44" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="287" y="69" font-family="Arial" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">A</text>

    <rect x="332" y="0" width="90" height="42" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="377" y="26" font-family="Arial" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">B</text>
    <rect x="332" y="42" width="90" height="44" fill="#ffffff" stroke="#fda4af"/>
    <text x="377" y="69" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">9</text>

    <rect x="422" y="0" width="90" height="42" fill="#ffffff" stroke="#fda4af"/>
    <text x="467" y="26" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">8</text>
    <rect x="422" y="42" width="90" height="44" fill="#ffffff" stroke="#fda4af"/>
    <text x="467" y="69" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">12</text>
  </g>
</svg>`,

  // Soal 33 (PGK Kategori): 6 Buku Tulis = Rp27.000,00
  q33_rak_buku: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 165" width="560" height="165">
  <rect width="560" height="165" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Paket 6 Buku Tulis di Koperasi Sekolah</text>
  <g transform="translate(55, 44)">
    <rect x="0" y="0" width="44" height="68" rx="4" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/><text x="22" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
    <rect x="52" y="0" width="44" height="68" rx="4" fill="#60a5fa" stroke="#1e40af" stroke-width="1.5"/><text x="74" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">2</text>
    <rect x="104" y="0" width="44" height="68" rx="4" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/><text x="126" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
    <rect x="156" y="0" width="44" height="68" rx="4" fill="#60a5fa" stroke="#1e40af" stroke-width="1.5"/><text x="178" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">4</text>
    <rect x="208" y="0" width="44" height="68" rx="4" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/><text x="230" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">5</text>
    <rect x="260" y="0" width="44" height="68" rx="4" fill="#60a5fa" stroke="#1e40af" stroke-width="1.5"/><text x="282" y="38" font-family="Arial" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">6</text>
  </g>
  <rect x="380" y="50" width="145" height="54" rx="10" fill="#10b981"/>
  <text x="452.5" y="72" font-family="Arial" font-size="11" font-weight="bold" fill="#ecfdf5" text-anchor="middle">Total Harga 6 Buku</text>
  <text x="452.5" y="92" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Rp27.000,00</text>
  <text x="280" y="142" font-family="Arial, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Seluruh buku tulis memiliki ukuran dan harga satuan yang sama</text>
</svg>`,

  // Soal 35 (PGK Kategori): 10 Kelereng Merah & 15 Kelereng Hijau
  q35_kelereng_merah_hijau: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 195" width="560" height="195">
  <rect width="560" height="195" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="16" y="16" width="256" height="163" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="144" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Kelereng Merah (10 butir)</text>
  <g transform="translate(36, 56)">
    <circle cx="18" cy="18" r="13" fill="#dc2626"/><circle cx="62" cy="18" r="13" fill="#dc2626"/><circle cx="106" cy="18" r="13" fill="#dc2626"/><circle cx="150" cy="18" r="13" fill="#dc2626"/><circle cx="194" cy="18" r="13" fill="#dc2626"/>
    <circle cx="18" cy="64" r="13" fill="#dc2626"/><circle cx="62" cy="64" r="13" fill="#dc2626"/><circle cx="106" cy="64" r="13" fill="#dc2626"/><circle cx="150" cy="64" r="13" fill="#dc2626"/><circle cx="194" cy="64" r="13" fill="#dc2626"/>
  </g>
  <rect x="288" y="16" width="256" height="163" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="416" y="38" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Kelereng Hijau (15 butir)</text>
  <g transform="translate(308, 52)">
    <circle cx="18" cy="15" r="12" fill="#16a34a"/><circle cx="62" cy="15" r="12" fill="#16a34a"/><circle cx="106" cy="15" r="12" fill="#16a34a"/><circle cx="150" cy="15" r="12" fill="#16a34a"/><circle cx="194" cy="15" r="12" fill="#16a34a"/>
    <circle cx="18" cy="52" r="12" fill="#16a34a"/><circle cx="62" cy="52" r="12" fill="#16a34a"/><circle cx="106" cy="52" r="12" fill="#16a34a"/><circle cx="150" cy="52" r="12" fill="#16a34a"/><circle cx="194" cy="52" r="12" fill="#16a34a"/>
    <circle cx="18" cy="89" r="12" fill="#16a34a"/><circle cx="62" cy="89" r="12" fill="#16a34a"/><circle cx="106" cy="89" r="12" fill="#16a34a"/><circle cx="150" cy="89" r="12" fill="#16a34a"/><circle cx="194" cy="89" r="12" fill="#16a34a"/>
  </g>
</svg>`,

  // Soal 39 (PGK Kategori): Tabel kesamaan rasio resep kue donat
  q39_tabel_kue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 155" width="560" height="155">
  <rect width="560" height="155" rx="16" fill="#fffbeb" stroke="#fcd34d" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">Tabel Kesamaan Rasio Resep Kue Donat</text>
  <g transform="translate(24, 42)">
    <rect x="0" y="0" width="160" height="34" fill="#b45309" stroke="#78350f"/><text x="80" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Banyak Adonan</text>
    <rect x="160" y="0" width="180" height="34" fill="#b45309" stroke="#78350f"/><text x="250" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Tepung Terigu (gram)</text>
    <rect x="340" y="0" width="170" height="34" fill="#b45309" stroke="#78350f"/><text x="425" y="21" font-family="Arial" font-size="11.5" font-weight="bold" fill="#fff" text-anchor="middle">Telur (butir)</text>

    <rect x="0" y="34" width="160" height="23" fill="#ffffff" stroke="#fde68a"/><text x="80" y="50" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">1 Adonan</text>
    <rect x="160" y="34" width="180" height="23" fill="#ffffff" stroke="#fde68a"/><text x="250" y="50" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">200 gram</text>
    <rect x="340" y="34" width="170" height="23" fill="#ffffff" stroke="#fde68a"/><text x="425" y="50" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">2 butir</text>

    <rect x="0" y="57" width="160" height="23" fill="#fef3c7" stroke="#fde68a"/><text x="80" y="73" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">2 Adonan</text>
    <rect x="160" y="57" width="180" height="23" fill="#fef3c7" stroke="#fde68a"/><text x="250" y="73" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">400 gram</text>
    <rect x="340" y="57" width="170" height="23" fill="#fef3c7" stroke="#fde68a"/><text x="425" y="73" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">4 butir</text>

    <rect x="0" y="80" width="160" height="23" fill="#ffffff" stroke="#fde68a"/><text x="80" y="96" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">4 Adonan</text>
    <rect x="160" y="80" width="180" height="23" fill="#ffffff" stroke="#fde68a"/><text x="250" y="96" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">800 gram</text>
    <rect x="340" y="80" width="170" height="23" fill="#ffffff" stroke="#fde68a"/><text x="425" y="96" font-family="Arial" font-size="11" fill="#0f172a" text-anchor="middle">8 butir</text>
  </g>
</svg>`,

  // Soal 40 (PGK Kategori): Perbandingan kecepatan Bus Sekolah & Mobil Dinas
  q40_kendaraan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 175" width="560" height="175">
  <rect width="560" height="175" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Data Jarak Tempuh dan Waktu Dua Kendaraan</text>
  <!-- Bus Sekolah -->
  <rect x="24" y="42" width="244" height="114" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="146" y="66" font-family="Arial" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">BUS SEKOLAH</text>
  <text x="146" y="96" font-family="Arial" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Jarak Tempuh: 150 km</text>
  <rect x="66" y="110" width="160" height="28" rx="6" fill="#2563eb"/>
  <text x="146" y="129" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Waktu: 3 jam</text>
  <!-- Mobil Dinas -->
  <rect x="292" y="42" width="244" height="114" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="414" y="66" font-family="Arial" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">MOBIL DINAS</text>
  <text x="414" y="96" font-family="Arial" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Jarak Tempuh: 160 km</text>
  <rect x="334" y="110" width="160" height="28" rx="6" fill="#059669"/>
  <text x="414" y="129" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Waktu: 2 jam</text>
</svg>`,
};
