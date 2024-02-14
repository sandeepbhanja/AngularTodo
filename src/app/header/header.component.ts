import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title:string = "To Do App";
  auth:string = "Login";
  flag:boolean = false;

  constructor(private router: Router){
    if(localStorage.getItem("username")!=null){
      this.flag = true;
    }
  }

  newTask(){
    this.router.navigate(['/newTask']);
  }

  logOut(){
    localStorage.removeItem("username");
    this.flag = false;
    this.router.navigate(['/login']);
  }
}
