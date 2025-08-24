import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users-list/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  
  private readonly url = 'https://teletype.in/@ilnur_ryazhapov/mentoring-starter-task#CyNp'

  
  constructor(private http : HttpClient){}
 
  getUsers():Observable<User[]> {
   return this.http.get<User[]>(this.url)
  }
}
