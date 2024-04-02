import express from 'express';
import userRouter from './userRoute.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/users', userRouter);


export default router;