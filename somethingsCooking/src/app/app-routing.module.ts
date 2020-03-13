import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'

import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ViewMenusComponent } from './view-menus/view-menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';


const routes: Routes = [
  { path: "Create_Recipe", component: CreateRecipeComponent },
  { path: "View_Recipes", component: ViewRecipesComponent },
  { path: "Create_Menu", component: CreateMenuComponent },
  { path: "View_Menus", component: ViewMenusComponent },
  { path: "Shopping_List", component: ShoppingListComponent },
  { path: "Recipe/:recipeId", component: RecipeDetailsComponent},
  { path: "Menu/:menuId", component: MenuDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
