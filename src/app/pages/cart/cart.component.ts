import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [    {
    product: 'https://via.placeholder.com/150x150',
    name: 'Product 1',
    price: 10.99,
    quantity: 2,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150x150',
    name: 'Product 2',
    price: 5.99,
    quantity: 1,
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

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): string {
    const total = items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
    return total.toFixed(2);
  }
}