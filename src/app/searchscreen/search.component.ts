

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService], 
})
export class SearchComponent implements OnInit, OnDestroy {
  sapValue: string = '';
  data: any[] = [];
  Quantity: string = "";
  Price: string = "";
  Total_Price: any=0;
  Supplier:string='';
  Problem:string='';
  Emplacement:string="";
  Designation:string="";
  blocking_Date:string="";
  Date:string="";
  SAP:string="";

  
  
  
  private dataSubscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('Route params:', params);
      this.sapValue = params.get('sap') || '';
      if (this.sapValue) {
        this.loadData();
      } else {
        console.error('SAP value is not available in route params');
      }
    });
  }
  
  loadData() {
    this.data=[];
    this.dataSubscription = this.dataService.getDataBySAP(this.sapValue).subscribe({
      
      next: (responsedata) => {
        console.log('Received data:', responsedata );
        this.data = responsedata;
        this.calculateTotalPrice();
        console.log('the data contains',this.data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data.'); // Display an alert or handle error message
      }
      
    });
  }
  

  calculateTotalPrice(): void {
    this.Total_Price = this.data.reduce((total, item) => {
      return total + (parseInt(item.Quantity) * parseFloat(item.Price));
    }, 0);
  }
  deleteData(id: string) {
    this.dataService.deleteData(id).subscribe({
      next: (response) => {
        console.log('Data deleted successfully:', response);
        // Update the local data array to remove the deleted item
        this.data = this.data.filter(item => item._id !== id);
        this.calculateTotalPrice();
      },
      error: (error) => {
        console.error('Error deleting data:', error);
        alert('An error occurred while deleting data.');
      }
    });
    
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}