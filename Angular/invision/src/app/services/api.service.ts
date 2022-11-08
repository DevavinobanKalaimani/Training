import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface login extends Array<login[]>{
  name: string;
  id: number;
  password: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http:HttpClient) { }

  getUser():Observable<login[]>{
    return this.http.get<login[]>('http://localhost:3000/users');   
  }
  getUserData(UserId: number){
    return this.http.get(`http://localhost:3000/users/${UserId}`);
  }
  putUserData(data: any){
    return this.http.put(`http://localhost:3000/users/${data.id}`, data);
  }
  postUserData(data: any){
    return this.http.post(`http://localhost:3000/users`, data);
  }
  deleteUserData(UserId: any){
    return this.http.delete(`http://localhost:3000/users/${UserId}`);
  }

}
