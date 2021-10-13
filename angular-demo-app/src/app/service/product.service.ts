import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@model/product';
import { Observable } from 'rxjs';

// this adds the "map" operator/method to the Observable type
import 'rxjs/add/operator/map'; // this requires 'rxjs-compat'
import 'rxjs/add/operator/do';

// Angular creates an object of this class and maintains it as a singleton.
// Also, if this depends on other injectables (services), they also will be either found or instantiated and injected.
// Whenever a component or another service express dependency on ProductService, an object of the same is created, and for further dependency injections, the same singletone instance will be used. Hence, we can store any data that needs to be shared across the application in an injectable.

const productsUrl = 'http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public findById(id: number): Observable<Product> {
    return this.httpClient
      .get(productsUrl + id)
      .do(console.log)
      .map(obj => obj as Product)
  }

  public findAll(): Observable<Product[]> {
    return this.httpClient
      .get(productsUrl)
      .map(arr => arr as Array<Product>);
  }

  public findByBrand(brand: string) {
  }

  public findByCategory(category: string) {
  }

  public create(product: Product): Observable<Product> {
    return this.httpClient
      .post(productsUrl, product)
      .map(resp => resp as Product);
  }

  public update(product: Product) {
  }

  public removeById(id: number) {
  }
}
