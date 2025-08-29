import { Component, EventEmitter, input, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter<number>()
 
  DeleteUser(): void{
    this.delete.emit(this.user()?.id)
  }
}


