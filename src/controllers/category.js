// import db from "../config/db.js"; // Ensure the path reflects your directory structure
import CategoryModel from "../models/category.js"; // Import the Category model

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ message: "Catégorie non trouvée." });
    }
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.getAllCategories();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body; // Assuming your category object has a 'name' property

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Le nom de la catégorie ne peut pas être vide!" });
  }

  try {
    const newCategory = await CategoryModel.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Le nom de la catégorie ne peut pas être vide!" });
  }

  try {
    const updatedCategory = await CategoryModel.updateCategory(id, name);
    if (!updatedCategory) {
      return res.status(404).json({ message: "Catégorie non trouvée." });
    }
    return res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CategoryModel.deleteCategory(id);
    if (!deleted) {
      return res.status(404).json({ message: "Catégorie non trouvée." });
    }
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Exporting all functions
export default {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
