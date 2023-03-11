import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

cart: Cart = {items: []}

 constructor () {}


  ngOnInit(): void {
    
  }


}
