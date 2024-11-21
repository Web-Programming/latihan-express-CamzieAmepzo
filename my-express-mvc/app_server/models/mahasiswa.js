const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama :{
        type: String,
    },
    npm : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
        unique: true,
    },
    tanggal_lahir : {
        type: Date,
    },
    akitf : {
        type: Boolean,
    }
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema); //(namaModel, namaSchema)
module.exports = Mahasiswa;