import express from "express"; // Correct import syntax without parentheses
import cors from "cors"; // Import CORS
import recipeRoutes from "./routes/recipe.js"; // Correct import syntax, including .js for ES modules

const app = express(); // Correct initialization of 'app'

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Use the recipe routes
app.use("/api", recipeRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
