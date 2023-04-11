import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BUSQUEDATESOROComponent } from './PAGES/busqueda-tesoro/busqueda-tesoro.component';
import { FormsModule } from '@angular/forms';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './PAGES/home-page/home-page.component';
import { HeaderComponent } from './SHARED/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    BUSQUEDATESOROComponent,
    ExchangesComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
