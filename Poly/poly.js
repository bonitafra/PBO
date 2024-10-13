// Kelas Kapal untuk mendefinisikan atribut dasar kapal
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama; // Menyimpan nama kapal
        this.jenis = jenis; // Menyimpan jenis kapal
        this.panjang = panjang; // Menyimpan panjang kapal
        this.lebar = lebar; // Menyimpan lebar kapal
    }

    // Metode untuk memberikan informasi tentang kapal
    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

// Kelas KapalPenumpang yang mewarisi dari kelas Kapal
class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Penumpang", panjang, lebar); // Memanggil konstruktor dari kelas super
        this.kapasitasPenumpang = kapasitasPenumpang; // Menyimpan kapasitas penumpang
    }

    // Metode informasi tentang kapal penumpang
    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }

    // Metode untuk mendapatkan kapasitas penumpang
    getKapasitas() {
        return this.kapasitasPenumpang; // Mengembalikan kapasitas penumpang
    }
}

// Kelas KapalEvergreen yang mewarisi dari kelas Kapal
class KapalEvergreen extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKontainer) {
        super(nama, "Evergreen", panjang, lebar); // Memanggil konstruktor dari kelas super
        this.kapasitasKontainer = kapasitasKontainer; // Menyimpan kapasitas kontainer
    }

    // Metod informasi tentang kapal evergreen
    infokapal() {
        return `${super.infokapal()} Kapasitas kontainer: ${this.kapasitasKontainer} Kontainer.`;
    }

    // Metode untuk mendapatkan kapasitas kontainer
    getKapasitas() {
        return this.kapasitasKontainer; // Mengembalikan kapasitas kontainer
    }

    // Metode untuk mendapatkan jenis kapal
    getJenis() {
        return `Jenis kapal: ${this.jenis}`; // Mengembalikan jenis kapal
    }
}

// Kelas KapalPinisi yang mewarisi dari kelas Kapal
class KapalPinisi extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Pinisi", panjang, lebar); // Memanggil konstruktor dari kelas super
        this.kapasitasPenumpang = kapasitasPenumpang; // Menyimpan kapasitas penumpang
    }

    // Metode informasi tentang kapal pinisi
    infokapal() {
        return `${super.infokapal()} Kapasitas penumpang: ${this.kapasitasPenumpang} orang.`;
    }

    // Metode untuk mendapatkan kapasitas penumpang
    getKapasitas() {
        return this.kapasitasPenumpang; // Mengembalikan kapasitas penumpang
    }

    // Metode untuk mendapatkan jenis kapal
    getJenis() {
        return `Jenis kapal: ${this.jenis}`; // Mengembalikan jenis kapal
    }
}

// Kelas StaffKapal untuk mendefinisikan atribut staff kapal
class StaffKapal {
    constructor(nama, jabatan, pengalamanTahun) {
        this.nama = nama; // Menyimpan nama staff
        this.jabatan = jabatan; // Menyimpan jabatan staff
        this.pengalamanTahun = pengalamanTahun; // Menyimpan pengalaman tahun
    }

    // Metode untuk memberikan informasi tentang staff
    infoStaff() {
        return `${this.nama} adalah ${this.jabatan} dengan pengalaman ${this.pengalamanTahun} tahun.`;
    }

    // Metode untuk mendapatkan nama staff
    getNama() {
        return this.nama; // Mengembalikan nama staff
    }

    // Metode untuk mendapatkan jabatan staff
    getJabatan() {
        return this.jabatan; // Mengembalikan jabatan staff
    }
}

// Kelas TujuanKapal untuk mendefinisikan tujuan kapal
class TujuanKapal {
    constructor(namaTujuan, deskripsi, estimasiWaktu) {
        this.namaTujuan = namaTujuan; // Menyimpan nama tujuan
        this.deskripsi = deskripsi; // Menyimpan deskripsi tujuan
        this.estimasiWaktu = estimasiWaktu; // Menyimpan estimasi waktu
    }

    // Metode untuk memberikan informasi tentang tujuan
    infoTujuan() {
        return `${this.namaTujuan}: ${this.deskripsi} (Estimasi waktu: ${this.estimasiWaktu} jam).`;
    }

