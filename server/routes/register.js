import Router from "express";
import { registerPost } from "../controllers/register.js";

const router = Router();

router.post('/', registerPost);

export default router;