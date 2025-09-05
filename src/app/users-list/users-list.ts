import { CommonModule } from '@angular/common';
import { Component, createComponent, OnInit, signal } from '@angular/core';
import { UsersService} from '../users-service';
import { UserCard } from "../user-card/user-card";
import { User } from './models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialog } from '../user-form-dialog/user-form-dialog';



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
    const dialogRef = this.dialog.open(UserFormDialog);

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

  
  openRedactMatDialog(id:number): void{
    const user = this.usersService.users().find(userId => userId.id === id) 
     
    if(!user) return;

    const dialogRef = this.dialog.open(UserFormDialog, { data: user });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.usersService.users.update(users =>
          users.map(user => user.id === user.id ? {...user, ...result} : user)
        );
      }
  });
  
}
}