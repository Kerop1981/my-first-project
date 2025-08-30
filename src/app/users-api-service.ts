import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users-list/models/user';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http : HttpClient){}
 
  getUsers():Observable<User[]> {
   return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }

   deleteUserById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.http}/${id}`)
  }
}
