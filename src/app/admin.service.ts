import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './models/admin.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  public x = false;
  private dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';

  constructor(private http: HttpClient) { }


  login() /*: Observable<Admin[]>*/ {
    // let x = 'hello';
    console.log('hiya');
    // return this.http.post<Admin[]>(this.dbUrl, httpOptions)
  }

}