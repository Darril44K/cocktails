import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';


@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent {
  @Input() public cocktail!: Cocktail;

  constructor(){}
}
