import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Débito', value: 'DEB'},
    {label: 'Cartão Crédito', value: 'CRE'},
    {label: 'Cartão Vale Refeição', value: 'REF'}
  ];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItens(): CartItem[]{
        
    return this.orderService.cartItens();
  }

  increaseQtde(item: CartItem){

      this.orderService.increaseQtde(item);
  }

  decreaseQtde(item: CartItem){
      
      this.orderService.decreaseQtde(item);
  }

  remove(item: CartItem){

      this.orderService.remove(item);
  }

}
