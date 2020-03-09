import { Component, OnInit } from '@angular/core';
import { fetchRecipes } from '../store/recipeList.selector';
import { Store, select } from '@ngrx/store'
import { MatTableModule } from './recipe-data-source';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes;
  dataSource;
  columnsToDisplay = ['name', 'portions', 'category'];

  constructor(private store: Store<{ recipes: [Recipe] }>) { 
    
  }

  ngOnInit(): void {
    this.store.pipe(select(fetchRecipes)).subscribe( arr => {
      this.recipes =  arr;
      
      this.dataSource = new MatTableModule(this.recipes.recipes);
    });
  }

}
