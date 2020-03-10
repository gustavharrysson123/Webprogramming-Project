import { createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { State } from './recipeList.reducer';
import { Menu } from '../models/menu';



export interface AppState {
    // selectedRecipe: Recipe;  Not yet implemented
    menus: Menu[];
}

export function getState(state: State): State {
    return state;
}

export const fetchMenus = (state: AppState) => {
    return state.menus;
}

// export const getRecipeList = createSelector(getState, fetchRecipeList);