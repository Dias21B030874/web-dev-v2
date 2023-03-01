import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';
import { AmazonService } from '../amazon.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  items = this.amazonService.getItems();

  constructor(
    private amazonService: AmazonService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  share_wt(URL:string){
    var message = "Check this out: " + URL;

    window.open(
        "https://web.whatsapp.com/send?text=" + message,
        '_blank' 
    );
  }

  share_tg(URL:string){
    var message = "Check this out: " + URL;

    window.open(
        "https://t.me/share/url?url="+URL+"&text="+message,
        '_blank' 
    );
  }

  addToCart(item: any) {
    let product: Product = JSON.parse(JSON.stringify(item));
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
