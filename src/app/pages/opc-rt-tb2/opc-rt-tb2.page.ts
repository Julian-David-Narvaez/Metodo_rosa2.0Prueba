import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-rt-tb2',
  templateUrl: './opc-rt-tb2.page.html',
  styleUrls: ['./opc-rt-tb2.page.scss'],
})
export class OpcRtTb2Page implements OnInit {

  private resultadoTeclado!: number;
  private resultadoRaton!: number;
  private resultadoTablaTM!: number;

  
  // Define la tabla como una matriz bidimensional
  private tablaA = [
    
    [1, 1, 1, 2, 3, 4, 5, 6], // raton 0
    [1, 1, 2, 3, 4, 5, 6, 7], // raton 1
    [1, 2, 2, 3, 4, 5, 6, 7], // raton 2
    [2, 3, 3, 3, 5, 6, 7, 8], // raton 3
    [3, 4, 4, 5, 5, 6, 7, 8], // raton 4
    [4, 5, 5, 6, 6, 7, 8, 9], // raton 5
    [5, 6, 6, 7, 7, 8, 8, 9],  // raton 6
    [6, 7, 7, 8, 8, 9, 9, 9]  // raton 7
  ];
  
  // Valores posibles para Profundidad y Reposabrazos + teclado
  private puntuacionTeclado = [0, 1, 2, 3, 4, 5, 6, 7];
  private puntuacionRaton = [0, 1, 2, 3, 4, 5, 6];
  
  constructor(private navCtrl: NavController) { }
  
  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoTeclado = parseInt(localStorage.getItem("resultadoTeclado") || "0", 10);
    this.resultadoRaton = parseInt(localStorage.getItem("resultadoRaton") || "0", 10);
  
    // Busca en la tabla el valor correspondiente
    this.resultadoTablaTM = this.buscarEnTabla(this.resultadoRaton, this.resultadoTeclado);
    this.mostrarContador();
  }
  
  buscarEnTabla(raton: number, teclado: number): number {
    const ratonIndex = this.puntuacionRaton.indexOf(raton); // Obtener el índice para el raton
    const tecladoIndex = this.puntuacionTeclado.indexOf(teclado); // Obtener el índice para  teclado
  
    if (ratonIndex >= 0 && ratonIndex < this.tablaA.length && tecladoIndex >= 0 && tecladoIndex < this.tablaA[0].length) {
      return this.tablaA[ratonIndex][tecladoIndex];
    } else {
      return 0; // Valor predeterminado si los índices están fuera de rango
    }
    
  }
  
  goBack() {
    this.navCtrl.back();
  }
  
  goNext() {
    //alert(`¡Felicidades! Has completado la actividad.\nTeclado: ${this.resultadoTeclado}\nMouse: ${this.resultadoRaton}\nResultado en la tabla: ${this.resultadoTablaTM}`);
    localStorage.setItem("resultadoRaton", "0");
    localStorage.setItem("resultadoTeclado", "0");
    this.navCtrl.navigateForward('/resultado'); 
  }
  
  mostrarContador() {
    console.log(`Resultado de Teclado: ${this.resultadoTeclado}`);
    console.log(`Resultado Mouse: ${this.resultadoRaton}`);
    console.log(`Resultado en la Tabla: ${this.resultadoTablaTM}`);
    
  }
  
  handleClick(incremento: number) {
    this.resultadoTeclado += incremento;
    localStorage.setItem("resultadoTeclado", this.resultadoTeclado.toString());
    this.mostrarContador();
    this.resultadoTablaTM = this.buscarEnTabla(this.resultadoRaton, this.resultadoTeclado);
    localStorage.setItem("resultadoTablaTM", this.resultadoTablaTM.toString());
    this.goNext();
  }
  
}

