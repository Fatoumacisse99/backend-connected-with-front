import db from "../config/db.js"; // Make sure the path is correct

// Obtenir une catégorie par ID
const getCategoryById = async (id) => {
  // Ensure the ID is a valid number
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const query = "SELECT * FROM categories WHERE id = ?";
  const [rows] = await db.query(query, [id]);
  return rows.length > 0 ? rows[0] : null;
};

// Obtenir toutes les catégories
const getAllCategories = async () => {
  const query = "SELECT * FROM categories";
  const [rows] = await db.query(query);
  return rows;
};

// Créer une nouvelle catégorie
const createCategory = async (categoryName) => {
  const query = "INSERT INTO categories (name) VALUES (?)";
  const [result] = await db.query(query, [categoryName]);
  return { id: result.insertId, name: categoryName };
};

// Mettre à jour une catégorie
const updateCategory = async (id, categoryName) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const query = "UPDATE categories SET name = ? WHERE id = ?";
  await db.query(query, [categoryName, id]);
  return { id, name: categoryName };
};

const findCategoryByName = async (name) => {
  const query = "SELECT * FROM categories WHERE name = ?";
  const [rows] = await db.query(query, [name]);
  return rows.length > 0 ? rows[0] : null; // Retourner la catégorie trouvée ou null si aucune catégorie n'est trouvée
};
// const deleteCategory = async (id) => {
//   if (isNaN(id)) {
//     throw new Error("Invalid ID format");
//   }

//   // Vérifier si la catégorie est utilisée dans les recettes
//   const checkQuery = "SELECT * FROM recipes WHERE categorie_id = ?";
//   const [recipes] = await db.query(checkQuery, [id]);

//   if (recipes.length > 0) {
//     throw new Error("Impossible de supprimer cette catégorie. Elle est utilisée dans des recettes.");
//   }

//   const query = "DELETE FROM categories WHERE id = ?";
//   await db.query(query, [id]);
//   return { id };
// };
const deleteCategory = async (id) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }

  // Vérifier si la catégorie existe
  const checkQuery = "SELECT * FROM categories WHERE id = ?";
  const [categories] = await db.query(checkQuery, [id]);

  if (categories.length === 0) {
    throw new Error("Catégorie non trouvée.");
  }

  // Vérifier si la catégorie est utilisée dans les recettes
  const recipesCheckQuery = "SELECT * FROM recipes WHERE categorie_id = ?";
  const [recipes] = await db.query(recipesCheckQuery, [id]);

  if (recipes.length > 0) {
    throw new Error(
      "Impossible de supprimer cette catégorie. Elle est utilisée dans des recettes.",
    );
  }

  const query = "DELETE FROM categories WHERE id = ?";
  await db.query(query, [id]);

  return { message: "Catégorie supprimée avec succès", id }; // Retourner un message de succès
};

// Exportation des fonctions du modèle
export default {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryByName,
};
