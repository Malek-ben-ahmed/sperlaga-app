import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{Screen2Component } from './screen2/screen2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
