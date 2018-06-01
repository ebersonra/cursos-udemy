import { Injectable } from '@angular/core';

import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { NotificationService } from '../../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService{

    itens: CartItem[] = [];

    constructor(private notificationService: NotificationService){

    }
    onClear(){
        
        this.itens = [];
    }

    onAddItem(item: MenuItem){

        let foundItem = this.itens.find((menuItemLista) => menuItemLista.menuItem.id === item.id);

        if(foundItem){

            this.increaseQtde(foundItem);
        }else{

            this.itens.push(new CartItem(item));
        }

        this.notificationService.notify(`Você adicinou um novo item ${item.name}`);
    }

    increaseQtde(item: CartItem){

        item.quantidade = item.quantidade + 1;
    }

    decreaseQtde(item: CartItem){

        item.quantidade = item.quantidade - 1;
        if(item.quantidade === 0){

            this.onRemoveItem(item);
        }
    }

    onRemoveItem(item: CartItem){

        this.itens.splice(this.itens.indexOf(item), 1);
        this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`);
    }

    total(): number{

        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0);
    }
}