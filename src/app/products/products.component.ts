import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public _product = {};
  products = [];

  constructor(private pService: ProductService) {
  }

  ngOnInit() {
    this.findProducts();
  }

  get product(): any {
    console.log('Heyo');
    console.log(this._product);
    return this._product;
  }


  findProducts() : void {
    this.pService.getProducts().subscribe(Products => {
      console.log(Products);
      this.products = Products;
    })
  }


}