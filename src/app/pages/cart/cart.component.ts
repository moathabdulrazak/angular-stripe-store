import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [    {
    product: 'https://via.placeholder.com/150x150',
    name: 'Product 1',
    price: 150,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150x150',
    name: 'Product 2',
    price: 150,
    quantity: 3,
    id: 2,
  },
] };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }


  getTotal(items: Array<CartItem>): string {
    // const total = items
    //   .map((item) => item.price * item.quantity)
    //   .reduce((prev, current) => prev + current, 0);
    // return total.toFixed(2);
    return this.cartService.getTotal(items)
  }
  
}