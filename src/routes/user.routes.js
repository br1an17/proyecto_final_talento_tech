import { Router } from "express";
import usersController from "../controllers/users.controllers.js";

const router = Router();

//get
router.get("/", usersController.getAllUsers);
//post
router.post("/", usersController.createUser);

export default router;
