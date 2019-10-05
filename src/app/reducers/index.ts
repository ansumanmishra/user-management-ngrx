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
  user: User;
}

export const reducers: ActionReducerMap<State> = {
  user:  UserReducer
};

export const getUsers = (state: State) => state.user;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
