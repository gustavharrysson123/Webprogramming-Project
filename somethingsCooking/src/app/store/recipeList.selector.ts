import { createSelector } from '@ngrx/store';

import { State } from './recipeList.reducer';
import { Recipe } from '../models/recipe';

export function getState(state: State): State {
    return state;
}

export function fetchRecipeList(state: State): Recipe[] {
    return state.recipes;
}

export const getRecipeList = createSelector(getState, fetchRecipeList);