import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component'
import { StoreTestComponent } from './store-test/store-test.component'
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';


const routes: Routes = [
  { path: "Create_Recipe", component: CreateRecipeComponent },
  { path: "Menus", component: DummyComponent },
  { path: "Shopping_List", component: DummyComponent },
  { path: "Store_Test", component: StoreTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
