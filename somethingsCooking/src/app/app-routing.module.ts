import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component'
import { StoreTestComponent } from './store-test/store-test.component'
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "Recipes", component: DummyComponent },
  { path: "Menus", component: DummyComponent },
  { path: "Shopping_List", component: DummyComponent },
  { path: "Store_Test", component: StoreTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
