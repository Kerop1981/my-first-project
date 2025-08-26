import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users-list/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  
  private readonly url = ' https://jsonplaceholder.typicode.com/users'

  
  constructor(private http : HttpClient){}
 
  getUsers():Observable<User[]> {
   return this.http.get<User[]>(this.url)
  }
}
