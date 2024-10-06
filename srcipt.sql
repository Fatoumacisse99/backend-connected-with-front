DROP DATABASE IF EXISTS gestion_recette;
CREATE DATABASE gestion_recette;
USE gestion_recette;

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE recipes (
   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   titre VARCHAR(50) NOT NULL UNIQUE,
   ingredients VARCHAR(255) NOT NULL, 
   type VARCHAR(50) NOT NULL,
   categorie_id INT NOT NULL,
   FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

INSERT INTO categories (name)
VALUES
  ('Dessert'),
  ('Entree'),
  ('Plat principal'),
  ('Boisson'),
  ('Snack');

INSERT INTO recipes (titre, ingredients, type, categorie_id)
VALUES
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
