import { Injectable,  signal } from '@angular/core';
import { User } from './users-list/models/user';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService  {
    users = signal<User[]>([]);
    private srorageKey = 'users'

  constructor(private userApiService: UsersApiService) {
    this.loadUsers();
  }

  private saveToStorage(users:User[]){
    localStorage.setItem(this.srorageKey, JSON.stringify(users))
  }

  private loadFromLocakStorage(): User[] | null {
    const data = localStorage.getItem(this.srorageKey)
    return data ? JSON.parse(data) : null
  }

  loadUsers(): void {
    const cached = localStorage.getItem('users')

      if(cached) {
        this.users.set(JSON.parse(cached))
      }else{
    this.userApiService.getUsers().subscribe(users => {
      this.users.set(users);
      localStorage.setItem('users',JSON.stringify(users))
    });
  }
  }

  deleteUserById(id: number): void {
    this.userApiService.deleteUserById(id).subscribe(() => {
    this.users.update(users => {
      const updated = users.filter(user => user.id !== id);
      localStorage.setItem('users', JSON.stringify(updated));
      return updated;
    });
  });
}

  addUser(user: User) {
  this.userApiService.addUser(user).subscribe(newUser => {
    this.users.update(users => {
      const updated = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updated));
      return updated;
    });
  });
}


  updateUser(update: User) : void {
   this.userApiService.updateUser(update).subscribe(updatedUser => {
    this.users.update(users => {
      const updated = users.map(u =>
        u.id === updatedUser.id ? updatedUser : u
      );
      localStorage.setItem('users', JSON.stringify(updated));
      return updated;
    });
  });
}


}



