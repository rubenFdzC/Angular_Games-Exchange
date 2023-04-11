import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './PAGES/home-page/home-page.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { BUSQUEDATESOROComponent } from './PAGES/busqueda-tesoro/busqueda-tesoro.component';
import { WhackAMoleComponent } from './PAGES/whack-amole/whack-amole.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "FindTreasure", component : BUSQUEDATESOROComponent
  },
  {
    path: "WhackAMole", component : WhackAMoleComponent
  },
  {
    path: "Exchange", component : ExchangesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
