import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ShoppingListItem } from '../../models/shoppinglistitem';

let ELEMENT_DATA: ShoppingListItem[] = [
  {name: 'Tomatoes', amount: "5"},
  {name: 'Onions', amount: "2"},
  {name: 'Pasta', amount: "1 Kg"},
  {name: 'Milk', amount: "2 cartons"},
];

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount'];
  dataSource = ELEMENT_DATA;
  SHOPPINGLIST = []

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor() { }

  public addItem(event, names, amounts){
    ELEMENT_DATA.push({name: names, amount: amounts});
    this.dataSource = ELEMENT_DATA;
    this.table.renderRows();

  }
  public saveList(event){
    this.SHOPPINGLIST.push(ELEMENT_DATA);
    alert(this.SHOPPINGLIST[0])
  }

  ngOnInit(): void {
  }

}
