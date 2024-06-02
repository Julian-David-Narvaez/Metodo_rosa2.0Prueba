import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rt-teclado-tb2',
  templateUrl: './rt-teclado-tb2.page.html',
  styleUrls: ['./rt-teclado-tb2.page.scss'],
})
export class RtTecladoTb2Page implements OnInit {

  private resultadoTeclado!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoTeclado = parseInt(localStorage.getItem("resultadoTeclado") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

  goNext() {
    this.navCtrl.navigateForward('/opc-rt-tb2'); 
  }

  mostrarContador() {
    console.log(`resultado Raton: ${this.resultadoTeclado}`);
  }

  handleClick(incremento: number) {
    this.resultadoTeclado+= incremento;
    localStorage.setItem("resultadoTeclado", this.resultadoTeclado.toString());
    this.mostrarContador();
    this.goNext();
  }
}
