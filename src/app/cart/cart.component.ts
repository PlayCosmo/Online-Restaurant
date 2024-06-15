import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceService } from '../service.service';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(public api:ServiceService){}

ngOnInit(): void {
    this.takeAllCartProducts()
}

public products:any[]=[]


takeAllCartProducts(){
this.api.getAllCartProducts().subscribe((res:any)=>{
  this.products=res
})
}

plus(item:any){
  item.quantity++
  this.api.updateBasket({
    "quantity": item.quantity,
    "price": item.product.price,
    "productId": item.product.id
  }).subscribe({
    next: ()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You Increase Quantity",
        showConfirmButton: false,
        timer: 1500
      });
    },
    error:(error)=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}
minus(item:any){
  if(item.quantity>=2){
  item.quantity--
  }
  this.api.updateBasket({
    "quantity": item.quantity,
    "price": item.product.price,
    "productId": item.product.id
  }).subscribe({
    next: ()=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You Deacrease Quantity",
        showConfirmButton: false,
        timer: 1500
      });
    },
    error:(error)=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}
deleteProduct(id:any){
  this.api.deleteProduct(id.product.id).subscribe({
    next: ()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You Succesfully Delete Product From Cart",
        showConfirmButton: false,
        timer: 1500
      });
     this.takeAllCartProducts()
    },
    error: (error)=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}

get total(){
  let totalPrice = 0
 this.products.forEach((item:any)=>{
  totalPrice += item.product.price * item.quantity
 })
 return totalPrice
}
}
