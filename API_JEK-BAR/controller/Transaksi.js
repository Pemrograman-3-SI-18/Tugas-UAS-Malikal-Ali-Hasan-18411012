const transaksi = require('../model/Transaksi.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataTransaksi = (data) =>
    new Promise(async (resolve, reject) =>{
        const transaksiBaru = new transaksi({
            userName: data.userName,
            idDriver: data.idDriver,
            jemput: data.jemput,
            tujuan: data.tujuan,
            harga: data.harga
        })

        await transaksiBaru.save()
            .then(r => {
                resolve(response.commonSuccesMsg('Berhasil Menginput Data'))
            }).catch(err => {
                reject (response.commonErrorMsg('Mohon Maaf Gagal Input Data'))
            })
    })

exports.lihatDataTransaksi = () =>
    new Promise(async (resolve, reject) => {
        await transaksi.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.lihatDetailDataTransaksi = (userName) =>
    new Promise(async (resolve, reject) => {
        await transaksi.findOne({userName: userName})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.updateTransaksi = (id, data) =>
    new Promise(async (resolve, reject) =>{
        await transaksi.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    userName: data.userName,
                    idDriver: data.idDriver,
                    jemput: data.jemput,
                    tujuan: data.tujuan,
                    harga: data.harga
                }
            }
        ) .then(transaksi => {
            resolve(response.commonSuccesMsg('Berhasil Mengubah Data'))
        }) .catch(err => {
            reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.hapusTransaksi = (_id) =>
    new  Promise(async (resolve, reject) => {
        await transaksi.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccesMsg('berhasil Menghapus Data'))
            }) .catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalhan Pada Server Kami'))
            })
    })
