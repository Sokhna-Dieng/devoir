import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FiltreUserPipe } from './pipe/filtre-user.pipe';
import { RoleComponent } from './role/role.component';
import { FiltrePartPipe } from './pipe/filtre-part.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProduitComponent } from './produit/produit.component';
import { FiltreProduitPipe} from './pipe/filtre-produit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    UtilisateurComponent,
    FiltreUserPipe,
    RoleComponent,
    FiltrePartPipe,
    ProduitComponent,
    FiltreProduitPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
