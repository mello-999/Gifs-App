import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';


@Component({
  selector: 'gifs-home-Page',
  templateUrl: './home-Page.component.html',


})

export class HomePageComponent {

     constructor( private GifsService: GifsService ) {}

     get gifs(): Gif[] {
       return this.GifsService.gifList;
     }

}

