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

  public searchStr:any ;

 public artists : any;


  constructor(public _spotifyService:SpotifyService) { }

  ngOnInit(): void {

}
  
  searchMusic(){
    this._spotifyService.getAllArtists(this.searchStr)
    .subscribe((data: any) => { 
      this.artists = data.artists.items;
    })
  }

}
