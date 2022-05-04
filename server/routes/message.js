import Router from 'express';
import { createMessage, getInbox, getOutbox, getMessage, deleteMessage} from '../controllers/messageController.js';

const router = Router();

// create message
router.post('/', createMessage);
router.get('/to/:id', getInbox);
router.get('/from/:id', getOutbox);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);

export default router;