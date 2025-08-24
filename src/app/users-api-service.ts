import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users-list/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  
  public url = 'https://teletype.in/@ilnur_ryazhapov/mentoring-starter-task#CyNp'
  subscribe: any;
  
  constructor(private http : HttpClient){}
 
  getUsers(users?: User[]):Observable<User[]> {
   return this.http.get<User[]>(this.url)
  }
}
