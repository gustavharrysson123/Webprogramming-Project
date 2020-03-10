import { createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Ingredient } from '../../models/ingredient';
import { ShoppingList } from '../../models/shoppinglist';



export interface AppState {
    // selectedRecipe: Recipe;  Not yet implemented
    shoppingLists: ShoppingList[];
}


export const fetchLists = (state: AppState) => {
    return state.shoppingLists;
}


// export const getRecipeList = createSelector(getState, fetchRecipeList);
