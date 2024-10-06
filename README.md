# API de Gestion des Recettes

## Description

Cette API permet de gérer les recettes dans une application de gestion de recettes. Elle permet de créer, lire, mettre à jour et supprimer des recettes.

## Endpoints

### Recettes

- **GET /api/recettes**
  - Récupère toutes les recettes.
  - **Réponse** : Un tableau d'objets de recettes.
- **GET /api/recettes/:id**

  - Récupère une recette par ID.
  - **Paramètres** :
    - `id` : L'ID de la recette à récupérer.
  - **Réponse** : Un objet représentant la recette.

- **POST /api/recettes**

  - Crée une nouvelle recette.
  - **Corps de la requête (Body)** :
    ```json
    {
      "name": "String",
      "instructions": "String",
      "user_id": "Int"
    }
    ```
  - **Réponse** : Un objet représentant la recette créée, incluant l'ID généré.

- **PUT /api/recettes/:id**

  - Met à jour une recette existante.
  - **Paramètres** :
    - `id` : L'ID de la recette à mettre à jour.
  - **Corps de la requête (Body)** :
    ```json
    {
      "nom": "String",
      "instructions": "String",
      "user_id": "Int"
    }
    ```
  - **Réponse** : Un objet représentant la recette mise à jour.

- **DELETE /api/recettes/:id**
  - Supprime une recette par ID.
  - **Paramètres** :
    - `id` : L'ID de la recette à supprimer.
  - **Réponse** : Un message de confirmation ou une erreur si la recette n'est pas trouvée.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Fatoumacisse99/APIGestion_Recettes.git
   ```
   ```
   cd APIGestion_Recettes
   ```
   ```bash
   npm install

   ```

## Autheur

[Fatima cissé](https://github.com/Fatoumacisse99)
et [Abdarahmane Demba](https://github.com/Abdarahmane)
