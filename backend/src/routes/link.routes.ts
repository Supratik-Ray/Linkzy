import express, { Router } from "express";
import {
  getOriginalLink,
  shortenLink,
} from "../controllers/link.controller.ts";
import { requireAuth } from "../middlewares/auth.middleware.ts";

const router: Router = express.Router();

router.post("/", requireAuth, shortenLink);
router.get("/:shortCode", getOriginalLink);

export default router;
