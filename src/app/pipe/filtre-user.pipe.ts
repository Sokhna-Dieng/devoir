import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filtreUser'
})
export class FiltreUserPipe implements PipeTransform {

  transform(users: User[],value: any): User[] {
    if(value.length != 0){
     return  users.filter((a)=> a.nom.includes(value) || a.prenom.includes(value));
    }
    return users;
  }

}
