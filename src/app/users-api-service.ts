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
   return this.http.get<User[]>(`${environment.apiUrl}`)
  }

   deleteUserById(id: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/${id}`)
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${environment.apiUrl}`,user);
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`{environment.apiUrl}/${user.id}`,user)
  }
}
