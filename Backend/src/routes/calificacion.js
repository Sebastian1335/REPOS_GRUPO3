import Express from "express";

import CalificacionController from "../controller/CalificacionController.js";

const {findAll, findOne, create, update} = CalificacionController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("", update)

export default router