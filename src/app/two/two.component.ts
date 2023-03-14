import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  newUser:any
  user:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.castUser.subscribe(users=>{
      this.user= users;
    })
  }
  editUser(){
    this.userService.editedUser(this.newUser);
  }
}
