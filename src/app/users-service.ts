import { Injectable,  signal } from '@angular/core';
import { User } from './users-list/models/user';
import { Observable } from 'rxjs';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   users = signal<User[]>([])
  
  constructor(private userapiservice:UsersApiService){}

  setUser(): void {
     this.userapiservice.getUsers().subscribe(users => {
      this.users.set(users)
     });
  }
 
  deleteUser(id : number):void {
   this.userapiservice.deleteUser(id).subscribe(() => {
   this.users.update(users => users.filter(user => user.id !== id))
   })
   
  
  } 
}


