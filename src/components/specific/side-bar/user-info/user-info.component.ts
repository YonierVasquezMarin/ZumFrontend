import { UsersService } from '@services/users.service';
import { Component, OnInit } from '@angular/core';
import { UserDto } from '@dtos/users.dtos';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  user!: UserDto

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.getUserLogged()
  }

  getUserLogged() {
		this.user = this.usersService.getUserLogged()
    console.log(this.user)
	}

}
