import express from 'express';
import cors from 'cors';
import ErrorHandler from '../Middleware/ErrorHandler';
import { router } from '../API'

const createServer = () => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.json());

    app.get('/health', (req, res) => {
        res.status(200).send({ status: 'Running' });
    });

    app.use('/', router);
    app.use(ErrorHandler);

    return app;
}

export { createServer };