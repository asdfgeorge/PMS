import Router from 'express';
import { loginPost } from '../controllers/loginController.js';
import { registerPost } from "../controllers/registerController.js";
import { logout } from "../controllers/logoutController.js";

const router = Router();

router.post('/login', loginPost);
router.post('/logout', logout);
router.post('/register', registerPost);

export default router;