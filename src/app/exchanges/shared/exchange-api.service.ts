import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {

  constructor(private http:HttpClient) { }
  
  getExchange() {
    return this.http.get("https://api.vatcomply.com/rates");
}
}