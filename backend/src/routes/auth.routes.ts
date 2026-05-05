import express, { Router } from "express";
import { login, signup } from "../controllers/auth.controller.ts";

const router: Router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
