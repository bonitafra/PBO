// Kelas dasar Kapal
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

// Kelas KapalPenumpang yang mewarisi dari Kapal
class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Penumpang", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }

    getKapasitas() {
        return this.kapasitasPenumpang;
    }
}

// Kelas KapalEvergreen yang mewarisi dari Kapal
class KapalEvergreen extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKontainer) {
        super(nama, "Evergreen", panjang, lebar);
        this.kapasitasKontainer = kapasitasKontainer;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas kontainer: ${this.kapasitasKontainer} Kontainer.`;
    }

    getKapasitas() {
        return this.kapasitasKontainer;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}

// Kelas KapalPinisi yang mewarisi dari Kapal
class KapalPinisi extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Pinisi", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas penumpang: ${this.kapasitasPenumpang} orang.`;
    }

    getKapasitas() {
        return this.kapasitasPenumpang;
    }

    getJenis() {
        return `Jenis kapal: ${this.jenis}`;
    }
}

// Kelas StaffKapal
class StaffKapal {
    constructor(nama, jabatan, pengalamanTahun) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.pengalamanTahun = pengalamanTahun;
    }

    infoStaff() {
        return `${this.nama} adalah ${this.jabatan} dengan pengalaman ${this.pengalamanTahun} tahun.`;
    }

    getNama() {
        return this.nama;
    }

    getJabatan() {
        return this.jabatan;
    }
}

// Kelas TujuanKapal
class TujuanKapal {
    constructor(namaTujuan, deskripsi, estimasiWaktu) {
        this.namaTujuan = namaTujuan;
        this.deskripsi = deskripsi;
        this.estimasiWaktu = estimasiWaktu;
    }

    infoTujuan() {
        return `${this.namaTujuan}: ${this.deskripsi} (Estimasi waktu: ${this.estimasiWaktu} jam).`;
    }

    getNamaTujuan() {
        return this.namaTujuan;
    }

    getDeskripsi() {
        return this.deskripsi;
    }

    getEstimasiWaktu() {
        return this.estimasiWaktu;
    }
}

// Kelas PengaturanKapal untuk menghubungkan TujuanKapal dan StaffKapal
class PengaturanKapal {
    constructor(tujuanKapal, staffKapal) {
        this.tujuanKapal = tujuanKapal;
        this.staffKapal = staffKapal;
    }

    infoPengaturan() {
        return `Tujuan: ${this.tujuanKapal.getNamaTujuan()}\nDeskripsi: ${this.tujuanKapal.getDeskripsi()}\nEstimasi Waktu: ${this.tujuanKapal.getEstimasiWaktu()} jam\nStaff: ${this.staffKapal.getNama()}, Jabatan: ${this.staffKapal.getJabatan()}`;
    }
}

// Kelas MesinKapal
class MesinKapal {
    constructor(merek, daya, jenis) {
        this.merek = merek;
        this.daya = daya;
        this.jenis = jenis;
    }

    infoMesin() {
        return `Mesin merek ${this.merek} dengan daya ${this.daya} HP dan jenis ${this.jenis}.`;
    }

    getDaya() {
        return this.daya;
    }
}


const kapalBudionoSiregar = new KapalPenumpang("Budiono Siregar", 200, 100, 600);
console.log(kapalBudionoSiregar.infokapal());
console.log(`Kapasitas: ${kapalBudionoSiregar.getKapasitas()} orang`);

const tujuanPulauSeribu = new TujuanKapal("Pulau Seribu", "Destinasi wisata yang indah di Jakarta", 3);
const staffKapal = new StaffKapal("Bonita", "Nahkoda", 7);

const pengaturan = new PengaturanKapal(tujuanPulauSeribu, staffKapal);
console.log(pengaturan.infoPengaturan());

const kapalEvergreen = new KapalEvergreen("EverGreen", 400, 59, 10000);
console.log(kapalEvergreen.infokapal());
console.log(kapalEvergreen.getJenis());
console.log(`Kapasitas: ${kapalEvergreen.getKapasitas()} Kontainer`);

const kapalPinisi = new KapalPinisi("Lambo", 25, 5, 20);
console.log(kapalPinisi.infokapal());
console.log(kapalPinisi.getJenis());
console.log(`Kapasitas: ${kapalPinisi.getKapasitas()} orang`);

// Contoh penggunaan MesinKapal
const mesinKapal = new MesinKapal("Yanmar", 150, "Diesel");
console.log(mesinKapal.infoMesin());
