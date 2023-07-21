import Express from "express";

import UniversidadController from "../controller/UniversidadController.js";

const {findAll, findOne, create, update, remove} = UniversidadController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("/", update)

export default router
