import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Ingredient } from '../../models/ingredient';
import { ShoppingList } from '../../models/shoppinglist';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchLists } from '../../store/selectors/shopping.selector';
import { State } from '../../store/reducers/shopping.reducer';





@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingLists$: Observable<Array<ShoppingList>>
  displayedColumns: string[] = ['name', 'amount'];
  ELEMENT_DATA = [];
  dataSource = this.ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private store: Store<State>) { }

  public addItem(event, names, amounts, units){
    this.ELEMENT_DATA.push({id: '1', ingredientInfo: {name: names, quantity: amounts, unit: units}},);
    this.dataSource = this.ELEMENT_DATA;
    this.table.renderRows();

  }
  public saveList(event, names){
    this.store.dispatch({type: "[ShoppingList] Save List", shoppinglist: {ShoppingList: this.ELEMENT_DATA, name: names, id: "1"}})
    this.shoppingLists$ = this.store.select(store => store.shoppinglists);
    alert(this.shoppingLists$);

    this.ELEMENT_DATA = [];
    this.dataSource = this.ELEMENT_DATA;
    this.table.renderRows();

  }

  ngOnInit(): void {
    this.store.pipe(select(fetchLists)).subscribe( arr => {
      this.recipes =  arr;

      this.dataSource = new MatTableModule(this.recipes.recipes);
    });
  }

}
