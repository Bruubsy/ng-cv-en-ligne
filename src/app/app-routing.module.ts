import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnglishComponent } from "./english/english.component";
import { FrenchComponent } from "./french/french.component";

const routes: Routes = [
  { path: "english", component: EnglishComponent },
  { path: "french", component: FrenchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
