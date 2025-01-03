import express from 'express';
import { getFinancialAdvice } from '../controllers/aiController';

export const router = express.Router();

router.post('/advice', getFinancialAdvice);