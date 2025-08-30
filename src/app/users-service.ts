import { Injectable,  signal } from '@angular/core';
import { User } from './users-list/models/user';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   users = signal<User[]>([])
  
  constructor(private userApiService:UsersApiService){}

  loadUsers(): void {
     this.userApiService.getUsers().subscribe(users => {
      this.users.set(users)
     });
  }
 
   deleteUserById(id : number):void {
   this.userApiService.deleteUserById(id).subscribe(() => {
   this.users.update(users => users.filter(user => user.id !== id))
   })
   
  
  } 
}


