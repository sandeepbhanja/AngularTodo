import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  username = new FormControl('');
  password = new FormControl('');
  user!:User;

  constructor(private router:Router,private userService:UserService){}

  clickSignIn(){
    this.router.navigate(['/login']);
  }

  signUpUser(){
    this.user = {username:JSON.stringify(this.username.value) , password:JSON.stringify(this.password.value)}
    localStorage.setItem('username', JSON.stringify(this.username.value));
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['/tasks']);
  }
}
