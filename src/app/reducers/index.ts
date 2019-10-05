import { User } from './../user/state/user.state';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserReducer } from '../user/state/user.reducer';

export interface State {
  users: User[];
}

export const reducers: ActionReducerMap<State> = {
  users:  UserReducer
};

export const getUsers = (state: State) => state.users;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
