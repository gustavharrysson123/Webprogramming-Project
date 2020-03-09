import { Ingredient } from '../models/ingredient';

export interface ShoppingList {
  id: string;
  name: string;
  ShoppingList : Ingredient[];
}
