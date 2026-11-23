import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika
 * Disusun 1-to-1 sesuai kisikisimat_d983b300.pdf (40 Butir Soal)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan 40 butir soal sesuai dokumen kisi-kisi yang diunggah
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 Memahami perkalian pecahan dengan bilangan asli dan menghitung hasilnya',
    indikatorSoal:
      'Murid menghitung hasil perkalian pecahan biasa dengan bilangan bulat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 Memahami perkalian pecahan dengan bilangan asli dan menghitung hasilnya',
    indikatorSoal:
      'Disajikan ilustrasi cerita belanja, murid menghitung total berat belanjaan pecahan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.2 Memahami pembagian pecahan dengan bilangan asli dan menghitung hasilnya',
    indikatorSoal:
      'Murid menghitung hasil pembagian pecahan biasa dengan bilangan bulat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.2 Memahami pembagian pecahan dengan bilangan asli dan menghitung hasilnya',
    indikatorSoal:
      'Disajikan pembagian pita, murid menentukan panjang potongan pita pecahan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.3 Mengubah pecahan menjadi desimal serta membandingkan dan mengurutkan bilangan desimal',
    indikatorSoal:
      'Murid mengubah bentuk pecahan biasa ke bentuk desimal.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.3 Mengubah pecahan menjadi desimal serta membandingkan dan mengurutkan bilangan desimal',
    indikatorSoal:
      'Murid membandingkan dua bilangan desimal sampai per seratus.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'TP1.4 Mengubah pecahan menjadi desimal',
    indikatorSoal:
      'Murid menentukan bentuk desimal dari pecahan berpenyebut kelipatan 10.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.5 Membandingkan bilangan desimal sampai sepersepuluh',
    indikatorSoal:
      'Murid mengurutkan beberapa bilangan desimal dari yang terkecil.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.1 Memahami konsep rasio dan penggunaan bahasa rasio',
    indikatorSoal:
      'Murid mengidentifikasi pernyataan yang menyatakan konsep rasio.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.1 Memahami konsep rasio dan penggunaan bahasa rasio',
    indikatorSoal:
      'Disajikan data buah, murid menyatakan perbandingan dalam bentuk rasio.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 Menentukan kesamaan rasio menggunakan tabel rasio',
    indikatorSoal:
      'Disajikan tabel rasio rumpang, murid menentukan nilai yang belum diketahui.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 Menentukan kesamaan rasio menggunakan tabel rasio',
    indikatorSoal:
      'Murid menganalisis pasangan rasio yang bernilai sama.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.3 Menentukan rasio bagian terhadap bagian dan bagian terhadap keseluruhan',
    indikatorSoal:
      'Disajikan perbandingan jumlah siswa laki-laki dan perempuan, murid menentukan rasio bagian ke bagian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.3 Menentukan rasio bagian terhadap bagian dan bagian terhadap keseluruhan',
    indikatorSoal:
      'Disajikan jumlah kelereng merah dan biru, murid menentukan rasio kelereng merah terhadap total seluruh kelereng.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'TP2.4 Menentukan rasio satuan',
    indikatorSoal:
      'Murid menentukan nilai rasio satuan dari harga barang per unit.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'TP2.4 Menentukan rasio satuan',
    indikatorSoal:
      'Disajikan jarak tempuh dan waktu, murid menentukan rasio kecepatan per satuan waktu.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 & TP1.2 Perkalian & Pembagian Pecahan',
    indikatorSoal:
      'Murid menghitung hasil operasi hitung perkalian dan pembagian pecahan dengan bilangan asli.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.3 & TP1.4 Konversi & Urutan Bilangan Desimal',
    indikatorSoal:
      'Murid menentukan posisi bilangan desimal pada garis bilangan sederhana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.1 & TP2.3 Konsep Rasio Bagian & Keseluruhan',
    indikatorSoal:
      'Disajikan komposisi adonan kue, murid menentukan rasio terigu terhadap total bahan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 & TP2.4 Tabel Rasio & Rasio Satuan',
    indikatorSoal:
      'Murid menghitung jumlah bahan resep menggunakan tabel rasio satuan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 Memahami perkalian pecahan dengan bilangan asli',
    indikatorSoal:
      'Disajikan cerita panjang kain, murid menghitung total perkalian pecahan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.2 Memahami pembagian pecahan dengan bilangan asli',
    indikatorSoal:
      'Disajikan cerita pembagian susu botol, murid menghitung sisa atau hasil bagi pecahan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.5 Membandingkan bilangan desimal sampai sepersepuluh',
    indikatorSoal:
      'Murid menentukan tanda ketidaksamaan yang tepat antara dua bilangan desimal.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 Menentukan kesamaan rasio menggunakan tabel rasio',
    indikatorSoal:
      'Murid menentukan harga total barang menggunakan tabel rasio senilai.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'TP2.4 Menentukan rasio satuan',
    indikatorSoal:
      'Murid mengevaluasi perbandingan rasio satuan kecepatan dua kendaraan berbeda.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 Memahami perkalian pecahan dengan bilangan asli',
    indikatorSoal:
      'Murid menghitung hasil perkalian pecahan biasa dengan bilangan bulat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.2 Memahami pembagian pecahan dengan bilangan asli',
    indikatorSoal:
      'Murid menghitung hasil pembagian pecahan dengan bilangan asli.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'TP1.3 Mengubah pecahan menjadi desimal',
    indikatorSoal:
      'Murid menuliskan bentuk desimal dari pecahan seperempat (1/4).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.5 Membandingkan bilangan desimal sampai sepersepuluh',
    indikatorSoal:
      'Murid menuliskan angka persepuluhan dari suatu bilangan desimal.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.1 Memahami konsep rasio dan penggunaan bahasa rasio',
    indikatorSoal:
      'Murid menuliskan bentuk penulisan rasio yang benar (menggunakan tanda titik dua).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 Menentukan kesamaan rasio menggunakan tabel rasio',
    indikatorSoal:
      'Murid melengkapi nilai pada tabel rasio senilai dalam pembuatan sirup.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.3 Menentukan rasio bagian terhadap keseluruhan',
    indikatorSoal:
      'Murid menuliskan rasio jumlah siswa perempuan terhadap total siswa kelas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'TP2.4 Menentukan rasio satuan',
    indikatorSoal:
      'Murid menghitung harga 1 buah buku berdasarkan rasio satuan harga total.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'TP1.4 Mengubah pecahan menjadi desimal',
    indikatorSoal:
      'Murid menuliskan bentuk desimal dari pecahan tiga per delapan atau sejenisnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.3 Menentukan rasio bagian terhadap bagian',
    indikatorSoal:
      'Murid menentukan rasio jumlah kelereng merah terhadap kelereng hijau.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.1 & TP1.2 Perkalian & Pembagian Pecahan Kontekstual',
    indikatorSoal:
      'Murid menghitung total berat gula pasir dalam kantong plastik pecahan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'TP1.3 & TP1.5 Konversi Pecahan & Urutan Desimal',
    indikatorSoal:
      'Murid mengurutkan data berat badan hasil pengukuran desimal dan pecahan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.1 & TP2.3 Konsep Rasio Bagian dan Keseluruhan',
    indikatorSoal:
      'Murid menghitung jumlah siswa laki-laki berdasarkan rasio bagian terhadap keseluruhan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'TP2.2 & TP2.4 Tabel Rasio dan Rasio Satuan',
    indikatorSoal:
      'Murid menyelesaikan masalah resep kue menggunakan tabel kesamaan rasio.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'TP2.4 Menentukan rasio satuan kecepatan',
    indikatorSoal:
      'Murid menghitung perbandingan rasio satuan kecepatan tempuh kendaraan bermotor.',
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
  if (t.includes('kecepatan') || t.includes('waktu & jarak')) {
    return 'Pengukuran';
  }
  if (t.includes('pecahan') || t.includes('desimal')) {
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
