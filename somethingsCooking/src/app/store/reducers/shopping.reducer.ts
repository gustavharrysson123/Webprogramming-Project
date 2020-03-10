import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingList } from '../../models/shoppinglist';
import { Ingredient } from '../../models/ingredient';
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
      let newState = [];
      state.forEach( function(list){
        if (list.id !== action.listId){
          newState = [...newState, list];
        } else{
          let tempList = [];
          list.ShoppingList.forEach( function(temp2){
            if(temp2.id !== action.itemId){
              tempList = [...tempList, temp2];
            }
          })
          newState = [...newState, {id: list.id, name: list.name, ShoppingList: tempList}];
        }
      })
      return newState;
    case ShoppingActionTypes.ADD_RECIPE:
      let temp = [];
      state.forEach( function(list){
        if (list.name !== action.listId){
          temp = [...temp, list];
        } else{
          let newIngredients = list.ShoppingList;
          action.items.forEach( function(item){
            newIngredients = [...newIngredients, item]
          })
          temp = [...temp, {id: list.id, name: list.name, ShoppingList: newIngredients}];
        }
      })

      return temp;
    default:
      return state;
  }
}
