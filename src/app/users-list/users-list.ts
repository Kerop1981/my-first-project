import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { СamelCase } from '../camel-case';
import { UserCard } from "../user-card/user-card";
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-users-list',
  imports: [CommonModule, UserCard],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
  private users = new BehaviorSubject<User[]> ([])
  private CamelCase =  inject(СamelCase)

 

  ngOnInit(): void {
    this.CamelCase.setUser();
  }

}