    // Metode untuk mendapatkan nama tujuan
    getNamaTujuan() {
        return this.namaTujuan; // Mengembalikan nama tujuan
    }

    // Metode untuk mendapatkan deskripsi tujuan
    getDeskripsi() {
        return this.deskripsi; // Mengembalikan deskripsi tujuan
    }

    // Metode untuk mendapatkan estimasi waktu
    getEstimasiWaktu() {
        return this.estimasiWaktu; // Mengembalikan estimasi waktu
    }
}

// Kelas PengaturanKapal untuk menghubungkan tujuan kapal dan staff kapal
class PengaturanKapal {
    constructor(tujuanKapal, staffKapal) {
        this.tujuanKapal = tujuanKapal; // Menyimpan objek tujuan kapal
        this.staffKapal = staffKapal; // Menyimpan objek staff kapal
    }

    // Metode untuk memberikan informasi pengaturan kapal
    infoPengaturan() {
        return `Tujuan: ${this.tujuanKapal.getNamaTujuan()}\nDeskripsi: ${this.tujuanKapal.getDeskripsi()}\nEstimasi Waktu: ${this.tujuanKapal.getEstimasiWaktu()} jam\nStaff: ${this.staffKapal.getNama()}, Jabatan: ${this.staffKapal.getJabatan()}`;
    }
}

// Kelas MesinKapal untuk mendefinisikan atribut mesin kapal
class MesinKapal {
    constructor(merek, daya, jenis) {
        this.merek = merek; // Menyimpan merek mesin
        this.daya = daya; // Menyimpan daya mesin
        this.jenis = jenis; // Menyimpan jenis mesin
    }

    // Metode untuk memberikan informasi tentang mesin
    infoMesin() {
        return `Mesin merek ${this.merek} dengan daya ${this.daya} HP dan jenis ${this.jenis}.`;
    }

    // Metode untuk mendapatkan daya mesin
    getDaya() {
        return this.daya; // Mengembalikan daya mesin
    }
}

// Membuat objek kapal penumpang
const kapalBudionoSiregar = new KapalPenumpang("Budiono Siregar", 200, 100, 600);
console.log(kapalBudionoSiregar.infokapal()); // Menampilkan informasi kapal
console.log(`Kapasitas: ${kapalBudionoSiregar.getKapasitas()} orang`); // Menampilkan kapasitas penumpang

// Membuat objek tujuan kapal dan staff kapal
const tujuanPulauSeribu = new TujuanKapal("Pulau Seribu", "Destinasi wisata yang indah di Jakarta", 3);
const staffKapal = new StaffKapal("Bonita", "Nahkoda", 7);

// Menghubungkan tujuan kapal dan staff kapal
const pengaturan = new PengaturanKapal(tujuanPulauSeribu, staffKapal);
console.log(pengaturan.infoPengaturan()); // Menampilkan informasi pengaturan kapal

// Membuat objek kapal evergreen
const kapalEvergreen = new KapalEvergreen("EverGreen", 400, 59, 10000);
console.log(kapalEvergreen.infokapal()); // Menampilkan informasi kapal evergreen
console.log(kapalEvergreen.getJenis()); // Menampilkan jenis kapal evergreen
console.log(`Kapasitas: ${kapalEvergreen.getKapasitas()} Kontainer`); // Menampilkan kapasitas kontainer

// Membuat objek kapal pinisi
const kapalPinisi = new KapalPinisi("Lambo", 25, 5, 20);
console.log(kapalPinisi.infokapal()); // Menampilkan informasi kapal pinisi
console.log(kapalPinisi.getJenis()); // Menampilkan jenis kapal pinisi
console.log(`Kapasitas: ${kapalPinisi.getKapasitas()} orang`); // Menampilkan kapasitas penumpang

// Contoh penggunaan kelas MesinKapal
const mesinKapal = new MesinKapal("Yanmar", 150, "Diesel");
console.log(mesinKapal.infoMesin()); // Menampilkan informasi mesin kapal
