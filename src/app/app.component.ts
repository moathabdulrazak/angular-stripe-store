import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart" ></app-header>
    <router-outlet></router-outlet>
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">

  `,
  styles: []
})
export class AppComponent implements OnInit {
  cart: Cart = { items: []}


  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart
    })
  }
}
