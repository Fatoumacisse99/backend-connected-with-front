# API de Gestion des Recettes et Catégories

## Description

Cette API permet de gérer les recettes et les catégories dans une application de gestion des recettes. Elle permet de créer, lire, mettre à jour et supprimer des recettes ainsi que des catégories associées.

## Endpoints de l’API

### Recettes

| Méthode | Endpoint           | Description                      |
| ------- | ------------------ | -------------------------------- |
| GET     | `/api/recipes`     | Récupérer toutes les recettes    |
| GET     | `/api/recipes/:id` | Récupérer une recette par ID     |
| POST    | `/api/recipes`     | Créer une nouvelle recette       |
| PUT     | `/api/recipes/:id` | Mettre à jour une recette par ID |
| DELETE  | `/api/recipes/:id` | Supprimer une recette par ID     |

#### Exemples de Requêtes et Réponses

- **GET /api/recipes**

  - **Réponse** :
    ```json
    [
      {
        "id": 1,
        "titre": "Salade César revisitée",
        "ingredients": "Laitue, Poulet grillé",
        "type": "Entree",
        "categorie_id": 2
      }
    ]
    ```

- **GET /api/recipes/:id**

  - **Exemple de requête** :
    ```bash
    GET /api/recipes/1
    ```
  - **Réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César revisitée",
      "ingredients": "Laitue, Poulet grillé",
      "type": "Entree"
    }
    ```

- **POST /api/recipes**

  - **Corps de la requête** :
    ```json
    {
      "id": 18,
      "titre": "Taazarte auu Ciitron Jauuune",
      "ingredients": "Faarine, Oeufs, Citron",
      "type": "Dessert",
      "categorie_id": 2
    }
    ```
  - **Réponse** :
    ```json
    {
      "id": 18,
      "titre": "Taazarte auu Ciitron Jauuune",
      "ingredients": "Faarine, Oeufs, Citron",
      "type": "Dessert",
      "categorie_id": 2
    }
    ```

- **PUT /api/recipes/:id**

  - **Corps de la requête** :
    ```json
    {
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entree",
      "categorie_id": 2
    }
    ```
  - **Réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entree",
      "categorie_id": 2
    }
    ```

- **DELETE /api/recipes/:id**
  - **Exemple de requête** :
    ```bash
    DELETE /api/recipes/1
    ```
  - **Réponse** :
    ```json
    {
      "message": "Recette supprimée avec succès."
    }
    ```

### Catégories

| Méthode | Endpoint              | Description                        |
| ------- | --------------------- | ---------------------------------- |
| GET     | `/api/categories`     | Récupérer toutes les catégories    |
| GET     | `/api/categories/:id` | Récupérer une catégorie par ID     |
| POST    | `/api/categories`     | Créer une nouvelle catégorie       |
| PUT     | `/api/categories/:id` | Mettre à jour une catégorie par ID |
| DELETE  | `/api/categories/:id` | Supprimer une catégorie par ID     |

#### Exemples de Requêtes et Réponses pour les Catégories

- **GET /api/categories**

  - **Réponse** :
    ```json
    [
      {
        "id": 1,
        "name": "Entrée"
      }
    ]
    ```

- **GET /api/categories/:id**

  - **Exemple de requête** :
    ```bash
    GET /api/categories/1
    ```
  - **Réponse** :
    ```json
    {
      "id": 1,
      "name": "Entrée"
    }
    ```

- **POST /api/categories**

  - **Corps de la requête** :
    ```json
    {
      "name": "Plat principal"
    }
    ```
  - **Réponse** :
    ```json
    {
      "id": 2,
      "name": "Plat principal"
    }
    ```

- **PUT /api/categories/:id**

  - **Corps de la requête** :
    ```json
    {
      "name": "Entrée améliorée"
    }
    ```
  - **Réponse** :
    ```json
    {
      "id": 1,
      "name": "Entrée améliorée"
    }
    ```

- **DELETE /api/categories/:id**
  - **Exemple de requête** :
    ```bash
    DELETE /api/categories/1
    ```
  - **Réponse** :
    ```json
    {
      "message": "Catégorie supprimée avec succès."
    }
    ```

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/) (version 10 ou supérieure)
- [Postman](https://www.postman.com/) ou un autre outil pour tester les API

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Fatoumacisse99/backend-connected-with-front.git

   ```

2. Accédez au répertoire du projet :

```bash
cd backend-connected-with-front
```

3. Installez les dépendances :

```bash
npm install
```

4. Configurez la base de données :

Assurez-vous que Mysql est en cours d'exécution sur votre machine locale.
renommer le fichier .env.exemple en .env et entrer vos informations de connexion dans ce fichier:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votremotdepasse
DB_NAME=votredb
DB_PORT=3306
```

5. Démarrez le serveur :

```bash
 npm start
```

## Exécution des commandes

- Pour exécuter les tests unitaires, utilisez la commande suivante :

```bash
npm test
```

- Pour linting, exécutez la commande suivante

```bash

npm run lint
```

- Pour formater le code avec Prettier, exécutez :

```bash
npm run format
```

## Auteur

- [Fatouma Cisse](https://github.com/Fatoumacisse99)
