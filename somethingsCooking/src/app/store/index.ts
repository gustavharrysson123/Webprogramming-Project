import { ActionReducerMap } from '@ngrx/store';

import * as fromRecipes from './recipeList.reducer';
import * as fromShoppingList from './reducers/shopping.reducer';


export interface AppState {
    recipes: fromRecipes.State;
    shoppingLists: fromShoppingList.State;

}

export const reducers: ActionReducerMap<AppState> = {
    recipes: fromRecipes.reducer,
    shoppingLists: fromShoppingList.reducer
};
