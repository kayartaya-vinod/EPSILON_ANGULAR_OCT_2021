import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../model/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input()
  order: (Order | null) = null;

  constructor() { }

  ngOnInit(): void {
  }

}
