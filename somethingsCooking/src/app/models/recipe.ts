import { Ingredient } from '../models/ingredient';

export interface Recipe {
    id: string;
    recipeInfo: {
      name: string;
      defaultPortions: number;
      category: string;
      ingredients: Ingredient[];
    };
  }