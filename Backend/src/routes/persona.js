import Express from "express";

import PersonaController from "../controller/PersonaController.js";

const {findAll, findOne, create, update} = PersonaController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("", update)

export default router