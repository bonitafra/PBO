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

const kapalBudionoSiregar = new KapalPenumpang("Budiono Siregar", 200, 100, 600);
console.log(kapalBudionoSiregar.infokapal());
console.log(`Kapasitas: ${kapalBudionoSiregar.getKapasitas()} orang`);

const kapalEvergreen = new KapalEvergreen("EverGreen", 400, 59, 10000);
console.log(kapalEvergreen.infokapal());
console.log(kapalEvergreen.getJenis());
console.log(`Kapasitas: ${kapalEvergreen.getKapasitas()} Kontainer`);

const kapalPinisi = new KapalPinisi("Pinisi Nusantara", 25, 5, 20);
console.log(kapalPinisi.infokapal());
console.log(kapalPinisi.getJenis());
console.log(`Kapasitas: ${kapalPinisi.getKapasitas()} orang`);
