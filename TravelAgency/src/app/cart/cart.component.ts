import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
total:number =0;
  constructor(public cartService: CartService) { }
  ngOnInit() {
  	 this.items = this.cartService.getItems();   
  }
}
