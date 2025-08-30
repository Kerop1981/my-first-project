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
 delete = output<number>() 
 
 
   deleteUserById(): void{
   const id =this.user()?.id
   if(id != null){
    this.delete.emit(id)
   }
  }
}


