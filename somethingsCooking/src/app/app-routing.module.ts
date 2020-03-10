import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'

import { StoreTestComponent } from './store-test/store-test.component'
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { CreateMenuComponent } from './create-menu/create-menu.component';


const routes: Routes = [
  { path: "Create_Recipe", component: CreateRecipeComponent },
  { path: "View_Recipes", component: ViewRecipesComponent },
  { path: "Create_Menu", component: CreateMenuComponent },
  { path: "Menus", component: DummyComponent },
  { path: "Shopping_List", component: ShoppingListComponent },
  { path: "Store_Test", component: StoreTestComponent },
  { path: "Recipe/:recipeId", component: RecipeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
