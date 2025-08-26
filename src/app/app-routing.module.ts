import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path: 'utilisateur',component:UtilisateurComponent},
  {path:'role',component:RoleComponent},
  {path:'produit',component:ProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
