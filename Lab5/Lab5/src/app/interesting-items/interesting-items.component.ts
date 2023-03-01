import { Component, OnInit } from '@angular/core';

import { AmazonService } from '../amazon.service';
import { VariousListComponent } from '../various-list/various-list.component';
import { Product, items } from '../products';

@Component({
  selector: 'app-interesting-items',
  templateUrl: './interesting-items.component.html',
  styleUrls: ['./interesting-items.component.css']
})
export class InterestingItemsComponent implements OnInit {
  products = items;
  
  SelectedCategory = this.list.selectedCategory;

  constructor(
    private amazonService: AmazonService,
    private list: VariousListComponent
  ) { }

  ngOnInit(): void {
  }

  delete(items: any, item: any){
    items.splice(0,1);
  }
}
