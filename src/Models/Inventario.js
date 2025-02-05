const mooose = require('mongoose')
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
dotenv.config()

const inventarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        require: true
    },
    nota: {
        type: Number,
        require: true
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