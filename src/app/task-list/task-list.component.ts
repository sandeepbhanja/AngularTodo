import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../todos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  @Input() task!:Todos;
  @Output() todoTaskComplete = new EventEmitter<Todos>();
  constructor(){
    // console.log(this.task);
  }

  sendTask(t:Todos){
    this.todoTaskComplete.emit(t);
  }
}