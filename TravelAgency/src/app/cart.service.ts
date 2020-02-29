import { Injectable } from '@angular/core';
import { TravelsComponent } from './travels/travels.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];
  constructor() {}
  addToCart(product) {
   this.items.push(product);
 }
   getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}
