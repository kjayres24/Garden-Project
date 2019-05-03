import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/products.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    // console.log('hello');
    // console.log( this.http.get<Product[]>(this.dbUrl));
    return this.http.get<Product[]>(this.dbUrl)
  }

  deleteProducts(id: number) : Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.dbUrl}/${id}`, httpOptions);
  } 

}