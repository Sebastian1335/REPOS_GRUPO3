import Express from "express";

import CarreraController from "../controller/CarreraController.js";

const {findAll, findOne, create, update} = CarreraController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("/", update)

export default router