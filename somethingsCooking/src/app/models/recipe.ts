import { Ingredient } from '../models/ingredient';

export interface Recipe {
    id: number;
    recipeInfo: {
      name: string;
      defaultPortions: number;
      category: string;
      ingredients: Ingredient[];
    };
  }