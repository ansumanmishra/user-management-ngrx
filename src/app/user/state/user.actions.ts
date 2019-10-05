import { User } from './user.state';
import { Action } from '@ngrx/store';

export const GET_USERS = 'Get list of users';
export const EDIT_USER = 'Edit an user';
export const ADD_USER = 'Create a new user';

export class GetUsers implements Action {
    readonly type: string = GET_USERS;

    constructor(public payload: any) {
        console.log('ACTION ' + GET_USERS);
    }
}

export class EditUser implements Action {
    readonly type: string = EDIT_USER;

    constructor(public payload: any) {
        console.log('ACTION ' + EDIT_USER);
    }
}

export class AddUser implements Action {
    readonly type: string = ADD_USER;

    constructor(public payload: User) {
        console.log('ACTION ' + ADD_USER);
    }
}

export type UserAction = GetUsers | EditUser | AddUser; // can be GetUsers | AddUser
