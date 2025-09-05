import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess } from './users.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { UsersApiService } from '../users-api-service';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userApi.getUsers().pipe(
          tap(users => localStorage.setItem('users', JSON.stringify(users))), // ⚡️ синхронизируем
          map(users => loadUsersSuccess({ users }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userApi: UsersApiService) {}
}
