import { Injectable } from '@angular/core';
import { User } from './users-list/models/user';
import { Observable } from 'rxjs';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private userapiservice:UsersApiService){}

  editUser(): Observable<User[]> {
    return this.userapiservice.getUsers();
  }

 
}
