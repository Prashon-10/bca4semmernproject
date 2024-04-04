import express from 'express';
import UserController from '../controller/UserController.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';
const userRouter = express.Router();
const uInstance = new UserController();
const fInstance = new UploadMiddleware();
const upload = fInstance.upload('users');

userRouter.get('/', uInstance.index);
userRouter.post('/',upload.single('image'), uInstance.store);
userRouter.get('/:id', uInstance.show);
userRouter.put('/:id', uInstance.update);
userRouter.delete('/:id', uInstance.destroy);

export default userRouter;