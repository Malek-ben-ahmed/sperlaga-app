import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { EditscreenComponent } from './editscreen/editscreen.component';
import { SearchComponent } from './searchscreen/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', component: Screen2Component },
  {path:'screen3',component:Screen3Component},
  {path:'editscreen',component:EditscreenComponent},
  {path:'searchscreen/:sap',component:SearchComponent},
  {path:'homescreen',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
