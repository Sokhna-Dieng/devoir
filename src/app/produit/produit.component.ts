import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import Swal from 'sweetalert2';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
   constructor(private produitService: ProduitService) {
    
    }
    ngOnInit(): void {
     this.listProduits();
    }
  compteur = 0;
  valueSearch:string ="";
 produit :Produit = {
      'id':0,
      'libelle':'',
      'quantite': 0,
      'prix':0,
      categorie: 'alimentaire' // Valeur par défaut
      
  }
  produits : Produit[] = []; // Stocke les donnees qui viennent dans la BD

  categories: string[] = ['alimentaire', 'electronique']; // Liste des catégories

   addProduit() {
      if (this.produit.id == 0) {
        if(this.produit.libelle.length!= 0 && this.produit.categorie.length!=0 ){
          let p = new Produit();
          p.id = ++this.compteur;
          p.libelle = this.produit.libelle;
          p.quantite = this.produit.quantite;
          p.prix = this.produit.prix;
          p.categorie = this.produit.categorie;
          //this.produits.push(u);
          this.produitService.addProduit(p).subscribe(
            ()=>{
            this.clear();
            this.listProduits();
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
          this.produitService.updateProduit(this.produit).subscribe(
            ()=>{
                this.listProduits();
                },
                (error)=>{
                  console.log(error);
                }
              )
                //this.users = this.userService.listUsers();
              this.clear();
        }
    }
  
    deleteProduit(id:number) {
      Swal.fire({
        title: "Etes vous sure de vouloir supprimer ?",
        showCancelButton: true,
        confirmButtonText: "Oui",
        cancelButtonText: "Non"
      }).then((result) => {
      
        if (result.isConfirmed) {
        
          this.produitService.deleteProduit(id).subscribe(
            ()=>{
              this.listProduits()
            },
            (error)=>{
              console.log(error)
            }
          )
        } 
      }); 
    }
  
    clear(){
        this.produit ={
          'id':0,
          'libelle':'',
          'quantite':0,
          'prix':0,
          'categorie':'',
      }
    }
  
    recharge(p:Produit) {
      this.produit = p; // Charger les données de l'utilisateur dans le formulaire
    }
  
    listProduits(){
      this.produitService.listProduits().subscribe(
        (data : Produit[])=>{
          this.produits = data;
        },
        (error)=>{
          console.log(error);
        }
      );
    }
}
