import express from "express";
import {
    listar,
    listarPorUsuario,
    criar,
    excluir
} from "../controllers/curtida.controller.js";

const router = express.Router();

router.post("/", criar);
router.get("/", listar);
router.get("/usuarios/:id", listarPorUsuario);
router.delete("/:id", excluir);

export default router;