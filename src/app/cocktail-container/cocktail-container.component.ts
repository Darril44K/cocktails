import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
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

  public selectedCocktail!: Cocktail;

  constructor(){}

  ngOnInit():void{
    this.selectedCocktail = this.cocktails[0];
  }

  public chooseCocktail(index: number){
    this.selectedCocktail = this.cocktails[index];
  }
}
