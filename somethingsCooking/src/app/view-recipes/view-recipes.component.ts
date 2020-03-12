import { Component, OnInit } from '@angular/core';
import { fetchRecipes } from '../store/recipeList.selector';
import { Store, select } from '@ngrx/store'
import { MatTableModule } from './recipe-data-source';
//import {MatTableDataSource} from '@angular/material/table'
import { Recipe } from '../models/recipe';

interface Different {
  name: string;
}


@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes;
  dataSource;
  columnsToDisplay: string[] = ['name', 'portions', 'category'];

  categories: Different[] = [
    {name: 'Appetizers'},
    {name: 'Main Dishes'},
    {name: 'Breads'},
    {name: 'Desserts'},
    {name: 'Soups'},
    {name: 'Salads'},
    {name: 'Others'},
  ];

  constructor(private store: Store<{ recipes: [Recipe] }>) {}

  ngOnInit(): void {
    this.store.pipe(select(fetchRecipes)).subscribe( arr => {
      this.recipes =  arr;

      const RECIPE_DATA: Recipe[] = this.recipes.recipes;
      this.dataSource = new MatTableModule(RECIPE_DATA);

      this.dataSource.filterPredicate = (data, filter: string) => {
        return data.recipe.recipeInfo.category.startsWith(filter);
       };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}