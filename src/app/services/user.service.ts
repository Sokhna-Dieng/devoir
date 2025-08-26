import { Injectable } from '@angular/core';
import {User} from "../model/user";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //users: User[] = [];  //joue un role de BD
  url = 'http://localhost:8000/users'
  constructor(private HttpClient : HttpClient) { }

  addUser(user: User) {

      // Ajout d'un nouvel utilisateur
      //this.users.push({ ...user });
      return this.HttpClient.post(this.url,user);

  }
  updateUser(user: User){
   // const index = this.users.findIndex(u => u.id === user.id);
    // if (index !== -1) {
    //   this.users[index] = { ...user };
    // }
    return this.HttpClient.put(this.url + '/'+user.id,user);

  }

  deleteUser(id: number) {
    //this.users = this.users.filter(u => u.id !== id);
    // this.userService.deleteUser(id);
    return this.HttpClient.delete(this.url + '/' + id);

  }

  listUsers(): Observable<User[]> {
    return this.HttpClient.get<User[]>(this.url);
     
   }

}
