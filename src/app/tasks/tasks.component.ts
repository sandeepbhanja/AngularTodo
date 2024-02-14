import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todos } from '../todos';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [HttpClientModule,CommonModule,TaskListComponent,HeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
  todo!:Todos[];
  user:string = '';

  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem('username'))
    this.todoService.getTodos(this.user).subscribe(todos => this.todo = todos);
  }

  // ngAfterContentChecked(): void {
  //   this.todoService.getTodos().subscribe(todos => this.todo = todos);
  // }

  removeTask(task:Todos){
    this.todoService.deleteTodo(task).subscribe();
    this.todo = this.todo.filter(t => t.id !== task.id);
  }
}
