import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product';
import { ProductService } from '@service/product.service';
import ProductStore from '@service/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private service: ProductService, private store: ProductStore) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe(products => this.products = products);
  }

  viewDetailsFor(pr: Product) {
    this.store.product = pr;
  }

}
