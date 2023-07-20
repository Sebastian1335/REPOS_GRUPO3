import Express from "express";

import RolController from "../controller/RolController.js";

const {findAll, findOne} = RolController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)

export default router
