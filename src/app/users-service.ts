import { Injectable } from '@angular/core';
import { User } from './users-list/models/user';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []

  
}
