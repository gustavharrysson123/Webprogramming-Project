import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { Menu } from '../models/menu';

export const addMenu = createAction(
  '[MenuList] Add Menu',
  props<{ menu: Menu }>()
);

export const removeMenu = createAction(
  '[MenuList] Remove Menu',
  props<{ id: number }>()
);
