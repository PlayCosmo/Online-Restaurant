import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bits',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, FormsModule],
  templateUrl: './bits.component.html',
  styleUrl: './bits.component.css'
})
export class BitsComponent implements OnInit{

  public  allProductsInfo:any;

  constructor(public api:ServiceService, public rout:Router){}

  public range:any = -1;
  public nuts:any = false;
  public veg:any = false;

  filterProducts(){
    this.api.filterProducts(this.veg, this.nuts, this.range).subscribe((res:any)=>{
      this.allProductsInfo = res
    })
  }

  returnAll(){
    this.rout.navigate(["/all"])
  }

  get some(){
  
    if(this. range == -1){
      return this.range = "Not Chosen"
    }else
    {
      return this.range
    }
  }


  ngOnInit(): void {
      
    this.api.takeByCategories(7).subscribe((res:any)=>{
      this.allProductsInfo=res.products
    })
  }

  addToCart(item:any){
    console.log(item);
    
    this.api.addToBusket({
      "quantity": 1,
      "price": item.price,
      "productId": item.id
    }).subscribe({
      next: () =>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Successfully Add Product",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (error:any)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:"Error",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  
  }
}
