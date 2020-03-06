import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchRecipes } from '../store/recipeList.selector';
import { Store, select } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';





@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

// See https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
export class RecipeDetailsComponent implements OnInit {
  recipe;
  ingredientsData;
  ingredientForm;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ recipes: [Recipe] }>,
    private formBuilder: FormBuilder) {
    this.ingredientForm = this.formBuilder.group({
      ingredients: new FormArray([]),
    });

    
  }

  private addCheckboxes() {
    this.ingredientsData.forEach((o, i) => {
      const control = new FormControl(true); 
      (this.ingredientForm.controls.ingredients as FormArray).push(control);
    });
  }

  submit() {
    const selectedIngredientIds = this.ingredientForm.value.ingredients
      .map((v, i) => v ? this.ingredientsData[i].id : null)
      .filter(v => v !== null);
    console.warn(selectedIngredientIds);
    //TODO: Add store functionality for shpoping list and dispatch an action from here that updates the store
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let recipeId = params.get("recipeId");
      this.store.pipe(select(fetchRecipes)).subscribe(recipes => {
        if (recipes) {
          this.recipe = Array.from(recipes["recipes"]).filter(recipe => recipe["recipe"].id === recipeId)[0]["recipe"];
          this.ingredientsData = this.recipe.recipeInfo.ingredients;
          this.addCheckboxes();
        }
      });
    });
  }

}
