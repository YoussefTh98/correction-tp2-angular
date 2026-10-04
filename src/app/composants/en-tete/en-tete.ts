import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  urlLogo1: string = "angular_black.png";
  urlLogo2 = "angularjs.jpg";
  urlLogo: string = this.urlLogo1;
  titre: string = 'Application de gestion des cours';
  changerLogo() {
    this.urlLogo = this.urlLogo === this.urlLogo1 ? this.urlLogo2 : this.urlLogo1;
  }
}

