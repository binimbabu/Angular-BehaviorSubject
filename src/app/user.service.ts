import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('John');
  castUser = this.user.asObservable();
  constructor() { }
  editedUser(newUser:any){
    this.user.next(newUser);
  }
}
