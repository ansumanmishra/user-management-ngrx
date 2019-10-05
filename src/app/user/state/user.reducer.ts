import { initialUserState, User } from './user.state';
import { UserAction, GET_USERS, EDIT_USER, ADD_USER } from './user.actions';

export const UserReducer = (state = initialUserState, action: UserAction): any => {
    switch (action.type) {
        case GET_USERS: {
            return [{
                name: 'Ansuman',
                technology: ['angular'],
            }];
        }

        case EDIT_USER: {
            const index = state.map(s => s.name).indexOf(action.payload.name);
            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], action.payload),
                ...state.slice(index + 1)
            ];
        }

        case ADD_USER: {
            return [...state, action.payload];
        }

        default: {
            return {
              ...state
            };
          }
    }
};
