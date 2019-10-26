import { Component } from '@angular/core';
import { Product } from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl:'./product.components.html'
})

export class PorductComponent {
  product = Product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  }
}