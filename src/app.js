import express from "express"; // Correct import syntax without parentheses
import cors from "cors"; // Import CORS
import recipeRoutes from "./routes/recipeRoutes.js"; // Import des routes de recettes
import categoryRoutes from "./routes/categoryRoutes.js"; // Import des routes de catégories


const app = express(); // Correct initialization of 'app'

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api", recipeRoutes); 
app.use("/api", categoryRoutes); 


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
