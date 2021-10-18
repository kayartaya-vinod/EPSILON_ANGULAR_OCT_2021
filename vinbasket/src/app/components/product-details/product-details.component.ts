import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@model/product';
import { ProductService } from '@service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: (Product | undefined);

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.productService
        .getProductById(id)
        .subscribe(data => this.product = data);
    });
  }

}
