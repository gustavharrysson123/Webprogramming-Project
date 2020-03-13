import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipeReducer } from './store/recipeList.reducer';
import { MenuReducer } from './store/menuList.reducer';
import { ShoppingReducer } from './store/reducers/shopping.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
 
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ViewMenusComponent } from './view-menus/view-menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateRecipeComponent,
    ShoppingListComponent,
    ViewRecipesComponent,
    RecipeDetailsComponent,
    CreateMenuComponent,
    ViewMenusComponent,
    MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      recipes: RecipeReducer,
      menus: MenuReducer,
      shoppingLists: ShoppingReducer
    }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
