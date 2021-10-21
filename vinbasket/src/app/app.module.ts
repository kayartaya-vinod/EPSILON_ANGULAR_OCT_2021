import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

// npm install sweetalert2 @sweetalert2/ngx-sweetalert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomHttpInterceptorService } from '@service/custom-http-interceptor.service';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
  },
  {
    path: 'customer',
    // lazy loading of module
    // For Angular 10+ : The method of importing modules has changed to dynamic import. The dynamic import is promise-based and gives you access to the module, where the module’s class can be called. Thus your import should now be changed to:
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

const trCfg: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    deps: [HttpClient],
    useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient)
  }
};

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
    ViewCartComponent,
    PageNotFoundComponent
  ],
  imports: [
    // eagerly loaded modules
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot(trCfg)
  ],
  providers: [
    {
      useClass: CustomHttpInterceptorService,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
