import { Action, createReducer, on } from '@ngrx/store';
import { addMenu, removeMenu } from './menuList.actions';
import { Menu } from '../models/menu';

export interface State {
  menus: Menu[];
}

export const initialState = {
  menus: []
};

const _menuListReducer = createReducer(initialState,
  on(addMenu, (state, { menu }) => ({
    menus:  [menu,...state.menus]
  })),
  on(removeMenu, (state, { id }) => ({ menus: state.menus.filter(menu => menu.id !== id) }))
);

export function reducer(state, action) {
  return _menuListReducer(state, action);
}