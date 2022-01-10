import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([

      { path: '', component: HomeComponent},
      { path: 'search', component: SearchComponent},
      { path: 'about', component: AboutComponent},   
      { path: 'artist/:id', component: ArtistComponent},     
  ])

],
  exports: [RouterModule]
})
export class AppRoutingModule { }
