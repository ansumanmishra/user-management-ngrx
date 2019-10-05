import { Action } from '@ngrx/store';

export const GET_USERS = 'Get list of users';
export const ADD_USER = 'Add a new user';

export class GetUsers implements Action {
    readonly type: string = GET_USERS;

    constructor(public payload: any) {
        console.log('ACTION ' + GET_USERS);
    }
}

export type UserAction = GetUsers; // can be GetUsers | AddUser
