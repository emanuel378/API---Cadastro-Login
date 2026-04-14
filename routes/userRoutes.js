import express from "express";
import { register,login, listar } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/usuarios",listar)

export default router;