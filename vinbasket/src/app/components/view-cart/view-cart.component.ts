import { Component, OnInit } from '@angular/core';
import { LineItem } from '@model/line-item';
import { Product } from '@model/product';
import { CartService } from '@service/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  getDiscountedUnitPrice(pr: Product) {
    return (pr.unit_price * (100 - pr.discount)) / 100;
  }

  getAmount(li: LineItem): number {
    return li.product.unit_price * li.quantity * (100 - li.product.discount) / 100
  }

  getSavings(li: LineItem): number {
    return li.product.unit_price * li.quantity * (li.product.discount) / 100
  }

  get cartValue(): number {
    return this.cartService.getCartValue();
  }

  get cartSavings(): number {
    return this.cartService.getCartSavings();
  }

}
