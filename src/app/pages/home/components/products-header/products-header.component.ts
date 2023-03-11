import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html' ,
 
})
export class ProductsHeaderComponent implements OnInit {
sort='desc';
itemShowCount = 12

  ngOnInit(): void {
    
  }


onSortUpdated(newSort: string): void{
this.sort = newSort;
}

onItemsUpdated(count: number): void{
this.itemShowCount = count;
}

}
