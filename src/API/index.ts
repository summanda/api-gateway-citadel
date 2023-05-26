import express from 'express';
var router = express.Router();

import { router as UserRoute } from './User/User.Routes';
import { router as BillRoute } from './Bill/Bill.Routes';

router.use('/user', UserRoute);
router.use('/bill', BillRoute);

export { router };