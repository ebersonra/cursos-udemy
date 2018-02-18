import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "../order/order.model";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, private http: Http){
        
    }

    checkOrder(order: Order): Observable<string>{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, 
            JSON.stringify(order), 
            new RequestOptions({headers: headers}))
            .map(response=> response.json())
            .map(order => order.id);
    }

    clear(){

        this.cartService.onClear();
    }
    itensValue(): number{

        return this.cartService.total();
    }
    cartItens(): CartItem[]{
        
        return this.cartService.itens;
    }

    increaseQtde(item: CartItem){

        this.cartService.increaseQtde(item);
    }

    decreaseQtde(item: CartItem){
        
        this.cartService.decreaseQtde(item);
    }

    remove(item: CartItem){

        this.cartService.onRemoveItem(item);
    }
}