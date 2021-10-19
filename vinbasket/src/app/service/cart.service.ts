import { Injectable } from '@angular/core';
import { LineItem } from '@model/line-item';
import { Product } from '@model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // a cart contains one or more line items
  cart: LineItem[] = [];


  constructor() {
    let strCart: (string | null) = localStorage.getItem('cart');
    if (strCart) {
      this.cart = JSON.parse(strCart);
    }
  }

  persistCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // call this method only when the product given is not in the cart
  addToCart(product: Product): void {
    let li = new LineItem();
    li.product = product;
    li.quantity = 1;
    this.cart.push(li);
    this.persistCartToLocalStorage();
  }

  removeFromCart(product: Product): void {
    let index = this.cart.findIndex(item => item.product.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.persistCartToLocalStorage();
  }

  // call this method only when the given product is already present in the cart
  incrementQuantity(product: Product): void {
    let li = this.cart.find(item => item.product.id === product.id);
    if (li) {
      li.quantity++;
    }
    this.persistCartToLocalStorage();
  }

  decrementQuantity(product: Product): void {
    let index = this.cart.findIndex(item => item.product.id === product.id);
    if (index > -1) {
      let li = this.cart[index];
      li.quantity--;
      if (li.quantity === 0) {
        this.cart.splice(index, 1); // remove the line item from the cart, if the quantity is 0
      }
    }
    this.persistCartToLocalStorage();
  }

  isInCart(product: Product): boolean {
    return this.cart.findIndex(item => item.product.id === product.id) !== -1;
  }

  getQuantity(product: Product): number {
    let li = this.cart.find(item => item.product.id === product.id);
    return li ? li.quantity : 0;
  }

  emptyCart(): void {
    this.cart = [];
    this.persistCartToLocalStorage();
  }

  getCartValue(): number {
    let total: number = 0;
    this.cart.forEach(li => total += li.product.unit_price * li.quantity * (100 - li.product.discount) / 100);
    return total;
  }

  getCartSavings(): number {
    let savings: number = 0;
    this.cart.forEach(li => savings += li.product.unit_price * li.quantity * li.product.discount / 100);
    return savings;
  }

  getLineItemQuantity(): number {
    return this.cart.length;
  }

}
