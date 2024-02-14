import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Todos } from '../todos';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  name = new FormControl('');
  user:string = JSON.stringify(localStorage.getItem('username'));
  constructor(private todoService:TodoService , private router:Router){}

  addTask(){
    console.log(this.name.value);
    this.todoService.addTodo({todo:this.name.value , completed:false,username:this.user}).subscribe();
    this.router.navigate(['/tasks']);
  }
}
