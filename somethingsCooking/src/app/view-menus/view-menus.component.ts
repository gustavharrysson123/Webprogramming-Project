import { Component, OnInit } from '@angular/core';
import { fetchMenus } from '../store/menuList.selector';
import { Store, select } from '@ngrx/store'
import { MatTableModule } from './menu-data-source';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-view-menus',
  templateUrl: './view-menus.component.html',
  styleUrls: ['./view-menus.component.css']
})
export class ViewMenusComponent implements OnInit {
  menus;
  dataSource;
  columnsToDisplay = ['name'];

  constructor(private store: Store<{ menus: [Menu] }>) { }


  ngOnInit(): void {
    this.store.pipe(select(fetchMenus)).subscribe(arr => {
      this.menus = arr;
      console.warn("menus for listing:");
      console.warn(this.menus.menus);
      this.dataSource = new MatTableModule(this.menus.menus);
    });
  }
}
