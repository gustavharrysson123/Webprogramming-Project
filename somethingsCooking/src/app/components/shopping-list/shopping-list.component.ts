import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models/shoppinglistitem';

const ELEMENT_DATA: ShoppingListItem[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
