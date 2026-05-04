import express, { Router } from "express";
import { login, signup } from "../controllers/auth.controller.ts";

const router: Router = express.Router();

router.route("/signup").post(login);
router.route("/login").post(signup);

export default router;
