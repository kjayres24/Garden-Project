import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
// import { AdminComponent } from '../admin/admin.component';
import { AdminService } from '../admin.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product;
  public deleteBtn = this.aService.x;


  public _product = {};
  products = [];
  // deleteBtn = false;

 
  // pProduct: Product;

  constructor(private pService: ProductService, private aService: AdminService, private _ar: ActivatedRoute, private _router: Router) {
    // this._ar.paramMap.subscribe(p => {
    //   this.pService.getProducts(p.get('id')).subscribe((singleProduct: Product) => {this.product = singleProduct;
    //   });
    // });
  }

  ngOnInit() {
    // console.log(this.exampleChild);
    console.log(this.aService.x);
    this.findProducts();
    // this.exampleParent = this.child.exampleChild;
    // console.log(this.exampleParent);
    // console.log("helloyyy");
  }

  // get Pproduct(): any {
  //   console.log('Heyo');
  //   console.log(this._product);
  //   return this._product;
  // }


  findProducts() : void {
    this.pService.getProducts().subscribe(Products => {
      console.log(Products);
      this.products = Products;
    })
  }

  onDelete() {
    console.log(this.product[0].id);
    // this.pService.deleteProducts(this.product.product_id).subscribe(() => {
    //   this._router.navigate(['/products']);
    // })
  }


}