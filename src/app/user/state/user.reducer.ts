import { initialUserState, User } from './user.state';
import { UserAction, GET_USERS, EDIT_USER } from './user.actions';

export const UserReducer = (state = initialUserState, action: UserAction): User => {
    switch (action.type) {
        case GET_USERS: {
            return {
                name: 'Ansuman',
                technology: ['angular'],
            };
        }

        case EDIT_USER: {
            return {
                ...state,
                name: 'abc',
            };
        }
        default: {
            return {
              ...state
            };
          }
    }
};
