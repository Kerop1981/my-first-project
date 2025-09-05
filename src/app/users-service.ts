import { Injectable,  signal } from '@angular/core';
import { User } from './users-list/models/user';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService  {
    users = signal<User[]>([]);

  constructor(private userApiService: UsersApiService) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userApiService.getUsers().subscribe(users => {
      this.users.set(users);
    });
  }

  deleteUserById(id: number): void {
    this.userApiService.deleteUserById(id).subscribe(() => {
      this.users.update(users => users.filter(user => user.id !== id));
    });
  }

  addUser(user: User) {
    this.userApiService.addUser(user).subscribe(newUser => {
      this.users.update(users => [...users, newUser]);
    });
  }

  updateUser(update: User) : void {
      this.userApiService.updateUser(update).subscribe(updatedUser => {
      this.users.update(users =>
        users.map(u => u.id === updatedUser.id ? updatedUser : u)
      );
    });
  }
}



