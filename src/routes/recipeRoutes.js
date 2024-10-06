import express from "express";
import recipeController from "../controllers/Recipe.js"; 
import {
  validateCreateRecipe,
  validateUpdateRecipe,
  validateDeleteRecipe,
  validate,
} from "../validators/recipeValidator.js"; // Import du validateur de recettes

const router = express.Router();

// Définir les routes CRUD pour les recettes
router.get("/recipes", recipeController.getAllRecipes);

router.get(
  "/recipes/:id",
  validateUpdateRecipe(),
  validate,
  recipeController.getRecipeById
);

router.post(
  "/recipes",
  validateCreateRecipe(),
  validate,
  recipeController.createRecipe
);

router.put(
  "/recipes/:id",
  validateUpdateRecipe(),
  validate,
  recipeController.updateRecipe
);

router.delete(
  "/recipes/:id",
  validateDeleteRecipe(),
  validate,
  recipeController.deleteRecipe
);

export default router; 
