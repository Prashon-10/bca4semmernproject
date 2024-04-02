import express from 'express';
import UserController from '../controller/UserController.js';

const userRouter = express.Router();
const uInstance = new UserController();

userRouter.get('/', uInstance.index);
userRouter.post('/', uInstance.store);
userRouter.get('/:id', uInstance.show);
userRouter.put('/:id', uInstance.update);
userRouter.delete('/:id', uInstance.destroy);

export default userRouter;