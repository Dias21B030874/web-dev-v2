import { Component, OnInit } from '@angular/core';

import { products, Product } from '../products';

import { AmazonService } from '../amazon.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-various-list',
  templateUrl: './various-list.component.html',
  styleUrls: ['./various-list.component.css']
})
export class VariousListComponent implements OnInit {
  selectedCategory: any[];
  
  constructor(
    private amazonService: AmazonService,
    private cartService: CartService
  ) {
    this.selectedCategory = ['Book', 'House', 'Entertainment', 'Electronic'];
   }

  ngOnInit(): void {
  }

  onCheckbox(ev:any){
    if(ev.target.checked)
      this.selectedCategory.push(ev.target.name)
    else{
      const index = this.selectedCategory.indexOf(ev.target.name, 0);
      if (index > -1) {
        this.selectedCategory.splice(index, 1);
      }
    }
      console.log(this.selectedCategory)
  }
}
