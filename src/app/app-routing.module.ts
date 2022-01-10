import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
   
      { path: '', component: SearchComponent},
      { path: 'about', component: AboutComponent},      
  ])

],
  exports: [RouterModule]
})
export class AppRoutingModule { }
