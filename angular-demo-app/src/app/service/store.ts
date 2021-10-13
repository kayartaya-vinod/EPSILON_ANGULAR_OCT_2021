import { Injectable } from "@angular/core";
import { Product } from "@model/product";

@Injectable({
    providedIn: 'root'
})
export default class ProductStore {
    product: (Product | undefined);
}