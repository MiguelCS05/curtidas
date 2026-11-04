import { curtidaServices } from "../services/curtida.services.js";

export async function listar(req, res) {
    const curtidas = await curtidaServices.getall();
    res.json(curtidas);
}

export async function listarPorUsuario(req, res) {
    const curtidas = await curtidaServices.getByUsuario(req.params.id);
    res.json(curtidas);
}

export async function criar(req, res) {
    const { usuario_id, item_curtido } = req.body;

    const curtida = await curtidaServices.create(usuario_id, item_curtido);

    res.status(201).json(curtida);
}

export async function excluir(req, res) {
    const resultado = await curtidaServices.delete(req.params.id);

    if (!resultado) {
        return res.status(404).json({ mensagem: "Curtida não encontrada" });
    }

    res.json({ mensagem: "Curtida excluída com sucesso" });
}