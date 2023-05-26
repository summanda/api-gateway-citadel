import express from 'express';
const router = express.Router();

import {
    getUsers,
    getUser
} from './User.Controller';

router.get('/', getUsers);
router.get('/:id', getUser);

export { router };