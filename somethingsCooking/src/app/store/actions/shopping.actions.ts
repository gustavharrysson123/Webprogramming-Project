import { Action } from '@ngrx/store';
import { ShoppingList } from '../../models/shoppinglist';
import { Ingredient } from '../../models/ingredient';

export enum ShoppingActionTypes{
  SAVE_LIST = '[SHOPPINGLIST] Save List',
  DELETE_LIST = '[SHOPPINGLIST] Delete List',
  DELETE_ITEM = '[SHOPPINGLIST] Delete Item',
  ADD_RECIPE = '[SHOPPINGLIST] Add Recipe',
}

export class SaveListAction implements Action{
  readonly type = ShoppingActionTypes.SAVE_LIST;

  constructor(public payload: ShoppingList) {}
}

export class DeleteListAction implements Action{
  readonly type = ShoppingActionTypes.DELETE_LIST;

  constructor(public id: string) {}
}

export class DeleteItemAction implements Action{
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public itemId: string, public listId: string) {}
}

export class AddRecipeAction implements Action{
  readonly type = ShoppingActionTypes.ADD_RECIPE;

  constructor(public listId: string, public items: Array<Ingredient>) {}
}

export type ShoppingListAction = SaveListAction | DeleteListAction | DeleteItemAction | AddRecipeAction;
