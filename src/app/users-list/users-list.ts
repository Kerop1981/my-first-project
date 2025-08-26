import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class UsersList implements OnInit {
  users!: User[];

  constructor(
    private usersservice : UsersService,
    private userapiservice: UsersApiService,
  ){}

  ngOnInit(): void {
   this.usersservice.setUser()
}

}