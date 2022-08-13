import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listOneProductController from "../controllers/products/listOneProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", listAllProductsController);
router.get("/:product_id", listOneProductController);

export default router;
