import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html' ,
})
export class ProductBoxComponent implements OnInit {

@Input() fullWidthMode = false

product: Product | undefined = {
  id: 1,
  name: 'Snickers',
  price: 50,
  category: 'shoes',
  description: 'description',
  image: 'https://via.placeholder.com/150'
}

@Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onAddToCart(): void {
this.addToCart.emit(this.product);
  }

}
