import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UsersService } from '../users-service';
import { UserCard } from "../user-card/user-card";
import { UsersApiService } from '../users-api-service';
import { User } from './models/user';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, UserCard],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
 @Input() users!: User[];

  constructor(
    private usersservice : UsersService,
    private userapiservice: UsersApiService,
  ){
    const billingUser = this.userapiservice.getUsers().subscribe((users : User[]) => {
      this.usersservice.setUser(users)
     
    })
    
  }


}
