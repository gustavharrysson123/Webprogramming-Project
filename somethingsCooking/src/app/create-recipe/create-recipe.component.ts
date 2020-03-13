import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import * as uuid from 'uuid';
import { Router } from '@angular/router';

interface Different {
  name: string;
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  imgURL: any;

  categories: Different[] = [
    {name: 'Appetizers'},
    {name: 'Main Dishes'},
    {name: 'Breads'},
    {name: 'Desserts'},
    {name: 'Soups'},
    {name: 'Salads'},
    {name: 'Others'},
  ];

  recipes$: Observable<[Recipe]>;
  constructor(private fb: FormBuilder, private store: Store<{ recipes: [Recipe] }>, private router:Router) {
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
      image: null,
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
        ingredients: ingredients,
        image: this.imgURL
      }
    }
    this.store.dispatch({type: "[RecipeList] Add Recipe", recipe: {recipe}})
    this.store.pipe().subscribe(
      (data:any) => {
      
      console.warn(data) //your data shows here
      });
       
      this.router.navigate(['/View_Recipes']);
  }

  onFileSelected(event){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}
