import { Component } from '@angular/core';
import ProductStore from '@service/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(public store: ProductStore) { }


}
