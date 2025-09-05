import { ActionReducer, MetaReducer } from '@ngrx/store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
