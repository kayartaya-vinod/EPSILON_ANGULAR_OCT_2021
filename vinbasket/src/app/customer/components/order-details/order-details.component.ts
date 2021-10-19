import { Component, Input, OnInit } from '@angular/core';
import { LineItem } from '@model/line-item';
import { Product } from '@model/product';
import { Order } from '../../model/order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input()
  order: (Order | undefined);

  constructor(private orderService: OrderService) { }

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

  get orderValue(): (number | undefined) {
    return this.orderService.getOrderValue(this.order);
  }

  get orderSavings(): (number | undefined) {
    return this.orderService.getOrderSavings(this.order);
  }

}
