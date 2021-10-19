import { Component, OnInit } from '@angular/core';
import { CartService } from '@service/cart.service';
import { CustomerService } from '@service/customer.service';
import { ProductService } from '@service/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  brands: string[] = [];
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    public customerService: CustomerService) { }

  ngOnInit(): void {
    this.productService.brands.subscribe(data => this.brands = data);
    this.productService.categories.subscribe(data => this.categories = data);
  }


  get cartValue(): number {
    return this.cartService.getCartValue();
  }

  get cartSavings(): number {
    return this.cartService.getCartSavings();
  }

  get lineItemQuantity(): number {
    return this.cartService.getLineItemQuantity();
  }

  get isCartEmpty(): boolean {
    return this.cartService.cart.length === 0;
  }

}
