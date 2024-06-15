
import { Component, OnInit } from '@angular/core';


import { LoaderService } from '../loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit{

  constructor( public loader:LoaderService){}

 
  public isLoading:boolean =false;
  ngOnInit(): void {

  this.loader.loading.subscribe((data:any)=>{
    this.isLoading = data
  })
}
}
