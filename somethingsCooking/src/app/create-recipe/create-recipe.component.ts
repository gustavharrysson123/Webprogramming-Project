import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
    console.warn(this.recipeForm.value);
  }
}
