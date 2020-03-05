import { ActionReducerMap } from '@ngrx/store';

import * as fromRecipes from './recipeList.reducer';

export interface AppState {
    recipes: fromRecipes.State;
}

export const reducers: ActionReducerMap<AppState> = {
    recipes: fromRecipes.reducer
};