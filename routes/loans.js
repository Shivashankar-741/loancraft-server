import express from 'express';

import { getLoans, createLoan } from '../controllers/loans.js';

const router = express.Router();

router.get('/', getLoans);
router.post('/', createLoan);

export default router;
