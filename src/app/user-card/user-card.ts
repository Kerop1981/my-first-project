import { Component, input, output } from '@angular/core';
import { User } from '../users-list/models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  user = input<User>();
 delete = output<number>(); 
 edit = output<User>();
 
 
   deleteUserById(): void{
   const userID = this.user()?.id
   if(userID != null){
    this.delete.emit(userID)
   }
  }

  editUser(): void {
    const userValue = this.user()
    if (userValue) this.edit.emit(userValue)
  }
}


