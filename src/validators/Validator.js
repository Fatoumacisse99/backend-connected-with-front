import { check, param, validationResult } from "express-validator";

const validateCreateRecipe = () => {
  return [
    check("titre")
      .not()
      .isEmpty()
      .withMessage("Le titre ne peut pas être vide!")
      .bail()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 caractères requis!"),
    check("ingredients")
      .not()
      .isEmpty()
      .withMessage("Les ingrédients ne peuvent pas être vides!"),
    check("type").not().isEmpty().withMessage("Le type ne peut pas être vide!"),
  ];
};

const validateUpdateCategory = () => {
  return [
    param("id").not().isEmpty().withMessage("L'ID est requis!"),
    check("name")
      .optional() // Make this field optional for update
      .not()
      .isEmpty()
      .withMessage("Le nom de la catégorie ne peut pas être vide!")
      .bail()
      .isLength({ min: 3 })
      .withMessage("Minimum 3 caractères requis!"),
  ];
};

const validateCreateCategory = () => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("Le nom de la catégorie ne peut pas être vide!")
      .bail()
      .isLength({ min: 3 })
      .withMessage("Minimum 3 caractères requis!"),
  ];
};

// Validation for updating a recipe
const validateUpdateRecipe = () => {
  return [
    param("id").not().isEmpty().withMessage("L'ID est requis!"),
    check("titre")
      .optional() // Make this field optional for update
      .isLength({ min: 6 })
      .withMessage("Minimum 6 caractères requis pour le titre!"),
    check("ingredients")
      .optional() // Make this field optional for update
      .not()
      .isEmpty()
      .withMessage("Les ingrédients ne peuvent pas être vides!"),
    check("type")
      .optional() // Make this field optional for update
      .not()
      .isEmpty()
      .withMessage("Le type ne peut pas être vide!"),
  ];
};

// Validation for deleting a recipe
const validateDeleteRecipe = () => {
  return [
    param("id")
      .not()
      .isEmpty()
      .withMessage("L'ID est requis pour supprimer une recette!"),
  ];
};

// Middleware for validation
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

// Exporting the functions
export {
  validateCreateRecipe,
  validateUpdateRecipe,
  validateDeleteRecipe,
  validate,
  validateCreateCategory,
  validateUpdateCategory, // Ensure this is included
};
