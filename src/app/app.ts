import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';
@Component({
  selector: 'app-root',
  imports: [EnTete, ListeCours, DetailCours, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }
}
