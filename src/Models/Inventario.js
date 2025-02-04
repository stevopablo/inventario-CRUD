const mooose = require('mongoose')
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
dotenv.config()

const inventarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    quantidade: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    preco: {
        type: String,
        require: True
    },
    nota: {
        type: Number,
        require: True
    },
    imagem: {
        data: Buffer,
        contentType: String
    }
})

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const Inventario = mongoose.model('Inventario', inventarioSchema)

module.exports = Inventario