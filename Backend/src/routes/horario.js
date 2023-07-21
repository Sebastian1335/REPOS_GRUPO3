import Express from "express";
import HorarioController from "../controller/HorarioController.js";

const {findAll, findOne, create, update} = HorarioController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("/", update)

export default router