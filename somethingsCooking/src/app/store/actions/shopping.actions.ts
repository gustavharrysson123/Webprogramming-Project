import { Action } from '@ngrx/store';
import { ShoppingList } from '../../models/shoppinglist';

export enum ShoppingActionTypes{
  SAVE_LIST = '[SHOPPINGLIST] Save List',
  DELETE_LIST = '[SHOPPINGLIST] Delete List',
  DELETE_ITEM = '[SHOPPINGLIST] Delete Item',
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

export type ShoppingListAction = SaveListAction | DeleteListAction | DeleteItemAction;
