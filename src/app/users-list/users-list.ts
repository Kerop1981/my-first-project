import { CommonModule } from '@angular/common';
import { Component, createComponent, OnInit, signal } from '@angular/core';
import { UsersService} from '../users-service';
import { UserCard } from "../user-card/user-card";
import { User } from './models/user';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUser } from '../create-edit-user/create-edit-user';



@Component({
  selector: 'app-users-list',
  imports: [CommonModule, UserCard],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
 users = signal<User[]>([])

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usersService.loadUsers();
   this.users =  this.usersService.users;
  }

  deleteUserId(id: number): void {
    this.usersService.deleteUserById(id);
  }

  openMatDialog(): void {
    const dialogRef = this.dialog.open(CreateEditUser);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newUser: User = {
          id: Date.now(),
          ...result
        };
        this.usersService.addUser(newUser);
      }
    });
  }

  openRedactMatDialog(user:User): void{
    const dialogRef = this.dialog.open(CreateEditUser, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.usersService.users.update(users =>
          users.map(user => user.id === user.id ? {...user, ...result} : user)
        )
      }
    });
  }
}