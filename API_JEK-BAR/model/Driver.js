const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    idDriver:{
        type: String
    },
    nama:{
        type: String
    },
    noTelpon:{
        type: String
    },
    jenisKendaraan:{
        type: String
    },
    kodeKendaraan:{
        type: String
    },
    gambar:{
        type: String
    }

});

module.exports = mongoose.model('driver',userSchema)
