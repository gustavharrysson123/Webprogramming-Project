import { Action, createReducer, on } from '@ngrx/store';
import { addRecipe, removeRecipe } from './recipeList.actions';
import { Recipe } from '../models/recipe';
 
export interface State {
  recipes: Recipe[];
}

export const initialState = {
  recipes: []
};
 

const recipeListReducer = createReducer(initialState,
  on(addRecipe, (state, { recipe }) => ({recipes: state.recipes.concat(recipe)}) ),
  on(removeRecipe, (state, { id }) => ({recipes: state.recipes.filter( recipe => recipe.id !== id)}))
);
 
export function reducer(state: State | undefined, action: Action) {
  return recipeListReducer(state, action);
}