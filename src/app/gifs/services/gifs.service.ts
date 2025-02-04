import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagsHistory: string[] = [];
  private apikey:       string = 'UOjIkqCyQXPZkEHTUgiVo6LuGwpfEvo7';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }


  get tagsHistory() {
      return [...this._tagsHistory];
    }

      private organizeHistory( tag: string ) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)){
          this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag !== tag )
}

        this._tagsHistory.unshift( tag );

        this._tagsHistory = this._tagsHistory.splice(0,10);


      }



    searchTag( tag: string ):void {
     if ( tag.length === 0 ) return;
     this.organizeHistory(tag);


     const params = new HttpParams()
     .set('api_key', this. apikey)
     .set('limit',  '10' )
     .set('q', tag )



     this.http.get(`${ this.serviceUrl }/search`, { params })
      .subscribe( resp => {

        console.log(resp);

        });




    }


  }


