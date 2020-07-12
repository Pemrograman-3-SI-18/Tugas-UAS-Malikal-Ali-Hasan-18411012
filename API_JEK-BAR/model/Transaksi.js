const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type: String
    },
    idDriver:{
        type: String
    },
    jemput:{
        type: String
    },
    tujuan:{
        type: String
    },
    harga:{
        type: String
    }

});

module.exports = mongoose.model('transaksi',userSchema)
