import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingList } from '../../models/shoppinglist';
import { ShoppingListAction, ShoppingActionTypes } from '../actions/shopping.actions';


export const initialState = [];

export function ShoppingReducer(
  state: Array<ShoppingList> = initialState,
  action: ShoppingListAction
){
  switch (action.type){
    case ShoppingActionTypes.SAVE_LIST:
      return [action.payload, ...state]
    case ShoppingActionTypes.DELETE_LIST:
      return state.filter(list => list.id !== action.id)
    case ShoppingActionTypes.DELETE_ITEM:
      let temp = [];
      state.forEach( function(list){
        if (list.id !== action.listId){
          temp = [...temp, list];
        } else{
          let tempList = [];
          list.ShoppingList.forEach( function(temp2){
            if(temp2.id !== action.itemId){
              tempList = [...tempList, temp2];
            }
          })
          temp = [...temp, {id: list.id, name: list.name, ShoppingList: tempList}];
        }
      })


      return temp;
    default:
      return state;
  }
}
