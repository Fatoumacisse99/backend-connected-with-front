import RecipeModel from "../models/RecipeModel.js";
import CategoryModel from "../models/categoryModel.js";

export const createRecipe = async (req, res) => {
  const { titre, ingredients, type, categorie_id } = req.body;

  try {
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe) {
      return res
        .status(400)
        .json({ message: "Une recette avec ce titre existe déjà." });
    }
    const existingCategory = await CategoryModel.getCategoryById(categorie_id);
    if (!existingCategory) {
      return res
        .status(400)
        .json({ message: "La catégorie spécifiée n'existe pas." });
    }
    const recipeData = {
      titre,
      ingredients,
      type,
      categorie_id,
    };
    const newRecipe = await RecipeModel.createRecipe(recipeData);
    return res.status(201).json(newRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

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
  const { titre, ingredients, type, categorie_id } = req.body;

  try {
    const existingRecipe = await RecipeModel.getRecipeById(id);
    if (!existingRecipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }

    const recipeWithSameTitle = await RecipeModel.getRecipeByTitle(titre);
    if (recipeWithSameTitle && recipeWithSameTitle.id !== id) {
      return res
        .status(400)
        .json({ message: "Une recette avec ce titre existe déjà." });
    }

    const existingCategory = await CategoryModel.getCategoryById(categorie_id);
    if (!existingCategory) {
      return res
        .status(400)
        .json({ message: "La catégorie spécifiée n'existe pas." });
    }

    const recipeData = {
      titre,
      ingredients,
      type,
      categorie_id,
    };

    const updatedRecipe = await RecipeModel.updateRecipe(id, recipeData);
    return res.status(200).json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const existingRecipe = await RecipeModel.getRecipeById(id);
    if (!existingRecipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }

    await RecipeModel.deleteRecipe(id);
    return res.status(200).json({ message: "Recette supprimée avec succès." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
