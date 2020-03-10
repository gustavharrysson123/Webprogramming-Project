import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Ingredient } from '../../models/ingredient';
import { ShoppingList } from '../../models/shoppinglist';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchLists } from '../../store/selectors/shopping.selector';
import { SaveListAction, DeleteListAction, DeleteItemAction } from '../../store/actions/shopping.actions';
import * as uuid from 'uuid';

import { AppState } from '../../store/index';





@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingLists$: Observable<Array<ShoppingList>>
  displayedColumns: string[] = ['name', 'amount', 'actions'];
  itemList = [];
  panelOpenState : string = '';

  constructor(private store: Store<AppState>) {
  }

  public addItem(event, names, amounts, units){
    this.itemList = [...this.itemList, {id: uuid.v4(), ingredientInfo: {name: names, quantity: amounts, unit: units}}];

  }
  public saveList(event, names){
    this.store.dispatch(new SaveListAction(
    {ShoppingList: this.itemList,
     name: names,
      id: uuid.v4()}))

    this.itemList = [];

  }

  public deleteList(id){
    this.store.dispatch(new DeleteListAction(id));

  }
  public deleteItem(id){
    this.itemList = this.itemList.filter(item => item.id !== id);

  }

  public deleteViewItem(itemId, listId){
    this.panelOpenState = listId;
    this.store.dispatch(new DeleteItemAction(itemId, listId));
  }


  ngOnInit(): void {
    this.shoppingLists$ = this.store.select(store => store.shoppingLists);

  }

}
