import { ActionReducerMap } from '@ngrx/store';

import { RecipeReducer } from './recipeList.reducer';
import { ShoppingReducer } from './reducers/shopping.reducer';
import { ShoppingList } from '../models/shoppinglist';
import { Recipe } from '../models/recipe';



export interface AppState {
    readonly recipes: Array<Recipe>;
    readonly shoppingLists: Array<ShoppingList>;

}
