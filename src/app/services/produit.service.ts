import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url = 'http://localhost:8000/produits'
    constructor(private HttpClient : HttpClient) { }
  
    addProduit(produit: Produit) {
  
        return this.HttpClient.post(this.url,produit);
  
    }
    updateProduit(produit: Produit){
    
      return this.HttpClient.put(this.url + '/'+produit.id,produit);
  
    }
  
    deleteProduit(id: number) {
      return this.HttpClient.delete(this.url + '/' + id);
  
    }
  
    listProduits(): Observable<Produit[]> {
      return this.HttpClient.get<Produit[]>(this.url);
       
     }
}
