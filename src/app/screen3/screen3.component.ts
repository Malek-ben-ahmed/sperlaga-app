import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrl: './screen3.component.css'
})
export class Screen3Component  {
sapValue:string="";
  router: any;
  



constructor( 
  private route: ActivatedRoute,
  private dataService: DataService) {}

private dataSubscription: Subscription = new Subscription();

onSearch() {
  if (this.sapValue.trim() !== '') {
    this.router.navigate(['/searchscreen', this.sapValue]);
  }
}
}