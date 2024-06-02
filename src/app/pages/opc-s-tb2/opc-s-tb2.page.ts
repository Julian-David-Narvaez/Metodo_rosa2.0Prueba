import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-s-tb2',
  templateUrl: './opc-s-tb2.page.html',
  styleUrls: ['./opc-s-tb2.page.scss'],
})
export class OpcSTb2Page implements OnInit {

  private resultadoAltura!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoAltura = parseInt(localStorage.getItem("resultadoAltura") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

  goNext() {
    this.navCtrl.navigateForward('/s-trabajo-tb3'); 
  }
  mostrarContador() {
    console.log(`Resultado: ${this.resultadoAltura}`);
  }

  handleClick(incremento: number) {
    this.resultadoAltura+= incremento;
    localStorage.setItem("resultadoAltura", this.resultadoAltura.toString());
    console.log(`Resultado Altura guardado: ${this.resultadoAltura}`);
    this.mostrarContador();
    this.goNext();
  }
}
