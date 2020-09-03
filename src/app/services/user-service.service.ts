import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUsers(): User[] {
    return [
      { UserId: 1, UserName: 'Pedro', Password: '12f3', Country: 'Honduras' },
      { UserId: 2, UserName: 'Julian', Password: 'df123', Country: 'Mexico' },
      { UserId: 3, UserName: 'Ariel', Password: '123', Country: 'España' },
      { UserId: 4, UserName: 'Devol', Password: '12r3', Country: 'Honduras' },
      { UserId: 5, UserName: 'Jiza', Password: '1gf23', Country: 'Argentina' },
    ];
  }
}
