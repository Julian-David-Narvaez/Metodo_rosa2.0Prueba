import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-tp-tb2',
  templateUrl: './opc-tp-tb2.page.html',
  styleUrls: ['./opc-tp-tb2.page.scss'],
})
export class OpcTpTb2Page implements OnInit {

  private resultadoPantalla!: number;
  private resultadoTelefono!: number;
  private resultadoTablaPT!: number;
  
  // Define la tabla como una matriz bidimensional
  private tablaA = [
    
    [1, 1, 1, 2, 3, 4, 5, 6], // telefono 2
    [1, 1, 2, 2, 3, 4, 5, 6], // telefono 3
    [1, 2, 2, 3, 3, 4, 6, 7], // telefono 4
    [2, 2, 3, 3, 4, 5, 6, 8], // telefono 5
    [3, 3, 4, 4, 5, 6, 7, 8], // telefono 6
    [4, 4, 5, 5, 6, 7, 8, 9], // telefono 7
    [5, 5, 6, 6, 8, 8, 9, 9]  // telefono 8
  ];
  
  // Valores posibles para Profundidad y Reposabrazos + pantalla
  private puntuacionPantalla = [0, 1, 2, 3, 4, 5, 6, 7];
  private puntuacionTelefono = [0, 1, 2, 3, 4, 5, 6];
  
  constructor(private navCtrl: NavController) { }
  
  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoPantalla = parseInt(localStorage.getItem("resultadoPantalla") || "0", 10);
    this.resultadoTelefono = parseInt(localStorage.getItem("resultadoTelefono") || "0", 10);
  
    // Busca en la tabla el valor correspondiente
    this.resultadoTablaPT = this.buscarEnTabla(this.resultadoTelefono, this.resultadoPantalla);
    this.mostrarContador();
  }
  
  buscarEnTabla(telefono: number, pantalla: number): number {
    const telefonoIndex = this.puntuacionTelefono.indexOf(telefono); // Obtener el índice para el telefono
    const pantallaIndex = this.puntuacionPantalla.indexOf(pantalla); // Obtener el índice para  pantalla
  
    if (telefonoIndex >= 0 && telefonoIndex < this.tablaA.length && pantallaIndex >= 0 && pantallaIndex < this.tablaA[0].length) {
      return this.tablaA[telefonoIndex][pantallaIndex];
    } else {
      return 0; // Valor predeterminado si los índices están fuera de rango
    }
    
  }
  
  goBack() {
    this.navCtrl.back();
  }
  
  goNext() {
    //alert(`¡Felicidades! Has completado la actividad.\nPantalla: ${this.resultadoPantalla}\nTelefono: ${this.resultadoTelefono}\nResultado en la tabla: ${this.resultadoTablaPT}`);
    localStorage.setItem("resultadoTelefono", "0");
    localStorage.setItem("resultadoPantalla", "0");
    this.navCtrl.navigateForward('/rt-raton-tb1'); 
  }
  
  mostrarContador() {
    console.log(`Resultado de Pantalla: ${this.resultadoPantalla}`);
    console.log(`Resultado Telefono: ${this.resultadoTelefono}`);
    console.log(`Resultado en la Tabla: ${this.resultadoTablaPT}`);
    
  }
  
  handleClick(incremento: number) {
    this.resultadoPantalla += incremento;
    localStorage.setItem("resultadoPantalla", this.resultadoPantalla.toString());
    this.mostrarContador();
    this.resultadoTablaPT = this.buscarEnTabla(this.resultadoTelefono, this.resultadoPantalla);
    localStorage.setItem("resultadoTablaPT", this.resultadoTablaPT.toString());
    this.goNext();
  }
  
}
