import { Component, OnInit } from '@angular/core';
import { ProductService } from '@service/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  brands: string[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.brands.subscribe(data => this.brands = data);
    this.productService.categories.subscribe(data => this.categories = data);
  }

}
