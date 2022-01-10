import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

public  artistId: any;

public  artist: any;

  constructor(private _activatedRoute:ActivatedRoute,
    private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
      this.artistId = paraMap.get("id");
    });

    this._spotifyService.getArtist(this.artistId).subscribe((data:any) => {
      this.artist = data;
    })

  }

}
