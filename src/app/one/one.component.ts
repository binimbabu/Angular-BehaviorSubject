import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  newUser:any;
  user:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.castUser.subscribe(users=>{
      this.user = users;
    })
  }
  editUser(){
    this.userService.editedUser(this.newUser)
  }
}
