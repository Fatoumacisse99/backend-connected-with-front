import express from "express";
import recipeController from "../controllers/Recipe.js"; // Correct import without parentheses
import categoryController from "../controllers/category.js"; // Import the category controller

// Import validators
import {
  validateCreateRecipe,
  validateUpdateRecipe,
  validateDeleteRecipe,
  validateCreateCategory,
  validateUpdateCategory,
  validate,
} from "../validators/Validator.js"; // No parentheses around paths

// Create a router instance
const router = express.Router(); // Instance of the router

// Define CRUD routes for recipes with validation
router.get("/recipes", recipeController.getAllRecipes); // Get all recipes

router.get(
  "/recipes/:id",
  validateUpdateRecipe(), // Validate ID format and presence
  validate, // Execute validation middleware
  recipeController.getRecipeById // Get a recipe by ID
);

router.post(
  "/recipes",
  validateCreateRecipe(), // Validate recipe creation fields
  validate, // Execute validation middleware
  async (req, res) => {
    try {
      await recipeController.createRecipe(req, res); // Handle recipe creation
    } catch (error) {
      console.error('Error creating recipe:', error);
      res.status(500).json({ message: "Failed to create recipe" });
    }
  }
);

router.put(
  "/recipes/:id",
  validateUpdateRecipe(), // Validate ID and fields for update
  validate, // Execute validation middleware
  async (req, res) => {
    try {
      await recipeController.updateRecipe(req, res); // Handle recipe update
    } catch (error) {
      console.error('Error updating recipe:', error);
      res.status(500).json({ message: "Failed to update recipe" });
    }
  }
);

router.delete(
  "/recipes/:id",
  validateDeleteRecipe(), // Validate ID format for deletion
  validate, // Execute validation middleware
  async (req, res) => {
    try {
      await recipeController.deleteRecipe(req, res); // Handle recipe deletion
    } catch (error) {
      console.error('Error deleting recipe:', error);
      res.status(500).json({ message: "Failed to delete recipe" });
    }
  }
);

// Define CRUD routes for categories with validation
router.get("/categories", categoryController.getAllCategories); // Get all categories

router.get(
  "/categories/:id",
  validateUpdateCategory(), // Validate ID format and presence
  validate, // Execute validation middleware
  categoryController.getCategoryById // Get a category by ID
);

router.post(
  "/categories",
  validateCreateCategory(), // Validate category creation fields
  validate, // Execute validation middleware
  async (req, res) => {
    try {
      await categoryController.createCategory(req, res); // Handle category creation
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ message: "Failed to create category" });
    }
  }
);

router.put(
  "/categories/:id",
  validateUpdateCategory(), // Validate ID and fields for update
  validate, // Execute validation middleware
  async (req, res) => {
    try {
      await categoryController.updateCategory(req, res); // Handle category update
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ message: "Failed to update category" });
    }
  }
);

router.delete(
  "/categories/:id",
  async (req, res) => {
    try {
      await categoryController.deleteCategory(req, res); // Handle category deletion
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ message: "Failed to delete category" });
    }
  }
);

export default router; // Export the router
