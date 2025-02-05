const express = require('express')
const multer = require('multer')
const { pegarTodosItens, adicionarItem } = require('../Controller/Inventario')
const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.get('/inventario', pegarTodosItens)
router.post('/inventario', upload.single('imagem'),adicionarItem)

module.exports = router;