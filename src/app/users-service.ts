import { Injectable } from '@angular/core';
import { User } from './users-list/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersApiService } from './users-api-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly UserSubject = new BehaviorSubject<User[]>([])
  private users$ : Observable<User[]> = this.UserSubject.asObservable()

  constructor(private userapiservice:UsersApiService){}

  setUser(){
    this.userapiservice.getUsers().subscribe( users => {
      this.UserSubject.next(users) 
      })
  }

  get shapshot(): User[] {
    return this.UserSubject.getValue()
  }
}
