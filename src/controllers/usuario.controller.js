import { usuarioServices } from "../services/usuario.services.js";

export async function listar(req, res) {
    const usuarios = await usuarioServices.getall();
    res.json(usuarios);
}

export async function buscarPorId(req, res) {
    const usuario = await usuarioServices.getById(req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json(usuario);
}

export async function criar(req, res) {
    const { nome, email } = req.body;

    const usuario = await usuarioServices.create(nome, email);

    res.status(201).json(usuario);
}

export async function excluir(req, res) {
    const resultado = await usuarioServices.delete(req.params.id);

    if (!resultado) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário excluído com sucesso" });
}