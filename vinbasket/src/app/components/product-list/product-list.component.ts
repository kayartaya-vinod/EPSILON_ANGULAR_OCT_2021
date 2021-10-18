import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@model/product';
import { ProductService } from '@service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: (Product[] | undefined);
  private pageNum: number = 1;
  btnShowMoreVisible: boolean = true;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageNum = 1;
    this.activatedRoute.queryParams
      .subscribe(qp => {
        this.productService
          .getProducts(qp['brand'], qp['category'])
          .subscribe(data => this.products = data);
      });
  }

  loadMore(): void {
    this.pageNum++;
    this.activatedRoute.queryParams
      .subscribe(qp => {
        this.productService
          .getProducts(qp['brand'], qp['category'], this.pageNum)
          .subscribe(data => {
            if (data.length > 0) {
              this.products?.push(...data);
            }
            else {
              this.btnShowMoreVisible = false;
            }
          });
      });
  }

}
