import express from 'express';
import { getRequest } from '../controller/req.controller.js';

const router = express.Router();

router.post('/test', getRequest); 

export default router;