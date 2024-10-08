import express from "express";
import categoryController from "../controllers/category.js";
import {
  validateCreateCategory,
  validateUpdateCategory,
  validateDeleteCategory,
  validate,
} from "../validators/categoryValidator.js"; // Import du validateur de catégories

const router = express.Router();

// Définir les routes CRUD pour les catégories
router.get("/categories", categoryController.getAllCategories);

router.get(
  "/categories/:id",
  validateUpdateCategory(),
  validate,
  categoryController.getCategoryById,
);

router.post(
  "/categories",
  validateCreateCategory(),
  validate,
  categoryController.createCategory,
);

router.put(
  "/categories/:id",
  validateUpdateCategory(),
  validate,
  categoryController.updateCategory,
);

router.delete(
  "/categories/:id",
  validateDeleteCategory(),
  validate,
  categoryController.deleteCategory,
);

export default router;
