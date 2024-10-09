import CategoryModel from "../src/models/categoryModel.js";
import db from "../src/config/db.js";

describe("Category Model with Real Database", () => {
  beforeEach(async () => {
    await db.query("DELETE FROM recipes");
    await db.query("DELETE FROM categories");

    // Insertion des données initiales pour les tests
    await db.query(`INSERT INTO categories (id, name) VALUES
          (1, 'Dessert'),
          (2, 'Entree'),
          (3, 'Plat principal'),
          (4, 'Boisson'),
          (5, 'Snack');`);
  });

  it("should create a new category", async () => {
    const newCategoryName = "New Category Test";
    const result = await CategoryModel.createCategory(newCategoryName);
    expect(result.id).toBeDefined();
    expect(result.name).toBe(newCategoryName);
  });

  it("should retrieve a category by ID", async () => {
    const newCategory = await CategoryModel.createCategory(
      "Category to Retrieve",
    );
    const result = await CategoryModel.getCategoryById(newCategory.id);
    expect(result).toBeDefined();
    expect(result.name).toBe("Category to Retrieve");
  });

  it("should return null for a non-existent category by ID", async () => {
    const result = await CategoryModel.getCategoryById(999);
    expect(result).toBeNull();
  });

  //   it("should retrieve all categories", async () => {
  //     await CategoryModel.createCategory("Category 1");
  //     await CategoryModel.createCategory("Category 2");
  //     const categories = await CategoryModel.getAllCategories();
  //     expect(categories.length).toBe(2);
  //   });
  it("should retrieve all categories", async () => {
    await db.query("DELETE FROM categories");

    await CategoryModel.createCategory("Category 1");
    await CategoryModel.createCategory("Category 2");

    const categories = await CategoryModel.getAllCategories();
    expect(categories.length).toBe(2); // Vérifie que seules 2 catégories sont retournées
  });

  //   it("should update a category", async () => {
  //     const newCategory = await CategoryModel.createCategory("Old Category");
  //     const updatedCategory = await CategoryModel.updateCategory(newCategory.id, "Updated Category");
  //     expect(updatedCategory).toBe(true); // Vérifie que la mise à jour a réussi
  //     const result = await CategoryModel.getCategoryById(newCategory.id);
  //     expect(result.name).toBe("Updated Category");
  //   });
  it("should update a category", async () => {
    const newCategory = await CategoryModel.createCategory("Old Category");
    const updatedCategory = await CategoryModel.updateCategory(
      newCategory.id,
      "Updated Category",
    );

    expect(updatedCategory).toBeDefined(); // Vérifie que la mise à jour renvoie un objet
    expect(updatedCategory.name).toBe("Updated Category"); // Vérifie que le nom a été mis à jour
  });

  //   it("should delete a category", async () => {
  //     const newCategory = await CategoryModel.createCategory("Category to Delete");
  //     const deleteResult = await CategoryModel.deleteCategory(newCategory.id);

  //     expect(deleteResult).toBe(true); // Vérifie que la suppression a réussi
  //     const result = await CategoryModel.getCategoryById(newCategory.id);
  //     expect(result).toBeNull(); // Vérifie que la catégorie est bien supprimée
  //   });
  it("should delete a category", async () => {
    const newCategory =
      await CategoryModel.createCategory("Category to Delete");
    const deleteResult = await CategoryModel.deleteCategory(newCategory.id);

    // Vérifie que l'ID de la catégorie supprimée est renvoyé
    expect(deleteResult.id).toBe(newCategory.id);

    const result = await CategoryModel.getCategoryById(newCategory.id);
    expect(result).toBeNull(); // Vérifie que la catégorie a bien été supprimée
  });
});
