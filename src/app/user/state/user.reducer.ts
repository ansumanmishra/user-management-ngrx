import { initialUserState, User } from './user.state';
import { UserAction, GET_USERS } from './user.actions';

export const UserReducer = (state = initialUserState, action: UserAction): User => {
    switch (action.type) {
        case GET_USERS: {
            return {
                name: 'Ansuman',
                technology: ['angular'],
            };
        }
        default: {
            return {
              ...state
            };
          }
    }
};
