import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Débito', value: 'DEB'},
    {label: 'Cartão Crédito', value: 'CRE'},
    {label: 'Cartão Vale Refeição', value: 'REF'}
  ];

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.orderForm = this.formBuilder.group({

      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    });
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
