import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5000/Users';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }

  addUser(user:User){
    return this.http.post<User>(this.url,user);
  }
}
