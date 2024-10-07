import express from "express"; // Correct import syntax without parentheses
import cors from "cors"; // Import CORS
import recipeRoutes from "./routes/recipeRoutes.js"; // Import des routes de recettes
import categoryRoutes from "./routes/categoryRoutes.js"; // Import des routes de catégories


const app = express(); 

app.use(cors()); 
app.use(express.json()); 
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors("*", corsOptions));

app.use("/api", recipeRoutes); 
app.use("/api", categoryRoutes); 


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
