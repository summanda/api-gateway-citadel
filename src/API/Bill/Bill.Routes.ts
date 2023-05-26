import express from 'express';
const router = express.Router();

import {
    getBills,
    getBill,
    createBill
} from './Bill.Controller';

router.get('/', getBills);
router.get('/:id', getBill);
router.post('', createBill);

export { router };