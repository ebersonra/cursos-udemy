import { Injectable } from "@angular/core";

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService){
        
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