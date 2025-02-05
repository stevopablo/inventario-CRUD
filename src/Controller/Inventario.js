const Inventario = require("../Models/Inventario");

async function pegarTodosItens(req, res) {
    try{
        const itens = await Inventario.find()
        res.status(200).json(itens)
    }catch(err){
        console.log("🚀 ~ pegarTodosItens ~ err:", err)
        res.status(500).send(err.message);
    }
}

async function adicionarItem(req, res) {
    const { nome, quantidade, descricao, preco, nota } = req.body;
    try {
        const inventario = new Inventario({
            nome,
            quantidade,
            descricao,
            preco,
            nota,
            imagem: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });
        await inventario.save();
        res.status(201).json(inventario);
    } catch (err) {
        console.log("🚀 ~ adicionarItem ~ err:", err);
        res.status(400).send(err.message);
    }
}

module.exports = {
    pegarTodosItens,
    adicionarItem
}