import Express from "express";

import CarreraController from "../controller/CarreraController.js";

const {findAll, findOne, create, update, remove} = CarreraController

const router = Express.Router()

router.get("/", findAll)
router.get("/id:", findOne)
router.post("/", create)
<<<<<<< HEAD
router.put("", update)
router.delete("/:id", remove)
=======
router.put("/", update)
>>>>>>> 4478ca3c8dbdfd6fd6d5bef1471f9a8395e6ff58

export default router