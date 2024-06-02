import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tp-pantalla-tb2',
  templateUrl: './tp-pantalla-tb2.page.html',
  styleUrls: ['./tp-pantalla-tb2.page.scss'],
})
export class TpPantallaTb2Page implements OnInit {

  private resultadoPantalla!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoPantalla = parseInt(localStorage.getItem("resultadoPantalla") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

  goNext() {
    this.navCtrl.navigateForward('/opc-tp-tb2'); 
  }

  mostrarContador() {
    console.log(`resultado Pantalla: ${this.resultadoPantalla}`);
  }

  handleClick(incremento: number) {
    this.resultadoPantalla+= incremento;
    localStorage.setItem("resultadoPantalla", this.resultadoPantalla.toString());
    this.mostrarContador();
    this.goNext();
  }

}
