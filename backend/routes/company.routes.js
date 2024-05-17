import express from 'express';
import { getProductDetails, getToken, getTopProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/companies/:companyname/categories/:categoryname/products', getTopProducts);
router.get('/test', getToken);
router.get('/companies/:companyname/categories/:categoryname/products/:productid', getProductDetails);

export default router;
