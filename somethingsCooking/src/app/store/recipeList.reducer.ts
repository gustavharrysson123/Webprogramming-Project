import { Action, createReducer, on } from '@ngrx/store';
import { addRecipe, removeRecipe } from './recipeList.actions';
import { Recipe } from '../models/recipe';

export interface State {
  recipes: Recipe[];
}

export const initialState = {
  recipes: []
};

const _recipeListReducer = createReducer(initialState,
  on(addRecipe, (state, { recipe }) => ({ recipes:  [recipe,...state.recipes] })),
  on(removeRecipe, (state, { id }) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) }))
);

export function RecipeReducer(state, action) {
  return _recipeListReducer(state, action);
}
