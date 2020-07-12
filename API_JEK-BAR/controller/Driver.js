const driver = require('../model/Driver.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataDriver = (data, gambar) =>
    new Promise(async (resolve, reject) =>{
        const driverBaru = new driver({
            idDriver: data.idDriver,
            nama: data.nama,
            noTelpon: data.noTelpon,
            jenisKendaraan: data.jenisKendaraan,
            kodeKendaraan: data.kodeKendaraan,
            gambar: gambar
        })

        await driver.findOne({idDriver: data.idDriver})
            .then(jekbar => {
                if (jekbar){
                    reject (response.commonErrorMsg("Kode Jekbar Sudah Digunakan"))
                } else {
                    driverBaru.save()
                        .then(r => {
                            resolve(response.commonSuccesMsg('Berhasil Menginput Data'))
                        }).catch(err => {
                            reject (response.commonErrorMsg('Mohon Maaf Gagal Input Data'))
                    })
                }
            }).catch(err => {
                reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.lihatDataDriver = () =>
    new Promise(async (resolve, reject) => {
        await driver.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.lihatDetailDataDriver = (idDriver) =>
    new Promise(async (resolve, reject) => {
        await driver.findOne({idDriver: idDriver})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.updateDriver = (id, data, gambar) =>
    new Promise(async (resolve, reject) =>{
        await driver.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    idDriver: data.idDriver,
                    nama: data.nama,
                    noTelpon: data.noTelpon,
                    jenisKendaraan: data.jenisKendaraan,
                    kodeKendaraan: data.kodeKendaraan,
                    gambar: gambar
                }
            }
        ) .then(driver => {
            resolve(response.commonSuccesMsg('Berhasil Mengubah Data'))
        }) .catch(err => {
            reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.hapusdriver = (_id) =>
    new  Promise(async (resolve, reject) => {
        await driver.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccesMsg('berhasil Menghapus Data'))
            }) .catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalhan Pada Server Kami'))
            })
    })
