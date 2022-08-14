import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listOneProductController from "../controllers/products/listOneProduct.controller";
import listProductsPerCategoryController from "../controllers/products/listProductsPerCategory.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

import verifyCategoryExists from "../middlewares/verifyCategoryExists.middleware";
import verifyProductExists from "../middlewares/verifyProdutExists.middleware";

const router = Router();

router.post("", createProductController);
router.get("", listAllProductsController);
router.get("/:product_id", listOneProductController);
router.patch("/:product_id", updateProductController);
router.delete("/:product_id", verifyProductExists, deleteProductController);
router.get(
  "/category/:category_id",
  verifyCategoryExists,
  listProductsPerCategoryController
);

export default router;
