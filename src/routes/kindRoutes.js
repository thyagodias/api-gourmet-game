import express from "express"
import KindController from "../controllers/KindController.js"

const routes = express.Router();

//Rota para obter tipos de pratos
routes.get("/kind/:name", KindController.show);

//Rota para adicionar novo tipo de prato
routes.post("/kind/:node",KindController.create);

export default routes;