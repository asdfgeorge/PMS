import Router from 'express';
import { loginPost } from '../controllers/login.js';
import { registerPost } from "../controllers/register.js";
import { logout } from "../controllers/logout.js";

const router = Router();

router.post('/login', loginPost);
router.post('/logout', logout);
router.post('/register', registerPost);

export default router;