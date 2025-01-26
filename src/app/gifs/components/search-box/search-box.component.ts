
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
     <h5>Buscar:</h5>
     <input type="text"
          class="for-control"
          placeholder="Buscar gifs..."
          (keyup.enter)="searchtag()"
          #txtTagInput
    >
  `

})


export class SearchBoxComponent  {

@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>

  constructor( private gifsService: GifsService ) { }


// searchtag( newtag: string){
  searchtag( ){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag( newTag );

     this.tagInput.nativeElement.value = '';

}


}


