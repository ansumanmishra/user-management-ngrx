import { Action } from '@ngrx/store';

export const GET_USERS = 'Get list of users';
export const EDIT_USER = 'Add a new user';

export class GetUsers implements Action {
    readonly type: string = GET_USERS;

    constructor(public payload: any) {
        console.log('ACTION ' + GET_USERS);
    }
}

export class AddUser implements Action {
    readonly type: string = EDIT_USER;

    constructor(public payload: any) {
        console.log('ACTION ' + EDIT_USER);
    }
}

export type UserAction = GetUsers | AddUser; // can be GetUsers | AddUser
