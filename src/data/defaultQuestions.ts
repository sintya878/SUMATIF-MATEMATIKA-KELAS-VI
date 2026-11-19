import { Question } from '../types';
import { RASIO_ILLUSTRATIONS } from './questionIllustrations';

export const INITIAL_QUESTIONS: Question[] = [
  // =====================================================================
  // BAGIAN 1: PILIHAN GANDA (18 SOAL - 4 OPSI JAWABAN A, B, C, D)
  // =====================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Konsep Dasar Rasio',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kelompok buah apel dan jeruk berikut ini!\nRasio paling sederhana dari banyak buah apel merah terhadap banyak buah jeruk manis adalah...',
    imageSvg: RASIO_ILLUSTRATIONS.q1_apel_jeruk,
    imageCaption: 'Ilustrasi kelompok 6 buah apel merah dan 4 buah jeruk manis',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '6 : 4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak buah apel merah = 6 buah.\nBanyak buah jeruk manis = 4 buah.\nRasio apel terhadap jeruk = 6 : 4.\nSederhanakan dengan membagi kedua bilangan dengan FPB-nya (2):\n(6 ÷ 2) : (4 ÷ 2) = 3 : 2.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rasio Bagian terhadap Keseluruhan',
    difficulty: 'Mudah',
    text: 'Di dalam kotak pensil milik Dayu terdapat 5 buah spidol biru dan 10 buah spidol hitam. Rasio paling sederhana dari banyak spidol biru terhadap seluruh spidol yang ada di dalam kotak pensil adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '2 : 3' },
      { id: 'D', text: '3 : 1' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak spidol biru = 5 buah.\nJumlah seluruh spidol = 5 + 10 = 15 buah.\nRasio spidol biru terhadap seluruh spidol = 5 : 15.\nSederhanakan dengan membagi keduanya dengan 5:\n(5 ÷ 5) : (15 ÷ 5) = 1 : 3.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penyederhanaan Rasio',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan kelereng biru dan merah di bawah ini!\nRasio paling sederhana antara banyak kelereng merah terhadap banyak kelereng biru adalah...',
    imageSvg: RASIO_ILLUSTRATIONS.q3_kelereng,
    imageCaption: 'Koleksi 8 kelereng biru dan 12 kelereng merah',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '4 : 3' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak kelereng merah = 12 butir.\nBanyak kelereng biru = 8 butir.\nRasio kelereng merah terhadap kelereng biru = 12 : 8.\nSederhanakan dengan membagi kedua bilangan dengan 4:\n(12 ÷ 4) : (8 ÷ 4) = 3 : 2.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Kesamaan Rasio (Rasio Setara)',
    difficulty: 'Mudah',
    text: 'Untuk membuat segelas minuman es sirup yang manisnya pas, Ibu mencampurkan sirup dan air matang dengan rasio 2 : 5. Jika Ibu ingin membuat minuman dalam jumlah banyak dengan menggunakan 6 gelas sirup, berapa gelas air matang yang diperlukan agar rasanya tetap sama?',
    options: [
      { id: 'A', text: '10 gelas' },
      { id: 'B', text: '12 gelas' },
      { id: 'C', text: '15 gelas' },
      { id: 'D', text: '18 gelas' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio sirup : air = 2 : 5.\nSirup yang digunakan = 6 gelas (kelipatan 6 ÷ 2 = 3 kali).\nMaka air matang yang diperlukan = 5 × 3 = 15 gelas.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rasio Menggunakan Model Pita',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram model pita perbandingan panjang Pita A dan Pita B berikut!\nJika panjang gabungan seluruh Pita A dan Pita B adalah 64 cm, berapakah panjang Pita B?',
    imageSvg: RASIO_ILLUSTRATIONS.q5_model_pita,
    imageCaption: 'Model pita menunjukkan Pita A = 3 bagian dan Pita B = 5 bagian sama panjang',
    options: [
      { id: 'A', text: '24 cm' },
      { id: 'B', text: '32 cm' },
      { id: 'C', text: '40 cm' },
      { id: 'D', text: '48 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dari model pita:\nPita A = 3 bagian, Pita B = 5 bagian.\nTotal seluruh bagian = 3 + 5 = 8 bagian.\nNilai 1 bagian = 64 cm ÷ 8 = 8 cm.\nPanjang Pita B = 5 × 8 cm = 40 cm.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Rasio Satuan (Harga per Unit)',
    difficulty: 'Mudah',
    text: 'Di koperasi siswa SD Negeri 1 Batuagung, harga 4 buah buku tulis adalah Rp18.000,00. Jika Made ingin membeli 7 buah buku tulis yang sama, berapakah uang yang harus dibayarkan oleh Made?',
    options: [
      { id: 'A', text: 'Rp27.000,00' },
      { id: 'B', text: 'Rp31.500,00' },
      { id: 'C', text: 'Rp32.500,00' },
      { id: 'D', text: 'Rp36.000,00' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga satuan 1 buku tulis = Rp18.000,00 ÷ 4 = Rp4.500,00.\nHarga 7 buku tulis = 7 × Rp4.500,00 = Rp31.500,00.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rasio Besaran dengan Satuan Berbeda',
    difficulty: 'Sedang',
    text: 'Panjang tali pramuka milik Adi adalah 1,5 meter, sedangkan panjang tali pramuka milik Beni adalah 75 cm. Rasio paling sederhana dari panjang tali Adi terhadap panjang tali Beni adalah...',
    options: [
      { id: 'A', text: '1 : 5' },
      { id: 'B', text: '2 : 1' },
      { id: 'C', text: '3 : 2' },
      { id: 'D', text: '1 : 50' },
    ],
    correctAnswer: 'B',
    explanation:
      'Samakan satuan panjang menjadi sentimeter (cm):\nPanjang tali Adi = 1,5 meter = 1,5 × 100 cm = 150 cm.\nPanjang tali Beni = 75 cm.\nRasio tali Adi : tali Beni = 150 : 75.\nBagi kedua angka dengan 75:\n(150 ÷ 75) : (75 ÷ 75) = 2 : 1.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Rasio Volume Campuran',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar dua gelas ukur berisi cat berwarna berikut ini!\nUntuk membuat warna hijau tertentu, cat biru dan cat kuning dicampurkan sesuai takaran pada gambar. Rasio paling sederhana volume cat biru terhadap cat kuning adalah...',
    imageSvg: RASIO_ILLUSTRATIONS.q8_gelas_cat,
    imageCaption: 'Takaran cat biru 300 ml dan cat kuning 450 ml',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 4' },
      { id: 'D', text: '4 : 5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Volume cat biru = 300 ml.\nVolume cat kuning = 450 ml.\nRasio cat biru : cat kuning = 300 : 450.\nSederhanakan dengan membagi kedua bilangan dengan FPB-nya yaitu 150:\n(300 ÷ 150) : (450 ÷ 150) = 2 : 3.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Rasio Diketahui Selisih',
    difficulty: 'Sedang',
    text: 'Rasio umur Kakak dan Adik saat ini adalah 5 : 2. Jika selisih umur mereka berdua adalah 12 tahun, berapakah umur Adik saat ini?',
    options: [
      { id: 'A', text: '6 tahun' },
      { id: 'B', text: '8 tahun' },
      { id: 'C', text: '16 tahun' },
      { id: 'D', text: '20 tahun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Selisih bagian rasio = 5 - 2 = 3 bagian.\nNilai 1 bagian = 12 tahun ÷ 3 = 4 tahun.\nUmur Adik = 2 bagian × 4 tahun = 8 tahun.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Rasio Diketahui Jumlah Total',
    difficulty: 'Sedang',
    text: 'Jumlah seluruh siswa kelas VI adalah 32 orang. Rasio banyak siswa laki-laki terhadap banyak siswa perempuan adalah 3 : 5. Berapakah banyak siswa perempuan di kelas VI tersebut?',
    options: [
      { id: 'A', text: '12 orang' },
      { id: 'B', text: '16 orang' },
      { id: 'C', text: '20 orang' },
      { id: 'D', text: '24 orang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah bagian rasio = 3 + 5 = 8 bagian.\nNilai 1 bagian = 32 ÷ 8 = 4 orang.\nBanyak siswa perempuan = 5 bagian × 4 orang = 20 orang.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Rasio Visual pada Grid Persegi',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar papan kotak persegi yang terdiri dari kotak diarsir biru dan kotak tidak diarsir (putih) di bawah ini!\nRasio paling sederhana dari banyak kotak yang diarsir biru terhadap banyak kotak yang tidak diarsir adalah...',
    imageSvg: RASIO_ILLUSTRATIONS.q11_grid_kotak,
    imageCaption: 'Papan grid 4 × 5 berisi 20 kotak (8 diarsir biru dan 12 putih)',
    options: [
      { id: 'A', text: '2 : 5' },
      { id: 'B', text: '2 : 3' },
      { id: 'C', text: '3 : 2' },
      { id: 'D', text: '3 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah kotak diarsir biru = 8 kotak.\nJumlah kotak tidak diarsir (putih) = 12 kotak.\nRasio diarsir : tidak diarsir = 8 : 12.\nBagi kedua angka dengan 4:\n(8 ÷ 4) : (12 ÷ 4) = 2 : 3.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Skala sebagai Bentuk Rasio',
    difficulty: 'Mudah',
    text: 'Jarak antara dua desa pada peta yang memiliki skala 1 : 200.000 adalah 4 cm. Jarak sebenarnya antara kedua desa tersebut adalah...',
    options: [
      { id: 'A', text: '0,8 km' },
      { id: 'B', text: '8 km' },
      { id: 'C', text: '80 km' },
      { id: 'D', text: '800 km' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak sebenarnya = Jarak pada peta × Penyebut skala\n= 4 cm × 200.000 = 800.000 cm.\nUbah cm menjadi km (dibagi 100.000):\n800.000 ÷ 100.000 = 8 km.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Menentukan Skala Denah',
    difficulty: 'Sedang',
    text: 'Panjang sebuah kolam renang sebenarnya adalah 25 meter. Pada buku gambar, kolam renang tersebut digambar dengan panjang 5 cm. Skala yang digunakan pada gambar tersebut adalah...',
    options: [
      { id: 'A', text: '1 : 50' },
      { id: 'B', text: '1 : 250' },
      { id: 'C', text: '1 : 500' },
      { id: 'D', text: '1 : 5.000' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah panjang sebenarnya ke satuan cm:\n25 meter = 25 × 100 cm = 2.500 cm.\nSkala = Panjang pada gambar : Panjang sebenarnya\n= 5 cm : 2.500 cm.\nSederhanakan dengan membagi 5:\n(5 ÷ 5) : (2.500 ÷ 5) = 1 : 500.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Rasio Tiga Besaran',
    difficulty: 'Sedang',
    text: 'Rasio uang tabungan Ani, Budi, dan Cici adalah 2 : 3 : 5. Jika jumlah seluruh uang tabungan mereka bertiga adalah Rp200.000,00, berapakah besar uang tabungan Cici?',
    options: [
      { id: 'A', text: 'Rp40.000,00' },
      { id: 'B', text: 'Rp60.000,00' },
      { id: 'C', text: 'Rp80.000,00' },
      { id: 'D', text: 'Rp100.000,00' },
    ],
    correctAnswer: 'D',
    explanation:
      'Jumlah seluruh bagian rasio = 2 + 3 + 5 = 10 bagian.\nNilai 1 bagian = Rp200.000,00 ÷ 10 = Rp20.000,00.\nUang tabungan Cici = 5 bagian × Rp20.000,00 = Rp100.000,00.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Laju Perubahan (Kecepatan)',
    difficulty: 'Sedang',
    text: 'Sebuah sepeda motor menempuh jarak 135 km dalam waktu 3 jam dengan kecepatan tetap. Jika pengendara tersebut melanjutkan perjalanan selama 5 jam dengan kecepatan yang sama, berapa kilometer jarak yang dapat ditempuh?',
    options: [
      { id: 'A', text: '180 km' },
      { id: 'B', text: '215 km' },
      { id: 'C', text: '225 km' },
      { id: 'D', text: '270 km' },
    ],
    correctAnswer: 'C',
    explanation:
      'Laju kecepatan per jam = 135 km ÷ 3 jam = 45 km/jam.\nJarak yang ditempuh dalam 5 jam = 5 jam × 45 km/jam = 225 km.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Rasio pada Resep Makanan',
    difficulty: 'Sedang',
    text: 'Perhatikan kartu takaran resep kue bolu untuk 1 loyang berikut ini!\nJika Ibu ingin membuat adonan dalam jumlah besar menggunakan 1 kg (1.000 gram) tepung terigu dengan rasio yang sama, berapa gram gula pasir yang dibutuhkan?',
    imageSvg: RASIO_ILLUSTRATIONS.q16_resep_kue,
    imageCaption: 'Takaran standar: 250 gram tepung terigu berbanding 100 gram gula pasir',
    options: [
      { id: 'A', text: '300 gram' },
      { id: 'B', text: '400 gram' },
      { id: 'C', text: '450 gram' },
      { id: 'D', text: '500 gram' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio tepung terigu : gula pasir = 250 : 100 (atau 5 : 2).\nTepung terigu yang digunakan = 1 kg = 1.000 gram.\nKelipatan adonan = 1.000 ÷ 250 = 4 kali lipat.\nGula pasir yang dibutuhkan = 4 × 100 gram = 400 gram.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Membandingkan Rasio Harga Satuan',
    difficulty: 'Sukar',
    text: 'Di sebuah minimarket dijual dua paket susu kemasan dengan merek dan ukuran yang sama. Paket A berisi 3 botol susu dijual seharga Rp13.500,00, sedangkan Paket B berisi 5 botol susu dijual seharga Rp20.000,00. Manakah pernyataan berikut yang paling tepat mengenai perbandingan harga kedua paket tersebut?',
    options: [
      { id: 'A', text: 'Harga per botol Paket A lebih murah Rp500,00 dibanding Paket B' },
      { id: 'B', text: 'Harga per botol Paket B lebih murah Rp500,00 dibanding Paket A' },
      { id: 'C', text: 'Harga per botol Paket A dan Paket B sama besar yaitu Rp4.000,00' },
      { id: 'D', text: 'Harga per botol Paket B lebih mahal Rp1.000,00 dibanding Paket A' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga satuan Paket A = Rp13.500,00 ÷ 3 = Rp4.500,00 per botol.\nHarga satuan Paket B = Rp20.000,00 ÷ 5 = Rp4.000,00 per botol.\nSelisih harga = Rp4.500,00 - Rp4.000,00 = Rp500,00.\nJadi, Paket B lebih murah Rp500,00 per botol dibandingkan Paket A.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Rasio Berbalik Nilai (Kecepatan & Waktu)',
    difficulty: 'Sukar',
    text: 'Perjalanan mobil dari Jembrana menuju Denpasar memakan waktu 3 jam jika melaju dengan kecepatan rata-rata 60 km/jam. Apabila pengemudi meningkatkan kecepatan rata-rata menjadi 90 km/jam, berapa lama waktu yang dibutuhkan untuk menempuh rute yang sama?',
    options: [
      { id: 'A', text: '1,5 jam' },
      { id: 'B', text: '2 jam' },
      { id: 'C', text: '2,5 jam' },
      { id: 'D', text: '4,5 jam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak Jembrana–Denpasar = 3 jam × 60 km/jam = 180 km.\nJika kecepatan dinaikkan menjadi 90 km/jam:\nWaktu tempuh = 180 km ÷ 90 km/jam = 2 jam.',
  },

  // =====================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (3 SOAL - MASING-MASING 4 OPSI A, B, C, D)
  // =====================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Skala & Rasio Ukuran Denah',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar denah taman sekolah berbentuk persegi panjang dengan skala 1 : 300 berikut!\nBerdasarkan gambar denah tersebut, pilihlah SEMUA pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)',
    imageSvg: RASIO_ILLUSTRATIONS.q19_denah_taman,
    imageCaption: 'Denah taman sekolah panjang 8 cm dan lebar 5 cm pada skala 1 : 300',
    options: [
      { id: 'A', text: 'Panjang taman sekolah sebenarnya adalah 24 meter' },
      { id: 'B', text: 'Lebar taman sekolah sebenarnya adalah 15 meter' },
      { id: 'C', text: 'Rasio panjang terhadap lebar taman sebenarnya adalah 5 : 8' },
      { id: 'D', text: 'Keliling taman sekolah sebenarnya adalah 78 meter' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '• Panjang sebenarnya = 8 cm × 300 = 2.400 cm = 24 meter (A Benar).\n• Lebar sebenarnya = 5 cm × 300 = 1.500 cm = 15 meter (B Benar).\n• Rasio panjang : lebar = 24 : 15 = 8 : 5, bukan 5 : 8 (C Salah).\n• Keliling sebenarnya = 2 × (24 + 15) = 2 × 39 = 78 meter (D Benar).\nJadi jawaban yang benar adalah A, B, dan D.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Rasio Campuran Tiga Bahan',
    difficulty: 'Sedang',
    text: 'Untuk membuat 1 teko jus buah segar, Putri mencampurkan 300 ml sari mangga, 200 ml sari jeruk, dan 500 ml air mineral. Manakah dari pernyataan berikut yang bernilai BENAR mengenai komposisi jus tersebut? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio paling sederhana sari mangga terhadap sari jeruk adalah 3 : 2' },
      { id: 'B', text: 'Rasio volume sari jeruk terhadap seluruh isi 1 teko jus adalah 1 : 5' },
      { id: 'C', text: 'Untuk membuat 3 teko jus yang sama dibutuhkan 600 ml sari mangga' },
      { id: 'D', text: 'Rasio sari mangga : sari jeruk : air mineral secara berurutan adalah 3 : 2 : 5' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '• Sari mangga : sari jeruk = 300 : 200 = 3 : 2 (A Benar).\n• Total 1 teko = 300 + 200 + 500 = 1.000 ml. Rasio sari jeruk : total = 200 : 1.000 = 1 : 5 (B Benar).\n• Untuk 3 teko dibutuhkan sari mangga = 3 × 300 ml = 900 ml, bukan 600 ml (C Salah).\n• Rasio 300 : 200 : 500 disederhanakan dibagi 100 menjadi 3 : 2 : 5 (D Benar).\nJadi jawaban yang benar adalah A, B, dan D.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Rasio pada Diagram Batang',
    difficulty: 'Sukar',
    text: 'Perhatikan diagram batang koleksi buku di Pojok Baca Kelas VI di bawah ini!\nBerdasarkan data pada diagram tersebut, pilihlah SEMUA pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)',
    imageSvg: RASIO_ILLUSTRATIONS.q21_diagram_buku,
    imageCaption: 'Koleksi buku: Fiksi 24, Sains 16, Komik Edukasi 12, Ensiklopedia 8',
    options: [
      { id: 'A', text: 'Rasio paling sederhana banyak buku Fiksi terhadap buku Sains adalah 3 : 2' },
      { id: 'B', text: 'Rasio banyak buku Ensiklopedia terhadap seluruh buku di Pojok Baca adalah 2 : 15' },
      { id: 'C', text: 'Rasio banyak buku Komik Edukasi terhadap buku Fiksi adalah 1 : 3' },
      { id: 'D', text: 'Perbandingan banyak buku Sains dan Komik Edukasi adalah 4 : 3' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Data diagram: Fiksi = 24, Sains = 16, Komik Edukasi = 12, Ensiklopedia = 8. Total buku = 24 + 16 + 12 + 8 = 60 buku.\n• Fiksi : Sains = 24 : 16 = 3 : 2 (A Benar).\n• Ensiklopedia : Total = 8 : 60 = 2 : 15 (B Benar).\n• Komik Edukasi : Fiksi = 12 : 24 = 1 : 2, bukan 1 : 3 (C Salah).\n• Sains : Komik Edukasi = 16 : 12 = 4 : 3 (D Benar).\nJadi jawaban yang benar adalah A, B, dan D.',
  },

  // =====================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL - 3 PERNYATAAN BENAR/SALAH)
  // =====================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Rasio Dimensi Bangun Datar',
    difficulty: 'Sedang',
    text: 'Perhatikan sketsa kolam ikan sekolah berbentuk persegi panjang berikut!\nDiketahui rasio panjang dan lebar kolam adalah 5 : 3 dengan panjang sebenarnya 15 meter. Tentukan kebenaran dari setiap pernyataan berikut:',
    imageSvg: RASIO_ILLUSTRATIONS.q22_kolam_ikan,
    imageCaption: 'Sketsa kolam ikan dengan rasio panjang : lebar = 5 : 3 dan panjang 15 meter',
    statements: [
      {
        id: 's1',
        text: 'Lebar kolam ikan sekolah tersebut adalah 9 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih antara panjang dan lebar kolam ikan tersebut adalah 6 meter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas permukaan kolam ikan tersebut adalah 120 meter persegi (m²).',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Rasio P : L = 5 : 3. Karena P = 15 m (5 × 3), maka L = 3 × 3 = 9 meter (BENAR).\n2. Selisih panjang dan lebar = 15 m - 9 m = 6 meter (BENAR).\n3. Luas kolam = 15 m × 9 m = 135 m² (SALAH, tertulis 120 m²).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Rasio Tiga Kelompok Nilai',
    difficulty: 'Sedang',
    text: 'Raka, Sinta, dan Tono mengumpulkan kelereng dengan rasio Raka : Sinta : Tono = 2 : 4 : 5. Diketahui banyak kelereng milik Raka adalah 14 butir. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Banyak kelereng milik Sinta adalah 28 butir.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak kelereng milik Tono adalah 35 butir.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah seluruh kelereng milik mereka bertiga adalah 75 butir.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1 bagian rasio = 14 butir ÷ 2 = 7 butir.\n1. Kelereng Sinta = 4 × 7 = 28 butir (BENAR).\n2. Kelereng Tono = 5 × 7 = 35 butir (BENAR).\n3. Jumlah seluruhnya = 14 + 28 + 35 = 77 butir (SALAH, tertulis 75 butir).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Rasio Harga Satuan Barang',
    difficulty: 'Mudah',
    text: 'Perhatikan daftar paket harga pensil yang dijual di Koperasi Sekolah berikut ini!\nBerdasarkan gambar daftar paket harga tersebut, tentukan kebenaran dari masing-masing pernyataan di bawah ini:',
    imageSvg: RASIO_ILLUSTRATIONS.q24_paket_pensil,
    imageCaption: 'Paket A (5 pensil = Rp12.500,00) dan Paket B (8 pensil = Rp18.400,00)',
    statements: [
      {
        id: 's1',
        text: 'Harga satuan per batang pensil pada Paket A adalah Rp2.500,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Harga satuan per batang pensil pada Paket B adalah Rp2.300,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membeli Paket A lebih hemat Rp200,00 per pensil dibandingkan Paket B.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Harga satuan Paket A = Rp12.500 ÷ 5 = Rp2.500,00/pensil (BENAR).\n2. Harga satuan Paket B = Rp18.400 ÷ 8 = Rp2.300,00/pensil (BENAR).\n3. Paket B yang lebih hemat Rp200,00 per pensil daripada Paket A, bukan Paket A (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Rasio Konsumsi Bahan Bakar & Jarak',
    difficulty: 'Sedang',
    text: 'Sebuah mobil keluarga mampu menempuh jarak sejauh 48 km dengan menghabiskan 4 liter bensin pada jalan yang datar. Tentukan kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Rasio jarak tempuh mobil terhadap pemakaian bensin adalah 12 km per liter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Untuk menempuh jarak 108 km, mobil tersebut membutuhkan 9 liter bensin.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Dengan persediaan 15 liter bensin, mobil hanya dapat menempuh jarak maksimal 160 km.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Rasio satuan = 48 km ÷ 4 liter = 12 km/liter (BENAR).\n2. Bensin untuk 108 km = 108 ÷ 12 = 9 liter (BENAR).\n3. Jarak untuk 15 liter = 15 × 12 km = 180 km (SALAH, tertulis 160 km).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Rasio & Skala Peta Jalur',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar peta jalur darat Denpasar – Negara – Gilimanuk dengan skala 1 : 1.500.000 berikut!\nTentukan kebenaran dari setiap pernyataan berikut berdasarkan gambar peta tersebut:',
    imageSvg: RASIO_ILLUSTRATIONS.q26_peta_jalur,
    imageCaption: 'Jarak pada peta: Denpasar–Negara = 6 cm dan Negara–Gilimanuk = 3 cm (Skala 1 : 1.500.000)',
    statements: [
      {
        id: 's1',
        text: 'Jarak sebenarnya dari kota Denpasar ke kota Negara adalah 90 km.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jarak sebenarnya dari kota Negara ke pelabuhan Gilimanuk adalah 45 km.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio jarak Denpasar–Negara terhadap Negara–Gilimanuk adalah 3 : 1.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1 cm pada peta mewakili 1.500.000 cm = 15 km.\n1. Jarak Denpasar–Negara = 6 × 15 km = 90 km (BENAR).\n2. Jarak Negara–Gilimanuk = 3 × 15 km = 45 km (BENAR).\n3. Rasio Denpasar–Negara : Negara–Gilimanuk = 6 : 3 = 2 : 1 (SALAH, tertulis 3 : 1).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Rasio Pembagian Uang Saku',
    difficulty: 'Mudah',
    text: 'Rasio uang saku Made dan Putu adalah 4 : 7. Jika jumlah uang saku mereka berdua adalah Rp55.000,00, tentukan kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Besar uang saku Made adalah Rp20.000,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Besar uang saku Putu adalah Rp35.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Selisih uang saku Made dan Putu adalah Rp10.000,00.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Jumlah bagian = 4 + 7 = 11 bagian. Nilai 1 bagian = Rp55.000 ÷ 11 = Rp5.000.\n1. Uang saku Made = 4 × Rp5.000 = Rp20.000,00 (BENAR).\n2. Uang saku Putu = 7 × Rp5.000 = Rp35.000,00 (BENAR).\n3. Selisih uang mereka = Rp35.000 - Rp20.000 = Rp15.000,00 (SALAH, tertulis Rp10.000,00).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Rasio Takaran Campuran Warna',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar aturan pencampuran cat dinding merah muda berikut!\nUntuk membuat 1 ember cat merah muda, dicampurkan 2 kaleng cat merah dan 3 kaleng cat putih. Tentukan kebenaran dari setiap pernyataan berikut:',
    imageSvg: RASIO_ILLUSTRATIONS.q28_kaleng_cat,
    imageCaption: 'Komposisi 1 ember cat merah muda: 2 kaleng merah + 3 kaleng putih',
    statements: [
      {
        id: 's1',
        text: 'Rasio banyak cat merah terhadap seluruh campuran cat dalam 1 ember adalah 2 : 5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Untuk membuat 4 ember cat merah muda dengan warna sama, dibutuhkan 8 kaleng cat merah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika tersedia 15 kaleng cat putih, cat merah yang harus dicampurkan adalah 12 kaleng.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Total kaleng dalam 1 ember = 2 + 3 = 5 kaleng. Rasio merah : total = 2 : 5 (BENAR).\n2. Untuk 4 ember dibutuhkan cat merah = 4 × 2 = 8 kaleng (BENAR).\n3. Jika cat putih 15 kaleng (5 kali lipat dari 3), maka cat merah = 5 × 2 = 10 kaleng (SALAH, tertulis 12 kaleng).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Rasio Bagian Data Kelas',
    difficulty: 'Mudah',
    text: 'Dari 40 siswa kelas VI di SD Negeri 1 Batuagung, sebanyak 16 siswa mengikuti ekstrakurikuler Pramuka, 12 siswa mengikuti Tari Bali, dan sisanya mengikuti Sepak Bola. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Banyak siswa yang mengikuti ekstrakurikuler Sepak Bola adalah 12 siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio paling sederhana siswa Pramuka terhadap seluruh siswa kelas VI adalah 2 : 5.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio banyak siswa Tari Bali terhadap siswa Sepak Bola adalah 2 : 1.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Siswa Sepak Bola = 40 - (16 + 12) = 40 - 28 = 12 siswa (BENAR).\n2. Rasio Pramuka : Seluruh siswa = 16 : 40 = (16 ÷ 8) : (40 ÷ 8) = 2 : 5 (BENAR).\n3. Rasio Tari Bali : Sepak Bola = 12 : 12 = 1 : 1 (SALAH, tertulis 2 : 1).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Rasio Debit Aliran Air',
    difficulty: 'Sukar',
    text: 'Sebuah kran air di taman sekolah mengalirkan air bersih sebanyak 15 liter dalam waktu 3 menit dengan aliran yang stabil. Tentukan kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Laju debit aliran air dari kran tersebut adalah 5 liter per menit.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam waktu 12 menit, banyak air yang keluar dari kran tersebut adalah 60 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Untuk mengisi galon kosong berkapasitas 20 liter hingga penuh dibutuhkan waktu 5 menit.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Debit kran = 15 liter ÷ 3 menit = 5 liter/menit (BENAR).\n2. Air selama 12 menit = 12 menit × 5 liter/menit = 60 liter (BENAR).\n3. Waktu mengisi 20 liter = 20 liter ÷ 5 liter/menit = 4 menit (SALAH, tertulis 5 menit).',
  },
];
