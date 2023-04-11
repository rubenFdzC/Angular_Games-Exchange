import { Component, OnInit } from '@angular/core';
import { ExchangeApiService } from './shared/exchange-api.service';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {
exchanges : any = [];

  constructor(private exchange:ExchangeApiService){

  }

  cambio:number = 1;

  identificador!:number;
  ngOnInit(): void {
      this.exchange.getExchange().subscribe((res:any)=>{
        for (const key in res.rates){
          this.exchanges.push({ name:key , value: res.rates[key]})
        } 
      })
  }
}

