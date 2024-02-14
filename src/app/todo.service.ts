import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './todos';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos(user:string){
    return this.http.get<Todos[]>('http://localhost:3000/Tasks?username='+user);
  }

  deleteTodo(t:Todos){
    return this.http.delete('http://localhost:3000/Tasks/'+t.id);
  }

  addTodo(t:Todos){
    console.log(t);
    return this.http.post('http://localhost:3000/Tasks',t);
  }
}
