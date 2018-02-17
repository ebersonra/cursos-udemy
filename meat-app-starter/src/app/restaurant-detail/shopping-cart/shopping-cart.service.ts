import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{

    itens: CartItem[] = [];

    onClear(){
        
        this.itens = [];
    }

    onAddItem(item: MenuItem){

        let foundItem = this.itens.find((menuItemLista) => menuItemLista.menuItem.id === item.id);

        if(foundItem){

            foundItem.quantidade = foundItem.quantidade + 1;
        }else{

            this.itens.push(new CartItem(item));
        }
    }

    onRemoveItem(item: CartItem){

        this.itens.splice(this.itens.indexOf(item), 1);
    }

    total(): number{

        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0);
    }
}