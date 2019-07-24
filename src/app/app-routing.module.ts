import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SearchComponent } from './search/search.component';
import { TourshowComponent } from './tourshow/tourshow.component';


const routes: Routes = [
  {path : '', component: LoginformComponent,pathMatch: 'full'},
  {path : 'search', component: SearchComponent,pathMatch: 'full'},
  {path : 'tourshow', component: TourshowComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
