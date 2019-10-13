import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { CreerprojetComponent } from './components/creerprojet/creerprojet.component';
import { MejoindreComponent } from './components/mejoindre/mejoindre.component';
import { ErreursComponent } from './components/erreurs/erreurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    ProjetsComponent,
    CreerprojetComponent,
    MejoindreComponent,
    ErreursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
