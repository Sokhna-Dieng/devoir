import { Component } from '@angular/core';
import { Part } from '../model/part';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
    compteur = 0;
    valueSearch:string ="";
    part :Part = {
        'id':0,
        'libelle':''
    }
    parts : Part[] = [];
  
    deletePart(id:number) {
      Swal.fire({
        title: "Etes vous sure de vouloir supprimer ?",
        showCancelButton: true,
        confirmButtonText: "Oui",
        cancelButtonText: "Non"
      }).then((result) => {
      
        if (result.isConfirmed) {
          this.parts = this.parts.filter((pa)=> pa.id != id);
        } 
      }); 
    }
  
    addPart(){
      if(this.part.id == 0){
        if(this.part.libelle.length!= 0 ){
          let p = new Part();
          p.id = ++this.compteur;
          p.libelle = this.part.libelle;
          this.parts.push(p);
          this.clear();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Utilisateur ajoute avec succes",
            showConfirmButton: false,
            timer: 1500
          });
        
        }else{
          alert("Veillez remplir les champs");
        }
      }else{
        this.parts.filter((pa)=> pa.id == this.part.id)[0] = this.part;
        this.clear();
       
      }
       
    }
  
    clear(){
        this.part ={
          'id':0,
          'libelle':''
      }
    }
  
    rechargerPart(pa:Part){
      this.part = pa;
    }
}
  
