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

  constructor(private store: Store<{ recipes: [Recipe] }>) { 
    
  }

  ngOnInit(): void {
    this.store.pipe(select(fetchRecipes)).subscribe( arr => {
      this.recipes =  arr;

      this.dataSource = new MatTableModule(this.recipes.recipes);
      console.log(this.recipes);
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

// https://material.angular.io/components/table/overview
// https://stackblitz.com/edit/angular-5hcooj?file=app%2Ftable-filtering-example.ts

// <tr ng-repeat="recipe in recipes | filter:selectedCategory">

/**<mat-option *ngFor="let category of categories" [value]="category.name">
      {{category.name}}
    </mat-option> */

    /**<mat-form-field>
  <mat-label>Select a Category</mat-label>
  <mat-select ng-model="selectedCategory" name="selectedCategory" (change)="Selected()">
    <mat-option *ngFor="let category of categories" [value]="category.name">
      {{category.name}}
    </mat-option>
  </mat-select>
</mat-form-field> */
