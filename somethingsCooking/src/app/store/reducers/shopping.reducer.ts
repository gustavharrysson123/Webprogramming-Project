import { Action, createReducer, on } from '@ngrx/store';
import { saveList } from '../actions/shopping.actions';
import { ShoppingList } from '../../models/shoppinglist';

export interface State {
  shoppinglists: ShoppingList[];
}

export const initialState = {
  shoppinglists: []
};

const _shoppingListReducer = createReducer(initialState,
  on(saveList, (state, { shoppinglist }) => ({ shoppinglists: [shoppinglist, ...state.shoppinglists]}))
);

export function reducer(state, action) {
  return _shoppingListReducer(state, action);
}
