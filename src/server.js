import "dotenv/config";
import express from "express";

import usuarioRoutes from "./routes/usuario.routes.js";
import curtidaRoutes from "./routes/curtida.routes.js";

import { listarPorUsuario } from "./controllers/curtida.controller.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/curtidas", curtidaRoutes);

app.get("/usuarios/:id/curtidas", listarPorUsuario);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});