import { Injectable } from '@angular/core';
import { User } from './users-list/models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly UserSubject = new BehaviorSubject<User[]>([])
  private users$ : Observable<User[]> = this.UserSubject.asObservable()

  setUser(users:User[]): void {
      this.UserSubject.next(users) 
  }

  get shapshot(): User[] {
    return this.UserSubject.getValue()
  }
}
