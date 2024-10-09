import db from "../config/db.js";
const getCategoryById = async (id) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const query = "SELECT * FROM categories WHERE id = ?";
  const [rows] = await db.query(query, [id]);
  return rows.length > 0 ? rows[0] : null;
};
const getAllCategories = async () => {
  const query = "SELECT * FROM categories ORDER BY id ASC";
  const [rows] = await db.query(query);
  return rows;
};
const createCategory = async (categoryName) => {
  const query = "INSERT INTO categories (name) VALUES (?)";
  const [result] = await db.query(query, [categoryName]);
  return { id: result.insertId, name: categoryName };
};
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
  return rows.length > 0 ? rows[0] : null;
};

const deleteCategory = async (id) => {
  if (isNaN(id)) {
    throw new Error("Invalid ID format");
  }
  const checkQuery = "SELECT * FROM categories WHERE id = ?";
  const [categories] = await db.query(checkQuery, [id]);

  if (categories.length === 0) {
    throw new Error("Catégorie non trouvée.");
  }
  const recipesCheckQuery = "SELECT * FROM recipes WHERE categorie_id = ?";
  const [recipes] = await db.query(recipesCheckQuery, [id]);

  if (recipes.length > 0) {
    throw new Error(
      "Impossible de supprimer cette catégorie. Elle est utilisée dans des recettes.",
    );
  }

  const query = "DELETE FROM categories WHERE id = ?";
  await db.query(query, [id]);

  return { message: "Catégorie supprimée avec succès", id };
};
export default {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryByName,
};
