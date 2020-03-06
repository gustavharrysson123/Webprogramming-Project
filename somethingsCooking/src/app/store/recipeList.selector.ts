import { createSelector } from '@ngrx/store';

import { State } from './recipeList.reducer';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';


   
  export interface AppState {
    // selectedRecipe: Recipe;  Not yet implemented
    recipes: Recipe[];
  }

export function getState(state: State): State {
    return state;
}

export const fetchRecipes = (state: AppState) => {
    return state.recipes;
}

// export const getRecipeList = createSelector(getState, fetchRecipeList);