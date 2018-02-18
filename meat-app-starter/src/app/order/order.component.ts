import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

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

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itensValue(): number{

    return this.orderService.itensValue();
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

  checkOrder(order: Order){

    order.orderItens = this.cartItens()
      .map((item: CartItem) => new OrderItem(item.quantidade, item.menuItem.id));
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
      });
    console.log(order);
  }

}
