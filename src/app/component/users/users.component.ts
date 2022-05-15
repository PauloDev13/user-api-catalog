import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Response} from "../../interface/response";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  response: Response;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(5).subscribe(users => {
      console.log(users);
      this.response = users;
    });
  }

}
