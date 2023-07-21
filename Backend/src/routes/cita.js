import Express from "express";

import CitaController from "../controller/CitaController.js";
const {findAll, findOne, create, update} = CitaController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("/", update)

export default router