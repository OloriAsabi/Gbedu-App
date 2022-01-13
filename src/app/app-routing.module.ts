import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([

      { path: 'home', component: HomeComponent},
      { path: '', component: SearchComponent},
      { path: 'about', component: AboutComponent},   
      { path: 'artist/:id', component: ArtistComponent},
      { path: 'album/:id', component: AlbumComponent}    
  ])

],
  exports: [RouterModule]
})
export class AppRoutingModule { }
