import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktails';

  cocktail : Cocktail = {
    name: 'Mojito',
    img : 'assets/mojito.jpg',
    description: "test"
  }
}
