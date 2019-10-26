import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.components.html'
})

export class PorductComponent {
 @Input() product: Product;
 @Output() productClicked: EventEmitter<any> = new EventEmitter();

 addCart() {
   console.log('añadir al carrito');
   this.productClicked.emit(this.product.id);
  }
}
