import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albumId:any;
  public album:any;
  public tracks:any;

  constructor(private _activatedRoute:ActivatedRoute,
    private _spotifyService:SpotifyService,
    private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.albumId = paramMap.get("id");
    });

    this._spotifyService.getAlbum(this.albumId).subscribe((data:any) => {
      this.album = data;
    });

    this._spotifyService.getAllTracks(this.albumId).subscribe((data:any) => {
      this.tracks = data.items;
    })
  }

  public backToArtist(){
    this._router.navigate([`/artist/${this.album.artists[0].id}`])
  }

}
