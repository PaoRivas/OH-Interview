import express from 'express';
import { userController } from '../controllers/userController';
;

const router = express.Router();

router.post('/', userController.registerUser);
router.get('/:id', userController.getUserProfile);
router.put('/:id', userController.updateUserProfile);
router.delete('/:id', userController.deleteUser);

export default router;
