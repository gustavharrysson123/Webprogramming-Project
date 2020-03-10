import { createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Ingredient } from '../../models/ingredient';
import { ShoppingList } from '../../models/shoppinglist';
import { AppState } from '../index';


export const fetchShoppingLists = (state: AppState) => {
    return state.shoppingLists;
}


// export const getRecipeList = createSelector(getState, fetchRecipeList);
