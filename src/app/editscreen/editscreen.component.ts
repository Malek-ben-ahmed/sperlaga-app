
    import { Component, OnInit } from '@angular/core';
    import { DataService } from '../services/data.service';
    
    @Component({
      selector: 'app-editscreen',
      templateUrl: './editscreen.component.html',
      styleUrls: ['./editscreen.component.css'],
      providers: [DataService],  // Make sure the path is correct
    })
    export class EditscreenComponent implements OnInit {
      products: any[] = [];
      SAP: string = "";
      Quantity: string = "";
      Emplacement: string = "";
      Designation: string = "";
      Price: string = "";
      Supplier: string = "";
      Date: string = "";
      Problem: string = "";
    
      constructor(private dataService: DataService) {}
    
      ngOnInit(): void {
      }
    
      addProduct() {
        const newProduct = {
          SAP: this.SAP,
          Quantity: this.Quantity,
          Emplacement: this.Emplacement,
          Designation: this.Designation,
          Price: this.Price,
          Date: this.Date,
          Supplier: this.Supplier,
          Problem: this.Problem,
        };
    
        this.dataService.addProduct(newProduct).subscribe({
          next: (response) => {
            console.log('Product added successfully:', response);
            this.resetForm();
          },
          error: (error) => {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product.');
          }
        });
      }
    
     /*fetchProducts() {
        this.dataService.getData().subscribe({
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.error('Error fetching products:', error);
          }
        });
      }*/
    
      resetForm() {
        this.SAP = "";
        this.Quantity = "";
        this.Emplacement = "";
        this.Designation = "";
        this.Price = "";
        this.Supplier = "";
        this.Date = "";
        this.Problem = "";
      }
    }
    
  