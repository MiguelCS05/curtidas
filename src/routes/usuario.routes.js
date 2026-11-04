import express from "express";
import {
    listar,
    buscarPorId,
    criar,
    excluir
} from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/", criar);
router.get("/", listar);
router.get("/:id", buscarPorId);
router.delete("/:id", excluir);

export default router;