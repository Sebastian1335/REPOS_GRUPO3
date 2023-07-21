import Express from "express";

import PersonaController from "../controller/PersonaController.js";

const {findAll, findOne, create, update, remove} = PersonaController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.delete("/:id", remove)
router.put("/", update)

export default router