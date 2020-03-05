import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  recipes$: Observable<[Recipe]>;
  constructor(private fb: FormBuilder, private store: Store<{ recipes: [Recipe] }>) {
    this.recipes$ = store.pipe(select('recipes'));
   }

  recipeForm: FormGroup;
  ingredientGroup: FormGroup;

  ngOnInit(): void {
    this.ingredientGroup = this.fb.group({
      name: '',
      unit: '',
      quantity: Number
    })
    this.recipeForm = this.fb.group({
      recipeName: [],
      defaultPortions: [],
      category: [],
      ingredients: this.fb.array([this.fb.group({
        name: new FormControl(),
        unit: new FormControl(),
        quantity: new FormControl(),
      })])
    })
  }
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({name: '',
      unit: '',
      quantity: ''}));
  }

  deleteIngredient(index) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let formValue = this.recipeForm.value;
    let ingredients = formValue.ingredients.map(ingredient => 
      <Ingredient> {
        id: uuid.v4(),
        ingredientInfo: {
          name: ingredient.name,
          unit: ingredient.unit,
          quantity: ingredient.quantity
      }});
    let recipe = <Recipe> {
      id: uuid.v4(),
      recipeInfo: {
        name: formValue.recipeName,
        defaultPortions: formValue.defaultPortions,
        category: formValue.category,
        ingredients: ingredients
      }
    }
    console.warn(recipe)
    this.store.dispatch({type: "[RecipeList] Add Recipe", recipe: {recipe}})
    this.store.pipe().subscribe(
      (data:any) => {
      
      console.warn(data) //your data shows here
      });
  }
}
