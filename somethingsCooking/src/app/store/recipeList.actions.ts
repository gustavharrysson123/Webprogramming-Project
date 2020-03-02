import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export const addRecipe = createAction(
    '[RecipeList] Add Recipe',
    props<{ recipe: Recipe }>()
  );

export const removeRecipe = createAction(
'[RecipeList] Remove Recipe',
props<{ id: number }>()
);
