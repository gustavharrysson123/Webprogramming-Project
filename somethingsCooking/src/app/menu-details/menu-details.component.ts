import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchMenus } from '../store/menuList.selector';
import { fetchRecipes } from '../store/recipeList.selector';
import { Store, select } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { Menu } from '../models/menu';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  menu;
  recipes;

  constructor(private route: ActivatedRoute,
    private store: Store<{ menus: [Menu], recipes: [Recipe] }>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let menuId = params.get("menuId");
      this.store.pipe(select(fetchMenus)).subscribe(menus => {
        if (menus) {
          this.menu = Array.from(menus["menus"]).filter(menu => menu["menu"].id === menuId)[0]["menu"];
          console.warn("menu for listing");
          console.warn(this.menu);
          let recipeIds = this.menu.recipes.map(recipe => recipe.recipe);
          console.warn("recipeIds: ");
          console.warn(recipeIds);

          this.store.pipe(select(fetchRecipes)).subscribe(recipes => {
            if (recipes) {
              this.recipes = Array.from(recipes["recipes"]).filter(recipe => recipeIds.includes(recipe["recipe"].id));
              console.warn("recipes in menu");
              console.warn(this.recipes);
            }
          });
        }
      });
    });
  }

}
