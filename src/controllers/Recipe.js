import RecipeModel from "../models/recipe.js";
import CategoryModel from "../models/category.js"; // Import the Category model


const validateRecipeFields = (fields) => {
  const errors = [];
  if (!fields.titre || fields.titre.trim() === "") {
    errors.push({
      type: "field",
      msg: "Le titre ne peut pas être vide!",
      path: "titre",
      location: "body",
    });
  }
  if (!fields.ingredients || fields.ingredients.trim() === "") {
    errors.push({
      type: "field",
      msg: "Les ingrédients ne peuvent pas être vides!",
      path: "ingredients",
      location: "body",
    });
  }
  if (!fields.type || fields.type.trim() === "") {
    errors.push({
      type: "field",
      msg: "Le type ne peut pas être vide!",
      path: "type",
      location: "body",
    });
  }
  if (!fields.categoryName || fields.categoryName.trim() === "") {
    errors.push({
      type: "field",
      msg: "Le nom de la catégorie ne peut pas être vide!",
      path: "categoryName",
      location: "body",
    });
  }
  return errors;
};

export const createRecipe = async (req, res) => {
  const { titre, ingredients, type, categoryName } = req.body; // Include categoryName

  const errors = validateRecipeFields(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe) {
      return res.status(400).json({ message: "Une recette avec ce titre existe déjà." });
    }

    // Check if the category exists using the Category model
    const existingCategory = await CategoryModel.getCategoryByName(categoryName);
    let categoryId;

    if (existingCategory) {
      // If category exists, use its ID
      categoryId = existingCategory.id;
    } else {
      // If category does not exist, create a new category using the Category model
      const newCategory = await CategoryModel.createCategory(categoryName);
      categoryId = newCategory.id; // Get the new category ID
    }

    // Prepare the recipe data with the category ID
    const recipeData = {
      titre,
      ingredients,
      type,
      category_id: categoryId // Add the category ID
    };

    const newRecipe = await RecipeModel.createRecipe(recipeData);
    return res.status(201).json(newRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Other functions remain unchanged...
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.getAllRecipes();
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeModel.getRecipeById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;

  const errors = validateRecipeFields(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const updatedRecipe = await RecipeModel.updateRecipe(id, req.body);
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }
    return res.status(200).json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await RecipeModel.deleteRecipe(id);
    if (!deleted) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Exporting all functions
export default {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
