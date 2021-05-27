import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './menus/about/about.component';
import { ContactComponent } from './menus/contact/contact.component';
import { DetailsComponent } from './menus/home/details/details.component';
import { HomeComponent } from './menus/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'home/:id',component:DetailsComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
