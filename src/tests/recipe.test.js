/* eslint-disable */
import db from "../src/db.js"; // Import the database connection
import Recipe from "../src/models/recipe.js"; // Import your recipe model

describe("Recipe Model", () => {
  beforeAll(async () => {
    await db.connect(); // Connect to the database
  });

  afterAll(async () => {
    await db.end(); // Clean up and close the database connection
  });

  describe("Create Recipe", () => {
    it("should create a new recipe", async () => {
      const newRecipe = {
        titre: "Pizza",
        ingredients: "Flour, Cheese, Tomato Sauce",
        type: "Main",
      };

      const result = await Recipe.createRecipe(newRecipe);
      expect(result).toHaveProperty("id");
      expect(result.titre).toBe(newRecipe.titre);
    });

    it("should fail to create a recipe with missing fields", async () => {
      const incompleteRecipe = {
        titre: "", // Empty title
        ingredients: "Flour, Cheese, Tomato Sauce",
        type: "Main",
      };

      try {
        await Recipe.createRecipe(incompleteRecipe);
      } catch (error) {
        expect(error.message).toBe("Failed to create recipe"); // Adapt to your error handling
      }
    });
  });

  describe("Get Recipe by ID", () => {
    it("should retrieve a recipe by ID", async () => {
      const recipeId = 1; // Use a valid ID from your database
      const recipe = await Recipe.getRecipeById(recipeId);
      expect(recipe).toHaveProperty("id", recipeId);
    });

    it("should return null for non-existent recipe ID", async () => {
      const recipe = await Recipe.getRecipeById(999); // Use a non-existent ID
      expect(recipe).toBeNull();
    });
  });

  describe("Update Recipe", () => {
    it("should update a recipe successfully", async () => {
      const updatedData = {
        titre: "Updated Pizza",
        ingredients: "Flour, Cheese, Tomato Sauce, Peppers",
        type: "Main",
      };
      const recipeId = 1; // Use a valid ID

      const result = await Recipe.updateRecipe(recipeId, updatedData);
      expect(result.titre).toBe(updatedData.titre);
    });
  });

  describe("Delete Recipe", () => {
    it("should delete a recipe by ID", async () => {
      const recipeId = 1; // Use a valid ID
      const result = await Recipe.deleteRecipe(recipeId);
      expect(result.affectedRows).toBe(1); // Check that one row was affected
    });

    it("should return 0 affectedRows for non-existent recipe", async () => {
      const result = await Recipe.deleteRecipe(999); // Use a non-existent ID
      expect(result.affectedRows).toBe(0);
    });
  });

  // Add other test cases as needed...
});
