import { createReducer, on } from '@ngrx/store';
import { addUser, updateUser, deleteUser, loadUsersSuccess } from './users.actions';
import { User } from '../users-list/models/user';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: []
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u)
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id)
  }))
);
