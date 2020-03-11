import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchRecipes } from '../store/recipeList.selector';
import { fetchShoppingLists } from '../store/selectors/shopping.selector';

import { Store, select } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppState } from '../store/index';
import { AddRecipeAction } from '../store/actions/shopping.actions';
import { Ingredient } from '../models/ingredient';





@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

// See https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
export class RecipeDetailsComponent implements OnInit {
  recipe;
  ingredientsData;
  portionSelect;
  ingredientForm;
  shoppingListOptions;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private formBuilder: FormBuilder) {
    this.ingredientForm = this.formBuilder.group({
      ingredients: new FormArray([]),
      portionSelect: new FormControl(Number),
      shoppingList: new FormControl(String)
    });


  }

  private initializeForm() {
    this.ingredientsData.forEach((o, i) => {
      const control = new FormControl(true);
      (this.ingredientForm.controls.ingredients as FormArray).push(control);
    });
  }

  submit() {
    const selectedIngredientIds = this.ingredientForm.value.ingredients
      .map((v, i) => v ? this.ingredientsData[i].id : null)
      .filter(v => v !== null);
    const selectedIngredients = this.recipe.recipeInfo.ingredients.
      filter( ingredient => selectedIngredientIds.includes(ingredient.id))
    const selectedPortions = this.ingredientForm.value.portionSelect;
    const portionFactor = selectedPortions / this.recipe.recipeInfo.defaultPortions;

    selectedIngredients.forEach( function(item){
        item.ingredientInfo.quantity *= portionFactor;
    })
    this.store.dispatch(new AddRecipeAction(this.ingredientForm.value.shoppingList, selectedIngredients));
    console.warn(selectedIngredients);
    console.warn("portionFactor: " + portionFactor);
    //TODO: Add store functionality for shpoping list and dispatch an action from here that updates the store
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let recipeId = params.get("recipeId");
      this.store.pipe(select(fetchRecipes)).subscribe(recipes => {
        if (recipes) {
          this.recipe = Array.from(recipes["recipes"]).filter(recipe => recipe["recipe"].id === recipeId)[0]["recipe"];
          this.ingredientsData = this.recipe.recipeInfo.ingredients;
          this.initializeForm();
        }
      });
    });
    this.store.pipe(select(fetchShoppingLists)).subscribe( arr => {
      this.shoppingListOptions =  arr;
    });
  }

}
