import { db } from "../database/db.js";

class UsuarioRepository {
    async getall() {
        return await db("usuarios").select("*");
    }

    async getById(id) {
        return await db("usuarios").where({ id }).first();
    }

    async create(nome, email) {
        const res = await db("usuarios")
            .insert({ nome, email })
            .returning("*");

        return res[0];
    }

    async delete(id) {
        return await db("usuarios").where({ id }).del();
    }
}

export const usuarioRepository = new UsuarioRepository();