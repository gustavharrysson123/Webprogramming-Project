import { Recipe } from '../models/recipe';

export interface Menu {
    id: string;
    name: string;
    recipes: Recipe[];
  }

