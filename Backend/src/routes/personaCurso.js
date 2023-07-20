import Express from "express";
import PersonaCursoController from "../controller/PersonaCursoController.js";
const {findAll, findOne, create, update} = PersonaCursoController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
router.put("", update)

export default router