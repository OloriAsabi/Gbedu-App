import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { map } from 'rxjs/operators';
import { IArtist } from '../Artist';
import { ActivatedRoute  } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artist: IArtist [] = [];

  public searchStr:any = null;

  artists = '';
 
  access_token: any = 'BQChwHhO_HS1AmJB7nx_MeRPEamgfwmklxVonl4-9rhPfHmR88cQAvEtgW0odGttdwV9ErgTrXVn1IwAHMWI0tpxoCrWmioSgL5ELssEZ4zSafcnUjNUsOln6QtPhVyt5fRhmZO8AOJXq0aiTmmPnX78JAoHAiz72ORy5A0deKYmW2xfmhANuW4hJek';


  constructor(public _spotifyService:SpotifyService) { }

  ngOnInit(): void {

}
  
  searchMusic(){
    this._spotifyService.getAllArtists(this.searchStr)
    .subscribe((res: any) => { 
      this.artists = res.artists.items
    })
  }

}
