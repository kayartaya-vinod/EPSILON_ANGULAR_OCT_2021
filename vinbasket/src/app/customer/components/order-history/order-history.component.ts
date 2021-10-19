import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '@service/customer.service';
import { Order } from '../../model/order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Array<Order> = [];
  orderToDisplayDetails: (Order | undefined);


  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {

    if (!this.customerService.isLoggedIn) {
      this.router.navigate(['/customer/login'], { queryParams: { redirectTo: '/customer/order-history' } });
      return;
    }

    this.orderService
      .getOrders()
      .subscribe(data => this.orders = data);
  }

  getOrderValue(order: (Order | undefined)): (number | undefined) {
    return this.orderService.getOrderValue(order);
  }

  getOrderSavings(order: (Order | undefined)): (number | undefined) {
    return this.orderService.getOrderSavings(order);
  }
  getOrderItemCount(order: (Order | undefined)): (number | undefined) {
    return this.orderService.getOrderItemCount(order);
  }
}
