import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AccueilComponent } from './accueil/accueil.component';
import { CompetenceComponent } from './competence/competence.component';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import { FormationComponent } from './formation/formation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjetPersoComponent } from './projet-perso/projet-perso.component';

const routes: Routes = [
  { path: 'competence', component: CompetenceComponent },
  { path: 'experience-pro', component: ExperienceProComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'projet-perso', component: ProjetPersoComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }