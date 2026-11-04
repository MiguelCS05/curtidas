import { usuarioRepository } from "../repositories/usuario.repository.js";

class UsuarioService {
    async getall() {
        return await usuarioRepository.getall();
    }

    async getById(id) {
        return await usuarioRepository.getById(id);
    }

    async create(nome, email) {
        return await usuarioRepository.create(nome, email);
    }

    async delete(id) {
        return await usuarioRepository.delete(id);
    }
}

export const usuarioServices = new UsuarioService();