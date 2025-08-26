import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent  implements OnInit{

  constructor(private userService: UserService) {
  
  }
  ngOnInit(): void {
   this.listUsers();
  }

  compteur = 0;
  valueSearch:string ="";
  user :User = {
      'id':0,
      'nom':'',
      'prenom':'',
      'age':0
  }
  users : User[] = []; // Stocke les donnees qui viennent dans la BD
 

  addUser() {
    if (this.user.id == 0) {
      if(this.user.nom.length!= 0 && this.user.prenom.length!=0 ){
        let u = new User();
        u.id = ++this.compteur;
        u.nom = this.user.nom;
        u.prenom = this.user.prenom;
        u.age = this.user.age;
        //this.users.push(u);
        this.userService.addUser(u).subscribe(
          ()=>{
          this.clear();
          this.listUsers();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Utilisateur ajoute avec succes",
            showConfirmButton: false,
            timer: 1500
          });
        },
          (error)=>{
            console.log("Error");
          }
        )
        }else{
          alert("Veillez remplir les champs!");
        }
    }else{
        this.userService.updateUser(this.user).subscribe(
          ()=>{
              this.listUsers();
              },
              (error)=>{
                console.log(error);
              }
            )
              //this.users = this.userService.listUsers();
            this.clear();
      }
  }

  deleteUser(id:number) {
    Swal.fire({
      title: "Etes vous sure de vouloir supprimer ?",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then((result) => {
    
      if (result.isConfirmed) {
        //this.users = this.users.filter((a)=> a.id != id);
        //this.users= this.userService.listUsers();
        this.userService.deleteUser(id).subscribe(
          ()=>{
            this.listUsers()
          },
          (error)=>{
            console.log(error)
          }
        )
      } 
    }); 
  }

  clear(){
      this.user ={
        'id':0,
        'nom':'',
        'prenom':'',
        'age':0
    }
  }

  recharge(p:User) {
    this.user = p; // Charger les données de l'utilisateur dans le formulaire
  }

  listUsers(){
    this.userService.listUsers().subscribe(
      (data : User[])=>{
        this.users = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
