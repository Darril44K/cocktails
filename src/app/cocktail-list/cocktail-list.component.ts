import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img : 'assets/mojito.jpg',
      description: "test"
    },
    {
      name: 'Pinacolada',
      img : 'assets/pinacolada.jpg',
      description: "test"
    }
  ]
}
