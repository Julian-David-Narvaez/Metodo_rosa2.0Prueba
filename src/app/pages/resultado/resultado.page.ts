import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  resultadoTablaPT!: number;
  resultadoTablaTM!: number;
  resultadoTablaRA!: number;
  resultadoTablaD!: number;
  resultadoTablaE!: number;
  resultado!: string;
  formData: any;

  // Define la tabla como una matriz bidimensional
  tablaA = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9], // Altura 2
    [2, 2, 3, 4, 5, 6, 7, 8, 9], // Altura 3
    [3, 3, 3, 4, 5, 6, 7, 8, 9], // Altura 4
    [4, 4, 4, 4, 5, 6, 7, 8, 9], // Altura 5
    [5, 5, 5, 5, 5, 6, 7, 8, 9], // Altura 6
    [6, 6, 6, 6, 6, 6, 7, 8, 9], // Altura 7
    [7, 7, 7, 7, 7, 7, 7, 8, 9],  // Altura 8
    [8, 8, 8, 8, 8, 8, 8, 8, 9],  // Altura 9
    [9, 9, 9, 9, 9, 9, 9, 9, 9]  // Altura 10
  ];
  tablaB = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Altura 2
    [2, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Altura 3
    [3, 3, 3, 4, 5, 6, 7, 8, 9, 10],    // Altura 3
    [4, 4, 4, 4, 5, 6, 7, 8, 9, 10],  // Altura 4
    [5, 5, 5, 5, 5, 6, 7, 8, 9, 10], // Altura 4
    [6, 6, 6, 6, 6, 6, 7, 8, 9, 10], // Altura 4
    [7, 7, 7, 7, 7, 7, 7, 8, 9, 10], // Altura 5
    [8, 8, 8, 8, 8, 8, 8, 8, 9, 10], // Altura 6
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 10], // Altura 7
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]  // Altura 8
  ];

  // Valores posibles para Profundidad y Reposabrazos + Respaldo
  tablaPT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  tablaTM = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  tablaRA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  tablaD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoTablaPT = parseInt(localStorage.getItem("resultadoTablaPT") || "0", 10);
    this.resultadoTablaTM = parseInt(localStorage.getItem("resultadoTablaTM") || "0", 10);
    this.resultadoTablaRA = parseInt(localStorage.getItem("resultadoTablaRA") || "0", 10);
    this.resultadoTablaD = this.buscarEnTabla(this.resultadoTablaTM, this.resultadoTablaPT);
    this.resultadoTablaE = this.buscarEnTabla2(this.resultadoTablaRA, this.resultadoTablaD);
    this.mostrarContador();
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
    }
  }

  buscarEnTabla(tm: number, pt: number): number {
    const tmIndex = this.tablaPT.indexOf(tm); // Obtener el índice para la profundidad del asiento
    const ptIndex = this.tablaTM.indexOf(pt); // Obtener el índice para reposabrazos + respaldo

    if (tmIndex >= 0 && tmIndex < this.tablaA.length && ptIndex >= 0 && ptIndex < this.tablaA[0].length) {
      return this.tablaA[tmIndex][ptIndex];
    } else {
      return 0; // Valor predeterminado si los índices están fuera de rango
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  goNext() {
    localStorage.setItem("resultadoTablaPT", "0");
    localStorage.setItem("resultadoTablaTM", "0");
    localStorage.setItem("resultadoTablaRA", "0");
    localStorage.setItem("resultadoTablaD", "0");
    localStorage.setItem("resultadoTablaE", "0");
    this.navCtrl.navigateForward('/formulario');
  }

  mostrarContador() {
    console.log(`Resultado PT: ${this.resultadoTablaPT}`);
    console.log(`Resultado TM: ${this.resultadoTablaTM}`);
    console.log(`Resultado TM: ${this.resultadoTablaRA}`);
    console.log(`Resultado en la Tabla: ${this.resultadoTablaD}`);
    console.log(`Resultado en la Tabla: ${this.resultadoTablaE}`);
  }
  buscarEnTabla2(ra: number, d: number): number {
    const raIndex = this.tablaRA.indexOf(ra); // Obtener el índice para la profundidad del asiento
    const dIndex = this.tablaD.indexOf(d); // Obtener el índice para reposabrazos + respaldo

    if (raIndex >= 0 && raIndex < this.tablaB.length && dIndex >= 0 && dIndex < this.tablaB[0].length) {
      return this.tablaB[raIndex][dIndex];
    } else {
      return 0; // Valor predeterminado si los índices están fuera de rango
    }
  }
  Actuacion() {
    if (this.resultadoTablaE == 1 ) {
      return " Riesgo Inapreciable = 0 - No es necesaria actuación.";
    } else if (this.resultadoTablaE == 2 || this.resultadoTablaE == 3 || this.resultadoTablaE == 4) {
      return "Riesgo Mejorable = 1 - Pueden mejorarse algunos elementos del puesto.";
    } else if (this.resultadoTablaE == 5) {
      return "Riesgo Alto = 2 - Es necesaria la actuación.";
    } else if (this.resultadoTablaE == 6 || this.resultadoTablaE == 7 || this.resultadoTablaE == 8) {
      return "Riesgo Muy Alto = 3 - 	Es necesaria la actuación cuanto antes.";
    }else if (this.resultadoTablaE == 9 || this.resultadoTablaE == 10) {
      return "Riesgo Extremo= 4 - 	Es necesaria la actuación urgentemente.";
    }else {
      return "Fuera de rango";
    }
  }
}
