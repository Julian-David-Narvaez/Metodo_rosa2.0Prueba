import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-s-tb3',
  templateUrl: './opc-s-tb3.page.html',
  styleUrls: ['./opc-s-tb3.page.scss'],
})
export class OpcSTb3Page implements OnInit {

  private resultadoRespaldo!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoRespaldo = parseInt(localStorage.getItem("resultadoRespaldo") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

  goNext() {
    this.navCtrl.navigateForward('/s-trabajo-tb4'); 
  }

  mostrarContador() {
    console.log(`Resultado: ${this.resultadoRespaldo}`);
  }

  handleClick(incremento: number) {
    this.resultadoRespaldo+= incremento;
    localStorage.setItem("resultadoRespaldo", this.resultadoRespaldo.toString());
    this.mostrarContador();
    this.goNext();
  }

}
