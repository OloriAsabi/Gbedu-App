import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtist } from './Artist';
import { ResponseText } from './ResponseText';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  responseText: ResponseText | undefined;


  client_id = "d448399b4a56442d86fbeddcd7aa3b87";
  client_secret = "fd8e594076c24906aad50c19ff57b24a";
  redirectedUri = "http://localhost:4200/callback";
  authorizeUrl = "https://accounts.spotify.com/authorize";
  tokenUrl = "https://accounts.spotify.com/api/token";
  public accessToken: any = "Bearer BQBg5E54xwW_pZvHFjJ-aY6HsX4V_67kZpFeYuWFUy68VvWeFt4j0Gf-Xp0YoX4HPD2Es-wOFBccJqX4dswrWZkkPbzlW0Ot4qC0sz4vLTqVqt0LYiqfG_UdoY1rnyRuoUN5u7e42ZqWSR_fjnVc9VqX9OxwOJ7ZArjjtxxfpgY13BM1Kbp53lcFfzs";



                                       
  private  httpOptions = {
    headers : new HttpHeaders() 
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization',  this.accessToken)
    
 }

 authorizationHeader = {
  headers: new HttpHeaders()
  .set('Authorization', 'Basic ' + btoa(this.client_id + ":" + this.client_secret))
  .set('Content-Type', 'application/x-www-form-urlencoded')
};

  constructor(private _httpClient:HttpClient) { }

  searchMusic(str:string,){
    let searchUrl = `https://api.spotify.com/v1/search?q=${str}&type=artist`;
    return this._httpClient.get<any>(searchUrl, this.httpOptions)
    .pipe(map((res: any ) => res.json()))
  }

  public getAllArtists(searchStr :string, type="artist"):Observable<IArtist>{
    let searchUrl = `https://api.spotify.com/v1/search?q=${searchStr}&type=artist`;
    return this._httpClient.get<IArtist>(searchUrl, this.httpOptions)
  }


  requestAuthorization(): void {
    let authUrl = this.authorizeUrl; 
    authUrl += "?client_id=" + this.client_id;
    authUrl += "&response_type=code";
    authUrl += "&redirect_uri=" + encodeURI(this.redirectedUri);
    authUrl += "&show_dialog=true";
    location.href = authUrl; // Show Spotify's authorization screen
  }

  handleAuthResponse(body: string): Observable<HttpResponse<ResponseText>>{
    return this._httpClient.post<ResponseText>(this.tokenUrl, body, { observe: 'response', headers: new HttpHeaders()
    .set('Authorization', 'Basic ' + btoa(this.client_id + ":" + this.client_secret))
    .set('Content-Type', 'application/x-www-form-urlencoded')});
  }

}
