import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	items;
checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  	this.checkoutForm = this.formBuilder.group({
  			name: "",
  			adress: "",	
  			email: "",
  			telephone: ""
   });
  }

  ngOnInit(): void {
  	this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
   // Process checkout data here
   console.warn('Your order has been submitted', customerData);

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset();
 }

}
