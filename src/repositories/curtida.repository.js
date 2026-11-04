import { db } from "../database/db.js";

class CurtidaRepository {
    async getall() {
        return await db("curtidas")
            .join("usuarios", "curtidas.usuario_id", "usuarios.id")
            .select(
                "curtidas.*",
                "usuarios.nome as usuario"
            );
    }

    async getByUsuario(id) {
        return await db("curtidas").where({ usuario_id: id });
    }

    async create(usuario_id, item_curtido) {
        const res = await db("curtidas")
            .insert({ usuario_id, item_curtido })
            .returning("*");

        return res[0];
    }

    async delete(id) {
        return await db("curtidas").where({ id }).del();
    }
}

export const curtidaRepository = new CurtidaRepository();