const router = require('express').Router()
const transaksi = require('../controller/Transaksi')

router.post( "/input" , (req, res) => {
    transaksi.inputDataTransaksi(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/datatransaksi", (req, res) => {
    transaksi.lihatDataTransaksi()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/datatransaksi/:id", (req, res) => {
    transaksi.lihatDetailDataTransaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapus/:id", (req, res) => {
    transaksi.hapusTransaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
//
router.put("/ubah/:id", (req, res) => {
    transaksi.updateTransaksi(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router
