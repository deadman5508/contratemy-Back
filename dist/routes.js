import { Router } from 'express';
import { syncUserWithClerk } from './controllers/users/userController.js';
import { updateUser } from './controllers/users/userControllerUpdate.js';
import { searchUser } from './controllers/users/userControllerSearch.js';
import { getOptions } from './controllers/optionsController.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { uploadUserImage } from './controllers/userImagesController.js';
export const router = Router();
router.post('/users/sync', syncUserWithClerk);
router.patch('/users/update', authMiddleware, updateUser);
router.get('/users/user/:clerkId', authMiddleware, searchUser);
router.get('/options', getOptions);
router.post('/users/:userId/image', authMiddleware, uploadUserImage);
//# sourceMappingURL=routes.js.map