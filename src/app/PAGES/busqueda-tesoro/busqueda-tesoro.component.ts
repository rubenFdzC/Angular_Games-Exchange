import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda-tesoro',
  templateUrl: './busqueda-tesoro.component.html',
  styleUrls: ['./busqueda-tesoro.component.scss']
})
export class BUSQUEDATESOROComponent {
  matrizImages: any[] = [];
  filas: number = 0;
  columnas: number = 0;
  posicionTesoro: any = { fila: 0, columna: 0 };
  encontrado: boolean = false;

  empezarJuego() {
    this.matrizImages = [];
    for (let i = 0; i < this.filas; i++) {
      let fila = [];
      for (let j = 0; j < this.columnas; j++) {
        fila.push({ imagen: 'vacio' });
      }
      this.matrizImages.push(fila);
    }
    this.posicionTesoro.fila = this.randomNumber(this.filas);
    this.posicionTesoro.columna = this.randomNumber(this.columnas);
    this.matrizImages[this.posicionTesoro.fila][this.posicionTesoro.columna].imagen = 'tesoro';
    this.encontrado = false;
  }

  randomNumber(num: number) {
    return Math.floor(Math.random() * num);
  }

  // clickImagen(fila: number, columna: number): void {
  //   if (fila === this.posicionTesoro.fila && columna === this.posicionTesoro.columna) {
  //     // Se ha encontrado el tesoro
  //     this.encontrado = true;
  //   } else {
  //     // No se ha encontrado el tesoro
  //     this.matrizImages[fila][columna] = 'error';
  //   }
  // }

  resetearJuego(): void {
    this.filas = 0;
    this.columnas = 0;
    this.matrizImages = [];
    this.encontrado = false;
    this.posicionTesoro = { fila: -1, columna: -1 };
  }

}
