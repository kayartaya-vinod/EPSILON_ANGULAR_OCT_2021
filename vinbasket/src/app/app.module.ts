import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { HeaderComponent } from '@components/header/header.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

// route definitions; array of 'Route' objects

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    // Route - map a component to a route path
    path: 'products',
    component: ProductListComponent
  },
  {
    // segment 0 -> 'products', static
    // segment 1 -> 'details', static
    // segment 2 -> 'id', dynamic a.k.a param(eter)
    path: 'products/details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'view-cart',
    component: ViewCartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddToCartButtonComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
