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

// Supprimer une catégorie
const deleteCategory = async (id) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const query = "DELETE FROM categories WHERE id = ?";
  await db.query(query, [id]);
  return { id }; // Return the deleted category ID
};

// Exportation des fonctions du modèle
export default {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
