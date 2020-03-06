import { Ingredient } from '../models/ingredient';

export interface Recipe {
    id: string;
    recipes?; //added because of typescript errors, should be removed if time permits
    recipeInfo: {
      name: string;
      defaultPortions: number;
      category: string;
      ingredients: Ingredient[];
    };
  }

