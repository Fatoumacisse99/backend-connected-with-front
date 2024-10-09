import CategoryModel from "../models/categoryModel.js";
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
  const { name } = req.body;

  try {
    const existingCategory = await CategoryModel.findCategoryByName(name);
    if (existingCategory) {
      return res.status(400).json({ message: "Cette catégorie existe déjà." });
    }

    const newCategory = await CategoryModel.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const existingCategory = await CategoryModel.findCategoryByName(name);
    if (existingCategory && existingCategory.id !== id) {
      return res
        .status(400)
        .json({ message: "Une catégorie avec ce nom existe déjà." });
    }

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
    const result = await CategoryModel.deleteCategory(id);

    return res.status(200).json({ message: result.message });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
