import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import { ProjetPersoComponent } from './projet-perso/projet-perso.component';
import { CompetenceComponent } from './competence/competence.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, FormationComponent, ExperienceProComponent, ProjetPersoComponent, CompetenceComponent, AccueilComponent],
  imports: [BrowserModule,
  AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
