import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda-tesoro',
  templateUrl: './busqueda-tesoro.component.html',
  styleUrls: ['./busqueda-tesoro.component.scss']
})
export class BUSQUEDATESOROComponent {
  numRows! : number; 
  numCols! : number; 
  // rows: any[] = [];
  // cols:any[] = [];
  matrizImages: any =[];
  click : boolean = false;
  posicionTesoro : any = [0,0];
  filas:number=0;
 columnas:number=0;
encontrado!:boolean;

empezarJuego(){
  for (let i=0; i < this.filas; i++) {
    this.matrizImages [i] = [];
    this.posicionTesoro[0]= this.randomNumber(this.filas);
    this.posicionTesoro[1]= this.randomNumber(this.columnas);
    for (let j=0; j < this.columnas; j++) {
      this.matrizImages[i][j] = [];
      this.matrizImages[i][j].encontrado = false;// tesoro
      this.matrizImages[i][j].vacio = true; // imagen no clickada
      console.log(this.matrizImages[i][j].encontrado);
    }
  }
  this.matrizImages[(this.posicionTesoro[0])][(this.posicionTesoro[1])].encontrado=true;
  console.log(this.posicionTesoro);
}
randomNumber ( num: number ) {
  return Math.floor(Math.random()*(num))
}
}
