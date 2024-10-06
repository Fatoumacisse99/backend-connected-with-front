/* eslint-disable */

import RecipeModel from "../src/models/recipe.js";
import db from "../src/config/db.js";

describe("Recipe Model with Real Database", () => {
  beforeAll(async () => {
    await db.query("TRUNCATE TABLE recipes");

    // Insertion des données initiales pour les its
    await db.query(`
      INSERT INTO recipes (titre, ingredients, type, categorie_id) VALUES
      ('Tiramisu', 'Mascarpone, Cafe, Biscuits', 'Dessert', 1),
      ('Mousse au chocolat', 'Chocolat, Oeufs, Creme', 'Dessert', 1),
      ('Creme brulee', 'Creme, Vanille, Sucre', 'Dessert', 1),
      ('Salade Cesar', 'Laitue, Poulet, Croutons', 'Entree', 2),
      ('Soupe de tomate', 'Tomates, Oignons, Basilic', 'Entree', 2),
      ('Bruschetta', 'Pain, Tomates, Ail', 'Entree', 2),
      ('Couscous', 'Semoule, Legumes, Agneau', 'Plat principal', 3),
      ('Poulet roti', 'Poulet, Ail, Romarin', 'Plat principal', 3),
      ('Lasagnes', 'Pates, Viande, Sauce tomate', 'Plat principal', 3),
      ('Smoothie Fraise', 'Fraise, Lait, Sucre', 'Boisson', 4),
      ('Limonade', 'Citron, Eau, Sucre', 'Boisson', 4),
      ('Tacos', 'Tortilla, Viande, Legumes', 'Snack', 5),
      ('Pizza Margarita', 'Tomates, Mozzarella, Basilic', 'Snack', 5);
      
    `);
  });

  // beforeEach(async () => {
  //   await db.query("DELETE FROM recipes");
  // });

  it("should create a new recipe", async () => {
    const uniqueTitle = "New Recipe " + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: "Some ingredients",
      type: "Main",
      categorie_id: 1,
    };
    const result = await RecipeModel.createRecipe(newRecipe);
    expect(result.id).toBeDefined();
  });

  it("should retrieve a recipe by ID", async () => {
    const uniqueTitle = "Retrieve Me " + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: "Ingredients",
      type: "Main",
      categorie_id: 2,
    };
    const createdRecipe = await RecipeModel.createRecipe(newRecipe);
    const recipe = await RecipeModel.getRecipeById(createdRecipe.id);
    expect(recipe).toBeDefined();
    expect(recipe.id).toBe(createdRecipe.id);
  });

  it("should update a recipe", async () => {
    const uniqueTitle = "Recipe to Update " + Date.now();
    const createdRecipe = await RecipeModel.createRecipe({
      titre: uniqueTitle,
      ingredients: "Ingredients",
      type: "Main",
      categorie_id: 3,
    });

    const updatedRecipeData = {
      titre: "Updated Recipe " + Date.now(),
      ingredients: "Updated ingredients",
      type: "Dessert",
      categorie_id: 2,
    };
    const updatedRecipe = await RecipeModel.updateRecipe(
      createdRecipe.id,
      updatedRecipeData,
    );

    expect(updatedRecipe.titre).toBe(updatedRecipeData.titre);
    expect(updatedRecipe.id).toBe(createdRecipe.id);
  });

  it("should retrieve a recipe by title", async () => {
    const uniqueTitle = "Test Recipe " + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: "Some ingredients",
      type: "Main",
      categorie_id: 2,
    };
    await RecipeModel.createRecipe(newRecipe);

    const recipe = await RecipeModel.getRecipeByTitle(uniqueTitle);
    expect(recipe).toBeDefined();
    expect(recipe.titre).toBe(uniqueTitle);
  });

  it("should return null for a non-existent recipe by title", async () => {
    const recipe = await RecipeModel.getRecipeByTitle("Non-existent Title");
    expect(recipe).toBeNull();
  });

  it("test delete", async () => {
    const recipe = await RecipeModel.deleteRecipe(1);
    expect(recipe).not.toBeNull();
  });
});
