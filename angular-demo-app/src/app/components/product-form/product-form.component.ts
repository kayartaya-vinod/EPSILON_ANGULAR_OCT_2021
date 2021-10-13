import { Component } from '@angular/core';
import { Product } from '@model/product';
import { ProductService } from '@service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  // 2-way bound with the UI
  product: Product = new Product();

  // TODO: get these values from the rest endpoint
  brands: Array<string> = ['Malnad', 'Zespri', 'Fresho'];

  constructor(private service: ProductService) { }

  save() {
    this.service
      .create(this.product)
      .subscribe(pr => {
        alert('Product added with id ' + pr.id);
        this.product = new Product();
      });
  }

}
