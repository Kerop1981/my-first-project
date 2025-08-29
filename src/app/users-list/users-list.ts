import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { UsersService} from '../users-service';
import { UserCard } from "../user-card/user-card";
import { User } from './models/user';



@Component({
  selector: 'app-users-list',
  imports: [CommonModule, UserCard],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
 users = signal<User[]>([])

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.setUser();
   
  }

  deleteUser(id:number): void{
 this.usersService.deleteUser(id)
  }
}