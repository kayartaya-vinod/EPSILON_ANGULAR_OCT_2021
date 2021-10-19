import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderService } from './service/order.service';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    OrderHistoryComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    OrderService
  ]
})
export class CustomerModule { }
