const Inventario = require("../Models/Inventario");

async function pegarTodosItens(req, res) {
    try {
        const itens = await Inventario.find();
        const itensComImagem = itens.map(item => {
            if (item.imagem && item.imagem.data) {
                const imageBase64 = item.imagem.data.toString('base64');
                item.imagem = `data:${item.imagem.contentType};base64,${imageBase64}`;
            }
            return item;
        });

        res.status(200).json(itensComImagem);
    } catch (err) {
        console.error("🚀 ~ pegarTodosItens ~ err:", err);
        res.status(500).json({ error: "Erro ao buscar itens", message: err.message });
    }
}

async function adicionarItem(req, res) {
    try {
        const { nome, quantidade, descricao, preco, nota } = req.body;

        if (!nome || !quantidade || !descricao || !preco || !nota) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        if (!req.file) {
            return res.status(400).json({ error: "Imagem é obrigatória!" });
        }

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
        console.error("🚀 ~ adicionarItem ~ err:", err);
        res.status(500).json({ error: "Erro ao adicionar item", message: err.message });
    }
}

module.exports = {
    pegarTodosItens,
    adicionarItem
};
