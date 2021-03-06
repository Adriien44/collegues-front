import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { ConnectionComponent } from './connection/connection.component';
import { ConnexionGuard } from './services/ConnexionGuard';

const routes: Routes = [
  { path: `connexion`, component: ConnectionComponent },
  { path: ``,
    canActivate: [ConnexionGuard],
    children: [{ path: `accueil`, component: AccueilComponent },
    { path: `galerie`, component: GallerieComponent },
    { path: `apropos`, component: AproposComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    FormComponent,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    MenucomponentComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
