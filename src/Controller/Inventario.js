const Inventario = require("../Models/Inventario");

async function pegarTodosItens(req, res) {
    try{
        const itens = await Inventario.find()
        res.status(200).json(itens)
    }catch(err){
        console.log("🚀 ~ pegarTodosItens ~ err:", err)
    }
}

async function adicionarItem(req, res) {
    const { nome, quantidade, descricao, imagem } = req.body
    try{
        
    }catch(err){
        console.log("🚀 ~ adicionarItem ~ err:", err)
    }
}

// module.exports = {
//     pegarTodosItens
// }