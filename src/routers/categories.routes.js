import { Router } from "express";

import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listAllCategoriesController from "../controllers/categories/listAllCategories.controller";
import listOneCategoryController from "../controllers/categories/listOneCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const router = Router();

router.post("", createCategoryController);
router.get("", listAllCategoriesController);
router.get("/:category_id", listOneCategoryController);
router.patch("/:category_id", updateCategoryController);
router.delete("/:category_id", deleteCategoryController);

export default router;
