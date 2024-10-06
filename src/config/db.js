import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create the database connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,
});

// Test the database connection
db.getConnection()
  .then((connection) => {
    console.log("Database connected successfully.");
    connection.release(); // Release the connection back to the pool
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// Export the db pool for use in other files
export default db;
