import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    // console.log(this.http.get<Data[]>('http://localhost:8000/Data'));
    return this.http.get<Data[]>('http://localhost:3000/Data');
  }
}
