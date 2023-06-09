import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  private cartKey = 'cart';
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { 
    const storedCart = localStorage.getItem(this.cartKey);
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items]

    const itemInCart = items.find((_item) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1;
    }
    else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Keep Shopping', { duration: 3000 });
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart.value));
  }

  getTotal(items: Array<CartItem>): string {
    const total = items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
    return total.toFixed(2);
  }

  clearCart(): void {
    this.cart.next({items: []});
    this._snackBar.open('Cart is cleared', 'keep shopping', {duration: 3000});
    localStorage.removeItem(this.cartKey);
  }

  removeFromCart(item: CartItem, update = true ): Array<CartItem> {
const filteredItems =  this.cart.value.items.filter(
  (_item) => _item.id !== item.id
);

if(update){
  this.cart.next({items: filteredItems})
  this._snackBar.open('item was removed', 'keep shopping', {duration: 3000})
}

return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemforRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity -= 1;
      }
  
      if (_item.quantity === 0) {
        itemforRemoval = _item;
      }
  
      return _item;
    });
  
    if (itemforRemoval) {
      filteredItems = this.removeFromCart(itemforRemoval, false);
    }
  
    this.cart.next({ items: filteredItems });
    this._snackBar.open('Quantity of item was updated.', 'Keep Shopping', { duration: 3000 });
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart.value));
  }
  
}
