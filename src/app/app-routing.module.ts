import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AproposComponent } from './components/apropos/apropos.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { CreerprojetComponent } from './components/creerprojet/creerprojet.component';
import { MejoindreComponent } from './components/mejoindre/mejoindre.component';
import { ErreursComponent } from './components/erreurs/erreurs.component';


const routes: Routes = [
    {path: '', component: AproposComponent},
    {path: 'a-propos', component: AproposComponent},
    {path: 'projets', component: ProjetsComponent},
    {path: 'creer-projet', component: CreerprojetComponent },
    {path: 'me-joindre', component: MejoindreComponent},
    {path: '**', component: ErreursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
