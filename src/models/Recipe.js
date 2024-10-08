import db from "../config/db.js"; // Ensure the path reflects your directory structure


const getRecipeByTitle = async (titre) => {
  const query = "SELECT * FROM recipes WHERE titre = ?";
  const [rows] = await db.query(query, [titre]);
  return rows.length > 0 ? rows[0] : null;
};

// Créer une nouvelle recette
const createRecipe = async (recipeData) => {
  const { titre, ingredients, type, categorie_id } = recipeData; // Include category_id
  const query =
    "INSERT INTO recipes (titre, ingredients, type, categorie_id) VALUES (?, ?, ?, ?)";
  const [result] = await db.query(query, [
    titre,
    ingredients,
    type,
    categorie_id,
  ]); 
  return { id: result.insertId, titre, ingredients, type, categorie_id }; // Include category_id
};

// Obtenir toutes les recettes
const getAllRecipes = async () => {
  const query = "SELECT * FROM recipes";
  const [rows] = await db.query(query);
  return rows;
};

// Obtenir une recette par ID
const getRecipeById = async (id) => {
  // Ensure the ID is a valid number
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const query = "SELECT * FROM recipes WHERE id = ?";
  const [rows] = await db.query(query, [id]);
  return rows.length > 0 ? rows[0] : null;
};

const updateRecipe = async (id, recipeData) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }

  const { titre, ingredients, type, categorie_id } = recipeData; // Include category_id
  const query =
    "UPDATE recipes SET titre = ?, ingredients = ?, type = ?, categorie_id = ? WHERE id = ?";
  await db.query(query, [titre, ingredients, type, categorie_id, id]); // Include category_id
  return { id, titre, ingredients, type, categorie_id };
};

// Supprimer une recette
const deleteRecipe = async (id) => {
  // Ensure the ID is a valid number
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }

  const query = "DELETE FROM recipes WHERE id = ?";
  const result = await db.query(query, [id]);
  return result;
};

// Exportation des fonctions du modèle
export default {
  getRecipeByTitle,
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
