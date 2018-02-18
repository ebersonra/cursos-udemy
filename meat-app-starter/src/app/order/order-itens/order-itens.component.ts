import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CartItem[];
  @Output() increaseQtde = new EventEmitter<CartItem>();
  @Output() decreaseQtde = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtde(item: CartItem){

    this.increaseQtde.emit(item);
  }
  emitDecreaseQtde(item: CartItem){
    
    this.decreaseQtde.emit(item);
  }
  emitRemove(item: CartItem){
    
    this.remove.emit(item);
  }

}
