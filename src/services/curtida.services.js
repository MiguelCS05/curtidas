import { curtidaRepository } from "../repositories/curtida.repository.js";

class CurtidaService {
    async getall() {
        return await curtidaRepository.getall();
    }

    async getByUsuario(id) {
        return await curtidaRepository.getByUsuario(id);
    }

    async create(usuario_id, item_curtido) {
        return await curtidaRepository.create(usuario_id, item_curtido);
    }

    async delete(id) {
        return await curtidaRepository.delete(id);
    }
}

export const curtidaServices = new CurtidaService();