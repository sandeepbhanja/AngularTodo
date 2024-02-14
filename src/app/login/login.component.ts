import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');
  user!: User[];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.user = users);
  }

  clickSignUp() {
    this.router.navigate(['/signup']);
  }

  loginUser() {
    this.user.map(u => {
      if (JSON.stringify(this.username.value) === u.username && JSON.stringify(this.password.value) == u.password && JSON.stringify(localStorage.getItem('username')==null)) {
        localStorage.setItem('username', JSON.stringify(this.username.value));
        this.router.navigate(['/tasks']);
      }
    })
  }
}
