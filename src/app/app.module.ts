import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { EditscreenComponent } from './editscreen/editscreen.component';
import { SearchComponent } from './searchscreen/search.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    Screen2Component,
    Screen3Component,
    EditscreenComponent,
    SearchComponent,
    HomeComponent,
   
    
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [
    [provideHttpClient()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


