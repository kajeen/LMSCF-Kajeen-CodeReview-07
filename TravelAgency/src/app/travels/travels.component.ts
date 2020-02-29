import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../reise';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
products=products;
  constructor(private cartService: CartService) {}

  addToCart(product) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(product);
 }
   

  ngOnInit(): void {
  }

}
