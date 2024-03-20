import { Router } from "express";
import {product,productTesting} from "../controllers/Products.js";
const router=Router();
router.get('/',product)

router.get('/testing', productTesting)

export default router;