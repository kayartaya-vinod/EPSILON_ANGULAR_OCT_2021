import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ordersUrl } from 'src/app/urls';
import { Order } from '../model/order';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient
      .get(ordersUrl)
      .map(value => value as Order[]);
  }

  getOrderValue(order: (Order | undefined)): (number | undefined) {
    if (!order) return;
    let total: number = 0;
    order.lineItems.forEach(li => total += li.product.unit_price * li.quantity * (100 - li.product.discount) / 100);
    return total;
  }

  getOrderSavings(order: (Order | undefined)): (number | undefined) {
    if (!order) return;
    let savings: number = 0;
    order.lineItems.forEach(li => savings += li.product.unit_price * li.quantity * li.product.discount / 100);
    return savings;
  }

  getOrderItemCount(order: (Order | undefined)): (number | undefined) {
    if (!order) return;
    return order.lineItems.length;
  }

  placeOrder(order: Order): Observable<any> {
    return this.httpClient
      .post(ordersUrl, order);
  }

}
