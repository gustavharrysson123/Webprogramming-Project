import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { fetchRecipes } from '../store/recipeList.selector';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { Menu } from '../models/menu'
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu$: Observable<[Menu]>;
  menuForm: FormGroup;
  recipeGroup: FormGroup;
  recipeOptions: Recipe[];
  constructor(private fb: FormBuilder, private store: Store<{ menus: [Menu], recipes: [Recipe] }>) {
    this.menu$ = store.pipe(select('menus'));
   }

  ngOnInit(): void {
    this.store.pipe(select(fetchRecipes)).subscribe(recipes => {
      if (recipes) {
        this.recipeOptions = Array.from(recipes["recipes"]);
        console.warn(this.recipeOptions);
      }
    });

    this.menuForm = this.fb.group({
      menuName: new FormControl,
      recipes: this.fb.array([this.fb.group({
        recipe: new FormControl(),
      })])
    })
  }
  get recipes() {
    return this.menuForm.get('recipes') as FormArray;
  }

  addRecipe() {
    this.recipes.push(this.fb.group({
      recipe: [],
      }));
  }

  deleteRecipe(index) {
    this.recipes.removeAt(index);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let formValue = this.menuForm.value;
    let recipes = formValue.recipes;    
    console.warn("recipes for menu: ");
    console.warn(recipes);

    let menu = <Menu> {
      id: uuid.v4(),
      name: formValue.menuName,
      recipes: recipes    
    }

    this.store.dispatch({type: "[MenuList] Add Menu", menu: {menu}})
  }

}
