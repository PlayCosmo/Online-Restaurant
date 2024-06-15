import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public api:HttpClient) { }


  takeAllProducts(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }


  takeByCategories(id:any){
    return this.api.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  filterProducts(veg:any, nuts:any, spice:any){
    return this.api.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg}&nuts=${nuts}&spiciness=${spice}`)
  }

  getAllCartProducts(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  addToBusket(body:any){
    return this.api.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }

  updateBasket(body:any){
    return this.api.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket",body)
  }

  deleteProduct(id:any){
    return this.api.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
}
