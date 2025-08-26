import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../model/produit';

@Pipe({
  name: 'filtreProduit'
})
export class FiltreProduitPipe implements PipeTransform {

 transform(produits: Produit[],value: any): Produit[] {
    if(value.length != 0){
     return  produits.filter((pr)=> pr.libelle.includes(value) || pr.categorie.includes(value));
    }
    return produits;
  }

}
