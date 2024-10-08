DROP DATABASE IF EXISTS gestion_recette;
CREATE DATABASE gestion_recette;
USE gestion_recette;
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
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
  ('Cuisine mauritanienne'),
  ('Cuisine sénégalaise'),
  ('Cuisine française'),
  ('Cuisine américaine'),
  ('Cuisine italienne'),
  ('Cuisine mexicaine'),
  ('Cuisine marocaine'),
  ('Cuisine japonaise');

INSERT INTO recipes (titre, ingredients, type, categorie_id)
VALUES
    ('Mouclade', 'Moules, Crème, Vin blanc', 'Entree', 1),
    ('Thiéboudiène', 'Riz, Poisson, Légumes', 'Plat principal', 1),
    ('Montécaos', 'Farine, Sucre, Cannelle', 'Dessert', 1),
    ('Jus de bissap', 'Hibiscus, Sucre, Eau', 'Boisson', 1),
    ('Pastels', 'Farine, Poisson, Sauce tomate', 'Entree', 2),
    ('Yassa Poulet', 'Poulet, Oignons, Riz', 'Plat principal', 2),
    ('Beignets de banane', 'Banane, Sucre, Farine', 'Dessert', 2),
    ('Bissap', 'Hibiscus, Eau, Sucre', 'Boisson', 2),
    ('Quiche lorraine', 'Oeufs, Crème, Lardons', 'Entree', 3),
    ('Boeuf bourguignon', 'Boeuf, Vin rouge, Champignons', 'Plat principal', 3),
    ('Tarte Tatin', 'Pommes, Sucre, Pâte', 'Dessert', 3),
    ('Kir', 'Vin blanc, Crème de cassis', 'Boisson', 3),
    ('Buffalo wings', 'Poulet, Sauce piquante', 'Entree', 4),
    ('Cheeseburger', 'Boeuf, Fromage, Pain', 'Plat principal', 4),
    ('Brownie', 'Chocolat, Sucre, Farine', 'Dessert', 4),
    ('Milkshake', 'Lait, Glace, Sucre', 'Boisson', 4),
    ('Caprese', 'Tomates, Mozzarella, Basilic', 'Entree', 5),
    ('Spaghetti Carbonara', 'Pâtes, Lardons, Oeufs', 'Plat principal', 5),
    ('Tiramisu', 'Mascarpone, Café, Biscuits', 'Dessert', 5),
    ('Espresso', 'Café', 'Boisson', 5),
    ('Nachos', 'Tortilla, Fromage, Haricots', 'Entree', 6),
    ('Fajitas', 'Tortilla, Poulet, Poivrons', 'Plat principal', 6),
    ('Churros', 'Farine, Sucre, Cannelle', 'Dessert', 6),
    ('Margarita', 'Tequila, Jus de citron, Sucre', 'Boisson', 6),
    ('Briouates', 'Farce, Feuilles de brick, Amandes', 'Entree', 7),
    ('Tajine', 'Agneau, Légumes, Épices', 'Plat principal', 7),
    ('Baghrir', 'Farine, Semoule, Levure', 'Dessert', 7),
    ('Thé à la menthe', 'Thé vert, Menthe, Sucre', 'Boisson', 7),
    ('Sushi', 'Riz, Poisson, Nori', 'Entree', 8),
    ('Ramen', 'Nouilles, Bouillon, Viande', 'Plat principal', 8),
    ('Mochi', 'Riz gluant, Sucre', 'Dessert', 8),
    ('Saké', 'Riz, Eau, Levure', 'Boisson', 8);
