import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `
    <h2 class="center">Bienvenue sur mon application!</h2>
  `,
  styles: [
  ]
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
