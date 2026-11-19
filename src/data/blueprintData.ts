import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika — Lingkup Materi: Rasio
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal materi Rasio Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep rasio dan menyatakan perbandingan dua besaran sejenis dalam bentuk paling sederhana.',
    indikatorSoal:
      'Disajikan gambar dua kelompok buah (6 apel dan 4 jeruk), peserta didik dapat menentukan rasio paling sederhana banyak apel terhadap jeruk.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan rasio bagian terhadap keseluruhan (part-to-whole) secara tepat.',
    indikatorSoal:
      'Disajikan data banyak spidol biru dan spidol hitam dalam kotak pensil, peserta didik dapat menentukan rasio paling sederhana spidol biru terhadap seluruh spidol.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyederhanakan rasio dua besaran dari representasi visual.',
    indikatorSoal:
      'Disajikan gambar kumpulan kelereng biru dan merah, peserta didik dapat menentukan rasio paling sederhana kelereng merah terhadap kelereng biru.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep kesamaan rasio (rasio setara) untuk menyelesaikan masalah kontekstual.',
    indikatorSoal:
      'Disajikan rasio campuran sirup dan air serta takaran sirup yang digunakan, peserta didik dapat menentukan banyak air yang dibutuhkan agar rasa tetap sama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perbandingan menggunakan model pita (bar model).',
    indikatorSoal:
      'Disajikan gambar model pita Pita A (3 bagian) dan Pita B (5 bagian) beserta panjang totalnya, peserta didik dapat menentukan panjang Pita B.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio satuan (harga per unit) untuk menyelesaikan masalah jual beli.',
    indikatorSoal:
      'Disajikan harga sejumlah buku tulis di koperasi, peserta didik dapat menghitung total harga untuk jumlah buku tulis yang berbeda.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyetarakan satuan panjang sebelum menentukan rasio paling sederhana.',
    indikatorSoal:
      'Disajikan panjang dua utas tali dalam satuan berbeda (meter dan sentimeter), peserta didik dapat menyederhanakan rasio panjang kedua tali.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio volume dua zat cair dari gambar alat ukur.',
    indikatorSoal:
      'Disajikan gambar dua gelas ukur berisi cat biru dan cat kuning, peserta didik dapat menentukan rasio paling sederhana volume kedua cat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai salah satu besaran jika diketahui rasio dan selisihnya.',
    indikatorSoal:
      'Disajikan rasio umur Kakak dan Adik serta selisih umur mereka, peserta didik dapat menentukan umur Adik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai salah satu kelompok jika diketahui rasio dan jumlah keseluruhannya.',
    indikatorSoal:
      'Disajikan jumlah total siswa kelas VI dan rasio siswa laki-laki terhadap perempuan, peserta didik dapat menghitung banyak siswa perempuan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio dua daerah pada model visual grid persegi.',
    indikatorSoal:
      'Disajikan gambar papan kotak 4 × 5 dengan bagian yang diarsir dan tidak diarsir, peserta didik dapat menentukan rasio paling sederhana kotak diarsir terhadap tidak diarsir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep skala sebagai bentuk rasio jarak pada peta terhadap jarak sebenarnya.',
    indikatorSoal:
      'Disajikan jarak dua desa pada peta dan skala peta, peserta didik dapat menghitung jarak sebenarnya dalam satuan kilometer.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan skala gambar denah dari ukuran gambar dan ukuran sebenarnya.',
    indikatorSoal:
      'Disajikan panjang kolam renang sebenarnya (meter) dan panjang pada gambar (cm), peserta didik dapat menentukan skala gambar denah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perbandingan tiga besaran yang diketahui jumlah totalnya.',
    indikatorSoal:
      'Disajikan rasio tabungan tiga anak dan jumlah total tabungan mereka, peserta didik dapat menentukan besar tabungan salah satu anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah laju perubahan jarak terhadap waktu (kecepatan tetap).',
    indikatorSoal:
      'Disajikan jarak tempuh sepeda motor dalam waktu tertentu, peserta didik dapat menghitung jarak tempuh untuk durasi waktu yang berbeda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan rasio setara dalam memperbesar takaran resep adonan.',
    indikatorSoal:
      'Disajikan kartu takaran resep (tepung terigu dan gula pasir), peserta didik dapat menghitung berat gula yang dibutuhkan untuk 1 kg tepung terigu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua rasio harga satuan (unit rate) untuk menentukan pilihan yang lebih ekonomis.',
    indikatorSoal:
      'Disajikan dua paket harga susu kemasan dengan isi dan harga berbeda, peserta didik dapat menganalisis selisih harga per botol dan menentukan paket yang lebih murah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan berbalik nilai antara kecepatan dan waktu tempuh pada jarak tetap.',
    indikatorSoal:
      'Disajikan waktu tempuh dan kecepatan awal kendaraan, peserta didik dapat menentukan waktu tempuh baru jika kecepatan ditingkatkan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ukuran denah berskala untuk menentukan ukuran sebenarnya, rasio, dan keliling bangun datar.',
    indikatorSoal:
      'Disajikan gambar denah taman sekolah berskala 1 : 300, peserta didik dapat memilih semua pernyataan benar terkait panjang, lebar, rasio, dan keliling sebenarnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis rasio tiga komponen bahan campuran terhadap bagian dan keseluruhan.',
    indikatorSoal:
      'Disajikan takaran volume sari mangga, sari jeruk, dan air mineral dalam 1 teko, peserta didik dapat memilih semua pernyataan benar mengenai rasio dan pelipatan resep.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan diagram batang dan menentukan berbagai rasio antar kategori data.',
    indikatorSoal:
      'Disajikan diagram batang koleksi buku pojok baca, peserta didik dapat memilih semua pernyataan rasio yang benar antar jenis buku dan terhadap total buku.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dimensi persegi panjang menggunakan rasio panjang dan lebar.',
    indikatorSoal:
      'Disajikan sketsa kolam ikan dengan rasio panjang : lebar = 5 : 3 dan panjang diketahui, peserta didik dapat menilai kebenaran pernyataan lebar, selisih, dan luas kolam.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai besaran lain dan jumlah keseluruhan dari rasio tiga kelompok.',
    indikatorSoal:
      'Disajikan rasio kelereng tiga anak dan jumlah milik satu anak, peserta didik dapat menilai kebenaran (Benar/Salah) pernyataan banyak kelereng anak lain dan jumlah total.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan harga satuan dua paket barang dari informasi visual.',
    indikatorSoal:
      'Disajikan gambar daftar dua paket harga pensil koperasi, peserta didik dapat menentukan kebenaran (Benar/Salah) harga satuan tiap paket dan perbandingan kehematannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan laju konsumsi bahan bakar per liter untuk menghitung kebutuhan dan jarak tempuh.',
    indikatorSoal:
      'Disajikan jarak tempuh mobil dengan sejumlah liter bensin, peserta didik dapat menentukan kebenaran (Benar/Salah) rasio satuan, kebutuhan bensin, dan jarak maksimal.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan jarak sebenarnya dan rasio jarak antar kota dari peta berskala.',
    indikatorSoal:
      'Disajikan gambar peta jalur tiga kota beserta skala 1 : 1.500.000, peserta didik dapat menentukan kebenaran (Benar/Salah) jarak sebenarnya dan rasio antar ruas jalan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian uang berdasarkan rasio yang diketahui jumlahnya.',
    indikatorSoal:
      'Disajikan rasio uang saku dua anak dan jumlah uang mereka, peserta didik dapat menentukan kebenaran (Benar/Salah) besar uang masing-masing dan selisihnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan rasio campuran dari ilustrasi dan menerapkannya pada kelipatan takaran.',
    indikatorSoal:
      'Disajikan gambar aturan campuran cat merah dan putih, peserta didik dapat menentukan kebenaran (Benar/Salah) rasio terhadap total dan kebutuhan cat pada kelipatan tertentu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung rasio antar kategori data kegiatan siswa di kelas.',
    indikatorSoal:
      'Disajikan data jumlah siswa kelas VI dan pilihan ekstrakurikulernya, peserta didik dapat menentukan kebenaran (Benar/Salah) jumlah sisa siswa dan rasio antar kegiatan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis rasio volume terhadap waktu (debit aliran) dalam pemecahan masalah.',
    indikatorSoal:
      'Disajikan volume air yang mengalir dalam waktu tertentu, peserta didik dapat menentukan kebenaran (Benar/Salah) debit per menit, volume pada waktu lain, dan waktu pengisian.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('skala') || t.includes('debit') || t.includes('satuan berbeda') || t.includes('kecepatan') || t.includes('bahan bakar')) {
    return 'Pengukuran';
  }
  if (t.includes('grid') || t.includes('bangun') || t.includes('denah')) {
    return 'Geometri';
  }
  if (t.includes('diagram') || t.includes('data')) {
    return 'Analisis Data dan Peluang';
  }
  if (t.includes('konsep dasar') || t.includes('penyederhanaan') || t.includes('bagian terhadap keseluruhan') || t.includes('volume') || t.includes('warna')) {
    return 'Bilangan';
  }
  return 'Aljabar';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
