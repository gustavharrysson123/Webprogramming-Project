import { createAction, props } from '@ngrx/store';
import { ShoppingList } from '../../models/shoppinglist';
import { Ingredient } from '../../models/ingredient';

export const saveList = createAction(
  '[ShoppingList] Save List',
  props<{ shoppinglist: ShoppingList }>()
);
