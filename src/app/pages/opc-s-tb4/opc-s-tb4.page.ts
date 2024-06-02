import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-s-tb4',
  templateUrl: './opc-s-tb4.page.html',
  styleUrls: ['./opc-s-tb4.page.scss'],
})
export class OpcSTb4Page implements OnInit {

  private resultadoRespaldo!: number;
  private resultadoAltura!: number;
  private resultadoTablaRA!: number;

  // Define la tabla como una matriz bidimensional
  private tablaA = [
    
    [2, 2, 3, 4, 5, 6, 7, 8], // Altura 2
    [2, 2, 3, 4, 5, 6, 7, 8], // Altura 3
    [3, 3, 3, 4, 5, 6, 7, 8], // Altura 4
    [4, 4, 4, 4, 5, 6, 7, 8], // Altura 5
    [5, 5, 5, 5, 6, 7, 8, 9], // Altura 6
    [6, 6, 6, 7, 7, 8, 8, 9], // Altura 7
    [7, 7, 7, 8, 8, 9, 9, 9]  // Altura 8
  ];

  // Valores posibles para Profundidad y Reposabrazos + Respaldo
  private profundidadAsiento = [2, 3, 4, 5, 6, 7, 8];
  private reposabrazosRespaldo = [2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoRespaldo = parseInt(localStorage.getItem("resultadoRespaldo") || "0", 10);
    this.resultadoAltura = parseInt(localStorage.getItem("resultadoAltura") || "0", 10);

    // Busca en la tabla el valor correspondiente
    this.resultadoTablaRA = this.buscarEnTabla(this.resultadoAltura, this.resultadoRespaldo);
    this.mostrarContador();
  }

  buscarEnTabla(altura: number, respaldo: number): number {
    const alturaIndex = this.profundidadAsiento.indexOf(altura); // Obtener el índice para la profundidad del asiento
    const respaldoIndex = this.reposabrazosRespaldo.indexOf(respaldo); // Obtener el índice para reposabrazos + respaldo

    if (alturaIndex >= 0 && alturaIndex < this.tablaA.length && respaldoIndex >= 0 && respaldoIndex < this.tablaA[0].length) {
      return this.tablaA[alturaIndex][respaldoIndex];
    } else {
      return 0; // Valor predeterminado si los índices están fuera de rango
    }
    
  }

  goBack() {
    this.navCtrl.back();
  }

  goNext() {
    //alert(`¡Felicidades! Has completado la actividad.\nRespaldo: ${this.resultadoRespaldo}\nAltura: ${this.resultadoAltura}\nResultado en la tabla: ${this.resultadoTablaRA}`);
    localStorage.setItem("resultadoRespaldo", "0");
    localStorage.setItem("resultadoAltura", "0");
    this.navCtrl.navigateForward('/tiempo');
  }

  mostrarContador() {
    console.log(`Resultado de Respaldo: ${this.resultadoRespaldo}`);
    console.log(`Resultado Altura: ${this.resultadoAltura}`);
    console.log(`Resultado en la Tabla: ${this.resultadoTablaRA}`);
    localStorage.setItem("resultadoTablaRA", this.resultadoTablaRA.toString());
  }

  handleClick(incremento: number) {
    this.resultadoRespaldo += incremento;
    localStorage.setItem("resultadoRespaldo", this.resultadoRespaldo.toString());
    this.mostrarContador();
    this.resultadoTablaRA = this.buscarEnTabla(this.resultadoAltura, this.resultadoRespaldo);
    this.goNext();
  }
}
