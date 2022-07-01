import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FrenchComponent } from './french/french.component';
import { EnglishComponent } from './english/english.component';

@NgModule({
  declarations: [AppComponent, FrenchComponent, EnglishComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
