import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit 
{

  constructor(private userService: UserService) {
    this.Users = userService.getUsers();
  }

  
  ngOnInit(){
    
  }


  public ComponentMessage: string = 'Nuevo usuario';

  public Users: User[];

  selectedUser: User = new User();


  Delete() {
    let isNoAnswer = confirm('¿Quieres eliminar este usuario?') === false;

    if (isNoAnswer) {

      return;
    }

    this.Users = this.Users.filter(u => u.UserId != this.selectedUser.UserId);

    this.selectedUser = new User();
  }

  addUser() {
    if (this.selectedUser.UserId === 0) {
      const userCount = this.Users.length + 1;
      this.selectedUser.UserId = userCount;
      this.Users.push(this.selectedUser)

    }

    this.selectedUser = new User();
  }

  handleEdit(user: User) {
    this.selectedUser.UserId = user.UserId;
    this.selectedUser.UserName = user.UserName;
    this.selectedUser.Password = user.Password;
    this.selectedUser.Country = user.Country;
  }
}
