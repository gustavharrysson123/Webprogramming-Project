import { createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { State } from './recipeList.reducer';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';




export function getState(state: State): State {
    return state;
}

export const fetchRecipes = (state: AppState) => {
    return state.recipes;
}

export const fetchRecipeDetails = (state: AppState, recipeId: string) => {
    return state.recipes;
}

// export const getRecipeList = createSelector(getState, fetchRecipeList);
