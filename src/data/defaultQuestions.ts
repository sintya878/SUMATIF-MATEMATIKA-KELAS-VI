import { Question } from '../types';
import { QUESTION_ILLUSTRATIONS } from './questionIllustrations';

export const INITIAL_QUESTIONS: Question[] = [
  // =====================================================================
  // BAGIAN 1: PILIHAN GANDA (26 SOAL - MASING-MASING 4 OPSI A, B, C, D)
  // =====================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Perkalian Pecahan & Bilangan Asli',
    difficulty: 'Mudah',
    text: 'Hasil perhitungan dari operasi perkalian pecahan 3/4 × 12 adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '16' },
    ],
    correctAnswer: 'C',
    explanation:
      '3/4 × 12 = (3 × 12) / 4 = 36 / 4 = 9.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Operasi Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi belanjaan Ibu di toko sembako berikut!\nIbu membeli 4 kantong gula pasir yang masing-masing beratnya 3/4 kg dan 2 bungkus tepung terigu yang masing-masing beratnya 1/2 kg. Berapakah total berat seluruh belanjaan Ibu?',
    imageSvg: QUESTION_ILLUSTRATIONS.q2_belanja_pecahan,
    imageCaption: '4 kantong gula pasir (@ 3/4 kg) dan 2 bungkus tepung (@ 1/2 kg)',
    options: [
      { id: 'A', text: '3 kg' },
      { id: 'B', text: '3 1/2 kg' },
      { id: 'C', text: '4 kg' },
      { id: 'D', text: '5 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Berat gula pasir = 4 × 3/4 kg = 12/4 kg = 3 kg.\nBerat tepung terigu = 2 × 1/2 kg = 2/2 kg = 1 kg.\nTotal berat belanjaan = 3 kg + 1 kg = 4 kg.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Pembagian Pecahan & Bilangan Asli',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi pembagian pecahan 4/5 ÷ 2 adalah...',
    options: [
      { id: 'A', text: '1/5' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '4/10' },
      { id: 'D', text: '8/5' },
    ],
    correctAnswer: 'B',
    explanation:
      '4/5 ÷ 2 = 4/5 × 1/2 = 4/10.\nSederhanakan dengan membagi pembilang dan penyebut dengan 2: (4 ÷ 2)/(10 ÷ 2) = 2/5.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Aplikasi Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi pemotongan pita berikut ini!\nDayu memiliki seutas pita sepanjang 3/4 meter. Pita tersebut dipotong menjadi 3 bagian yang sama panjang untuk menghias kado. Panjang setiap potongan pita adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q4_potong_pita,
    imageCaption: 'Pita sepanjang 3/4 meter dibagi menjadi 3 bagian sama panjang',
    options: [
      { id: 'A', text: '1/4 meter' },
      { id: 'B', text: '1/3 meter' },
      { id: 'C', text: '3/8 meter' },
      { id: 'D', text: '9/4 meter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Panjang tiap potongan = 3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 meter.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Konversi Pecahan ke Desimal',
    difficulty: 'Mudah',
    text: 'Bentuk bilangan desimal dari pecahan biasa 3/4 adalah...',
    options: [
      { id: 'A', text: '0,25' },
      { id: 'B', text: '0,34' },
      { id: 'C', text: '0,75' },
      { id: 'D', text: '0,80' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah penyebut menjadi 100: 3/4 = (3 × 25) / (4 × 25) = 75/100 = 0,75.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Membandingkan Desimal',
    difficulty: 'Sedang',
    text: 'Diketahui dua bilangan desimal sampai per seratus, yaitu 0,68 dan 0,72. Perbandingan yang paling tepat antara kedua bilangan desimal tersebut adalah...',
    options: [
      { id: 'A', text: '0,68 > 0,72 karena angka 8 lebih besar dari 2' },
      { id: 'B', text: '0,68 < 0,72 karena angka persepuluhan 6 lebih kecil dari 7' },
      { id: 'C', text: '0,68 = 0,72 karena keduanya bernilai kurang dari 1' },
      { id: 'D', text: '0,72 < 0,68 karena angka 2 lebih kecil dari 8' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bandingkan nilai tempat dari kiri ke kanan:\nSatuan sama (0 = 0).\nAngka persepuluhan pada 0,68 adalah 6, sedangkan pada 0,72 adalah 7.\nKarena 6 < 7, maka 0,68 < 0,72.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Konversi Pecahan ke Desimal',
    difficulty: 'Mudah',
    text: 'Bentuk bilangan desimal dari pecahan berpenyebut kelipatan sepuluh 7/100 adalah...',
    options: [
      { id: 'A', text: '0,7' },
      { id: 'B', text: '0,07' },
      { id: 'C', text: '0,007' },
      { id: 'D', text: '7,10' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pecahan 7/100 berarti 7 perseratusan, sehingga terdapat 2 angka di belakang koma: 0,07.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengurutkan Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Perhatikan kumpulan bilangan desimal berikut: 0,8 ; 0,45 ; 0,75 ; 0,5. Urutan bilangan desimal tersebut dari yang terkecil hingga terbesar adalah...',
    options: [
      { id: 'A', text: '0,5 ; 0,8 ; 0,45 ; 0,75' },
      { id: 'B', text: '0,45 ; 0,5 ; 0,75 ; 0,8' },
      { id: 'C', text: '0,45 ; 0,75 ; 0,5 ; 0,8' },
      { id: 'D', text: '0,8 ; 0,75 ; 0,5 ; 0,45' },
    ],
    correctAnswer: 'B',
    explanation:
      'Samakan menjadi dua angka di belakang koma:\n0,8 = 0,80 | 0,45 = 0,45 | 0,75 = 0,75 | 0,5 = 0,50.\nUrutan dari yang terkecil: 0,45 ; 0,5 ; 0,75 ; 0,8.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Konsep Bahasa Rasio',
    difficulty: 'Mudah',
    text: 'Dalam kegiatan pramuka terdapat 12 siswa laki-laki dan 18 siswa perempuan. Pernyataan bahasa rasio yang tepat untuk menggambarkan perbandingan tersebut adalah...',
    options: [
      { id: 'A', text: 'Untuk setiap 2 siswa laki-laki terdapat 3 siswa perempuan' },
      { id: 'B', text: 'Untuk setiap 3 siswa laki-laki terdapat 2 siswa perempuan' },
      { id: 'C', text: 'Jumlah siswa laki-laki lebih banyak 6 orang dari perempuan' },
      { id: 'D', text: 'Untuk setiap 1 siswa laki-laki terdapat 2 siswa perempuan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasio laki-laki : perempuan = 12 : 18.\nSederhanakan dengan membagi 6: (12 ÷ 6) : (18 ÷ 6) = 2 : 3.\nArtinya, untuk setiap 2 siswa laki-laki terdapat 3 siswa perempuan.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Penggunaan Bahasa Rasio',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar data buah apel merah dan jeruk manis berikut ini!\nPerbandingan banyak buah apel merah terhadap buah jeruk manis bila dinyatakan dalam bentuk rasio paling sederhana adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q10_buah_rasio,
    imageCaption: 'Data buah: 6 buah apel merah dan 4 buah jeruk manis',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '4 : 6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak apel merah = 6 buah, jeruk manis = 4 buah.\nRasio apel : jeruk = 6 : 4 = (6 ÷ 2) : (4 ÷ 2) = 3 : 2.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Tabel Kesamaan Rasio',
    difficulty: 'Sedang',
    text: 'Perhatikan tabel kesamaan rasio rumpang harga buku tulis berikut ini!\nBerdasarkan pola pada tabel tersebut, nilai yang tepat untuk mengisi bagian yang masih kosong (untuk 6 buku tulis) adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q11_tabel_rasio,
    imageCaption: 'Tabel rasio rumpang: 2 buku = Rp9.000, 4 buku = Rp18.000, 6 buku = ?, 10 buku = Rp45.000',
    options: [
      { id: 'A', text: 'Rp24.000,00' },
      { id: 'B', text: 'Rp27.000,00' },
      { id: 'C', text: 'Rp30.000,00' },
      { id: 'D', text: 'Rp36.000,00' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga 2 buku = Rp9.000,00.\nUntuk 6 buku (kelipatan 6 ÷ 2 = 3 kali):\nHarga = 3 × Rp9.000,00 = Rp27.000,00.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Analisis Rasio Senilai',
    difficulty: 'Sukar',
    text: 'Manakah di antara pasangan rasio berikut ini yang bernilai sama (senilai) dengan rasio 3 : 4?',
    options: [
      { id: 'A', text: '9 : 16' },
      { id: 'B', text: '12 : 16' },
      { id: 'C', text: '15 : 24' },
      { id: 'D', text: '18 : 20' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio senilai diperoleh dengan mengalikan kedua bilangan dengan faktor yang sama:\n3 : 4 = (3 × 4) : (4 × 4) = 12 : 16.\nOpsi lain jika disederhanakan: 9:16 (tetap), 15:24 = 5:8, 18:20 = 9:10.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Rasio Bagian Terhadap Bagian',
    difficulty: 'Sedang',
    text: 'Di ruang perpustakaan sekolah terdapat 15 siswa laki-laki dan 20 siswa perempuan yang sedang membaca buku. Rasio paling sederhana dari banyak siswa laki-laki terhadap banyak siswa perempuan adalah...',
    options: [
      { id: 'A', text: '3 : 4' },
      { id: 'B', text: '4 : 3' },
      { id: 'C', text: '3 : 7' },
      { id: 'D', text: '5 : 4' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasio laki-laki : perempuan = 15 : 20.\nBagi kedua bilangan dengan FPB-nya yaitu 5:\n(15 ÷ 5) : (20 ÷ 5) = 3 : 4.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Rasio Bagian Terhadap Keseluruhan',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar kumpulan kelereng merah dan kelereng biru milik Budi di bawah ini!\nRasio paling sederhana dari banyak kelereng merah terhadap total seluruh kelereng yang dimiliki Budi adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q14_kelereng_total,
    imageCaption: 'Kelereng merah 9 butir dan kelereng biru 6 butir',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '2 : 5' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kelereng merah = 9 butir.\nKelereng biru = 6 butir.\nTotal seluruh kelereng = 9 + 6 = 15 butir.\nRasio merah terhadap total = 9 : 15 = (9 ÷ 3) : (15 ÷ 3) = 3 : 5.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Konsep Rasio Satuan',
    difficulty: 'Sedang',
    text: 'Beni membeli 5 buah pensil warna di koperasi sekolah dengan total harga Rp17.500,00. Nilai rasio satuan atau harga untuk 1 buah pensil warna tersebut adalah...',
    options: [
      { id: 'A', text: 'Rp2.500,00' },
      { id: 'B', text: 'Rp3.000,00' },
      { id: 'C', text: 'Rp3.500,00' },
      { id: 'D', text: 'Rp4.500,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio satuan = Total harga ÷ Banyak barang = Rp17.500,00 ÷ 5 = Rp3.500,00 per buah.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Aplikasi Rasio Satuan Kecepatan',
    difficulty: 'Sukar',
    text: 'Sebuah mobil keluarga melakukan perjalanan antarkota menempuh jarak 180 km dalam waktu 3 jam dengan kecepatan tetap. Rasio kecepatan rata-rata mobil tersebut per satuan waktu adalah...',
    options: [
      { id: 'A', text: '45 km/jam' },
      { id: 'B', text: '55 km/jam' },
      { id: 'C', text: '60 km/jam' },
      { id: 'D', text: '90 km/jam' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio kecepatan satuan = Jarak tempuh ÷ Waktu tempuh = 180 km ÷ 3 jam = 60 km/jam.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Operasi Campuran Pecahan',
    difficulty: 'Sukar',
    text: 'Hasil perhitungan dari operasi hitung campuran pecahan (3/5 × 10) ÷ 4 adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1 1/2' },
      { id: 'C', text: '2 1/2' },
      { id: 'D', text: '3' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kerjakan di dalam kurung terlebih dahulu:\n3/5 × 10 = 30/5 = 6.\nSelanjutnya dibagi 4: 6 ÷ 4 = 6/4 = 3/2 = 1 1/2.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Urutan Desimal Kompleks',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar garis bilangan sederhana berikut!\nTitik X terletak tepat di tengah-tengah antara 0,7 dan 0,8. Bilangan desimal yang tepat untuk menyatakan posisi titik X adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q18_garis_bilangan,
    imageCaption: 'Garis bilangan 0 hingga 1 dengan posisi Titik X antara 0,7 dan 0,8',
    options: [
      { id: 'A', text: '0,65' },
      { id: 'B', text: '0,72' },
      { id: 'C', text: '0,75' },
      { id: 'D', text: '0,85' },
    ],
    correctAnswer: 'C',
    explanation:
      '0,7 = 0,70 dan 0,8 = 0,80.\nBilangan yang terletak tepat di tengah-tengah antara 0,70 dan 0,80 adalah 0,75.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Analisis Rasio Kontekstual',
    difficulty: 'Sukar',
    text: 'Perhatikan komposisi bahan adonan kue berikut: tepung terigu 300 gram, gula pasir 150 gram, dan mentega 150 gram.\nRasio paling sederhana dari berat tepung terigu terhadap total berat seluruh bahan adonan tersebut adalah...',
    imageSvg: QUESTION_ILLUSTRATIONS.q19_adonan_kue,
    imageCaption: 'Komposisi bahan: terigu 300 g, gula pasir 150 g, mentega 150 g',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '2 : 3' },
      { id: 'D', text: '2 : 1' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berat tepung terigu = 300 gram.\nTotal berat seluruh bahan = 300 + 150 + 150 = 600 gram.\nRasio terigu : total bahan = 300 : 600 = 1 : 2.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Skala & Perbandingan Senilai',
    difficulty: 'Sukar',
    text: 'Perhatikan tabel rasio satuan resep minuman jus buah berikut!\nJika Siti ingin membuat 5 gelas minuman jus buah dengan rasa yang sama persis, berapa mililiter (ml) sari buah yang ia butuhkan?',
    imageSvg: QUESTION_ILLUSTRATIONS.q20_tabel_resep,
    imageCaption: 'Tabel resep jus buah: 1 gelas = 150 ml sari buah & 50 ml gula cair',
    options: [
      { id: 'A', text: '600 ml' },
      { id: 'B', text: '650 ml' },
      { id: 'C', text: '750 ml' },
      { id: 'D', text: '900 ml' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dari tabel rasio satuan, 1 gelas membutuhkan 150 ml sari buah.\nUntuk 5 gelas = 5 × 150 ml = 750 ml sari buah.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Perkalian Pecahan Kontekstual',
    difficulty: 'Sedang',
    text: 'Ibu membeli 6 potong kain batik untuk membuat seragam keluarga. Jika panjang setiap potong kain adalah 3/4 meter, berapakah total panjang seluruh kain batik yang dibeli Ibu?',
    options: [
      { id: 'A', text: '3 1/2 meter' },
      { id: 'B', text: '4 meter' },
      { id: 'C', text: '4 1/2 meter' },
      { id: 'D', text: '5 meter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total panjang kain = 6 × 3/4 meter = 18/4 meter = 9/2 meter = 4 1/2 meter.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Pembagian Pecahan Kontekstual',
    difficulty: 'Sedang',
    text: 'Di dalam lemari es terdapat botol berisi 3/4 liter susu segar. Susu tersebut akan dituangkan sama banyak ke dalam 3 gelas kecil untuk sarapan. Berapa liter susu yang ada di setiap gelas?',
    options: [
      { id: 'A', text: '1/4 liter' },
      { id: 'B', text: '1/3 liter' },
      { id: 'C', text: '1/2 liter' },
      { id: 'D', text: '9/4 liter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Isi tiap gelas = 3/4 liter ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 liter.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Perbandingan Desimal Persepuluhan',
    difficulty: 'Sedang',
    text: 'Perhatikan kedua bilangan desimal berikut:  0,7  ...  0,4\nTanda ketidaksamaan atau perbandingan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '<' },
      { id: 'B', text: '>' },
      { id: 'C', text: '=' },
      { id: 'D', text: '≤' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada nilai tempat persepuluhan, 7 lebih besar daripada 4 (7 > 4), sehingga 0,7 > 0,4.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Tabel Rasio Harga Barang',
    difficulty: 'Sukar',
    text: 'Perhatikan tabel rasio senilai harga buku gambar di bawah ini!\nApabila Pak Guru membeli 8 buah buku gambar untuk hadiah lomba, berapakah harga total yang harus dibayar?',
    imageSvg: QUESTION_ILLUSTRATIONS.q24_tabel_harga,
    imageCaption: 'Tabel harga: 2 buku = Rp12.000, 3 buku = Rp18.000, 5 buku = Rp30.000',
    options: [
      { id: 'A', text: 'Rp42.000,00' },
      { id: 'B', text: 'Rp45.000,00' },
      { id: 'C', text: 'Rp48.000,00' },
      { id: 'D', text: 'Rp54.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Harga satuan 1 buku gambar = Rp12.000,00 ÷ 2 = Rp6.000,00.\nHarga 8 buku gambar = 8 × Rp6.000,00 = Rp48.000,00.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Rasio Satuan Waktu & Jarak',
    difficulty: 'Sukar',
    text: 'Sepeda motor A mampu menempuh jarak 120 km dalam waktu 2 jam, sedangkan mobil B menempuh jarak 210 km dalam waktu 3 jam. Manakah pernyataan evaluasi perbandingan kecepatan kedua kendaraan berikut yang benar?',
    options: [
      { id: 'A', text: 'Kecepatan rata-rata sepeda motor A lebih cepat daripada mobil B' },
      { id: 'B', text: 'Kecepatan rata-rata mobil B lebih cepat 10 km/jam dibanding sepeda motor A' },
      { id: 'C', text: 'Kecepatan rata-rata kedua kendaraan sama yaitu 65 km/jam' },
      { id: 'D', text: 'Selisih kecepatan kedua kendaraan adalah 20 km/jam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kecepatan sepeda motor A = 120 km ÷ 2 jam = 60 km/jam.\nKecepatan mobil B = 210 km ÷ 3 jam = 70 km/jam.\nSelisih = 70 - 60 = 10 km/jam.\nJadi, mobil B lebih cepat 10 km/jam dibandingkan sepeda motor A.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Operasi Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Hasil dari operasi perkalian pecahan biasa dengan bilangan bulat 5/6 × 18 adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '15' },
      { id: 'C', text: '16' },
      { id: 'D', text: '20' },
    ],
    correctAnswer: 'B',
    explanation:
      '5/6 × 18 = 5 × (18 ÷ 6) = 5 × 3 = 15.',
  },

  // =====================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (5 SOAL - MASING-MASING 3 OPSI A, B, C)
  // Ketentuan: Kemungkinan lebih dari 1 jawaban benar, setiap soal 3 pilihan jawaban
  // =====================================================================
  {
    id: 27,
    type: 'pgk',
    topic: 'Operasi Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan tiga pernyataan operasi pembagian pecahan dengan bilangan asli berikut! Pilihlah SEMUA pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Hasil dari 4/5 ÷ 2 adalah 2/5' },
      { id: 'B', text: 'Hasil dari 3/4 ÷ 3 adalah 1/4' },
      { id: 'C', text: 'Hasil dari 6/7 ÷ 3 adalah 3/7' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 4/5 ÷ 2 = 4/10 = 2/5 (A Benar).\n• 3/4 ÷ 3 = 3/12 = 1/4 (B Benar).\n• 6/7 ÷ 3 = 6/21 = 2/7, bukan 3/7 (C Salah).\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 28,
    type: 'pgk',
    topic: 'Konversi Pecahan Biasa ke Desimal',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar model pecahan seperempat (1/4) berikut ini!\nPilihlah SEMUA pernyataan yang bernilai BENAR mengenai bentuk desimal dan nilai pecahan 1/4! (Jawaban benar lebih dari satu)',
    imageSvg: QUESTION_ILLUSTRATIONS.q28_grid_seperempat,
    imageCaption: 'Model visual pecahan 1/4 (1 dari 4 bagian sama besar diarsir biru)',
    options: [
      { id: 'A', text: 'Bentuk bilangan desimal dari pecahan 1/4 adalah 0,25' },
      { id: 'B', text: 'Pecahan 1/4 senilai dengan pecahan 25/100' },
      { id: 'C', text: 'Bentuk bilangan desimal dari pecahan 1/4 adalah 0,4' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 1/4 = (1 × 25)/(4 × 25) = 25/100 (B Benar).\n• 25/100 dalam bentuk desimal adalah 0,25 (A Benar).\n• 0,4 bernilai 4/10 atau 2/5, bukan 1/4 (C Salah).\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 29,
    type: 'pgk',
    topic: 'Nilai Tempat Desimal',
    difficulty: 'Sedang',
    text: 'Perhatikan dua bilangan desimal berikut: 24,75 dan 8,39.\nPilihlah SEMUA pernyataan yang bernilai BENAR mengenai nilai tempat persepuluhan pada kedua bilangan tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Angka yang menempati nilai tempat persepuluhan pada bilangan 24,75 adalah 7' },
      { id: 'B', text: 'Angka yang menempati nilai tempat persepuluhan pada bilangan 8,39 adalah 3' },
      { id: 'C', text: 'Angka 5 pada bilangan 24,75 menempati nilai tempat persepuluhan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Pada 24,75: angka pertama di belakang koma (7) adalah persepuluhan, sedangkan angka 5 adalah perseratusan (A Benar, C Salah).\n• Pada 8,39: angka pertama di belakang koma (3) adalah persepuluhan (B Benar).\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 30,
    type: 'pgk',
    topic: 'Konsep Bahasa Rasio',
    difficulty: 'Mudah',
    text: 'Di atas meja belajar terdapat 4 buah pulpen dan 6 buah pensil. Pilihlah SEMUA cara penulisan rasio menggunakan tanda titik dua yang BENAR untuk membandingkan banyak pulpen terhadap pensil! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio banyak pulpen terhadap pensil ditulis 4 : 6' },
      { id: 'B', text: 'Bentuk rasio paling sederhana dari pulpen terhadap pensil adalah 2 : 3' },
      { id: 'C', text: 'Rasio banyak pulpen terhadap pensil dapat ditulis 6 : 4' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Urutan penulisan rasio "pulpen terhadap pensil" adalah 4 : 6 (A Benar).\n• Bentuk paling sederhana dari 4 : 6 adalah 2 : 3 (B Benar).\n• 6 : 4 adalah rasio pensil terhadap pulpen, terbalik urutannya (C Salah).\nJadi jawaban yang benar adalah A dan B.',
  },
  {
    id: 31,
    type: 'pgk',
    topic: 'Tabel Rasio Senilai',
    difficulty: 'Sukar',
    text: 'Perhatikan tabel rasio senilai pembuatan minuman sirup berikut ini!\nPilihlah SEMUA pernyataan yang bernilai BENAR untuk melengkapi nilai A dan B pada tabel tersebut! (Jawaban benar lebih dari satu)',
    imageSvg: QUESTION_ILLUSTRATIONS.q31_tabel_sirup,
    imageCaption: 'Tabel rasio minuman sirup: 2 gelas air berbanding 3 sendok sirup',
    options: [
      { id: 'A', text: 'Nilai A yang tepat untuk 4 gelas air adalah 6 sendok sirup' },
      { id: 'B', text: 'Nilai B yang tepat untuk 9 sendok sirup adalah 6 gelas air' },
      { id: 'C', text: 'Nilai A dan B berturut-turut adalah 5 dan 7' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Rasio dasar air : sirup = 2 : 3.\n• Untuk 4 gelas air (2 × 2), sirup A = 3 × 2 = 6 sendok (A Benar).\n• Untuk 9 sendok sirup (3 × 3), air B = 2 × 3 = 6 gelas (B Benar).\n• C salah karena A = 6 dan B = 6.\nJadi jawaban yang benar adalah A dan B.',
  },

  // =====================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL - 3 PERNYATAAN BENAR/SALAH)
  // =====================================================================
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Rasio Bagian Keseluruhan',
    difficulty: 'Sedang',
    text: 'Di kelas VI SD Negeri 1 Batuagung terdapat 12 siswa laki-laki dan 18 siswa perempuan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Total seluruh siswa di kelas VI tersebut adalah 30 siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio paling sederhana jumlah siswa perempuan terhadap total siswa kelas adalah 3 : 5.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio paling sederhana jumlah siswa perempuan terhadap total siswa kelas adalah 2 : 3.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Total siswa = 12 + 18 = 30 siswa (BENAR).\n2. Rasio perempuan : total = 18 : 30 = (18 ÷ 6) : (30 ÷ 6) = 3 : 5 (BENAR).\n3. 2 : 3 merupakan rasio laki-laki terhadap perempuan, bukan perempuan terhadap total (SALAH).',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Rasio Satuan Harga',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar paket 6 buah buku tulis di koperasi sekolah berikut dengan total harga Rp27.000,00!\nTentukan kebenaran dari masing-masing pernyataan di bawah ini (Pilih Benar atau Salah):',
    imageSvg: QUESTION_ILLUSTRATIONS.q33_rak_buku,
    imageCaption: '6 buah buku tulis dengan total harga Rp27.000,00',
    statements: [
      {
        id: 's1',
        text: 'Harga satuan untuk 1 buah buku tulis tersebut adalah Rp4.500,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika membeli 4 buah buku tulis yang sama, total uang yang harus dibayar adalah Rp18.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Dengan membawa uang Rp20.000,00, siswa sudah cukup untuk membeli 5 buah buku tulis tersebut.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Harga satuan 1 buku = Rp27.000 ÷ 6 = Rp4.500,00 (BENAR).\n2. Harga 4 buku = 4 × Rp4.500 = Rp18.000,00 (BENAR).\n3. Harga 5 buku = 5 × Rp4.500 = Rp22.500,00, sehingga uang Rp20.000,00 belum cukup (SALAH).',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Konversi Pecahan Per seratus',
    difficulty: 'Sedang',
    text: 'Ibu guru menuliskan tiga buah pecahan biasa di papan tulis, yaitu: 3/8, 3/4, dan 2/5. Tentukan kebenaran dari masing-masing pernyataan konversi ke bentuk desimal berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bentuk bilangan desimal dari pecahan tiga per delapan (3/8) adalah 0,375.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bentuk bilangan desimal dari pecahan 3/4 (senilai 75/100) adalah 0,75.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bentuk bilangan desimal dari pecahan 2/5 adalah 0,25.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 3/8 = (3 × 125)/(8 × 125) = 375/1.000 = 0,375 (BENAR).\n2. 3/4 = 75/100 = 0,75 (BENAR).\n3. 2/5 = 4/10 = 0,4, bukan 0,25 (SALAH).',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Rasio Kelereng',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar kumpulan kelereng merah dan kelereng hijau berikut ini!\nTentukan kebenaran dari masing-masing pernyataan mengenai rasio kelereng pada gambar tersebut (Pilih Benar atau Salah):',
    imageSvg: QUESTION_ILLUSTRATIONS.q35_kelereng_merah_hijau,
    imageCaption: 'Koleksi 10 kelereng merah dan 15 kelereng hijau',
    statements: [
      {
        id: 's1',
        text: 'Pada gambar terdapat 10 kelereng merah dan 15 kelereng hijau.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio paling sederhana jumlah kelereng merah terhadap kelereng hijau adalah 2 : 3.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio paling sederhana jumlah kelereng hijau terhadap kelereng merah adalah 2 : 3.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Jumlah kelereng merah = 10 butir, hijau = 15 butir (BENAR).\n2. Rasio merah : hijau = 10 : 15 = 2 : 3 (BENAR).\n3. Rasio hijau : merah = 15 : 10 = 3 : 2, bukan 2 : 3 (SALAH).',
  },
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Aplikasi Perkalian Pecahan',
    difficulty: 'Sukar',
    text: 'Di gudang koperasi tersedia 8 kantong plastik berisi gula pasir. Setiap kantong plastik berisi 3/4 kg gula pasir. Seluruh gula tersebut akan ditakar ulang ke dalam wadah kecil berkapasitas 1/2 kg. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Total berat seluruh gula pasir dalam 8 kantong plastik tersebut adalah 6 kg.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Apabila hanya diambil 4 kantong plastik saja, total berat gula pasirnya adalah 3 kg.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak wadah kecil berkapasitas 1/2 kg yang dibutuhkan untuk seluruh 6 kg gula adalah 10 wadah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Total 8 kantong = 8 × 3/4 kg = 24/4 = 6 kg (BENAR).\n2. Berat 4 kantong = 4 × 3/4 kg = 3 kg (BENAR).\n3. Banyak wadah 1/2 kg = 6 ÷ 1/2 = 6 × 2 = 12 wadah, bukan 10 wadah (SALAH).',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Pengurutan Desimal',
    difficulty: 'Sukar',
    text: 'Hasil pengukuran berat badan tiga siswa kelas VI tercatat sebagai berikut: Putu = 32,5 kg, Kadek = 32 1/4 kg, dan Komang = 32,8 kg. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Berat badan Kadek apabila dinyatakan dalam bentuk desimal adalah 32,25 kg.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Urutan nama siswa berdasarkan berat badan dari yang paling ringan adalah Kadek, Putu, lalu Komang.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang memiliki berat badan paling ringan di antara ketiganya adalah Putu.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 32 1/4 kg = 32 + 0,25 = 32,25 kg (BENAR).\n2. Perbandingan berat: 32,25 kg (Kadek) < 32,5 kg (Putu) < 32,8 kg (Komang). Urutan dari teringan: Kadek, Putu, Komang (BENAR).\n3. Siswa paling ringan adalah Kadek, bukan Putu (SALAH).',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Analisis Rasio Kelas',
    difficulty: 'Sukar',
    text: 'Jumlah seluruh siswa di sebuah kelas adalah 35 orang. Diketahui rasio jumlah siswa laki-laki terhadap keseluruhan siswa di kelas tersebut adalah 2 : 5. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Banyak siswa laki-laki di kelas tersebut adalah 14 orang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak siswa perempuan di kelas tersebut adalah 21 orang.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio paling sederhana jumlah siswa laki-laki terhadap siswa perempuan adalah 2 : 5.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Jumlah siswa laki-laki = (2/5) × 35 = 14 orang (BENAR).\n2. Jumlah siswa perempuan = 35 - 14 = 21 orang (BENAR).\n3. Rasio laki-laki : perempuan = 14 : 21 = 2 : 3, bukan 2 : 5 (SALAH).',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Perhitungan Rasio Senilai',
    difficulty: 'Sukar',
    text: 'Perhatikan tabel kesamaan rasio resep kue donat di bawah ini!\nTentukan kebenaran dari masing-masing pernyataan terkait perhitungan bahan resep tersebut (Pilih Benar atau Salah):',
    imageSvg: QUESTION_ILLUSTRATIONS.q39_tabel_kue,
    imageCaption: 'Tabel resep kue donat: 1 adonan = 200 g tepung terigu dan 2 butir telur',
    statements: [
      {
        id: 's1',
        text: 'Untuk membuat 3 adonan kue donat dibutuhkan 600 gram tepung terigu.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Untuk membuat 5 adonan kue donat dibutuhkan 10 butir telur.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Apabila Ibu menggunakan 1 kg (1.000 gram) tepung terigu, maka telur yang dibutuhkan adalah 8 butir.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 3 adonan = 3 × 200 gram = 600 gram tepung terigu (BENAR).\n2. 5 adonan = 5 × 2 butir = 10 butir telur (BENAR).\n3. 1.000 gram tepung terigu setara dengan 1.000 ÷ 200 = 5 adonan, sehingga membutuhkan 5 × 2 = 10 butir telur, bukan 8 butir (SALAH).',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Aplikasi Rasio Kecepatan',
    difficulty: 'Sukar',
    text: 'Perhatikan data jarak tempuh dan waktu perjalanan dua kendaraan bermotor berikut ini!\nBus Sekolah menempuh jarak 150 km dalam 3 jam, sedangkan Mobil Dinas menempuh jarak 160 km dalam 2 jam. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: QUESTION_ILLUSTRATIONS.q40_kendaraan,
    imageCaption: 'Bus Sekolah (150 km dalam 3 jam) dan Mobil Dinas (160 km dalam 2 jam)',
    statements: [
      {
        id: 's1',
        text: 'Rasio satuan kecepatan rata-rata Bus Sekolah adalah 50 km per jam.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio satuan kecepatan rata-rata Mobil Dinas adalah 80 km per jam.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Selisih kecepatan rata-rata antara Mobil Dinas dan Bus Sekolah adalah 20 km per jam.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kecepatan Bus Sekolah = 150 km ÷ 3 jam = 50 km/jam (BENAR).\n2. Kecepatan Mobil Dinas = 160 km ÷ 2 jam = 80 km/jam (BENAR).\n3. Selisih kecepatan = 80 - 50 = 30 km/jam, bukan 20 km/jam (SALAH).',
  },
];
